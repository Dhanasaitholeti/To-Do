import { Button, Container, Heading, Input, InputGroup, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import {  useState } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigator = useNavigate();
    const [cookies,setCookies] = useCookies(['jwtToken']);
    const [isLoading,setIsLoading] = useState(false)

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

    const handlesignupclick = () => {
        navigator('/signup')
    }


    const LoginForm = () =>{
        setIsLoading(true)
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
        }) .finally(()=>{
            setIsLoading(false)
        })  
    }

    return ( 
       <Container bgColor="gray.200" mt="5%" p="2vw"  >

        <Heading as="h3" textAlign="center">Login</Heading>

            <Container h={"50vh"} display={isLoading?"flex":"none"} flexDir="column" alignItems="center" justifyContent="center">
            <Spinner 
           
            size="xl"
            color="blue"
            />
            <h3 >Logging in...</h3>
            </Container>

        <InputGroup display={isLoading?"none":"flex"} flexDir="column" gap="2vw" p="5vw" >
            <Input name="Email" placeholder="Email" onChange={handleonChange} />
            <Input name="passwd" placeholder="Password" onChange={handleonChange}/>
            <Button onClick={LoginForm} w="30%">Login</Button>
        </InputGroup>
        <Text>Don't have account?<a onClick={handlesignupclick}>signup</a></Text>
       </Container>
     );
}
 
export default Login;