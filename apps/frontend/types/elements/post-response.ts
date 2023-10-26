import { Comment } from './comment';

export type Post = {
    body: string;
    createdAt: string;
    updatedAt: string;
    public: boolean;
    title: string;
    likes: number;
    author: string;
    Comments: Array<Comment>;
}

type PostResponse = {
    id: number;
    attributes: Post;
}

export default PostResponse;