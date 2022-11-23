import { useEffect, useReducer } from "react";
import { todoReducer } from "./TodoReducer";

const initialState = [];
let todosCount = 0, pendingTodosCount = 0;

const init = () => {    
    return JSON.parse ( localStorage.getItem( 'todos' ) ) || [];    
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));      
    }, [todos])
    
    const handleNewTodo = (todo) => {
        const action = {
            type:'[TODO] Add Todo',
            payload:todo,
        }

        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        // console.log(id);
        dispatch(
            {
                type: '[TODO] Remove Todo',
                payload: id
            }
        );
    };
    const handleToggleTodo = (id) => {
        // console.log(id);
        dispatch(
            {
                type: '[TODO] Toggle Todo',
                payload: id
            }
        );
    };

    return {
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todos,
        todosCount:todos.length,
        pendingTodosCount:todos.filter(todo => !todo.done).length ,
    };
}
