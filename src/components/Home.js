import React from "react";
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate();
    return<div>
        <h1 style={{color:'Green',marginTop:'20px',marginBottom:'20px'}}>Products Home Page</h1>
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet8sxBIGiArkrkA1afASHHFl3uw9NU5BT2A&usqp=CAU" alt="welcome"/>
 <div style={{marginTop:'30px'}}>
    <button type="button" class="btn btn-success" onClick={()=>navigate('/products')}>Get Products</button>
    
    <button style={{marginLeft:'50px'}} type="button" class="btn btn-success" onClick={()=>navigate('/add')}>Add Product</button>   
    </div>
    
    </div>
}
export default Home;