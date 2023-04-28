import { Container, Spinner } from "@chakra-ui/react";

const Loading = () => {
    return ( 
        <>
        <Container h={"50vh"} display={"flex"} flexDir="column" alignItems="center" justifyContent="center">
            <Spinner 
            size="xl"
            color="blue"
            />
            <h3 >loading...</h3>
            </Container>
            </>
     );
}
 
export default Loading;