
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryWrapper from './CategoryWrapper';
import axios from 'axios';
import Card from '../../components/Card';

const CategoryPage = () => {
    const { category } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategoryData = async () => {
            setLoading(true);
            setError(null); 

            try {
                const response = await axios.get(`https://epicure-food-blog-app.vercel.app/api/categories/${category}`);
                setItems(response.data);
            } catch (error) {
                setError(error.message || "Error loading category");
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryData();
    }, [category]);

    return (
        <div className='px-6 lg:px-12 py-20'>
            <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize'>{category}</h1>

            <CategoryWrapper />

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {items.map(item => (
                       <Card item={item} key={item._id}/>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoryPage;
