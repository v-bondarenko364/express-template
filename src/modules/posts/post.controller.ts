import { Request, Response } from 'express';

import Post, { PostModel } from './post.model';

class PostController {
  public static async createPost(
    request: Request,
    response: Response,
  ): Promise<Response<PostModel>> {
    const { title, body } = request.body;

    try {
      const post = await Post.create({ title, body });

      return response.status(200).send(post);
    } catch (error) {
      return response.status(404).send(error);
    }
  }
}

export default PostController;
