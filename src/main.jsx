import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import home from './pages/Home/home.jsx';
import Homes from './pages/Home/Homes.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import CategoryPage from './pages/category/CategoryPage.jsx';
import Search from './pages/Search.jsx';
import Singleproduct from './pages/products/Singleproduct.jsx';
import SingleProducts from './pages/products/SingleProducts.jsx';
import Recipes from './pages/products/Recipes.jsx';

import About from './pages/about/About.jsx';
import Resources from './pages/resources/Resources.jsx';
import Contact from './pages/contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children:[
    {
      path:"/",
    element:<Homes/>
    
    },
    {
      path:"/categories/:category",
    element:<CategoryPage/>
    
    },
    {
      path:"/search",
      element:<Search/>

    },
    {
      path: "/items/:id",
      element:<SingleProducts/>,
      loader: ({params})=> fetch(`https://epicure-food-blog-app.vercel.app/api/items/${params.id}`)
    },
    {
      path: "/recipes",
      element:<Recipes/>

    },

    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/resources",
      element:<Resources/>
    },
    {
      path:"/contact",
      element:<Contact/>
      
    }
   
  
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
