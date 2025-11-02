// blog.js (English Version)

const blogPosts = [
    {
        id: 1,
        title: "Tissot PRX Powermatic 80: The Swiss Army Knife of Elegance",
        author: "Aras Tokdemir",
        date: "October 29, 2025", 
        tag: "Recommendation",
        // Please update the image path:
        image: "img/tissot-prx-powermatic-80-t137407110410-495e-b.png", 
        techMin: "The PRX's 80-hour power reserve is fantastic, and its case shape carries the spirit of the 70s with a modern comfort. However, this watch is more than just a piece of technical paper...",
        subjective: "In my opinion, the PRX is the peak of a 'sport-classic' watch. It adds a silver reflection with a suit and a sophisticated touch with a denim jacket. This is the one watch you can keep on your wrist during a Friday evening cocktail or a relaxed Sunday brunch, instead of putting your sports watch away. It is my only recommendation for those looking for a 'one watch' solution in daily life, who want a luxurious feel on a reasonable budget.",
        link: "#" 
    },
    {
        id: 2,
        title: "Seiko SKX007: The Romantic Side of the Legendary Diver",
        author: "WatchCompare Editor",
        date: "October 15, 2025",
        tag: "Nostalgia",
        // Please update the image path:
        image: "images/seiko_skx_example.jpg", 
        techMin: "Does it matter that the SKX is a bit bulkier than modern movements or lacks hacking seconds? No, because the SKX has a character more than a movement...",
        subjective: "This watch carries the scent of a 'true' adventure. Even though it's no longer in production, wearing it makes you feel like an ocean explorer or a former war pilot, not just an office worker. You can create endless variations by changing its strap; this means the watch is your personal canvas. The SKX is not a trend; it's a story to be passed down through generations.",
        link: "#"
    },
    {
        id: 3,
        title: "Rolex Submariner (No-Date): The Majesty of Simplicity",
        author: "Aras Tokdemir",
        date: "October 1, 2025",
        tag: "Review",
        // Please update the image path:
        image: "img/submariner_no_date.png", 
        techMin: "Rolex's flawless quality and caliber are undisputed. But what makes the absence of the date window so special on the Submariner?",
        subjective: "The Submariner is the 'cultural cornerstone' of the watch world. The lack of a date window keeps the dial symmetrical and clean, allowing the watch to focus purely on its time-telling function. This offers mental relief. It might be a status symbol, but it also represents simplicity, perfection, and eternal confidence in the chaos of daily life. When you wear it, you feel that your life is under control. That is an invaluable feeling.",
        link: "#"
    }
];

function generateBlogCards() {
    const container = document.getElementById('blog-list-container');
    if (!container) return; 

    let htmlContent = '';
    
    blogPosts.forEach(post => {
        // Disable the button if the link is '#'
        const disabledClass = post.link === '#' ? 'disabled' : '';
        const linkText = post.link === '#' ? 'Coming Soon' : 'Read Full Review →';

        htmlContent += `
            <article class="blog-post-card">
              <div class="post-image-container">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
              </div>
              <div class="post-content">
                <h3>${post.title}</h3>
                <span class="post-meta">By ${post.author} | ${post.date} | **${post.tag}**</span>
                <p><strong>Technical Minimum:</strong> ${post.techMin}</p>
                
                <h4>Personal Opinion & Advice</h4>
                <p>${post.subjective}</p>
                <a href="${post.link}" class="read-more-btn ${disabledClass}">${linkText}</a>
              </div>
            </article>
        `;
    });

    container.innerHTML = htmlContent;
}

// Create cards when the page loads
document.addEventListener('DOMContentLoaded', generateBlogCards);
