import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row, Col,Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Style/SingleView.css'
import Loading from '../components/Loading';

function SingleView() {

  const {id} = useParams();
  const [singleProduct, setSingleProduct] = useState()

  const fetchSingleData = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products/'+ id)
    setSingleProduct(data);
  }


  console.log(singleProduct);


  useEffect(()=>{
    fetchSingleData();
  },[])

  return singleProduct?(
    <div className='single-view-container d-flex align-items-center mb-5'>
      <Container className='d-flex justify-content-center align-items-center'>
        <Row className='w-100 row-gap-5'>
          <Col lg = {6} className='d-flex justify-content-center align-items-center'>
            <div className='img-container'>
              <img className='prod-img' src={singleProduct?.image} alt="" />
            </div>
          </Col>
          <Col lg = {6} className='d-flex justify-content-center justify-content-lg-start align-items-center ps-lg-5'>
            <div className='product-desc-container'>
              <div className="prod-title">
                {singleProduct?.title}
              </div>
              <div className="prod-category">
                {singleProduct?.category}
              </div>
              <div className={(singleProduct?.rating?.rate > 4)?"text-success":(singleProduct?.rating?.rate>3)?"text-warning":"text-danger"}>
                {singleProduct?.rating?.rate} <i className="fa-solid fa-star fa-2xs"></i>
              </div>
              <div className="prod-price">
                {singleProduct?.price} $
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  ):<Loading></Loading>
}

export default SingleView
