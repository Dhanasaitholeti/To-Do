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

 import { useNavigate } from "react-router-dom";


const AddTodo = () => {
    const navigator = useNavigate();

    const handleClosebtn = () => {
        navigator(-1)
    }


    const handlesubmit = () =>{

        axios.get('http://localhost:8080/todo/add-todo',{},{
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
    }


    return ( 
        <Container display="flex" flexDir="column" gap="2vw" mt="2vw" >

            <Heading as="h2" align="center">Add A New Todo</Heading>
            
            <Box>
            Todo:
            <Textarea />
            </Box>

            <Select placeholder="Select Priority">
                <option value="high">High</option>
                <option value="low">Low</option>
            </Select>

            <RadioGroup display="flex" flexDir="row" justifyContent="space-evenly">
            Category:
            <Stack direction='row'>
            <Radio value='Home'>Home</Radio>
            <Radio value='Work'>Work</Radio>
            <Radio value='Payments'>Payments</Radio>
            </Stack>
            </RadioGroup>

        <InputGroup>
            <InputLeftAddon children="DueDate" />
            <Input type="Date"/>

        </InputGroup>

    <ButtonGroup>
        <Button w="50%" colorScheme="green" onClick={handlesubmit}>Add</Button>
        <Button w="50%" colorScheme="red" onClick={handleClosebtn}>close</Button>
    </ButtonGroup>

        </Container>
     );
}
 
export default AddTodo;