import React, {useContext, useEffect, useState} from 'react'
import BookImg from '../images/Book-background.jpg';
import BookInfo from '../Data/Book-Info.json';
import {userSearch} from '../App'

export default function Home() {

  const {value} = useContext(userSearch);

  const [Books, setBooks] = useState({...BookInfo});


  useEffect(() => {
    let updateBooks = [...BookInfo.eBooks];
    updateBooks = updateBooks.filter((item) => {
      return item.language.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    setBooks({eBooks: updateBooks});
  }, [value]);


  return (
    <>
      <section className="information-section">
        <hr className="line-full" />
        <div className="mt-5">
          <div
            className="row justify-content-center align-items-center"

          >
            {Books.eBooks.map((book, index) => (
              <div key={index} className="card ms-4 mb-4 form-font col-8 col-sm-4 col-md-3">
                <div className="mt-3 mb-3 m-auto">
                  <img className="card-img img-fluid" src={BookImg} alt="" />
                </div>

                <div className="card-font">
                  <p>Language :  {book.language}</p>
                  <p>Edition :  {book.edition}</p>
                  <p>Price :  {book.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> 
    </>
  )
}
