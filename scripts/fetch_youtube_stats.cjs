const fs = require('fs');
const path = require('path');

// Helper to format numbers (e.g., 41306 -> 4.1萬+, 248548 -> 24.8萬+)
function formatNumber(numStr) {
    const num = parseInt(numStr, 10);
    if (isNaN(num)) return numStr;

    if (num >= 10000) {
        const wan = num / 10000;
        // Keep 1 decimal place, e.g., 4.1
        return `${wan.toFixed(1)}萬+`;
    }
    return `${num}+`;
}

(async () => {
    try {
        console.log('Starting YouTube Stats Fetch...');

        const API_KEY = process.env.YOUTUBE_API_KEY;
        const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

        if (!API_KEY || !CHANNEL_ID) {
            throw new Error('Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID environment variables.');
        }

        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

        console.log(`Fetching data for channel: ${CHANNEL_ID}`);
        const response = await fetch(url);
        const data = await response.json();

        if (!data.items || data.items.length === 0) {
            throw new Error('Channel not found or API limits reached.');
        }

        const stats = data.items[0].statistics;
        const subCount = stats.subscriberCount; // e.g., "41300"
        const viewCount = stats.viewCount;      // e.g., "248548" (Lifetime total)

        // Read existing data to preserve structure if needed
        const dataPath = path.join(__dirname, '../src/data/channel.json');
        let currentData = {};
        if (fs.existsSync(dataPath)) {
            currentData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        }

        // Update with new data
        const newData = {
            ...currentData,
            subscribers: formatNumber(subCount),
            // Note: API returns TOTAL views. 
            // If user previously had "Monthly", this will now be "Total". 
            // We should update the UI label to generic "觀看" or "總觀看".
            views: formatNumber(viewCount),
            lastUpdated: new Date().toISOString().split('T')[0]
        };

        fs.writeFileSync(dataPath, JSON.stringify(newData, null, 2));
        console.log('Successfully updated channel.json:', newData);

    } catch (error) {
        console.error('Error fetching YouTube stats:', error);
        process.exit(1);
    }
})();
