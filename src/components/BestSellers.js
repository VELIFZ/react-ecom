import axios from 'axios';
import { useState } from 'react';

const BestSellers = () => {

    // making api call to flask app
    const getSellBookData = async () => {
        let response = await axios.get('hhttps://api.BestSellersimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=c8oaOdaN23MxlZSAstdGA29PJtWu3oFA');
        return response.status === 200 ? response.data : null
    }

    // loading the api call response data into our state variable
    const loadSellBookData = async () => {
        let data = await getSellBookData();
        console.log(data.Books, typeof data.Books);
        setBooks(data.Books);
    }

    // state varibale - bunlarin yeri onemli load'dan once olmali
    const [books, setBooks] = useState(() => loadSellBookData());

    return (
        <div>
            <h3>NYT best sellers slide.. </h3>
        </div>
    );
}

export default BestSellers;