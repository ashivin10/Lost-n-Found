import React from 'react'
import Navbar from '../components/navbar'
import Card from '../components/Ncard'
import { useState,useEffect} from "react"; 
import axios from "axios";

function Notification() {
    const id = localStorage.getItem("id");

     const [items, setitems] = useState([]);

     useEffect(() => {

        const params = {
            userid: id
          };
          console.log(params)
      axios.get("http://localhost:8080/api/getreq",{params}).then((response) => {
        setitems(response.data);
      });
    }, []);

    
  return (
    <div className='search-form'>
        <Navbar/>
        <h2 className='card-form d-flex flex-column justify-content-center align-items-center '>
            {!items && 'NO  ITEM FOUND!'}
            </h2>
        {items && <div className='card-form'>

        <div className="row1 ">
        { 
        items.map((item) => {
                    return <Card item={item} key={item._id}/>
                })
                }
        </div>
          
    </div>}
    </div>
  )
}

export default Notification