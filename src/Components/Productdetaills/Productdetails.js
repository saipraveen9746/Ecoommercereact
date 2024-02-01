
import React,{useEffect,useState} from 'react'
import { getAllProductsbyid } from '../../ApiService/Api'
import {useParams} from "react-router-dom";
import {Link } from "react-router-dom";

function Productdetails() {
    const {id} = useParams();
    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        const fetchProductDetails = async()=>{
            const data = await getAllProductsbyid(id);
            setProductDetails(data)
        };
        fetchProductDetails();
    }, [id]);
    
    const handleBuyNow = () =>{
        window.confirm('The product is out of stock')
    }
    
  return (
    <div className="Product-details-container">
    <div className="product_info">
        <h2 className="product-title">{productDetails.name}</h2>
        <p>{productDetails.description}</p>
        <p className="product-price">{productDetails.price}</p>
        <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
        <Link to='/'>Home</Link>
        <button className="go-back-button" >Go Back</button>
    </div>
</div>


  )
}

export default Productdetails