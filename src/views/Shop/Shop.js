import axios from 'axios';
import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';


const Shop = () => {

    // making api call to flask app
    const getSellBookData = async () => {
        let response = await axios.get('https://the-book-cafe.herokuapp.com/api/books');
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

    // access cart from Context.Provider 
    const {cart, setCart} = useContext(DataContext)

    // add to cart function
    const addCart = (book) => {
        // add the book to our cart object - CANNOT MUTATE STATE DIRECTLY
        // make a copy
        let mutableCart = { ...cart }
        // modify the copy
        // increase size by one
        mutableCart.size++;
        // increase total by book.price
        mutableCart.total += book.price;
        // if the book is in the cart already, increase quantity by one, otherwise add the book to the cart
        mutableCart.books[book.id] ?
        mutableCart.books[book.id].quantity++ :
        mutableCart.books[book.id] = { 'data': book, 'quantity': 1 };
        // testing console log
        console.log(mutableCart);
    
        // set state
        setCart(mutableCart);
    }

    return (
        <div className="container">
            <div className='row justify-content-center'>
                <h1>Start the treasure hunting...</h1>
            </div>
            <div className='row justify-content-center'>
                { typeof books === 'object' && !books.then ? books.map((book, index) => {
                    return <div key={index} className="container mx-3 my-3" style={{ width: 18 + 'rem' }}>
                                <img src={book.image} className="img-thumbnail" alt={book.title} onError={(e)=>{e.target.onerror = null; e.target.src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="}}/>
                                <div className="container mt-1 h-25">
                                    <h5 className="title">{book.title}</h5>
                                    <h6>by {book.author}</h6>
                                    <p className="text-danger">${book.price.toFixed(2)}</p>
                                    <button type="button" className="btn btn-primary" onClick={() => addCart(book)} > Add to Cart </button>
                                </div>
                            </div>
                })  :
                <h1> Wait just a bit -loaing thing maybe?</h1>
                }
            </div>
        </div>
    );
}

export default Shop;