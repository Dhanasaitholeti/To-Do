import { Card, CardBody, CardFooter, CardHeader, SimpleGrid } from "@chakra-ui/react";



const ViewTodo = ({data}) => {
    return ( 
        <>
        <SimpleGrid columns="4" p="2vw">
        {
            data.map((eachone)=>{
                return (
                    <Card>
                        <CardHeader>{eachone.dueDate}</CardHeader>
                        <CardBody>{eachone.Todo}</CardBody>
                        <CardFooter>
                            <p>{eachone.status}</p>
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