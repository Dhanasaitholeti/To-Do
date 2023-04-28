import { Flex, Button, HStack, Heading, Box } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie"

const Navbar = () => {
    const location = useLocation();

    const [Cookie,setCookie,removeCookie] = useCookies(['jwtToken']);

    const handleLogout = () => {
        removeCookie('jwtToken');
        navigator('/')
    } 


    const navigator  = useNavigate();
    return ( 
        <Flex h="max-content" boxShadow="0 1px 3px black" justifyContent="space-around" p="10px">
            <Box display="flex" alignItems="center">
            <Heading color="blue.300">ToDo</Heading>
            </Box>
            {
                !(location.pathname == '/' || location.pathname == '/signup') && 
                <HStack>
                <Button onClick={()=>navigator('/addtodo')} colorScheme="blue">Add Todo</Button>
                <Button onClick={handleLogout} colorScheme="blue">Logout</Button>
            </HStack>
            }
        </Flex>
     );
}
 
export default Navbar;