import {  
    Box, 
    Button, 
    ButtonGroup, 
    Container, 
    Heading, 
    Input, 
    InputGroup, 
    InputLeftAddon, 
    Radio, 
    RadioGroup, 
    Select, 
    Spinner, 
    Stack, 
    Textarea,
    useToast
 } from "@chakra-ui/react";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useCookies } from "react-cookie";
import { servers } from "../config/serverconfig";

const AddTodo = () => {
    const [isLoading,setIsLoading] = useState(false)

    const toast = useToast();
    const [Cookies] = useCookies(['jwtToken']);
    const Token = Cookies.jwtToken;
    const navigator = useNavigate();

    const[data,setData] = useState({
        Todo:"",
        priority:"",
        category:"",
        dueDate:""
    })

    console.log({...data})

    const handleonChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    } 


    const handleClosebtn = () => {
        navigator(-1)
    }


    const handlesubmit = () =>{
        setIsLoading(true)
        axios.post(servers.AddTodo,{
            todo:data.Todo,
            priority:data.priority,
            category:data.category,
            duedate:new Date(data.dueDate)
        },{
                    headers:{
                        contentType: 'application/json',
                        Authorization: `Bearer ${Token}` 
                    }
            }).then((res) => {
                console.log(res)
                toast({
                    title:"New ToDo Added!",
                    isClosable:true,
                    duration:3000,
                    status:"success"                    
                })
                navigator(-1)

            }).catch((err) => {
                console.log(err)
            }).finally(()=>{
            setIsLoading(false)
        })  
    }


    return ( 
        <Container display="flex" flexDir="column" gap="2vw" mt="2vw" >

            <Heading as="h2" align="center">Add A New Todo</Heading>


            <Container h={"50vh"} display={isLoading?"flex":"none"} flexDir="column" alignItems="center" justifyContent="center">
            <Spinner 
           
            size="xl"
            color="blue"
            />
            <h3 >loading...</h3>
            </Container>


            <Box display={isLoading?"none":"flex"} flexDir="column" gap="2vw" mt="2vw" >

            <Box>
            Todo:
            <Textarea onChange={handleonChange} name="Todo" />
            </Box>

            <Select placeholder="Select Priority" onChange={handleonChange} name="priority">
                <option value="high">High</option>
                <option value="low">Low</option>
            </Select>

            <RadioGroup display="flex" flexDir="row" justifyContent="space-evenly" >
            Category:
            <Stack direction='row' onChange={handleonChange}>
            <Radio value='Home' name="category">Home</Radio>
            <Radio value='Work' name="category">Work</Radio>
            <Radio value='Payments' name="category">Payments</Radio>
            </Stack>
            </RadioGroup>

        <InputGroup>
            <InputLeftAddon children="DueDate" />
            <Input type="Date" onChange={handleonChange} name="dueDate" />

        </InputGroup>

    <ButtonGroup>
        <Button w="50%" colorScheme="green" onClick={handlesubmit}>Add</Button>
        <Button w="50%" colorScheme="red" onClick={handleClosebtn}>close</Button>
    </ButtonGroup>
                </Box>

        </Container>
     );
}
 
export default AddTodo;