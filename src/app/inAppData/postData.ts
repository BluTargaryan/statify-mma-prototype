interface Post {
    id: number;
    title: string;
    content: string;  // This will now contain HTML content
    category: Category;
    author: string;
    date: string;
    image: string;
}

interface Category {
    id: number;
    name: 'lists' | 'events';
}

export const imageTemplate = 'https://images.unsplash.com/photo-1529165980561-f19d4acc4f3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export const categories: Category[] = [
    {
        id: 1,
        name: 'lists'
    },
    {
        id: 2,
        name: 'events'
    }
]               

export const posts: Post[] = [
    {
        id: 1,
        title: "Uber and Lyft are finally available in all of New York State.",
        category:categories[1],
        date: "2024-03-20",
        image: imageTemplate,
        content: `
            <h2>New Lightweight Sensation Emerges: Breaking Down the Rise of MMA's Next Star</h2>
            
            <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2070" alt="Fighter celebrating victory in the octagon" class="article-image" />
            
            <p>In a division already stacked with elite talent, a new force has emerged in the lightweight ranks, capturing the attention of fans and analysts alike with an impressive streak of highlight-reel finishes. Last night's performance at UFC Fight Night served as yet another testament to the rising star's undeniable potential.</p>

            <h2>A Night of Dominance</h2>
            <img src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=2000" alt="MMA fighter throwing a punch" class="article-image" />
            <p>From the opening bell, it was clear this wasn't going to be a typical contest. The precision striking, footwork, and fight IQ on display suggested years of experience rather than a relative newcomer to the big stage. The third-round finish came as a culmination of calculated pressure and technical superiority.</p>

            <h2>Technical Breakdown</h2>
            <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069" alt="Fighter in training showing technique" class="article-image" />
            <p>What sets this prospect apart is their unique blend of traditional martial arts and modern MMA techniques. The striking arsenal includes:</p>
            <ul>
                <li>Lightning-fast combinations that start with leg kicks and end in devastating uppercuts</li>
                <li>Exceptional distance management reminiscent of prime Anderson Silva</li>
                <li>A defensive wrestling game that has frustrated even decorated grapplers</li>
            </ul>

            <h2>The Path to Championship Contention</h2>
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000" alt="Championship belt display" class="article-image" />
            <p>With this victory, the path to title contention becomes increasingly clear. The current landscape of the lightweight division presents several intriguing matchups that could fast-track this rising star to championship consideration.</p>

            <blockquote>"What we're witnessing is special. The combination of speed, power, and fight IQ at this stage of their career is unprecedented. The ceiling for this fighter is championship level, without a doubt." - Daniel Cormier</blockquote>

            <h2>Statistical Dominance</h2>
            <img src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2070" alt="Fighter training with intensity" class="article-image" />
            <p>The numbers tell a compelling story of dominance inside the octagon:</p>
            <ul>
                <li>85% striking accuracy in the last three fights</li>
                <li>100% takedown defense</li>
                <li>Average fight time of 7.5 minutes</li>
                <li>Zero significant strikes absorbed in first rounds</li>
            </ul>

            <h2>Looking Ahead</h2>
            <img src="https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?q=80&w=2070" alt="Fighter walking to the octagon" class="article-image" />
            <p>The immediate future holds exciting possibilities. Several top-10 contenders have already expressed interest in testing themselves against the division's newest threat. The matchmaking possibilities are endless, but a few potential matchups stand out:</p>

            <ul>
                <li>A showdown with a veteran gatekeeper to prove elite status</li>
                <li>A clash with another rising prospect in a potential title eliminator</li>
                <li>A high-stakes main event against a former champion</li>
            </ul>

            <h2>Training Camp Insights</h2>
            <img src="https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=2069" alt="Training session in the gym" class="article-image" />
            <p>Behind the scenes, the preparation for this fight revealed a dedication to craft that extends beyond natural talent. Training partners speak of grueling sessions, innovative drills, and an almost obsessive attention to detail in game planning.</p>

            <blockquote>"The work ethic is unmatched. First one in, last one out every single day. That's why you see the results you see in the octagon." - Head Coach</blockquote>

            <h2>Fan Reception</h2>
            <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070" alt="Crowd cheering at MMA event" class="article-image" />
            <p>Social media metrics indicate a surge in fan interest following the latest victory. The combination of spectacular finishes and an engaging personality has created a perfect storm for marketability. The UFC's lightweight division may have found its next big star.</p>

            <h2>Conclusion</h2>
            <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070" alt="Fighter raising hands in victory" class="article-image" />
            <p>As the dust settles on another spectacular performance, the MMA world eagerly anticipates what's next. With each victory more impressive than the last, it's becoming increasingly difficult to deny that we're witnessing the rise of something special in the lightweight division.</p>

            <p>The journey from prospect to contender is often treacherous in MMA, but some fighters make it look inevitable. Based on what we've seen so far, the lightweight division's newest sensation appears to be on an unstoppable trajectory toward the top.</p>
        `,
        author: "John Doe"
    },
    {
        id: 2,
        title: 'Rising Star Makes Waves in Lightweight Division',
        content: `
            <h1>New Lightweight Sensation Emerges</h1>
            <img src=${imageTemplate} alt="Rising lightweight star celebrating victory" />
            <p>An emerging prospect has taken the lightweight division by storm with their third consecutive knockout victory.</p>
            <h2>Technical Analysis</h2>
            <p>Analysts are already comparing their striking style to some of the all-time greats, noting particularly:</p>
            <ul>
                <li>Exceptional footwork</li>
                <li>Unique angle creation</li>
                <li>Devastating combination work</li>
            </ul>`,
        category: categories[1],
        image: imageTemplate,
        author: 'Daniel Cormier',
        date: '2024-04-10'
    },  
    {
        id: 3,
        title: 'Top 10 Greatest MMA Comebacks of All Time',
        image: imageTemplate,
        content: `
        <h1>New Lightweight Sensation Emerges</h1>
        <img src=${imageTemplate} alt="Rising lightweight star celebrating victory" />
        <p>An emerging prospect has taken the lightweight division by storm with their third consecutive knockout victory.</p>
        <h2>Technical Analysis</h2>
        <p>Analysts are already comparing their striking style to some of the all-time greats, noting particularly:</p>
        <ul>
            <li>Exceptional footwork</li>
            <li>Unique angle creation</li>
            <li>Devastating combination work</li>
        </ul>`,        category: categories[0],
        author: 'Joe Rogan',
        date: '2024-04-05'
    },
    {
        id: 4,
        title: 'Breaking: Major Title Fight Announced for International Fight Week',
        image: imageTemplate,
        content: `
        <h1>New Lightweight Sensation Emerges</h1>
        <img src=${imageTemplate} alt="Rising lightweight star celebrating victory" />
        <p>An emerging prospect has taken the lightweight division by storm with their third consecutive knockout victory.</p>
        <h2>Technical Analysis</h2>
        <p>Analysts are already comparing their striking style to some of the all-time greats, noting particularly:</p>
        <ul>
            <li>Exceptional footwork</li>
            <li>Unique angle creation</li>
            <li>Devastating combination work</li>
        </ul>`,        category: categories[1],
        author: 'Ariel Helwani',
        date: '2024-04-01'
    },
    {
        id: 5,
        title: 'Evolution of Ground Game: Modern BJJ in MMA',
        image: imageTemplate,
        content: `
        <h1>New Lightweight Sensation Emerges</h1>
        <img src=${imageTemplate} alt="Rising lightweight star celebrating victory" />
        <p>An emerging prospect has taken the lightweight division by storm with their third consecutive knockout victory.</p>
        <h2>Technical Analysis</h2>
        <p>Analysts are already comparing their striking style to some of the all-time greats, noting particularly:</p>
        <ul>
            <li>Exceptional footwork</li>
            <li>Unique angle creation</li>
            <li>Devastating combination work</li>
        </ul>`,        category: categories[0],
        author: 'John Danaher',
        date: '2024-03-28'
    },
    {
        id: 6,
        title: 'Next Generation: Top Prospects to Watch in 2024',
        image: imageTemplate,
        content: `
            <h1>New Lightweight Sensation Emerges</h1>
            <img src=${imageTemplate} alt="Rising lightweight star celebrating victory" />
            <p>An emerging prospect has taken the lightweight division by storm with their third consecutive knockout victory.</p>
            <h2>Technical Analysis</h2>
            <p>Analysts are already comparing their striking style to some of the all-time greats, noting particularly:</p>
            <ul>
                <li>Exceptional footwork</li>
                <li>Unique angle creation</li>
                <li>Devastating combination work</li>
            </ul>`,
        category: categories[1],
        author: 'Brett Okamoto',
        date: '2024-03-25'
    }
]           
