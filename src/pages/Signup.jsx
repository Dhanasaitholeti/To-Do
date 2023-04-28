import { Button, Container, Heading, Input, InputGroup, Spinner, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const toast = useToast();
    const navigator = useNavigate();
    const [isLoading,setIsLoading] = useState(false)

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

    const handleloginclick = () => {
      navigator('/')
    }

    const signupform = () =>{
        setIsLoading(true)
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
                toast({
                    title:"registered succesfully",
                    status:"success",
                    isClosable: true,
                    duration: 5000
                })
            navigator('/')
        }).catch(err => {
            console.log(err)
            toast({
                title:"check your Network",
                status: 'error',
                isClosable: true,
                duration: 5000
            })
        }).finally(()=>{
            setIsLoading(false)
        })    
    }

    return ( 
       <Container bgColor="gray.200" mt="5%"  p="2vw" >
        <Heading as="h3" textAlign="center">Signup</Heading>

        <Container h={"50vh"} display={isLoading?"flex":"none"} flexDir="column" alignItems="center" justifyContent="center">
            <Spinner 
           
            size="xl"
            color="blue"
            />
            <h3 >Logging in...</h3>
            </Container>


        <InputGroup display={isLoading?"none":"flex"} flexDir="column" gap="2vw" p="5vw">
            <Input name="Name" placeholder="name" onChange={handleonChange} />
            <Input name="Email" placeholder="Email" onChange={handleonChange} />
            <Input name="passwd" placeholder="Password" onChange={handleonChange}/>
            <Button onClick={signupform} w="30%">signup</Button>
        </InputGroup>
        <Text>Already have an account?<a onClick={handleloginclick} w="30%">login</a></Text>
       </Container>
     );
}
 
export default Signup;