import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Heading, SimpleGrid, Text } from "@chakra-ui/react";


const ViewTodo = ({data}) => {
    return ( 
        <>
        <SimpleGrid columns={{base:2,md:3,xl:4}} p="3vw" gap={"20px"}>
        {
            data.map((eachone)=>{
                return (
                    <Card key={eachone.id} boxShadow="0 1px 1px black" borderTop={"5px solid blue"}>
                        <CardHeader>
                            <Text fontWeight="bolder">status:{eachone.status}</Text>
                            <Text fontWeight="bolder">priority:{eachone.priority}</Text>
                        </CardHeader>

                        <CardBody pt="0">
                            <Text fontSize={"24px"} fontWeight="bold" noOfLines={[1, 2, 3]}>
                                {eachone.Todo}
                            </Text>
                        </CardBody>

                        <Divider />
                        <CardFooter>
                            <Text color="blue.700" fontWeight="bolder">
                                Due: {eachone.dueDate.slice(0,10)}
                                </Text>
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