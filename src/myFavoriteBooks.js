import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import BestBooks from './BestBooks';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import BookForm from './BookFormModel';
import UpdateBookForm from './UpdateBookForm';


class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      booksArr:[],
      showForm: false,
      index: '',
      
      
    }
  }

  componentDidMount=()=>{
    this.getBooks();
  }

  getBooks =async()=>{
    const { user } = this.props.auth0;
    let booksURL = `${process.env.REACT_APP_BOOKS}/books?email=${user.email}`;
    // let booksURL = `http://localhost:3003/books?email=${user.email}`;
     let booksData= await axios.get(booksURL);
     try{
     this.setState({
       booksArr:booksData.data
     })
     
    // console.log(this.state.booksArr);
  }
    catch{
      console.log("error");
    }
  }

  getForm=(event)=>{
    event.preventDefault();
    this.setState({
      showForm:true,
      showButton: false,
      showUpForm:false,
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
   
       let newBook =await axios.post(`${process.env.REACT_APP_BOOKS}/addBook`, bookData);
      //  let newBook =await axios.post(`http://localhost:3003/addBook`, bookData);
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

  hideAddForm=(event)=>{
    event.preventDefault();
    this.setState({
      showForm:false,
    })
  }


  deleteBook=(event)=>{
    event.preventDefault();
    const { user } = this.props.auth0;
    
    const id = this.state.booksArr[event.target.value]._id;
    // console.log("delete");
    let newBooksArr=this.state.booksArr.filter((book)=> book._id !== id);
    console.log("delete");
    console.log(newBooksArr);

    const email= user.email;
    this.setState({
      booksArr:newBooksArr,
    })

    axios
       .delete(`${process.env.REACT_APP_BOOKS}/deleteBook/${id}`, {params:{email}})
        // .delete(`http://localhost:3003/deleteBook/${id}`, {params:{email}} )
        .then(()=>{
          this.setState({
            booksArr: newBooksArr,
          });
          console.log(this.state.booksArr);
        })
}

selectUpdateBook=(event)=>{

  console.log("from update function");
  event.preventDefault();
  this.setState({
    showUpForm:true,
    index: event.target.value,
  })

}

closeUpForm=(event)=>{
  event.preventDefault();
  this.setState({
    showUpForm:false,
  })
}

updateBook=async(event)=>{
  event.preventDefault();
  const { user } = this.props.auth0;
  const index= this.state.index
  let updatedData={
    name: event.target.name.value || this.state.booksArr[index].name,
    description: event.target.description.value || this.state.booksArr[index].description,
    cover: event.target.cover.value || this.state.booksArr[index].cover,
    status:event.target.status.value || this.state.booksArr[index].status,
    email:user.email
  };
  
  // const id = this.state.booksArr[index]._id;
  //  console.log(this.state.index);
  // console.log (updatedData , id);
  
  // let updated = await axios.put(`http://localhost:3003/updateBook/${index}`, updatedData);
  let updated = await axios.put(`${process.env.REACT_APP_BOOKS}/updateBook/${index}`, updatedData);
  
  this.setState({
    booksArr:updated.data,
  })
       console.log(updated.data);
}
  

  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <Button variant="secondary" size="lg" block onClick={this.getForm}>
           Verify Your Books
        </Button>
        <BookForm show={this.state.showForm} addBook={this.addBook} hide={this.hideAddForm}/>
        <p>
          This is a collection of my favorite books
        </p>
        <p>{this.getBooks}</p>

        <BestBooks arr={this.state.booksArr} rmvBook={this.deleteBook} updBook={this.selectUpdateBook}/>
        <UpdateBookForm show={this.state.showUpForm} close={this.closeUpForm} update={this.updateBook}/>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
