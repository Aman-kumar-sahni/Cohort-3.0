import Departments from "../../features/admin module/departments/ui/pages/Departments";
import Documents from "../../features/admin module/documents/ui/pages/Documents";
import Employee from "../../features/admin module/employee/ui/pages/Employee";
import Task from "../../features/admin module/tasks/ui/pages/Task";

export const adminRoutes=[
    {
        path:"/home/employee",
        element:<Employee/>
    },{
        path:"/home/department",
        element:<Departments/>
    },{
        path:"/home/task",
        element:<Task/>
    },{
        path:"/home/document",
        element:<Documents/>
    }
]