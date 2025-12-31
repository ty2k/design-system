import express from "express";
import path from "node:path";

type CSPLevel = "strict" | "style-inline" | "unsafe-eval" | "full";

const cspPolicies: Record<CSPLevel, string> = {
  strict:
    "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self';",
  "style-inline":
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self';",
  "unsafe-eval":
    "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
  full: "default-src * 'unsafe-inline' 'unsafe-eval';",
};

function isCSPLevel(value: string): value is CSPLevel {
  return value in cspPolicies;
}

const rawLevel = process.env.CSP_LEVEL ?? "strict";

const level: CSPLevel = isCSPLevel(rawLevel) ? rawLevel : "strict";

console.log("CSP_LEVEL: ", level);

const app = express();

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", cspPolicies[level]);
  next();
});

app.use(express.static(path.join(path.dirname("."), "storybook-static")));

const PORT = 3333;

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
