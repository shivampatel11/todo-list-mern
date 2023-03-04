import react, { useState, useEffect } from 'react';
import axios from 'axios';
import { Posttodo, Gettodo, Getsingletodo, Deletetodoapi, Updatetodoapi } from '../service/api';
import { useParams } from 'react-router-dom';
import './todo.css'

export default function Todoapp() {
    const [text, setText] = useState({
        text: ""
    });

    const { itemid } = useParams()
    const [todo, setTodo] = useState([]);
    const [display, setdisplay] = useState(true)
    //const {id} =useParams();

    useEffect(() => {
        loadtodos()
    }, [])

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name
        setText({ ...text, [name]: value })
    }

    const Addtodo = async () => {
        await Posttodo(text);
        loadtodos();
        setText({ text: "" })
    }

    const loadtodos = async () => {
        let res = await Gettodo();
        setTodo(res.data)
    }

    const Loadtodo = async (id) => {
        let data = await Getsingletodo(id);
        console.log(data)
        setText(data.data[0])
        setdisplay(false)
    }

    const Updatetodo = async (id, text) => {
        await Updatetodoapi(id, text);
        loadtodos()
        setdisplay(true)
    }

    const deletetodo = async (id) => {
        await Deletetodoapi(id)
        loadtodos()
    }


    return (
        <div className="container">
            <div className="todotext">
                <input type="text" name="text" value={text.text} placeholder="write a text...." onChange={(e) => handleChange(e)} />
                {
                    display ? <button className="btn" onClick={Addtodo}>Add</button> :
                        <button className="btn" onClick={() => Updatetodo(text._id, text)}>Update</button>
                }
            </div>
            <div className="todoitem">
                {
                    todo.map((item) => {
                        return (
                            <div key={item._id}>
                                <div >{item.text}</div>
                                <div>
                                    <button className="btn" onClick={() => Loadtodo(item._id)}>Update</button>
                                    <button className="btn" onClick={() => deletetodo(item._id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

