// This script is used to remove all inline `<style>` tags from the Storybook
// build output, replacing them to separate files to support a strict
// Content-Security-Policy.

// From: https://gist.github.com/mascie/7fc99f25034d45c3d6aab582df03e3d1

import { readFile, writeFile } from "fs/promises";
import { join } from "path";

const root = "storybook-static";

const files = ["index.html", "iframe.html"];
let counter = 0;

async function process(file) {
  try {
    const htmlPath = join(root, file);
    console.log(`\x1b[90m┌ \x1b[0m 🔐 CSP no-unsafe-inline styles fix`);
    console.log(`\x1b[32m◇ \x1b[90m Extracting inline scripts: \x1b[0m`);

    let html = await readFile(htmlPath, "utf8");

    // Search for all inline <style> tags
    const styles = [
      ...html.matchAll(/<style(?![^>]*src=)([^>]*)>([\s\S]*?)<\/style>/g),
    ];

    console.log(
      `\x1b[90m│  ${styles.length} inline style(s) found in \x1b[36m${htmlPath} \x1b[0m`
    );

    for (const match of styles) {
      const attributes = match[1];
      const code = match[2].trim();

      if (!code) {
        console.log(`\x1b[90m│  Empty style skipped\x1b[0m`);
        continue;
      }

      const fileName = `inline-style-${++counter}.css`;
      const filePath = join(root, fileName);

      await writeFile(filePath, code, "utf8");
      console.log(
        `\x1b[90m│  │ \x1b[90mExtracted: ${fileName} (${code.length} characters)\x1b[0m`
      );

      // Keep the original attributes
      html = html.replace(
        match[0],
        `<link${attributes} href="./${fileName}" rel="stylesheet">`
      );
    }

    await writeFile(htmlPath, html, "utf8");

    if (counter === 0) {
      console.log(`\x1b[90m└ \x1b[33m▲  No styles found to extract\x1b[0m`);
    } else {
      console.log(
        `\x1b[90m└ \x1b[32m ✓ Successfully extracted ${counter} style(s)\x1b[0m`
      );
    }
  } catch (error) {
    console.error(`\x1b[31m❌ Error extracting styles:\x1b[0m`, error);
    process.exit(1);
  }
}

files.forEach((file) => {
  process(file);
});
