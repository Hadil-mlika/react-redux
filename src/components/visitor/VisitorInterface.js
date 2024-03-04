import { Outlet } from "react-router";

export default function VisitorInterface (){

    return (
        <div>
            <div>navbar bar</div>
          
            <Outlet/>
            <div>footer</div>
        </div>
    )
}