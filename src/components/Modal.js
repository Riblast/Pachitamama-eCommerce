import PropTypes from 'prop-types'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Modal = ({children, state, setState}) => {

    return (
        <>
            {state &&
            <div className='w-screen h-screen fixed top-0 left-0 bg-opacity-50 bg-black p-10 flex items-center justify-center'>
                <div className='w-96 bg-slate-100 relative p-5'>
                    <div className='flex items-center justify-between mb-5 border-b-2 border-blue-400'>
                        <h1>Finalizar Compra</h1>
                        <button onClick={() => setState(false)}><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                    {children}
                </div>
            </div>
            }
        </>
    )
}

Modal.propTypes = {
    children: PropTypes.any,
    setState: PropTypes.func,
    state: PropTypes.any
}

export default Modal