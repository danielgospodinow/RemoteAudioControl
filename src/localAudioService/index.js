const express = require('express');
const app = express();
const port = 2999;

const system = require('system-control')();

app.get('/', (req, res) => {
   system.audio.setSystemVolume(req.query.volume)
      .then(function () { res.sendStatus(200) })
      .catch(function () { res.sendStatus(500) });
});

app.listen(port, () => console.log(`Audio service running on port ${port}!`));