import { Router, Request, Response, NextFunction } from 'express';
import { Readable } from 'stream';

const protectedRouter = Router();
// 👉 Middleware
export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!req.session || !req.session.isLoggedIn) {
    res.status(403).send(`
    <div> You must  <a href="/login">log in</a>  first.</div>`);
    return;
  } else {
    next();
    return;
  }
};

protectedRouter.get('/', (req: Request, res: Response) => {
  req.session = undefined;
  res.send(`
    <div>
        you're authorised to see this...
    </div>
    `);
});

export { protectedRouter };
