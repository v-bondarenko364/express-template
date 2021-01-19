import { Application, Response } from 'express';

class Routes {
  public static routes(app: Application): void {
    app.route('/').get((_, response: Response) => response.send('Api running'));
  }
}

export default Routes;
