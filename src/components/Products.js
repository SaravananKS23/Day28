import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Products=()=>{
    let {updatedata}=useContext(GlobalContext);
    const navigate=useNavigate();
    const [products,setproducts]=useState([])
   // const [formData,setformData]=useState({})
    useEffect(()=>{        
        axios.get('https://61ab2ffbbfb110001773f42f.mockapi.io/products').then(res=>setproducts(res.data)).catch(err=>console.log(err));
},[])
const getData=()=>{
    axios.get('https://61ab2ffbbfb110001773f42f.mockapi.io/products').then(res=>setproducts(res.data)).catch(err=>console.log(err));
}
const onDelete=(id)=>{       
    axios.delete(`https://61ab2ffbbfb110001773f42f.mockapi.io/products/${id}` )       
    .then(res=>{getData()}).catch(err=>console.log(err));
    
}
const onEdit=(id)=>{  
             
    axios.get(`https://61ab2ffbbfb110001773f42f.mockapi.io/products/${id}`).then(res=>{updatedata(res.data); navigate('/edit');}).catch(err=>console.log(err));
    
   
}
    return <div style={{background:'lightgrey'}}>
   <h1 style={{color:'gray'}}>Products</h1>

   <button type="button" class="btn btn-info" onClick={()=>navigate('/')}>Back</button>
    <div style={{display:'flex',flexWrap:"wrap",justifyContent:'center'}}>
    {
        products.map(item=>{
            return(
                <div style={{margin:"2%",padding:'10px 30px',borderRadius:'10px',background:'white',width:'220px'}}>
                    <h5 style={{textAlign:"center"}}>{item.productname}</h5>
                    <img src={item.image} style={{height:"200px",width:"150px",padding:'15px 15px'}} alt="img"/><br></br>
                    <h5  style={{textAlign:"center"}}> <small>Price.</small> {item.price}</h5>
                    <div style={{margin:'10px'}}>
                    <button style={{marginRight:'10px'}} type="button" class="btn btn-secondary" onClick={()=>{onEdit(item.id);console.log(item.id)}}>Edit</button>
                    <button type="button" class="btn btn-danger" onClick={()=>{onDelete(item.id)}}>Delete</button>
                    </div>
                </div>
            )
        })
    }</div>
    </div>
}
export default Products;