import express from 'express';
import path from 'path';
import { mergePdfs } from './mergePdfs.js';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const upload = multer({ dest: 'uploads/' });
const app = express();
app.use('/static', express.static('./public'));
app.use('/root', express.static('./'));
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './templates/index.html'));
});

app.post('/merge', upload.array('pdfs', 2), async (req, res) => {
let d =  await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
  res.redirect(`http://localhost:3000/static/${d}.pdf`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
