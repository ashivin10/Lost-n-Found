import React from 'react'
import Navbar from '../components/navbar'
import Card from '../components/card'
import { useState,useEffect
} from "react"; 
import axios from "axios";


// import Searchbar from '../components/searchbar'
import './Search.css'

function Search() {
     const [items, setitems] = useState([]);
     useEffect(() => {
      axios.get("http://localhost:8080/api/getitems").then((response) => {
        setitems(response.data);
      });
    }, []);

    // useEffect(() => {
    //     setItems();
    //   },[]);
    // const setItems = async () => {
    //      result = await axios.get("http://localhost:8080/api/getitems");
    //     items=result.data;
    //     // console.log(items)
    //   };
    
  return (
    <div className='search-form'>
        <Navbar/>
        <h2 className='card-form d-flex flex-column justify-content-center align-items-center '>
            {!items && 'NO LOST ITEM FOUND!'}
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

export default Search