import express, { Request, Response } from 'express';
import cookeSession from 'cookie-session';
import bodyParser from 'body-parser';
import { loginRouter } from './routes/loginRoutes';
import { logoutRouter } from './routes/logoutRoutes';
import { protectedRouter, requireAuth } from './routes/protectedRoutes';

const PORT = 3000;
const app = express();

/*  👉 MOUNT MIDDLEWARE & ROUTES */
app.use(cookeSession({ keys: ['wduyfg73r6yb23wrhg9gr8hfu43jwedvs'] })); // ADDS sessions property to req
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/protected', requireAuth, protectedRouter);

/* 👉 root route */

app.get('/', (req: Request, res: Response) => {
  console.log(req.session);

  if (req.session && req.session.isLoggedIn) {
    res.send(`
    <h3> Welcome. You're logged in. </h3>
    <div> Time: ${new Date().toLocaleTimeString()} </div>
    <div><a href="/logout">LOGOUT</a></div>
      `);
  } else {
    res.send(`
    <h3> Welcome. You're not logged in. </h3>
    <div> Time: ${new Date().toLocaleTimeString()} </div>
    <div><a href="/login">LOGIN</a></div>
      `);
  }
});

app.listen(PORT, () => {
  console.log(`🔥🔥🔥🔥...server running on ${PORT}...🔥🔥🔥🔥`);
});
