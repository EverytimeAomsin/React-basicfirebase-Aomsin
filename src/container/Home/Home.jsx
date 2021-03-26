import React, { Component } from 'react';
import {
  MDBBtn, MDBCard, MDBCardBody,  MDBCardText, MDBCardHeader, MDBCardFooter, MDBIcon,
   MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer,MDBNotification 
} from "mdbreact";
import '../../components/Layout/allnav.css'

import { MDBRow, MDBCol } from "mdbreact";


class Home extends Component {
  render() {
    return (

      <MDBContainer className="navall">

     
       <MDBContainer
        style={{
          width: "auto",
          position: "fixed",
          bottom: "30px",
          left: "30px",
          zIndex: 9999
        }}
      >
        <MDBNotification
          show
          fade
          iconClassName="text-primary"
          title="จากผู้พัฒนา"
          message="สวัสดีครับ ผมออมสินนะครับ ยินดีต้อนรับนะครับ"
          text="เมื่อสักครู่"
        />
        <MDBNotification
          show
          fade
          iconClassName="text-primary"
          title="จากผู้พัฒนา"
          message="นี้เป็นการทดสอบเว็บที่ใช้ react.js ครับ ขอบคุณสำหรับที่เขามาทดสอบครับ"
          text="เมื่อสักครู่"
        />
      </MDBContainer>
     
        <MDBBreadcrumb className="MT1">
          <MDBBreadcrumbItem className="font-weight-bold" active> หน้าหลัก</MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <MDBRow className="mth">
          <MDBCol size="4">
            <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
              <MDBCardHeader className="font-weight-bold" color="deep-orange lighten-1">มุมมองผู้ใช้</MDBCardHeader>
              <MDBCardBody>
                <MDBCardText>
                  สามารถเห็นกระทู้แบบเดียวกับมุมมองเดียวกับผู้ใช้เห็น
      </MDBCardText>
                <MDBBtn color="danger" href="/Pickstory"> ดูรายละเอียด</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="4">
            <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
              <MDBCardHeader className="font-weight-bold" color="deep-orange lighten-1">จัดการระบบกระทู้</MDBCardHeader>
              <MDBCardBody>
                <MDBCardText>
                  เพิ่ม ลบ จัดการกระทู้ต่างๆที่ผู้ใช้ได้โพส
      </MDBCardText>
                <MDBBtn color="warning">ดูรายละเอียด</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="4">
            <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
              <MDBCardHeader className="font-weight-bold" color="deep-orange lighten-1">ตรวจสอบผู้ใช้</MDBCardHeader>
              <MDBCardBody>
                <MDBCardText>
                  ใช้จัดการผู้ใช้
      </MDBCardText>
                <MDBBtn color="success">ดูรายละเอียด</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <div>
          <MDBCard style={{ width: "70rem", marginTop: "1rem" }} className="text-center">
            <MDBCardHeader color="success-color"><MDBRow>
              <MDBCol className="font-weight-bold" size="2">จำนวนคนในระบบ</MDBCol>
              <MDBCol size="10"></MDBCol>

            </MDBRow></MDBCardHeader>
            <MDBCardBody>

              <MDBRow >
                <MDBCol size="4"></MDBCol>
                <MDBCol size="4" className="fz1">
     <hr />
      <h2>1 คน</h2>
    <hr />
                </MDBCol>
                <MDBCol size="4"></MDBCol>
              </MDBRow>

            </MDBCardBody>
            <MDBCardFooter color="success-color">อัปเดตข้อมูลเมื่อสักครู่ที่ผ่านมา</MDBCardFooter>
          </MDBCard>
        </div>
        
      </MDBContainer>


    )
  }
}

export default Home
