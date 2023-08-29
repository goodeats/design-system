require('dotenv').config();

const { exec } = require('child_process');

exec('npm publish', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing npm publish: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
