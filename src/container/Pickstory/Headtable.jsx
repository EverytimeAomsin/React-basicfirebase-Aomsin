import React,{Component,Fragment } from 'react';
import {
    MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader,MDBCardFooter,MDBRow, MDBCol,
     MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer,MDBTable, MDBTableBody, MDBTableHead 
  } from "mdbreact";
  import '../../../layout/css/All.css'
  import firebase from '../../../Firebase';
  import { Link } from 'react-router-dom';



class Headtable extends Component{
  
  

  
    render(){
        return(
          <MDBContainer>
            <div  className="MT1">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem className="font-weight-bold" href="/">หน้าหลัก</MDBBreadcrumbItem>
        <MDBBreadcrumbItem   className="font-weight-bold" active>จัดการรายชื่อนักศึกษา</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      </div>
       {/* ///////////////////////////////////    ปุ่มเพิ่ม  ////////////////////////////////////////////////*/}
      <MDBRow>
    <MDBCol size="6" size="lg">
      <div className=" btn-lg btn-block">
      
    <Createstudent />
    </div>
    </MDBCol>
    <MDBCol size="6"></MDBCol>
    </MDBRow>
    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

   <div>
   <MDBCard style={{ width: "70rem", marginTop: "1rem" }} className="text-center">
            <MDBCardHeader color="success-color"><MDBRow>
              <MDBCol className="font-weight-bold" size="2">เพิ่ม/ลบ/แก้ไขรายชื่อ</MDBCol>
              <MDBCol size="10"></MDBCol>

            </MDBRow></MDBCardHeader>
            <MDBCardBody>
            <MDBRow>
    <MDBCol md="2"><MDBBtn color="info">พิมพ์หน้านี้</MDBBtn></MDBCol>
    <MDBCol md="10"></MDBCol>
  </MDBRow>
   
  <Showtable1 />

    <MDBTable>
    <MDBTableHead>
        <tr>
        <th>ลำดับในหมู่</th>
                  <th>หมายเลขประจำตัว</th>
                  <th>คำนำหน้า</th>
                  <th>ชื่อ</th>
                  <th>นามสกุล</th>
                  <th>รหัสสถานศึกษา</th>
                  <th>การดำเนินการ</th>
        </tr>
      </MDBTableHead>
      </MDBTable>
    </MDBCardBody>
            <MDBCardFooter color="success-color">อัปเดตข้อมูลเมื่อ 2 วันที่แล้ว</MDBCardFooter>
          </MDBCard>
   </div>
 

 
        </MDBContainer>
        )
}
}


export default Headtable