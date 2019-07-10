import { Router, Request, Response } from 'express';
import { Readable } from 'stream';

const loginRouter = Router();

loginRouter.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
        <form method="POST">
          <input name="email" id="email" placeholder="your email" type="email" />
          <input name="password" id="password" type="password" />
          <div>
            <button id="btn-login">LOGIN</button>
          </div>
        </form>
    </div>`);
});

loginRouter.get('/:id', (req: Request, res: Response) => {
  res.send(`You've reached the login page....and passed the following
  arguments in your path param:  ${req.params.id}`);
});

interface IRequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

loginRouter.post('/', (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === 'z@z.com' && password === '123') {
    // ⭐️ set session cookie
    req.session = { isLoggedIn: true };
    // ⭐️ redirect home
    res.redirect('/');
    return;
  }

  res.send(
    `You must enter a valid email and password. <a href="/login">try again</a>`
  );
});

export { loginRouter };
