import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../components/Error"
import Loading from "../components/Loading"
import  {useCookies} from "react-cookie"
const Home = () => {
    const [Cookies] = useCookies(['jwtToken']);
    const Token = Cookies.jwtToken;

    useEffect(()=>{
            axios.get('http://localhost:8080/todo/get-todo',{
                    headers:{
                        contentType: 'application/json',
                        Authorization: `Bearer ${Token}` 
                    }
            }).then((res) => {
                console.log(res.data.tododata)
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
    },[])


    const [data,setData] = useState({
        data:undefined,
        isloading:true,
        iserror:false
    });
    

    return ( 
        <>
        
       {
       data.iserror?
           <Error />:
        data.isloading?<Loading />:
        <div>data recieved</div>
        }
        
        </>
     );
}
 
export default Home;