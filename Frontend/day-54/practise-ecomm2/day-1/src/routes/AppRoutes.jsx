import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, } from 'react-router'
import PublicProtected from './PublicProtected'
import AuthLayouts from '../app/layouts/AuthLayouts'
import Login from '../features/auth/ui/Login'
import Register from '../features/auth/ui/Register'
import MainProtected from './MainProtected'
import MainLayouts from '../app/layouts/MainLayouts'
import Cart from '../features/cart/ui/Cart'
import Products from '../features/products/ui/Products'
import Orders from '../features/orders/ui/Orders'
import Home from '../shared/ui/Home'
import { hydrateUser } from '../features/auth/api/authApi'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../features/auth/state/authSlice'

const AppRoutes = () => {
    const dispatch = useDispatch()
 useEffect(() => {
  (async () => {
    try {
      const response = await hydrateUser();

      if (response) {
        dispatch(addUser(response));
      } else {
        dispatch(removeUser());
      }
    } catch (error) {
      dispatch(removeUser());
    }
  })();
}, [dispatch]);
    const router = createBrowserRouter([
        {
element:<PublicProtected/>,
children:[
    {
        path:"/",
        element:<AuthLayouts/>,
        children:[
            {
                index:true ,
                element:<Login/>
            },{
path:"register",
element:<Register/>
            },

        ]
    }
]
        },
        {
            element:<MainProtected/>,
            children:[
{
    path:"/main",
    element:<MainLayouts/>,
    children:[{
                index:true,

        element:<Home/>

    },{
                path:"home",

        element:<Home/>
    },
    {
        path:"cart",
        element:<Cart/>
    },{
        path:"products",
        element:<Products/>
    },{
        path:"orders",
        element:<Orders/>
    }
]
}
            ],

            

        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes
