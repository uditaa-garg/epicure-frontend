import React, { useState,useEffect } from 'react'
import axios from 'axios';
import CategoryWrapper from '../category/CategoryWrapper';
import Card from '../../components/Card';

const Recipes = () => {
    const [items,setItems] = useState([]);
    useEffect(()=>{
        const getLatestItems = async ()=>{
          const response = await axios.get('https://epicure-food-blog-app.vercel.app/api/all-items');
          setItems(response.data);
        }
        getLatestItems()
    },[])

  return (
    <div className='px-6 lg:px-12 py-20'>
        <h1 className='text-3xl font-semibold text-secondary sm-text-5xl sm:leading-relaxed text-center'>All Reciepes</h1>
        <CategoryWrapper/>

        <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid'>
            {
                items.map((item)=>(
                    <Card key={item._id} item={item}/>
                ))
            }
        </ul>
    </div>
  )
}

export default Recipes