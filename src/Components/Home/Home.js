import React,{useEffect,useState} from 'react'
import { getAllProducts } from '../../ApiService/Api'
import { Link } from 'react-router-dom';




function Home() {
    const [products,setProduct] = useState([]);
    useEffect(()=>{
        const fetchAllproducts = async ()=>{
            const data = await getAllProducts();
            console.log(data,'data');
            setProduct(data);
        };
        fetchAllproducts();
    },[]);
  return (
    
<div className="grid grid-cols-3 gap-4">
  {products.map((product) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" key={product.id}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h2>{product.name}</h2>
        </div>
        <p className="text-gray-700 text-base"></p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Buy</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Christmasoffers</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Merrychristmas</span>
        <Link to={`/product/${product.id}`}>
        <button>Productdetails</button></Link>
      </div>
    </div>
  ))}
</div>



    
    
  )
}

export default Home