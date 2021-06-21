import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component{
    
    
    render(){
       
        return(
            <><Carousel fade  className="books">
            {this.props.arr
            .map((book, idx)=>{
                return (
                         <Carousel.Item  key={idx}>
                           <img  className="d-block w-100" src={book.cover} alt="Cover Of Book" />
                         <Carousel.Caption>
                          <h3 className="books">{book.name}</h3>
                          <p className="books">{book.description}</p>
                          <p className="books">{book.status}</p>
                        </Carousel.Caption>
                       </Carousel.Item>
                )
                
            })} </Carousel>
            </>
        
        );
    };
};

export default BestBooks;