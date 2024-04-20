import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import './Style/ProductView.css'
import Hero from '../components/Hero';
import { Container } from 'react-bootstrap';
import { Row }from 'react-bootstrap';
import axios from 'axios';
import Shimmer from '../components/Shimmer';



function ProductView() {
  const [productList, setProductList] = useState([]);
  const [tempProductList, setTempProductList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products')
    setProductList(data);
    setTempProductList(data);
  }

  useEffect(()=>{
    fetchData();
  }, [])


  const searchProduct = () => {
    const filteredProduct = productList.filter(obj => (obj.title + obj.category).toLowerCase().trim().includes(searchText.toLowerCase().trim()))
    setTempProductList(filteredProduct);
    // setSearchText("");
  }


  const topRatedProducts = () => {
    const sortedData = tempProductList.filter(obj => obj.rating.rate > 4)
    setTempProductList(sortedData);
  }


  const sortingLowToHigh = () => {
    const newArray = [...productList]
    const sortedData = newArray.sort((a,b)=> a.price-b.price);
    setTempProductList(sortedData)
  }

  const sortingHighToLow = () => {
    const newArray = [...productList]
    const sortedData = newArray.sort((a,b)=> b.price-a.price);
    setTempProductList(sortedData)
  }

  const resetProductList = () => {
    setTempProductList(productList);
  }

  return (
    <div>
      <Hero/>

      <Container className='mb-3'>
        <div className='search-container d-flex justify-content-center align-items-center py-2 px-3'>
          <input className='input-box' value={searchText} onChange={(e)=> {
            setSearchText(e.target.value);
          }} type="text" name="" id="" placeholder='search for products...' 
          onKeyDown={(e)=>{
            if(e.key === "Enter"){
              searchProduct();
            }
          }} />
          <button className='search-btn' onClick={()=>{
            searchProduct();
          }}><i className="fa-solid fa-magnifying-glass" style={{color: "#d5317e"}}></i></button>
        </div>
      </Container>

      <Container className='d-flex justify-content-center'>
        <div className="logic-container d-flex justify-content-sm-end justify-content-center  align-items-center flex-wrap-reverse row-gap-3 column-gap-2 py-2 pb-3 px-3 mb-5">
          <div className='d-flex column-gap-4'>
            
            <div className='sorting-container d-flex justify-content-center align-items-center column-gap-2'>
            <div>Price</div>
            <button className='up-btn' onClick={()=>{
              sortingHighToLow();
            }}><i className="fa-solid fa-caret-up" style={{color: '#d52b6f'}}></i></button>
            <button className='down-btn' onClick={()=>{
              sortingLowToHigh();
            }}><i className="fa-solid fa-caret-down" style={{color: '#d52b6f'}}></i></button>
          </div>
            <button className='toprated-btn d-flex justify-content-center align-items-center' onClick={()=>{
              topRatedProducts();
            }}>
              <div className='d-flex justify-content-center align-items-center column-gap-1'>
                Above 
                <div style={{color: '#d52b6f'}}>
                  4 
                </div>
              </div> 
              <i className="fa-solid fa-star fa-2xs" style={{color: '#d52b6f'}}></i>
              </button>
              <button className='reset-btn' onClick={()=>{
                resetProductList();
              }}><i className="fa-solid fa-rotate-left"></i></button>
          </div>
        </div>
      </Container>

      <Container className='d-flex justify-content-center mb-lg-5 mb-4'>
        <Row className='row-gap-5 w-100 ' >
            {
              (tempProductList.length>0)? 
              (tempProductList.map(obj => <Card key={obj.id} prodObj={obj}/>))
              :
              (<Shimmer></Shimmer>)
            }
        </Row>
      </Container>

    
    </div>
  )
}

export default ProductView
