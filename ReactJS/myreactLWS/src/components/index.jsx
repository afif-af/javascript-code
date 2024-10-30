import React, { useRef } from 'react'

const index = () => {


 let div =useRef();
 div.current.innerText="hello useRef"

  return (


    <div ref={div}> h</div>
  )
}

export default index
