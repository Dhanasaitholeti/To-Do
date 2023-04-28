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
    Stack, 
    Textarea
 } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useCookies } from "react-cookie";

const AddTodo = () => {
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

        axios.post('http://localhost:8080/todo/add-todo',{
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
            }).catch((err) => {
                console.log(err)
            })
    }


    return ( 
        <Container display="flex" flexDir="column" gap="2vw" mt="2vw" >

            <Heading as="h2" align="center">Add A New Todo</Heading>
            
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

        </Container>
     );
}
 
export default AddTodo;