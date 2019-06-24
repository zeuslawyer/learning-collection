import express, { Request, Response } from 'express';
import cookeSession from 'cookie-session';
import bodyParser from 'body-parser';
import { router } from './routes/loginRoutes';

const PORT = 3000;
const app = express();

/*  👉 MIDDLEWARE */

app.use(cookeSession({ keys: ['wduyfg73r6yb23wrhg9gr8hfu43jwedvs'] })); // ADDS sessions property to req
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/login', router);

/* 👉 root route */

app.get('/', (req: Request, res: Response) => {
  res.send(`
  <h3> Welcome </h3>
  <div> Time: ${new Date().toLocaleTimeString()} </div>
  <div><a href="/login">LOGIN</a></div>
    `);
});

app.listen(PORT, () => {
  console.log(`🔥🔥🔥🔥...server running on ${PORT}...🔥🔥🔥🔥`);
});
