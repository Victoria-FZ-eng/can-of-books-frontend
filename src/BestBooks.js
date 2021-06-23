import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import UpdateBookForm from './UpdateBookForm';


class BestBooks extends React.Component{

  constructor(props){
    super(props);
    this.state={
      showUpForm: false,
    }
  }

  

    
    render(){
       
        return(
            
               <>
               <CardGroup className="books">
                   {this.props.arr
                   .map((book,idx)=>{
                       return(
                    <Card style={{ width: '18rem' }} className="card" key={idx}>
                    <Card.Img variant="top" src={book.cover} alt="Cover Of Book" />
                 <Card.Body>
                   <Card.Title>{book.name}</Card.Title>
                  <Card.Text>
                  {book.description}
                    </Card.Text>
                    <Card.Text>
                  {book.status}
                    </Card.Text>
                      <Button variant="secondary" value={idx} onClick={this.props.rmvBook} className="in">Delete</Button>
                      
                      <Button variant="secondary"  show={this.state.showUpForm} className="in">Update Data</Button>
                 </Card.Body>
                 </Card> );

                   })}
            
             </CardGroup>
             <UpdateBookForm show={this.state.showUpForm}/>
        </>
        // lab 12
            // <><Carousel fade  className="books">
            // {this.props.arr
            // .map((book, idx)=>{
            //     return (
            //              <Carousel.Item  key={idx}>
            //                <img  className="d-block w-100" src={book.cover} alt="Cover Of Book" />
            //              <Carousel.Caption>
            //               <h3 className="books">{book.name}</h3>
            //               <p className="books">{book.description}</p>
            //               <p className="books">{book.status}</p>
            //             </Carousel.Caption>
            //            </Carousel.Item>
            //     )
                
            // })} </Carousel>
            // </>
        );
    };
};

export default BestBooks;