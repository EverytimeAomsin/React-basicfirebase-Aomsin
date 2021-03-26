import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBBtn,MDBCol,MDBRow } from "mdbreact";

const Room = () => {
return (
<MDBContainer>
  <MDBCard style={{  marginTop: "1rem" }}>
    <MDBCardBody>
      <MDBCardTitle>ห้องอ่านกระทู้</MDBCardTitle>
      <MDBCardText>
      <MDBRow>
    <MDBCol md="6" className="mb-4">
      <MDBCard color="indigo" text="white" className="text-center">
        <MDBCardBody>
        ห้องเขียนโปรแกรม
        </MDBCardBody>
      </MDBCard>

      <MDBCard color="pink lighten-2" text="white" className="text-center" style={{marginTop:'15px'}}>
        <MDBCardBody>
          ห้องครัว
        </MDBCardBody>
      </MDBCard>

      <MDBCard color="info-color" text="white" className="text-center" style={{marginTop:'15px'}}>
        <MDBCardBody>
          ทหาร
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol md="6" >
      <MDBCard color="red lighten-1" text="white" className="text-center" >
        <MDBCardBody>
        เกมเมอร์
        </MDBCardBody>
      </MDBCard>

      <MDBCard color="success-color" text="white" className="text-center" style={{marginTop:'15px'}}>
        <MDBCardBody>
         อนิแมะ
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      </MDBRow>
      </MDBCardText>
      
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
);
};

export default Room;