import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import axios from 'axios';


class UpdateBookForm extends React.Component{
  
    


    render(){
        return(
            <div>
                <Modal
                size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                 centered  show={this.props.show}>
        <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Update Book's Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <Form onSubmit={this.props.update}>  
        <Form.Control type="text" placeholder="Edit name of the book"  name="name"/>   
        <Form.Control type="text" placeholder="Edit Description"  name="description"/>
        <Form.Control type="text" placeholder="Edit Path of Cover img"  name="cover"/>
        <Form.Control type="text" placeholder="Edit Status"  name="status"/>
     <br/>
     <Button variant="primary" type="submit">
       Update
      </Button>
     </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.close}>Close</Button>
      </Modal.Footer>
    </Modal>
            </div>
        )
    }
}

export default UpdateBookForm;