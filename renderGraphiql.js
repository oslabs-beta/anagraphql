const path = require('path');
const fs = require('fs');

module.exports = () => {
  const content = fs.readFileSync(path.join(__dirname, 'bundle.js'), 'utf-8');

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AnagraphQL</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
</head>
<body>
    <div id="root"></div>
    <script>${content}</script>
</body>
</html>`;
};
