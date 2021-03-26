import React, { Component } from 'react';
import firebase from './../firebase';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBTable, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer,MDBInput,MDBTableBody } from
"mdbreact";
import '../../components/Layout/allnav.css'

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
        among: {},
        key: ''
    };
  }
  componentDidMount() {
    const ref = firebase.firestore().collection('among').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
            among: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('among').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
     /* <div class="container" style={{marginTop:'50px'}}>
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/Pickstory">กลับไปหน้าแสดงข้อมูล</Link></h4>
           
          </div>
          <div class="panel-body">
            <dl>
              <dt>namestory:</dt>
              <dd>{this.state.among.namestory}</dd>
              <dt>room:</dt>
              <dd>{this.state.among.room}</dd>
              <dt>story:</dt>
              <dd>{this.state.among.story}</dd>
              <dt>by:</dt>
              <dd>{this.state.among.by}</dd>
            </dl>
            <Link to={`/Edit/${this.state.key}`} class="btn btn-success">แก้ไข</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">ลบ</button>
          </div>
        </div> */
        <MDBContainer className="navall">
           <MDBBtn color="mdb-color" href="/Pickstory">กลับไปหน้าเลือกกระทู้</MDBBtn>
  <MDBCard border="success" style={{  marginTop: "1rem" }} className="text-left  ">
    <MDBCardHeader >{this.state.among.namestory}</MDBCardHeader>
    <MDBCardBody>
      <MDBCardText className="text-left">
      <p className="indigo-text">{this.state.among.story}</p>
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="text-left" >โพสโดยคุณ   <a href="#" class="text-decoration-none">{this.state.among.by}</a> </MDBCardFooter>
  </MDBCard>
  

  <MDBCard border="success" style={{  marginTop: "50px" }} className="text-center  ">
    <MDBCardHeader ><h2>คอมเม้น</h2> </MDBCardHeader>
    <MDBCardBody>
      <MDBCardText >
      <MDBTable borderless >
      <MDBTableBody>
        <tr>
          <td>
          <MDBCard  border="dark" style={{}}>
    <MDBCardBody className="text-left">
      <MDBCardText className="indigo-text">
        สอนเราให้บ้างสิ
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter  className="text-left" color="">คอมเม้นโดยคุณ <a href="#" class="text-decoration-none">{this.state.among.by}</a></MDBCardFooter>
  </MDBCard>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>

    <MDBCard  border="dark" style={{}}>
    <MDBCardBody className="text-left">
      <MDBCardText className="indigo-text">
        <h3 className="text-center">แสดงความคิดเห็น</h3>
      <MDBInput type="textarea" label="แสดงความคิดเห็น" outline />
      </MDBCardText>
      <div className="d-flex flex-row-reverse">
      <div className="p-2"></div>
      <div className="p-2"><MDBBtn color="danger">โพสต์ความคิดเห็น</MDBBtn></div>
      <div className="p-2"></div>
    </div>
    </MDBCardBody>
  </MDBCard>
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="text-center" >คอมเม้น    </MDBCardFooter>
  </MDBCard>
 
</MDBContainer>
      
    );
  }
}

export default Show;
