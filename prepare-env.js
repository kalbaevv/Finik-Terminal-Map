#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const readline = require('readline');

(async function () {
  const prodEnvFilePath = path.join(__dirname, '.env.production');
  const fileStream = fs.createReadStream(prodEnvFilePath);

  const rl = readline.createInterface({
    input: fileStream,
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in the file as a single line break.
    crlfDelay: Infinity,
  });
  const lines = [];

  for await (const line of rl) {
    // Each line in the file will be successively available here as `line`.
    const match = line.match(/GATSBY_([^=]+)=/);

    if (match) {
      const [, realSystemEnvironmentVariableName] = match;

      lines.push(`GATSBY_${realSystemEnvironmentVariableName}=${process.env[realSystemEnvironmentVariableName]}`);
    } else {
      lines.push(line);
    }
  }

  const data = lines.join('\n');

  fs.writeFileSync(prodEnvFilePath, data);
})();
