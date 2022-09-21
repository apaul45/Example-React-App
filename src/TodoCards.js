import TodoCard from "./TodoCard"

const TodoCards = ({todoList, deleteCallback, editCallback}) => {
    return(
        <ol className="todo-list">
            {
                /*
                This curly brace allows us to use what's called JSX (JavaScript Syntax)
                JSX basically lets us put javascript into HTML, which allows to 
                dynamically put content into the app.
                
                Note that we're passing in the callback from App.js into the TodoCard component.
                When TodoCard calls this callback, that causes TodoCards to then call it, and then finally
                App will call the function assigned to the callback.

                TLDR: You can pass in a component's props & callbacks to children component, with 
                the callbacks being propagated back to the parent that assigned them.
                */

                todoList.map((todo, index) => 
                    <TodoCard 
                    key={index}
                    todo={todo} 
                    index={index} 
                    deleteCallback={deleteCallback}
                    editCallback={editCallback}
                    />
                )
            }
        </ol>
    );
}

export default TodoCards;