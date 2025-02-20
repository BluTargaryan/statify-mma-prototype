interface Post {
    id: number;
    title: string;
    content: string;
    category: Category;
    author: string;
    date: string;
}

interface Category {
    id: number;
    name: string;
}

export const categories: Category[] = [
    {
        id: 1,
        name: 'Lists'
    },
    {
        id: 2,
        name: 'Events'
    }
]               

export const posts: Post[] = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Content 1',
        category: categories[0],
        author: 'Author 1',
        date: '2021-01-01'
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Content 2',
        category: categories[1],
        author: 'Author 2',
        date: '2021-01-02'
    },  
    {
        id: 3,
        title: 'Post 3',
        content: 'Content 3',
        category: categories[0],
        author: 'Author 3',
        date: '2021-01-03'
    },
    {
        id: 4,
        title: 'Post 4',
        content: 'Content 4',
        category: categories[1],
        author: 'Author 4',
        date: '2021-01-04'
    },
    {
        id: 5,
        title: 'Post 5',
        content: 'Content 5',
        category: categories[0],
        author: 'Author 5',
        date: '2021-01-05'
    },
    {
        id: 6,
        title: 'Post 6',
        content: 'Content 6',
        category: categories[1],
        author: 'Author 6',
        date: '2021-01-06'
    }
]           
