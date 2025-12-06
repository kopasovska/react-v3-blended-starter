import axios from "axios";
import { Post } from "../types/post";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

type FetchPostsResponse = Post[];

type NewPostContent = Pick<Post, "title" | "body">;

export const fetchPosts = async (searchText: string, page: number): Promise<Post[]> => {
  const params = {
    ...(searchText !== "" && { q: searchText }),
  };
  const response = await axios.get<FetchPostsResponse>("/posts", {
    params,
  });
  console.log(response);
  return response.data;
};

export const createPost = async (newPost: NewPostContent) => {
  const response = await axios.post<Post>("/posts", newPost);
  return response.data;
};

export const editPost = async (newDataPost) => {};

export const deletePost = async (postId) => {};
