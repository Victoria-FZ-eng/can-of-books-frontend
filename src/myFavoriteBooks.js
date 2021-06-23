import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import BestBooks from './BestBooks';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import BookForm from './BookFormModel';

class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      booksArr:[],
      showForm: false,
      showButton: true,
    }
  }

  componentDidMount=()=>{
    this.getBooks();
  }

  getBooks =async()=>{
    const { user } = this.props.auth0;
    let booksURL = `${process.env.REACT_APP_BOOKS}/books?email=${user.email}`;
     let booksData= await axios.get(booksURL);
     try{
     this.setState({
       booksArr:booksData.data
     })
     
     console.log(this.state.booksArr);}
    catch{
      console.log("error");
    }
  }

  getForm=(event)=>{
    event.preventDefault();
    this.setState({
      showForm:true,
      showButton: false,
    })
  }
  addBook=async (event)=>{
    event.preventDefault();
    const { user } = this.props.auth0;
     
    const bookData = {
      name: event.target.name.value,
      description: event.target.description.value,
      status: event.target.status.value,
      cover: event.target.cover.value,
      email: user.email
    };
    // console.log(user.email);
    // console.log(bookData);
   
      //  let newBook =await axios.post(`${process.env.REACT_APP_BOOKS}/addBook`, {params: bookData});
       let newBook =await axios.post(`http://localhost:3003/addBook`, {params: bookData});
       console.log(newBook.data);
       this.setState({
        booksArr: newBook.data,
        });
        console.log(`ADD BOOK book data: ${this.state.booksArr}`);

        //  axios
        // .post(`${process.env.REACT_APP_BOOKS}/books`,{params:bookData} )
        // .then((newBook)=>{
        //   console.log("newBook");
        //     this.setState({
        //         booksArr: newBook.data,
        //     })
        // }) 
        

  }

  deleteBook=( index)=>{
    // event.preventDefault();
    // const { user } = this.props.auth0;

    // axios
    //     .delete(`${process.env.REACT_APP_BOOKS}/deleteBook/${index}`, {params: user.email})
    //     .then((book)=>{
    //       this.setState({
    //         booksArr:book.data
    //       })
    //     })
}
  

  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        {this.state.showButton && 
        <Button variant="secondary" size="lg" block onClick={this.getForm}>
           Verify Your Books
        </Button>}
        <BookForm show={this.state.showForm} addBook={this.addBook}/>
        <p>
          This is a collection of my favorite books
        </p>
        <p>{this.getBooks}</p>
        <BestBooks arr={this.state.booksArr} deleteBook={this.deleteBook}/>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
