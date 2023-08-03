import Route from "react-router";
import authService from 
const ProtectedRoute=({component:Component,path,adminonly})=>{
    return(<Route path={path} render={(props)=>{
        if(!adminonly)
    }}/>)
}
