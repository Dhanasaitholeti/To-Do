import { Flex, Button, HStack, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigator  = useNavigate();
    return ( 
        <Flex boxShadow="0 1px 3px black" justifyContent="space-around">
            <Heading>ToDo</Heading>
            <HStack>
                <Button onClick={()=>navigator('/addtodo')}>Add Todo</Button>
            </HStack>
        </Flex>
     );
}
 
export default Navbar;