import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8000/products`)
        .then((res)=>{
            setProduct(res.data);
           
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    },[])

    console.log(product);

    return (
        <h1>Home Page</h1>
    )
}
 
export default Home