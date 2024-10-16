import SpinTheBall from './spinTheBall/SpinTheBall.tsx';
import React from "react";
import Todo from "./todo/Todo.tsx";
import MiniGames from './miniGames/MiniGames.tsx';

// Define a mapping of project identifiers to components
const projectMappings: { [key: string]: React.ComponentType<any> } = {
    'spin-the-ball': SpinTheBall,
    'todo': Todo,
    'mini-games': MiniGames,
};

export default projectMappings;
