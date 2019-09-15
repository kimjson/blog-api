import { getRepository } from "typeorm";
import { Post } from "../../entities";

const postRepository = getRepository(Post);

export const postResolvers = {
  Query: {
    posts: () => postRepository.find(),
  },
};
