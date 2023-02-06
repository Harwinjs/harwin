import axios from "axios"

const baseUrl ="http://localhost:5000"

const getAllToDo = (setToDo) =>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log('data--->',data);
        setToDo(data)
    })
}
const addToDo = (text, setText, setToDo) => {
axios
.post(baseUrl+'/save', {text})
.then((data)=>{
    console.log(data);
    setText("")
    getAllToDo(setToDo)
})
}

const updateToDo = (toDoId, text, setToDo, setText, setisUpdating) => {
    axios
    .post(baseUrl+'/update', {_id:toDoId, text})
    .then((data)=>{
        console.log(data);
        setText("")
        setisUpdating(false)
        getAllToDo(setToDo)
        })
        .catch((err)=>console.log(err))
    }


    const doneToDo = () => {
        console.log("done");
        // axios
        // .post(baseUrl+'/update', {_id:toDoId, text})
        // .then((data)=>{
        //     console.log(data);
        //     getAllToDo(setToDo)
        //     doneToDo(true)
        //     })
        //     .catch((err)=>console.log(err))
        }


    const deleteToDo = (_id, setToDo) => {
        console.log("delete")
        axios
        .post(baseUrl+'/delete', {_id})
        .then((data)=>{
            getAllToDo(setToDo)
            })
            .catch((err)=>console.log(err))
        }



export {getAllToDo, addToDo, updateToDo, deleteToDo,doneToDo }