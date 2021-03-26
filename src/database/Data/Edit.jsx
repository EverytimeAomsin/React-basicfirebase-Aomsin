import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';

class Editstudent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      namestory: '', 
      room: '', 
      story: '',
      by: '',
     
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('among').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const among = doc.data();
        this.setState({
          key: doc.id,
          namestory: among.namestory,
          room: among.room,
          story: among.story,
          by: among.by,
         
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({among:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {  namestory,
      room, 
      story,
      by,
      } = this.state;

    const updateRef = firebase.firestore().collection('among').doc(this.state.key);
    updateRef.set({
      namestory,
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
      this.props.history.push("/Show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              แก้ไข
            </h3>
          </div>
          <div class="panel-body">
            {/*<h4><Link to={`/Showtable1/${this.state.key}`} class="btn btn-primary">กลับไปหน้าเพิ่มข้อมูลนักศึกษา</Link></h4>*/}
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">namestory:</label>
                <input type="text" class="form-control" name="namestory:" value={this.state.namestory} onChange={this.onChange} placeholder="หมายเลขประจำตัว:" />
              </div>
              <div class="form-group">
                <label for="description">room:</label>
                <input type="text" class="form-control" name="room" value={this.state.room} onChange={this.onChange} placeholder="หมายเลขประชาชน" />
              </div>
              <div class="form-group">
                <label for="author">story:</label>
                <input type="text" class="form-control" name="story" value={this.state.story} onChange={this.onChange} placeholder="รหัสสถานศึกษา" />
              </div>
              <div class="form-group">
                <label for="author">by:</label>
                <input type="text" class="form-control" name="by" value={this.state.by} onChange={this.onChange} placeholder="คำนำหน้า" />
              </div>
             
              <button type="submit" class="btn btn-success">ยืนยัน</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Editstudent;