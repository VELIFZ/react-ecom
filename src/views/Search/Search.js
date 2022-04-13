// import axios from 'axios';
// import { useState } from 'react';

// const Search = () => {

//     // making api call to flask app
//     const getBookData = async () => {
//         let response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=zambak');
//         return response.status === 200 ? response.data : null
//     }

//     // loading the api call response data into our state variable
//     const loadBookData = async () => {
//         let data = await getBookData();
//         console.log(data.Books, typeof data.Books);
//         setBooks(data.Books);
//     }

//     // state varibale - bunlarin yeri onemli load'dan once olmali
//     const [books, setBooks] = useState(() => loadBookData());

//     return (
//         <div className="container">
//             <form>
//                 <label>
//                     Name:
//                     <input type="text" name="name" />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>

//             <div className='row justify-content-center'>
//                 <h1>.</h1>
//             </div>
//             <div className='row justify-content-center'>
//                 { typeof books === 'object' && !books.then ? books.map((book, index) => {
//                     return <div class="row mt-3 bg-danger">
//                                 <div class="col-3 mt-3">
//                                 <img class="img-thumbnail" src='{imageLinks.thumbnail }}'/>
//                                 </div>
//                                 <div class="col-9 my-2">
//                                 <div class="container">
//                                     <p>{authors}</p>
//                                     <p> {publisher.upper() }</p>
//                                     <p>{categories}</p>
//                                     <p>{description | truncate(200) }</p>
//                                 </div>
//                                 </div>
//                             </div>
//                 })  :
//                 <h1> ... </h1>
//                 }
//             </div>
//         </div>
//     );
// }

// export default Search;