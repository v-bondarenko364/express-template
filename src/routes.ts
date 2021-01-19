import { Application, Response } from 'express';

import PostController from './modules/posts/post.controller';

class Routes {
  public static routes(app: Application): void {
    app.route('/').get((_, response: Response) => response.send('Api running'));

    app.route('/post').post(PostController.createPost);
  }
}

export default Routes;
