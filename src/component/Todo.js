import React,{ useState} from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';


const Todo = (props) => {

const [modalIsOpen, setModalIsOpen] = useState(false);

    const deleteHandler = () => {
        setModalIsOpen(true)
        console.log(`clicked`, props.title , modalIsOpen)
    }

    const closeModalHandler = () => {
        setModalIsOpen(false)
    }
    return (
        <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
            <button className="btn" onClick={deleteHandler}>Del</button>
        </div>
{modalIsOpen ? <Modal     onCancelBtn={closeModalHandler} onConfirmBtn={closeModalHandler}  /> : null}
{modalIsOpen && <Backdrop onBackdropClick={closeModalHandler}/>}
      
        </div>
    )
}

export default Todo
