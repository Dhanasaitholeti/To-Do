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
            <Radio value='1'>Home</Radio>
            <Radio value='2'>Work</Radio>
            <Radio value='3'>Payments</Radio>
            </Stack>
            </RadioGroup>

        <InputGroup>
            <InputLeftAddon children="Date" />
            <Input type="Date"/>

        </InputGroup>

    <ButtonGroup>
        <Button w="50%" colorScheme="green">Add</Button>
        <Button w="50%" colorScheme="red" onClick={handleClosebtn}>close</Button>
    </ButtonGroup>

        </Container>
     );
}
 
export default AddTodo;