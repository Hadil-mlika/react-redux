import { Outlet } from "react-router";

export default function AdminInterface (){

    return (
        <div>
            <div>top bar</div>
            <div>side bar</div>
            <Outlet/>
            <div>footer</div>
        </div>
    )
}