import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../components/Error"
import Loading from "../components/Loading"
import  {useCookies} from "react-cookie"
import ViewTodo from "../components/ViewTodo";
import { servers } from "../config/serverconfig";
import { useSelector , useDispatch } from "react-redux";
import { setServerData } from "../redux/ducks/serverData";

const Home = () => {
    const dispatcher = useDispatch()
    const [Cookies] = useCookies(['jwtToken']);
    const Token = Cookies.jwtToken;

    const data = useSelector(state => state.ServerData.TodoData)
    const isloading = useSelector(state => state.ServerData.isLoading)
    const iserror = useSelector(state => state.ServerData.isError)


    useEffect(()=>{
            axios.get(servers.GetTodo,{
                    headers:{
                        contentType: 'application/json',
                        Authorization: `Bearer ${Token}` 
                    }
            }).then((res) => {
                dispatcher(setServerData({
                    tododata:res.data.tododata,
                    err:false,
                    loading:false
                }))

            }).catch((err) => {
                dispatcher(setServerData({
                    data:undefined,
                    err:true,
                    loading:false
                }))

            })
    },[])


    

    return ( 
        <>
        
       {
       iserror?
        <Error />:
        isloading?<Loading />:
         data && <ViewTodo data={data} />
        }
        
        </>
     );
}
 
export default Home;