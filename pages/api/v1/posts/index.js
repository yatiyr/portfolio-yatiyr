
import axios from 'axios';

const handlePosts = async (req, res) => { 
    try {
        const axiosRes = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const posts = axiosRes.data;
        res.status(200).json(posts.slice(0,10));
    } catch(e) {
        console.error(e);
        res.status(e.status || 400).json({message: 'Api error!'});
    }
}

export default handlePosts;