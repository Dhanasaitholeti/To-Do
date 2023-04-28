import { Card, CardBody, CardFooter, CardHeader, SimpleGrid } from "@chakra-ui/react";



const ViewTodo = ({data}) => {
    return ( 
        <>
        <SimpleGrid columns={{base:2,md:3,xl:4}} p="3vw" gap={"20px"}>
        {
            data.map((eachone)=>{
                return (
                    <Card key={eachone.id} boxShadow="0 1px 1px black" borderTop={"5px solid blue"}>
                        <CardHeader>{eachone.dueDate.slice(0,10)}</CardHeader>
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