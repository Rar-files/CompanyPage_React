interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const emptyPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
}

export default IPost;