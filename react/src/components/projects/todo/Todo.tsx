import {Container, Stack, Text} from "@chakra-ui/react";
import React from "react";


const Todo: React.FC = () => {
    return(
        <Stack>
            <Text fontSize="3xl" textAlign="center">Todo App Runs Here</Text>
            <Container>
                {/*<TodoForm />*/}
                {/*<TodoList />*/}
            </Container>
        </Stack>
    )
}

export default Todo
