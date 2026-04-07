const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Metadata and Branding
html = html.replace(/<title>.*?<\/title>/g, '<title>The July Movement | Bangladesh 2024 Archive</title>');
html = html.replace(/content="Siamo nati developer[^"]*"/g, 'content="A historical archive dedicated to documenting the July Movement of Bangladesh 2024."');
html = html.replace(/content="Evolve \| Direction, Tech, Marketing"/g, 'content="The July Movement | Bangladesh 2024 Archive"');
html = html.replace(/"Made in Evolve"/g, '"The July Movement"');
html = html.replace(/"info@madeinevolve\.com"/g, '""');

// 2. Replace logos
html = html.replace(/<svg\s+xmlns="http:\/\/www\.w3\.org\/2000\/svg"\s+width="100%"\s+viewBox="0 0 166 41"[\s\S]*?<\/svg>/, '<span style="font-weight:bold; font-size: 1.2rem; color: #fff;">JULY MOVEMENT</span>');
html = html.replace(/<svg\s+xmlns="http:\/\/www\.w3\.org\/2000\/svg"\s+fill="none"\s+viewBox="0 0 1348 224"[\s\S]*?<\/svg>/, '<span style="font-weight:bold; font-size: 1.2rem; color: #fff;">ARCHIVE</span>');

