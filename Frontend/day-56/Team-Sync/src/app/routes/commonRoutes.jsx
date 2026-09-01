import React from 'react'
import HomePage from '../../features/dashboard/ui/HomePage'
import Chats from '../../features/chats/ui/pages/Chats'
import Setting from '../../features/settings/ui/pages/Setting'

export const commonRoutes =[
    {
        path:"",
        element:<HomePage/>
    },{
        path:"chats",
        element:<Chats/>
    },{
        path:"setting",
        element:<Setting/>
    }
]
