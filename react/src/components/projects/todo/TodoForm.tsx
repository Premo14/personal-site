import {Button, Container, Flex, Input, Spinner, Text} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {BACKEND_URL} from "../../../BACKEND_URL.tsx";

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState("");

    const queryClient = useQueryClient();

    const {mutate:createTodo,isPending:isCreating} = useMutation({
        mutationKey:["createTodo"],
        mutationFn:async(e:React.FormEvent)=>{
            e.preventDefault();
            try {
                const res = await fetch(BACKEND_URL + "/todos", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({body: newTodo})
                })
                const data = await res.json();

                if(!res.ok) {
                    throw new Error(data.error || "Something went wrong!");
                }

                setNewTodo("")
                return data
            } catch (error: any) {
                throw new Error(error)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["todos"]})
        },
        onError: (error:any) => {
            alert(error.message)
        }
    })

    return (
        <Container>
            <Text fontSize="2xl">Add Todo</Text>
            <form onSubmit={createTodo}>
                <Flex gap={2}>
                    <Input
                        type='text'
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        ref={(input) => input && input.focus()}
                    />
                    <Button
                         mx={2}
                        type='submit'
                        _active={{
                            transform: "scale(.97)",
                        }}
                    >
                        {isCreating ? <Spinner size={"xs"} /> : <IoMdAdd size={30} />}
                    </Button>
                </Flex>
            </form>
        </Container>
    );
};
export default TodoForm;
