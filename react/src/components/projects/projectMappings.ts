// src/components/componentMappings.ts
import SpinTheBall from './spinTheBall/SpinTheBall.tsx';
import React from "react";
import Todo from "./todo/Todo.tsx";

// Define a mapping of project identifiers to components
const projectMappings: { [key: string]: React.ComponentType<any> } = {
    'spin-the-ball': SpinTheBall,
    'todo': Todo,
    'minigame': SpinTheBall,
};

export default projectMappings;
