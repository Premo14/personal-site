import {Container, Stack, Text} from "@chakra-ui/react";
import React from "react";
import TodoForm from "./TodoForm.tsx";


const Todo: React.FC = () => {
    return(
        <Stack>
            <Container>
                <TodoForm />
                {/*<TodoList />*/}
            </Container>
        </Stack>
    )
}

export default Todo
