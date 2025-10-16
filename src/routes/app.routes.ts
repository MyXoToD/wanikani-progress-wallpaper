import { NextFunction, Request, Response, Router } from 'express';

const appRoutes = Router();

appRoutes.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.render('index');
});

export default appRoutes;