// Replace footer logo canvas to an image
html = html.replace(/<canvas[^>]*><\/canvas>/, '<img src="assets/July/3332.jpg" style="width: 100%; height: 100%; object-fit: cover;" alt="July Footer"/>');
// "Let's make an impact together." -> "Power to the students."
html = html.replace(/Let&#x27;s make an impact together\.<br \/>‍/g, 'Power to the students. A defining moment in history.<br />‍');
html = html.replace(/<a[^>]*href="mailto:hello@madeinevolve\.com"[^>]*>hello@madeinevolve\.com<\/a>/g, '<span style="color:#aaa;">july.movement@bangladesh.org</span>');

// Webflow loader claim
html = html.replace(/Ecommerce Innovation Agency for Visionary Brands/g, 'Documenting the History of the July Movement of Bangladesh');

// Nav Desc
html = html.replace(/Made in Evolve© is a digital studio that/g, 'July Movement© is a historical archive that');
html = html.replace(/blends strategy, design, and technology to craft/g, 'blends stories, history, and reality to document');
html = html.replace(/meaningful eCommerce experiences\./g, 'meaningful moments from the 2024 uprising.');
html = html.replace(/Modena, EST 2008©/g, 'Bangladesh, 2024©');
html = html.replace(/hello@madeinevolve\.com/g, 'july.movement@bangladesh.org');

// Nav submenu
html = html.replace(/>Projects<\/p>/g, '>Timeline</p>');
html = html.replace(/>About<\/p>/g, '>History</p>');
html = html.replace(/>Future Vision<\/p>/g, '>Aftermath</p>');
html = html.replace(/>Services<\/p>/g, '>Key Figures</p>');
html = html.replace(/>Menu<\/p>/g, '>Index</p>');

// Hero section updates strictly for content
html = html.replace(/We are an/g, 'July 2024');
html = html.replace(/eCommerce/g, 'Bangladesh');
html = html.replace(/Innovation/g, 'Uprising');
html = html.replace(/Agency/g, 'Movement');
html = html.replace(/Ecommerce<br \/>Innovation<br \/>Agency/g, 'July<br />2024<br />Movement');

// Hero small tags
html = html.replace(/>Brand Direction<\/p>/g, '>Student Protests</p>');
html = html.replace(/>Performance Marketing<\/p>/g, '>Nationwide Shutdown</p>');
html = html.replace(/>Advanced Tech<\/p>/g, '>Communication Blackout</p>');

// Projects -> Timeline (e.g., Dockers, Champion)
html = html.replace(/>Dockers<\/p>/g, '>July 14: Initial Protests</p>');
html = html.replace(/<p class="eyebrow is--desk">Dockers<\/p>/g, '<p class="eyebrow is--desk">July 14: Initial Protests</p>');

html = html.replace(/>Champion<\/p>/g, '>July 16: Abu Sayed\'s Stand</p>');
html = html.replace(/<p class="eyebrow is--desk">Champion<\/p>/g, '<p class="eyebrow is--desk">July 16: Abu Sayed\'s Stand</p>');

html = html.replace(/>Benetton<\/p>/g, '>July 18: Complete Shutdown</p>');
html = html.replace(/<p class="eyebrow is--desk">Benetton<\/p>/g, '<p class="eyebrow is--desk">July 18: Complete Shutdown</p>');

html = html.replace(/>Sotf<\/p>/g, '>July 19: Curfew Imposed</p>');
html = html.replace(/<p class="eyebrow is--desk">Sotf<\/p>/g, '<p class="eyebrow is--desk">July 19: Curfew Imposed</p>');

html = html.replace(/>Mason&#x27;s<\/p>/g, '>August 5: Victory</p>');
html = html.replace(/<p class="eyebrow is--desk">Mason&#x27;s<\/p>/g, '<p class="eyebrow is--desk">August 5: Victory</p>');

html = html.replace(/>Roberto Collina<\/p>/g, '>August 4: Final Push</p>');
html = html.replace(/<p class="eyebrow is--desk">Roberto Collina<\/p>/g, '<p class="eyebrow is--desk">August 4: Final Push</p>');

html = html.replace(/>Pollini<\/p>/g, '>July 31: March for Justice</p>');
html = html.replace(/<p class="eyebrow is--desk">Pollini<\/p>/g, '<p class="eyebrow is--desk">July 31: March for Justice</p>');

html = html.replace(/>Engine<\/p>/g, '>July 21: Supreme Court Verdict</p>');
html = html.replace(/<p class="eyebrow is--desk">Engine<\/p>/g, '<p class="eyebrow is--desk">July 21: Supreme Court Verdict</p>');

html = html.replace(/>Rombo Group<\/p>/g, '>August 1: Remember the Martyrs</p>');
html = html.replace(/<p class="eyebrow is--desk">Rombo Group<\/p>/g, '<p class="eyebrow is--desk">August 1: Remember the Martyrs</p>');

html = html.replace(/>Pier<\/p>/g, '>July 25: Nationwide Strikes</p>');
html = html.replace(/<p class="eyebrow is--desk">Pier<\/p>/g, '<p class="eyebrow is--desk">July 25: Nationwide Strikes</p>');

html = html.replace(/>Aura<\/p>/g, '>July 28: Global Solidarity</p>');
html = html.replace(/<p class="eyebrow is--desk">Aura<\/p>/g, '<p class="eyebrow is--desk">July 28: Global Solidarity</p>');

// Cinematic Section Replace
html = html.replace(/Brand Direction/g, 'Student Protests');
html = html.replace(/Strategic identity and digital storytelling for high-end eCommerce brands\./g, 'The initial phase of the movement driven by university students across the nation.');
html = html.replace(/Advanced Tech/g, 'Communication Blackout');
html = html.replace(/Custom Shopify Plus architecture and seamless system integrations\./g, 'The period where internet access was restricted to suppress the flow of information.');
html = html.replace(/Performance Marketing/g, 'Nationwide Shutdown');
html = html.replace(/Data-driven growth strategies and automated customer acquisition flows\./g, 'The "Bangla Blockade" causing a complete halt to all national activities.');
html = html.replace(/System Integration/g, 'Freedom of Expression');
html = html.replace(/Bridging the gap between front-end experiences and global backend logic\./g, 'The final triumph of the people resulting in a new era of freedom.');

// More general descriptions (the big text block)
html = html.replace(/We live in an age where everything is everywhere, all the time.*?relationships that endure over time\./s, 'The July 2024 movement in Bangladesh was a historic display of student resilience and public unity. Originating as a protest against the quota system, it evolved into a nationwide struggle for justice and accountability. This archive serves to document the events, figures, and turning points of the movement, ensuring that the legacy of those who stood up remains intact for generations to come.');
html = html.replace(/Made in Evolve© is a multi-disciplinary cultural hub that focuses on partnering creatives with brands to produce innovative stories\./g, 'The July Movement of Bangladesh 2024 changed the trajectory of the nation through unity and courage.');

// Image Replacement Array
const julyImages = [
    'assets/July/2024-07-16T165437Z_1676931503_RC2CW8AFR4AN_RTRMADP_3_BANGLADESH-PROTESTS.JPG',
    'assets/July/3332.jpg',
    'assets/July/4691.jpg',
    'assets/July/5025.jpg',
    'assets/July/5184.jpg',
    'assets/July/8256.jpg',
    'assets/July/Rahul-Talukder-14-1.jpg',
    'assets/July/www.beatsnoop.com-3k-0MTwY4d6U9.jpg',
    'assets/July/www.beatsnoop.com-3k-3ZMBukD0Wd.jpg',
    'assets/July/www.beatsnoop.com-3k-5PrwZj3T4U.jpg',
    'assets/July/www.beatsnoop.com-3k-5oskMatPiC.jpg',
    'assets/July/www.beatsnoop.com-3k-7ei95hzGlI.jpg',
    'assets/July/www.beatsnoop.com-3k-8KhpDEwBuW.jpg',
    'assets/July/www.beatsnoop.com-3k-ESTWMfDhbF.jpg',
    'assets/July/www.beatsnoop.com-3k-JM5owpVIsn.jpg',
    'assets/July/www.beatsnoop.com-3k-ODu7nfsTUV.jpg',
    'assets/July/www.beatsnoop.com-3k-Q92xOZR4Cm.jpg',
    'assets/July/www.beatsnoop.com-3k-VYfKbJcjw3.jpg',
    'assets/July/www.beatsnoop.com-3k-Xv3pO65WLd.jpg',
    'assets/July/www.beatsnoop.com-3k-ZxJUIw39oY.jpg',
    'assets/July/www.beatsnoop.com-3k-hoKEQBO4lG.jpg',
    'assets/July/www.beatsnoop.com-3k-kTfOLu5bRD.jpg',
    'assets/July/www.beatsnoop.com-3k-pPu6iDvkaG.jpg',
    'assets/July/www.beatsnoop.com-3k-pz0nvYmQ8W.jpg',
    'assets/July/www.beatsnoop.com-3k-xbghs0QNMv.jpg'
];

let imgIndex = 0;

// 130: Handle src, content, and other attributes
html = html.replace(/(?:src|content|srcset|data-src|data-srcset)=['"]?assets\/img\/([^&\'"\s]+)['"]?/g, (match) => {
    if (match.includes('evolve-fav') || match.includes('webclip')) return match;
    const attr = match.split('=')[0];
    let replacement;
    if (attr === 'srcset' || attr === 'data-srcset') {
        replacement = `${attr}="${julyImages[imgIndex % julyImages.length]} 500w, ${julyImages[imgIndex % julyImages.length]} 1000w"`;
    } else {
        replacement = `${attr}="${julyImages[imgIndex % julyImages.length]}"`;
    }
    imgIndex++;
    return replacement;
});

// 145: Handle url() in styles, including HTML entities like &quot; and &apos;
html = html.replace(/url\(\s*(?:&quot;|&apos;|['"])?assets\/img\/([^&\'"\s)]+)(?:&quot;|&apos;|['"])?\s*\)/g, (match) => {
    const replacement = `url('${julyImages[imgIndex % julyImages.length]}')`;
    imgIndex++;
    return replacement;
});

// 151: Fallback for any remaining srcset that might not have assets/img prefix specifically but used to
html = html.replace(/srcset=['"]?[^'"\s>]+['"]?/g, (match) => {
    // Only replace if it doesn't already point to assets/July (to avoid double replacement)
    if (match.includes('assets/July')) return match;
    const replacement = `srcset="${julyImages[imgIndex % julyImages.length]} 500w, ${julyImages[imgIndex % julyImages.length]} 1000w"`;
    imgIndex++;
    return replacement;
});

// Links stripping (a to div)
html = html.replace(/<a(\s+[^>]*?)>/gi, (match, attributes) => {
    // remove href attribute to make it unclickable
    let newAttributes = attributes.replace(/\s+href="[^"]*"/gi, '');
    newAttributes = newAttributes.replace(/\s+hrefLang="[^"]*"/gi, '');
    newAttributes = newAttributes.replace(/\s+target="[^"]*"/gi, '');
    return `<div${newAttributes}>`;
});
html = html.replace(/<\/a>/gi, '</div>');

// Final Cleanup for "all connections" and old website data
html = html.replace(/<html[^>]*>/i, '<html lang="en">');
html = html.replace(/<link rel="alternate"[^>]*href="https:\/\/madeinevolve\.com[^>]*>\s*/gi, '');
html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, '');
html = html.replace(/<link[^>]*href="assets\/img\/69a6e6af8bead0f93e1b80b5_evolve-fav\.png"[^>]*>/i, '');
html = html.replace(/<link[^>]*href="assets\/img\/69a5a8be0a9b30ef53d12177_webclip\.png"[^>]*>/i, '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Refactoring successfully applied');

