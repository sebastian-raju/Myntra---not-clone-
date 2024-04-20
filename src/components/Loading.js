import React from 'react'

function Loading() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height: "95vh"}}>
      <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl" style={{color: "#dc2356"}}></i>
    </div>
  )
}

export default Loading
