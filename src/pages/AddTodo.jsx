import { useNavigate } from "react-router-dom";

const AddTodo = () => {
    const navigate = useNavigate();


    const saveTodo = (event) => {
        event.preventDefault();
        //  post data to todo 
        //  goto the homepage
        navigate('/');
    }

    return (
        <div>
            <h1>ADD A NEW TODO</h1>
            <form onSubmit={saveTodo}>
                <input type="text" placeholder="enter your task" required />
                <button type="submit">submit</button>
            </form>

        </div>
    );
}

export default AddTodo;