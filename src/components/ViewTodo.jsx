import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { servers } from "../config/serverconfig";
import { useDispatch } from "react-redux";
import { setServerData } from "../redux/ducks/serverData";

const ViewTodo = ({data }) => {
    const dispatcher = useDispatch();
    

    const toast = useToast();
    const [Cookies] = useCookies(['jwtToken']);

    const token = Cookies.jwtToken;


    const handleUpdatebtn = ({id,todo,priority,dueDate,category}) =>{
        axios.patch(`${servers.UpdateTodo}${id}`,{
            Todo:todo,
            priority:priority,
            category:category,
            duedate:dueDate,
            status:"completed"
        },{
            headers:{
                contentType: 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then((res)=>{
            dispatcher(setServerData({
                tododata:res.data.updateddata,
                err:false,
                loading:false
            }))
            toast({
                title:"updated succesfully",
                duration:3000,
                isClosable:true,
                status:"success"
            })
        }).catch(()=>{
            dispatcher(setServerData({
                data:undefined,
                err:true,
                loading:false
            }))
            toast({
                title:"unable to delete",
                status:"error",
                duration:3000,
                isClosable:true
            })
        })
    }

    const handleDeletebtn = (id) => {
        axios.delete(`${servers.DeleteTodo}${id}`,{
            headers:{
                contentType: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then((res)=>{
            dispatcher(setServerData({
                tododata:res.data.updateddata,
                err:false,
                loading:false
            }))
            toast({
                title:"Deleted successfully",
                status:"success",
                duration:3000,
                isClosable:true
            })
        })
        .catch((err)=>{
            console.log(err)
            toast({
                title:"unable to delete",
                status:"error",
                duration:3000,
                isClosable:true
            })
        })


    }



    return ( 
        <>
        <SimpleGrid columns={{base:2,md:3,xl:5}} p="3vw" gap={"20px"}>
        {
            data.map((eachone)=>{
                return (
                    <Card key={eachone.id} boxShadow="0 1px 1px black" borderTop={"5px solid blue"}>
                        <CardHeader display={"flex"} justifyContent={"space-between"} >

                        <Box>
                            <Text fontWeight="bolder">status:{eachone.status}</Text>
                            <Text fontWeight="bolder">priority:{eachone.priority}</Text>
                        </Box>
                 
                            <Button display={eachone.status ==="Pending"?"block":"none"} colorScheme="green" 
                            onClick={() => handleUpdatebtn({
                                id:eachone._id,
                                todo:eachone.Todo,
                                priority:eachone.priority,
                                dueDate:eachone.dueDate,
                                category:eachone.category
                            })}>mark completed</Button>

                        </CardHeader>

                        <CardBody pt="0">
                            <Text fontSize={"24px"} fontWeight="bold" noOfLines={[1, 2, 3]}>
                                {eachone.Todo}
                            </Text>
                        </CardBody>

                        <Divider />
            

                        <CardFooter display="flex" alignItems="center" justifyContent={"space-between"}>
                            <Text color="blue.700" fontWeight="bolder">
                                Due: {eachone.dueDate.slice(0,10)}
                                </Text>

                              <Button colorScheme="red" onClick={() => handleDeletebtn(eachone._id)}>Delete</Button>

                        </CardFooter>

                    </Card>
            )
        })
    }
    </SimpleGrid>
        </>
     );
}
 
export default ViewTodo;