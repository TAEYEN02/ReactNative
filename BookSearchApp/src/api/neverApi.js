import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET } from '../constants/apiConfig';

export const searchBooks = async (query) => {
    const bookqurey = encodeURIComponent(query); 
    const url = `https://openapi.naver.com/v1/search/book_adv?d_titl=${bookqurey}`;

    const response = await axios.get(url, {
        headers: {
            'X-Naver-Client-Id': CLIENT_ID,
            'X-Naver-Client-Secret': CLIENT_SECRET,
        }
    });

    return response.data.items;
};