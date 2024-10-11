import Express from 'express';

const app = Express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

setInterval(() => {
  console.log('GitHUB Actions app is running');
}, 5000);
