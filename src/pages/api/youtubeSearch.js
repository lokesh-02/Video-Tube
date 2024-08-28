// pages/api/youtubeSearch.js
export default async function handler(req, res) {
    const { query } = req.query; // Get the search query from the request
  
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }
  
    const YOUTUBE_SEARCH_API = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;
  
    try {
      const response = await fetch(YOUTUBE_SEARCH_API);
      if (!response.ok) {
        return res.status(response.status).json({ error: 'Failed to fetch data' });
      }
      const data = await response.json();
      res.status(200).json(data); // Return the data to the client
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  