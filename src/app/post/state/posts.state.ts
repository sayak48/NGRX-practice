export interface PostState {
    posts: Post[]
}
export interface Post {
    id?: string,
    title: string,
    description: string
}

export const initialState: PostState = {
    posts: [
        {
            id: '1', title: 'sample title 1', description: 'Sample description 1'
        },
        {
            id: '2', title: 'sample title 2', description: 'Sample description 2'
        }
    ]
}