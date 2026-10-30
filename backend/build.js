const fs = require('fs');

if (fs.existsSync('src')) {
  fs.rmSync('dist', { recursive: true, force: true });
  fs.cpSync('src', 'dist', { recursive: true });
  console.log('Successfully copied src to dist');
} else {
  console.error('Error: src folder not found!');
  process.exit(1);
}