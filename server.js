import express from 'express';

const app = express();

app.get('/', (req, res, next) => 
  res.send("Hello World!")
)

const server = app.listen(3000, () => {
  const { address, port } = server.address()
  console.log(`Listening for http://${address}:${port}`)
});
