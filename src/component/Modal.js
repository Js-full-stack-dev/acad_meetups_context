import React from 'react'

const Modal = (props) => {

    function cancelHandler()  {
        props.onCancelBtn();
    }

    function DeleteHandler()  {
        props.onConfirmBtn();
    }

    return (
        <div className="modal">
<h2>are you sure? </h2>
<button className="btn btn--alt" onClick={cancelHandler}>cancel</button>
<button className="btn" onClick={DeleteHandler}>Delete</button>
        </div>
    )
}

export default Modal
