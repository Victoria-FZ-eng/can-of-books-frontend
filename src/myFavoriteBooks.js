import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import BestBooks from './BestBooks';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      booksArr:[],
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
  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <p>{this.getBooks}</p>
        <BestBooks arr={this.state.booksArr}/>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
