import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


class BookForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true,
        }
    }

  

    hideForm=(event)=>{
        event.preventDefault();
        this.setState({
            show:false,
        })
    }


    render(){
        return(
            <div>
                <Modal
                size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                 centered show={this.props.show && this.state.show}>
        <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Add Book to Your Collection
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <Form onSubmit={this.props.addBook}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name: </Form.Label>
          <Form.Control type="text" placeholder="Enter the name of the book" required name="name"/>
         {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
         </Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
         <Form.Label>Description: </Form.Label>
        <Form.Control type="text" placeholder="Description" required name="description"/>
     </Form.Group>

     <Form.Group controlId="formBasicPassword">
         <Form.Label>Cover: </Form.Label>
        <Form.Control type="text" placeholder="Path of Cover img" required name="cover"/>
     </Form.Group>

     <Form.Group controlId="formBasicPassword">
         <Form.Label>Status: </Form.Label>
        <Form.Control type="text" placeholder="Status" required name="status"/>
     </Form.Group>

     <br/>
     <Button variant="primary" type="submit">
       Add Book
      </Button>
     </Form>
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.hideForm}>Close</Button>
      </Modal.Footer>
    </Modal>
            </div>
        )
    }
}

export default BookForm;