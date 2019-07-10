import { Router, Request, Response } from 'express';
import { Readable } from 'stream';

const logoutRouter = Router();

logoutRouter.get('/', (req: Request, res: Response) => {
  req.session = undefined;
  res.send(`
    <div>
        Logged out....
    </div>
    <div><a href="/login">LOGIN AGAIN?</a></div>
    `);
});

export { logoutRouter };
