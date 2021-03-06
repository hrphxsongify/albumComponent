const bodyParser = require('body-parser');

const path = require('path');

const express = require('express');

const app = express();

const cors = require('cors');

const Album = require('./data/database');

const PORT = 1024;

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/script', async (req, res) => {
  res.sendFile(await path.join(__dirname, 'dist/bundle.js'));
});

app.get('/style', async (req, res) => {
  res.sendFile(await path.join(__dirname, 'dist/style.css'));
});

app.get('/albums', async (req, res) => {
  res.send(
    await Album.find({})
      .sort({ _id: 1 })
      .exec()
  );
});

app.get('/api/albums/:albumId', async (req, res) => {
  res.send(
    await Album.findOne({
      id: parseInt(req.params.albumId, 10)
    }).exec()
  );
});

app.get('/albums*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
