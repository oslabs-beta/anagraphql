const path = require('path');
const fs = require('fs');

//This renders the frontend of the anangraphql application

module.exports = () => {
  const content = fs.readFileSync(path.join(__dirname, 'bundle.js'), 'utf-8');
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>

    <script>${content}</script>
</body>
</html>`;
};
