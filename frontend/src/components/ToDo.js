import React from "react";

import {BiEdit} from "react-icons/bi"
import {AiFillDelete, AiFillCheckSquare} from "react-icons/ai"

//asdas
const ToDo =({text, updateMode, deleteToDo, doneToDo}) => {
    return(
        <div className="todo">
            <div className="text"> {text}</div>
            <div className="icons">
                <BiEdit className="icon" onClick={updateMode} />
                <AiFillDelete className="icon" onClick={deleteToDo} />
                <AiFillCheckSquare className="icon" onClick={doneToDo} />
            </div>
        </div>
    )
}

export default ToDo