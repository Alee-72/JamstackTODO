
import React from "react";
import { Container, Heading, Button, Flex } from "theme-ui";


export default props => {
  

  return (
    <Container>
      <Flex >
       
      
      </Flex>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Get Stuff Done</Heading>
        <Button
          sx={{ marginTop: 2 }}
        
        >
          Log In
        </Button>
      </Flex>
    </Container>
  );
};