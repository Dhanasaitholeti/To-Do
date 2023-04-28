import { Button, Container, Heading, Input, InputGroup } from "@chakra-ui/react";
import axios from "axios";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {

    const navigator = useNavigate();

    const [signupdata,setSignupdata] = useState({
        Name:"",
        Email:"",
        passwd:""
    })
    console.log({...signupdata})
   

    const handleonChange = (e) => {
        setSignupdata({
            ...signupdata,
            [e.target.name]:e.target.value
        })
    }


    const signupform = () =>{

        axios.post('http://localhost:8080/user/signup',
        {
            Name:signupdata.Name,
            Email:signupdata.Email,
            passwd:signupdata.passwd           
        },
        {
            headers:{
                contentType: 'application/json'
            }
        }).then((res) => {
            console.log(res)
            navigator('/')
        }).catch(err => {
            console.log(err)
        })   
    }

    return ( 
       <Container bgColor="gray.200" mt="5%"   >
        <Heading as="h3" textAlign="center">Signup</Heading>
        <InputGroup display="flex" flexDir="column" gap="2vw" p="5vw">
            <Input name="Name" placeholder="name" onChange={handleonChange} />
            <Input name="Email" placeholder="Email" onChange={handleonChange} />
            <Input name="passwd" placeholder="Password" onChange={handleonChange}/>
            <Button onClick={signupform} w="30%">signup</Button>
        </InputGroup>
       </Container>
     );
}
 
export default Signup;