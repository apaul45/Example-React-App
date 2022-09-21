import { useState } from "react";

function TodoCard({todo, index, deleteCallback, editCallback}) {

    //In functional components, we instead use hooks like useState,
    //useEffect, etc to handle maintaining a state and so on
    
    const [editing, setEditing] = useState(false);

    //Can't call state setter directly in jsx, would pass in and use handler functions instead 
    //Using state setters directly in jsx would cause a render to happen before the current rendering is done

    const handleChange = (field, value) => {
        todo[field] = value;
    }

    const handleFinishClick = () => {
        editCallback(todo, index);
        setEditing(false);
    }

    const handleEditClick = () => {
        setEditing(true);
    }

    //Don't need to add "this." to function in functional based react
    //For both functional and class based, don't need to add parenthesis to function calls if functions don't have any arguments

    //ALWAYS NEED arrow function whenever a function is declared with parenthesis (including passing in arguments)
    //If you declare with parenthesis but don't add in a arrow function, then the function gets called whenever the page loads
    //More about it here: https://codingstatus.com/react-event-handling/
    return (
        <li>
            {
                /* 
                
                This is the most complex use of JSX in this example app.
                Here, a state variable is being used to decide what to render 
                using a ternary operator. The value of the editing state variable 
                changes whenever the edit or finish (depends on 
                the value of editing) is clicked, resulting in a re-render and 
                change in the content displayed.

                TLDR: we're using a state variable to choose what to show, and any 
                changes to that variable causes different content to be shown.

                */
                editing 
                
                ? 
                <>
                    <input 
                    onChange={(event) => handleChange("name", event.target.value)}
                    />

                    <select 
                    defaultValue={todo.priority}
                    onChange={(event) => handleChange("priority", event.target.value)}
                    >
                        <option> Low </option>
                        <option> Medium </option>
                        <option> Hard </option>
                    </select>

                    <button onClick={handleFinishClick}>
                        Finish
                    </button>
                </>

                : 
                <>
                    {todo.name}

                    <b> ({todo.priority}) </b>

                    {
                    /* 
                    
                    If you try adding the button below, it'll result in an error 
                    because you didn't make handleEditClick an arrow function
                    
                    <button onClick={handleEditClick()}>
                        Edit
                    </button> 
                    
                    If you wanted to keep it as handleEditClick(), the correct code would be:

                    <button onClick={() => handleEditClick()}>
                        Edit
                    </button> 

                    This will make React only call handleEditClick() whenever the onClick event is triggered  
                    */
                    }
                    <button onClick={handleEditClick}>
                        Edit
                    </button>
                </>
            }

            <button onClick={() => deleteCallback(index)}>
                X
            </button>
        </li>
    );
}

export default TodoCard;