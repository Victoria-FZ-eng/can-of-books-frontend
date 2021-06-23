import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import axios from 'axios';


class UpdateBookForm extends React.Component{
  
  


    showing=(event)=>{
        event.preventDefault();
        this.props.show=false;
       
            
    
    }


    render(){
        return(
            <div>
                <Modal
                size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                 centered show={this.showing} >
        <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Update Book's Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <Form onSubmit="">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Modified name: </Form.Label>
          <Form.Control type="text" placeholder="Enter the name of the book" required name="name"/>
         {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
         </Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
         <Form.Label>Modified description: </Form.Label>
        <Form.Control type="text" placeholder="Description" required name="description"/>
     </Form.Group>

     <Form.Group controlId="formBasicPassword">
         <Form.Label>Modified cover: </Form.Label>
        <Form.Control type="text" placeholder="Path of Cover img" required name="cover"/>
     </Form.Group>

     <Form.Group controlId="formBasicPassword">
         <Form.Label>Modified status: </Form.Label>
        <Form.Control type="text" placeholder="Status" required name="status"/>
     </Form.Group>

     <br/>
     <Button variant="primary" type="submit">
       Update
      </Button>
     </Form>
       
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={this.showing}>Close</Button> */}
      </Modal.Footer>
    </Modal>
            </div>
        )
    }
}

export default UpdateBookForm;