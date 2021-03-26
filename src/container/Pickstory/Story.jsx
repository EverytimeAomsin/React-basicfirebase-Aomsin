import React, { Component } from 'react';
import firebase from '../../database/firebase';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead,MDBBtn  } from 'mdbreact';

class Story extends Component {

  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('among');
    this.unsubscribe = null;
    this.state = {
        among: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const among = [];
    querySnapshot.forEach((doc) => {
      const { namestory, room, story, by } = doc.data();
      among.push({
        key: doc.id,
        doc, // DocumentSnapshot
        namestory,
        room, 
        story,
        by,
     
      });
    });
    this.setState({
        among
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
            <MDBTable class="table table-stripe ">
              <MDBTableHead className="text-center">
                <tr>
                <th>ชื่อกระทู้</th>
                  <th>ห้อง</th>
                  <th>โพสโดย</th>
                
                </tr>
              </MDBTableHead>
              <MDBTableBody className="text-center">
                {this.state.among.map(among =>
                  <tr ss>
                    <td><h5><Link className="indigo-text" to={`/show/${among.key}`}>{among.namestory}</Link></h5></td>
                    <td><h5><Link className="indigo-text" to={`/show/${among.key}`}>{among.room}</Link></h5></td>
                    <td><h5><Link className="indigo-text" to={`/show/${among.key}`}>{among.by}</Link></h5></td>
                   
                  </tr>
                )}
              </MDBTableBody>
            </MDBTable>
          </div>
    );
  }
}

export default Story;