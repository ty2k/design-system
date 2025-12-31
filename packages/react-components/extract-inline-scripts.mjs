// This script is used to remove all inline `<script>` tags from the Storybook
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
    console.log(`\x1b[90m┌ \x1b[0m 🔐 CSP no-unsafe-inline scripts fix`);
    console.log(`\x1b[32m◇ \x1b[90m Extracting inline scripts: \x1b[0m`);
    console.log(`\x1b[32m◇ \x1b[90m File: ${file} \x1b[0m`);

    let html = await readFile(htmlPath, "utf8");

    // Search for all inline <script> tags (with and without type="module")
    const scripts = [
      ...html.matchAll(/<script(?![^>]*src=)([^>]*)>([\s\S]*?)<\/script>/g),
    ];

    console.log(
      `\x1b[90m│  ${scripts.length} inline script(s) found in \x1b[36m${htmlPath} \x1b[0m`
    );

    for (const match of scripts) {
      const attributes = match[1];
      const code = match[2].trim();

      if (!code) {
        console.log(`\x1b[90m│  Empty script skipped\x1b[0m`);
        continue;
      }

      const fileName = `inline-script-${++counter}.js`;
      const filePath = join(root, fileName);

      await writeFile(filePath, code, "utf8");
      console.log(
        `\x1b[90m│  │ \x1b[90mExtracted: ${fileName} (${code.length} characters)\x1b[0m`
      );

      // Keep the original attributes
      html = html.replace(
        match[0],
        `<script${attributes} src="./${fileName}"></script>`
      );
    }

    await writeFile(htmlPath, html, "utf8");

    if (counter === 0) {
      console.log(`\x1b[90m└ \x1b[33m▲  No scripts found to extract\x1b[0m`);
    } else {
      console.log(
        `\x1b[90m└ \x1b[32m ✓ Successfully extracted ${counter} script(s)\x1b[0m`
      );
    }
  } catch (error) {
    console.error(`\x1b[31m❌ Error extracting scripts:\x1b[0m`, error);
    process.exit(1);
  }
}

files.forEach((file) => {
  process(file);
});
