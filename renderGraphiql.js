const path = require('path');
const fs = require('fs');

// const queryRules = JSON.parse(\`${JSON.stringify(rules)}\`);

module.exports = (rules) => {
  const content = fs.readFileSync(path.join(__dirname, 'bundle.js'), 'utf-8');
  const readMe = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf-8').replace(/`/g, '\\`');
  if (rules === undefined) {
    rules = 'Just a string';
  }
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AnagraphQL</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <script>const readMe = \`${readMe}\`
    </script>
</head>
<body>
    <div id="root"></div>

    <script>${content}</script>
</body>
</html>`;
};
