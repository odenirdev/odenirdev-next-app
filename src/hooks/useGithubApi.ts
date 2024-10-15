import axios from "axios";

export type ShowPostDTO = {
  username: string;
  postId: string;
  repo: string;
};

export type ShowPostResponse = {
  id: number;
  number: number;
  title: string;
  body: string;
  url: string;
  comments: number;
  created_at: string;
  user: {
    login: string;
  };
};

export const useGithubApi = () => {
  const connection = axios.create({
    baseURL: process.env.NEXT_PUBLIC_GITHUB_API_URL,
  });

  connection.interceptors.response.use(function (response) {
    return Promise.resolve(response.data);
  });

  const showPost = ({
    username,
    repo,
    postId,
  }: ShowPostDTO): Promise<ShowPostResponse> => {
    return connection.get(`/repos/${username}/${repo}/issues/${postId}`);
  };

  return { showPost };
};
