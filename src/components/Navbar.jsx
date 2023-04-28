import { Flex, Button, HStack, Heading, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie"

const Navbar = () => {

    const [Cookie,setCookie,removeCookie] = useCookies(['jwtToken']);

    const handleLogout = () => {
        removeCookie('jwtToken');
        navigator('/')
    } 


    const navigator  = useNavigate();
    return ( 
        <Flex h="max-content" boxShadow="0 1px 3px black" justifyContent="space-around" p="10px">
            <Box display="flex" alignItems="center">
            <Heading>ToDo</Heading>
            </Box>
            <HStack>
                <Button onClick={()=>navigator('/addtodo')}>Add Todo</Button>
                <Button onClick={handleLogout}>logout</Button>
            </HStack>
        </Flex>
     );
}
 
export default Navbar;