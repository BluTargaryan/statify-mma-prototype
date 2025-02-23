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
        title: 'UFC 300: A Historic Night of Championship Fights',
        content: 'The highly anticipated UFC 300 delivered an unforgettable night of action with multiple title changes and spectacular finishes. The main event saw a dramatic back-and-forth battle that will go down in MMA history.',
        category: categories[0],
        author: 'John McCarthy',
        date: '2024-04-15'
    },
    {
        id: 2,
        title: 'Rising Star Makes Waves in Lightweight Division',
        content: 'An emerging prospect has taken the lightweight division by storm with their third consecutive knockout victory. Analysts are already comparing their striking style to some of the all-time greats.',
        category: categories[1],
        author: 'Daniel Cormier',
        date: '2024-04-10'
    },  
    {
        id: 3,
        title: 'Top 10 Greatest MMA Comebacks of All Time',
        content: 'From Anderson Silva vs Chael Sonnen to Cheick Kongo vs Pat Barry, we count down the most incredible comeback victories in mixed martial arts history. These fights remind us why anything can happen in MMA.',
        category: categories[0],
        author: 'Joe Rogan',
        date: '2024-04-05'
    },
    {
        id: 4,
        title: 'Breaking: Major Title Fight Announced for International Fight Week',
        content: 'The UFC has officially announced a massive championship bout to headline their annual International Fight Week card. The matchup has been months in the making and promises to deliver fireworks.',
        category: categories[1],
        author: 'Ariel Helwani',
        date: '2024-04-01'
    },
    {
        id: 5,
        title: 'Evolution of Ground Game: Modern BJJ in MMA',
        content: 'An in-depth analysis of how Brazilian Jiu-Jitsu has evolved in MMA, from the early Gracie days to the modern meta. We examine how the ground game continues to adapt in modern mixed martial arts.',
        category: categories[0],
        author: 'John Danaher',
        date: '2024-03-28'
    },
    {
        id: 6,
        title: 'Next Generation: Top Prospects to Watch in 2024',
        content: 'A comprehensive look at the rising stars across all weight classes who are poised to make their mark in the sport. These fighters represent the future of MMA and are worth keeping an eye on.',
        category: categories[1],
        author: 'Brett Okamoto',
        date: '2024-03-25'
    }
]           
