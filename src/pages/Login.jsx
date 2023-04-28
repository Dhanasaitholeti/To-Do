import { Button, Container, Heading, Input, InputGroup } from "@chakra-ui/react";
import axios from "axios";
import {  useState } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigator = useNavigate();
    const [cookies,setCookies] = useCookies(['jwtToken']);

    const [logindata,setLogindata] = useState({
        Email:"",
        passwd:""
    })
    console.log({...logindata})
   

    const handleonChange = (e) => {
        setLogindata({
            ...logindata,
            [e.target.name]:e.target.value
        })
    }


    const LoginForm = () =>{

        axios.post('http://localhost:8080/user/login',
        {
            userEmail:logindata.Email,
            password:logindata.passwd           
        },
        {
            headers:{
                contentType: 'application/json'
            }
        }).then((res) => {
            console.log(res)
            setCookies("jwtToken",res.data.Token)
            navigator('/dashboard')
        }).catch(err => {
            console.log(err)
        })   
    }



    return ( 
       <Container bgColor="gray.200" mt="5%"   >
        <Heading as="h3">Login</Heading>
        <InputGroup display="flex" flexDir="column" gap="2vw" p="5vw">
            <Input name="Email" placeholder="Email" onChange={handleonChange} />
            <Input name="passwd" placeholder="Password" onChange={handleonChange}/>
            <Button onClick={LoginForm} w="30%">Login</Button>
        </InputGroup>
       </Container>
     );
}
 
export default Login;