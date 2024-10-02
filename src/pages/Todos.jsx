
import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";

const Todos = () =>{
    return(
        <div>
            <h1>ALL TODOS</h1>

            <div>
                <TodoTile title={'creating a react app'}/>
                <TodoTile title={'install tailwind css'}/>
                <TodoTile title={'commit code to github'}/>
                <TodoTile title={'host it on netlify'}/>
            </div>

            <Link to={'/add'}>Add Todo</Link>
        </div>

    );
}

export default Todos;