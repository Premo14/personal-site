import { Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import TodoItem from "./TodoItem.tsx";
import { useQuery } from "@tanstack/react-query";

// create each var for env
const PROTOCOL = String(process.env.PROTOCOL)
const BASE_URI = String(process.env.BASE_URI)
const BACKEND_PORT = String(process.env.BACKEND_PORT)

const BASE_URL = `${PROTOCOL}://${BASE_URI}:${BACKEND_PORT}/api`;

export type Todo = {
    id: number;
    body: string;
    completed: boolean;
}

const TodoList = () => {
    const { data: todos = [], isLoading, error } = useQuery<Todo[]>({
        queryKey: ["todos"],
        queryFn: async () => {
            const res = await fetch(`${BASE_URL}/todos`);
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong!");
            }
            return data;
        },
    });

    if (error) {
        return (
            <Flex justifyContent={"center"} my={4}>
                <Text color="red.500">Failed to load tasks. Please try again later.</Text>
            </Flex>
        );
    }

    return (
        <>
            <Text fontSize={"4xl"} textTransform={"uppercase"} fontWeight={"bold"}
                  textAlign={"center"} my={2}
                  bgGradient='linear(to-l, #0b85f8, #00ffff)'
                  bgClip='text'
            >
              Today&amp;aposs Tasks
            </Text>
            {isLoading && (
                <Flex justifyContent={"center"} my={4} overflow="hidden">
                    <Spinner size={"xl"}/>
                </Flex>
            )}
            {!isLoading && todos.length === 0 && (
                <Stack alignItems={"center"} gap='3'>
                    <Text fontSize={"xl"} textAlign={"center"}>
                        All tasks completed! 🤞
                    </Text>
                    <img src='/projects/todoApp/go.png' alt='Go logo' width={70} height={70} />
                </Stack>
            )}
            <Stack gap={3}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </Stack>
        </>
    );
};

export default TodoList;
