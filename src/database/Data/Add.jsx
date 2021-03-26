import React,{Component } from 'react';
import firebase from '../firebase';
import {
    MDBBtn,MDBRow, MDBCol, MDBContainer
    , MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBInput
  } from "mdbreact";
  
  import { Link } from 'react-router-dom';



class Add extends Component{
  
  
  state = {
    modal: false
  }

  constructor() {
    super();
    this.ref = firebase.firestore().collection('among');
    this.state = {
        namestory: '', 
        room: '', 
        story: '',
        by: '',
    
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { namestory,
        room, 
        story,
        by,
      
      } = this.state;

    this.ref.add({namestory,
        room, 
        story,
        by,
    }).then((docRef) => {
      this.setState({
        namestory: '', 
        room: '', 
        story: '',
        by: '',   
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

 
    render(){
    

      const { namestory, room, story, by, } = this.state;
    
        return(
          <MDBContainer>
         
      <MDBRow>
    <MDBCol size="5">
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
    <form onSubmit={this.onSubmit}>
    <MDBBtn color="warning" className="btn btn-primary btn-block" size="lg" onClick={this.toggle}>ตั้งกระทู้</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>เพิ่งข้อมูลนักศึกษา</MDBModalHeader>
        <MDBModalBody>
        <MDBInput type="text" classname="form-control" name="namestory" value={namestory} onChange={this.onChange}  label="namestory" />
        <MDBInput type="text" classname="form-control" name="room" value={room} onChange={this.onChange} label="room" />
        <MDBInput type="text" classname="form-control" name="story" value={story} onChange={this.onChange} label="story" />
        <MDBInput type="text" classname="form-control" name="by" value={by} onChange={this.onChange} label="by" />
        <hr />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="warning" onClick={this.toggle}>ออก</MDBBtn>
          <MDBBtn  type="submit" color="danger">บันทึก</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
            </form>
    </MDBCol>
    <MDBCol size="7"></MDBCol>
    </MDBRow>
    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}




  
 
        </MDBContainer>
        )
}
}


export default Add;