import { BuildingIcon, ChartArea, File, LayoutDashboard, List, PersonStanding, Presentation, Settings } from "lucide-react";
import { Profiler } from "react";

export const employeeNavigation =[
    {
        path:"/home",
        title:"Dashboard",
        icon:<LayoutDashboard/>
    },{
        path:"/home/myTask",
        title:"My-Task",
        icon:<List/>
    },{
        path:"/home/chats",
        title:"Chats",
        icon:<ChartArea/>
    },{
        path:"/home/attendace",
        title:"Attendace",
        icon:<Presentation/>
    },{
        path:"/home/profile",
        title:"Profile",
        icon:<Profiler/>
    },{
        path:"/home/setting",
        title:"Setting",
        icon:<Settings/>
    }
]

export const adminNavigation =[
    {
        path:"/home",
        title:"Dashboard",
        icon:<LayoutDashboard/>
    },{
        path:"/home/task",
        title:"My-Task",
        icon:<List/>
    },{
        path:"/home/chats",
        title:"Chats",
        icon:<ChartArea/>
    },{
path:"/home/employee",
title:"Employee",
icon:<PersonStanding/>
    },
    
    {
        path:"/home/department",
        title:"Departments",
        icon:<BuildingIcon/>
    },{
        path:"/home/document",
        title:"Document",
        icon:<File/>
    },
    
    ,{
        path:"/home/setting",
        title:"Setting",
        icon:<Settings/>
    },
]