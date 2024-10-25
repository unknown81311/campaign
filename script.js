document.querySelectorAll('.card,.golden-card').forEach(card => {
    card.addEventListener('click', function() {
        const cardType = this.getAttribute('data-card');
        let title, description, image;
        document.querySelector("#popup > div").style.borderColor=null;  
        // Set title, description, and image based on card clicked
        switch (cardType) {
            case 'freedom-of-speech':
                title = 'Freedom of Speech';
                description = 'I stand firmly for the right of every individual to express their thoughts and opinions without fear of censorship or suppression. As part of my commitment to preserving this fundamental freedom, I will work to remove any laws or regulations that define so-called "hate speech." To me, this is simply speech that others hate, and policing opinions is a slippery slope that endangers free expression for everyone. In a truly free society, all voices must be heard, even those we disagree with. Together, we can safeguard open dialogue, protect dissent, and ensure that freedom of speech remains a cornerstone of our democracy.';
                image = ''; // Replace with actual image path
                break;
            case 'corruption':
                title = 'Corruption';
                description = 'I believe that government should serve the people, not hide the truth from them. As part of my commitment to transparency and accountability, I vow to publicly disclose all FBI documents that are over 40 years old. It’s time to pull back the curtain on decades of secrecy and give citizens access to historical information that has long been hidden. By releasing these documents, we ensure that our government remains accountable, and we empower the public to better understand the past, so we can build a more just and transparent future together.';
                image = 'top-secret.png'; // Replace with actual image path
                break;
            case 'social-sustainability':
                title = 'Social Sustainability';
                description = `<p>Social sustainability is at the heart of building a thriving, healthy, and united society. It’s about ensuring that the decisions we make today improve the quality of life for future generations. That’s why I am committed to addressing key social issues that have long-term impacts on our communities.</p>

<h3>1. Health and Well-being</h3>
<p>For too long, we have seen the negative impact of fast food on our health, especially in our youth. To combat this, I propose a <strong>100% tax on fast food</strong>, which will serve as a deterrent and encourage healthier choices. This measure aims to improve public health and reduce the long-term burden on our healthcare system. The revenue generated will be reinvested in public health initiatives, such as nutrition education and access to healthy food options. Furthermore, this tax will incentivize corporations to produce healthier items, pushing the market toward better food choices for consumers.</p>

<h3>2. Physical Education and Youth Development</h3>
<p>Our children deserve the best opportunities to grow up healthy and strong. Inspired by the physical education initiatives of the 1960s under President Kennedy, I will <strong>reintroduce more rigorous physical activities in public schools</strong>. By updating the school curriculum, we will ensure that students are physically active and developing the skills and habits that lead to healthier lives. Physical education will not just be an afterthought, but a core part of our children’s learning experience, helping to reduce obesity rates and promote mental well-being.</p>

<h3>3. Classroom Flag Display Act</h3>
<p>I believe in fostering a focused and respectful learning environment for all students. Under my leadership, I will propose the <strong>Classroom Flag Display Act</strong>, which prohibits the display of non-American, non-state, and non-school flags in classrooms. The purpose is to eliminate distractions and ensure that schools remain a place for education, not for divisive symbols or causes. By focusing on our shared identity and civic values, this bill will help unite students around their education and future.</p>

<ul>
    <li><strong>Permitted Flags</strong>: Only the <strong>American flag</strong>, <strong>state flag</strong>, and <strong>school flag</strong> will be allowed in classrooms, ensuring that we maintain a respectful and educational atmosphere.</li>
    <li><strong>Exemptions</strong>: This does not apply to educational lessons involving temporary displays of historical or instructional flags, ensuring that students still receive a comprehensive understanding of history and cultures.</li>
</ul>

<p>These initiatives will lay the foundation for a society that values health, education, and unity. Social sustainability is about creating a better tomorrow, and these bold actions will ensure that future generations can thrive in a supportive and healthy environment. Together, we can build a stronger, more sustainable community for all.</p>`;
                image = ''; // Replace with actual image path
                break;
            case 'economic-sustainability':
                title = 'Economic Sustainability';
                description = `<p>The middle class in America is broken, struggling to thrive under the weight of usury and the manipulations of the stock market. Our economy has been influenced by the big hand of a certain group of people, often referred to as "ticks"—a parasitic element in our society that drains the resources and hopes of hardworking Americans.</p>
<p>It is time for a change. I am committed to <strong>banning usury for corporations</strong> as it constitutes a form of taxation that unfairly burdens the middle class and lower-income families. No individual or corporation should wield such power over the livelihoods of our citizens. This will level the playing field and empower our economy to flourish based on fairness and opportunity for all.</p>
<h3>Restoring Balance to Our Economy</h3>
<p>To restore balance, we must ensure that our economic system serves the people, not the elite. My policies will focus on creating an environment where businesses can thrive without exploiting the middle class. By eliminating usury, we can pave the way for sustainable growth that benefits everyone, not just a select few.</p>
<h4>Major Change: Implementing Corporatism</h4>
<p>A key component of my campaign is a complete restructuring and implementation of <strong>Corporatism</strong>. While socialism can be beneficial at the upper levels, I believe it should not align with Marxist ideals, which are inherently anti-nationalist. Corporatism presents an economic model where cooperative groups, driven by shared interests, manage production within a subsidiarity economy.</p>
<p>Think of an economy organized by trade, career paths, hobbies, and more. Corporatism operates for the collective benefit rather than succumbing to the obsession with profit seen in capitalism or the myopic views of Marxism, which reduces humans to mere economic entities. Both capitalism and Marxism are two sides of the same coin—both hyper-materialistic and focused solely on profit or class struggle.</p>
<p>Corporatism recognizes man as more than just an economic factor. It emphasizes the spiritual, social, and political dimensions of humanity, seeking to transcend individual material interests for a national collective spirit that is greater than any single individual. This holistic approach to economics aims to unite workers, employers, and the state, harmonizing economic activity with broader national and spiritual goals.</p>
<p>In essence, corporatism serves as a true nationalist economic model, uplifting the national collective whole in a spiritual and multifaceted way. It does not view individuals as economic slaves but as genuine human beings with lives, aspirations, and a vested interest in their country and community.</p>
<h4>Earned Welfare Reform</h4>
<p>Welfare should be earned, not given. It is unfair that the average working American has to pay taxes to the government, only to see those funds distributed to individuals who may not have contributed to society. I will implement stricter qualifications for welfare benefits to ensure that assistance goes to those who genuinely need it and have demonstrated their commitment to improving their circumstances.</p>
<p>Furthermore, to prevent misuse and mismanagement of welfare funds, I propose that qualified recipients can only use welfare checks for <strong>priority goods and services</strong>, tailored to the individual’s needs and conditions. This approach will not only support those in need but will also encourage responsibility and accountability.</p>
<h4>Empowering Small Businesses</h4>
<p>Additionally, I will implement measures to support <strong>small businesses</strong>—the backbone of our economy. By providing incentives and reducing unnecessary regulations, we can foster innovation and entrepreneurship, leading to job creation and economic resilience.</p>
<p><strong>Together, we can build a sustainable economy that empowers all Americans and restores the middle class to its rightful place in society.</strong></p>`;
                image = ''; // Replace with actual image path
                break;
            case 'special-vision':
                document.querySelector("#popup > div").style.borderColor="gold";
                title = 'Restoring the American Dream';
                description = `   <p>For too long, the American people have been <strong>deceived</strong>, <em>misled</em>, and <u>betrayed</u> by the very leaders they elected to protect their interests. Corruption, foreign entanglements, and dishonesty have eroded the trust between the people and their government, leaving many feeling disillusioned with the system. But I believe in the greatness of our nation and the resilience of its people.</p>

    <blockquote>
        <p>“Together, we can achieve a brighter future.”</p>
    </blockquote>

    <p>Both sides of the political spectrum have divided us as a people and a nation. This division only weakens us. We must remember that we are one people, living under the same Constitution. It is time to come together, united by our shared values and common goals, to restore the strength of our nation.</p>

    <h3>Restoring Our Identity</h3>
    <p>Restoring our national identity and pride in ourselves is critical for the sovereignty and future of our country. If we don’t prioritize ourselves, our interests, and our people, we allow other nations to take advantage of our divisions and weaknesses. We must stand together, strong and united, to rebuild what has been lost.</p>

    <h3>Hope and Opportunity</h3>
    <p>We must restore what once made America a beacon of hope—a place where hard work, fairness, and transparency can allow everyone to achieve their dreams. Through policies that emphasize accountability, sustainability, and the protection of our fundamental rights, we will rebuild the foundations of the American Dream.</p>

    <h4>Addressing Obesity</h4>
    <p>One of the pressing issues we face today is the epidemic of <strong>obesity</strong>, which consumes American lives and prosperity. This crisis not only affects individual health but also burdens our healthcare system and stifles economic growth. We must take decisive action to promote healthier lifestyles and ensure that our citizens can live fulfilling, productive lives.</p>

    <h4>Foreign Policy Focus</h4>
    <p>As we confront external influences, such as questionable alliances with countries like <em>Israel</em>, we must put the American people's interests first. Our foreign policy should be driven by what strengthens our nation, not by serving the agendas of so-called allies who do not stand by us in times of need. It's time for leadership that works for the American people—not for corrupt officials or foreign powers.</p>

    <p><strong>Together, we will restore America to its rightful place: a nation of integrity, freedom, and opportunity for all.</strong></p>`;
                image = 'American-Dream-Quotes.jpg'; // Replace with actual image path
                break;
        }

        // Populate the popup with title
        document.getElementById('popup-title').innerText = title;

        // Show the skeleton loader
        const skeletonLoader = document.getElementById('skeleton-loader');
        skeletonLoader.style.display = 'flex'; // Show loader

        // Set the image and description
        document.getElementById('popup-image').src = image;
        document.getElementById('popup-description').innerHTML = description;

        // Hide the skeleton loader and show the image and description
        skeletonLoader.style.display = 'none'; // Hide loader
        document.getElementById('popup-image').style.display = 'grid'; // Show image
        document.getElementById('popup-description').style.display = 'block'; // Show description

        // Display the popup
        document.getElementById('popup').style.display = 'flex';
    });
});

// Close the popup when the close button is clicked
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Close the popup when clicking outside of the popup content
window.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
