import React from "react";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {

}

export const Modal = ({ open, children }) =>{
    if(!open) return null;


    return(
        <div className='OVERLAY_STYLES' >
            <div style={MODAL_STYLES} >
                {children}
            </div>
        </div>
    )
}