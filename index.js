const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(express.static('public'));

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    res.send({
      id: user._id,
    });
  }
});
  
app.post('/auth/login', async (req, res) => {
    res.send({ id: 'user@id.com' });
});






//this is new
