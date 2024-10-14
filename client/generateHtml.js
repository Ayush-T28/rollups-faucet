require('dotenv').config();

const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, 'public/index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

indexHtml = indexHtml
  .replace(/%REACT_APP_FAVICON%/g, process.env.REACT_APP_FAVICON || '%PUBLIC_URL%/faucet-icon-dark.png')
  .replace(/%REACT_APP_TITLE%/g, process.env.REACT_APP_NAME || 'Zeeve');

fs.writeFileSync(indexPath, indexHtml);

console.log('index.html generated successfully with environment variables');
