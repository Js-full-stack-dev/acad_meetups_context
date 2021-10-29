import React from 'react'

const Backdrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onBackdropClick}></div>
    )
}

export default Backdrop
