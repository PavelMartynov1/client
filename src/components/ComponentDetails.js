import { useParams } from "react-router-dom";
import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
function ComponentDetails(){
    let {componentId} = useParams();
    const [info,setInfo]=useState({});

    useEffect(()=>{
        Axios.get(`http://localhost:3002/api/getFromId/${componentId}`).then((data)=>{
            console.log(data)
            setInfo({
                id: data.data[0].id,
                category: data.data[0].category,
                manufacturer: data.data[0].manufacturer,
                title:data.data[0].title,
                price:data.data[0].price,
                });
         });
        
        },[componentId]);
    return(
        <div>
            <Header></Header>
        <div>
            {'Title: ' + info.title}
        </div>
        <div>
        {'Price: ' + info.price}
    </div>
    <Footer></Footer>
    </div>
    );
}
export default ComponentDetails;