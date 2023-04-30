import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../components/Error"
import Loading from "../components/Loading"
import  {useCookies} from "react-cookie"
import ViewTodo from "../components/ViewTodo";
import { servers } from "../config/serverconfig";


const Home = () => {

    const [Cookies] = useCookies(['jwtToken']);
    const Token = Cookies.jwtToken;
    const [data,setData] = useState({
        data:undefined,
        isloading:true,
        iserror:false
    });

    useEffect(()=>{
            axios.get(servers.GetTodo,{
                    headers:{
                        contentType: 'application/json',
                        Authorization: `Bearer ${Token}` 
                    }
            }).then((res) => {
                setData({
                    data:res.data.tododata,
                    isloading:false,
                    iserror:false
                })

            }).catch((err) => {
                setData({
                    data:undefined,
                    isloading:false,
                    iserror:true
                })
            })
    },[data.data]
    )


    

    return ( 
        <>
        
       {
       data.iserror?
        <Error />:
        data.isloading?<Loading />:
         data.data && <ViewTodo data={data.data} />
        }
        
        </>
     );
}
 
export default Home;