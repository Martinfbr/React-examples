import React, {useState, useEffect, useContext} from 'react'
import './shorten.css'

function Shorten() {

    return (
        <>
            <div className='shorten-outer-container'>
                <div className='shorten-section'>
                    <div className='shorten-section-bg'></div>
                    <form 
                        className='form'
                     
                    >
                        <input 
                            className={'user-input active'}
                            type="text" 
                            placeholder='Shorten a link here...'
                            name='userInput'
                         
                        />

                        {
                             <p className='error-message'>Please add a link</p> 
                        }

                        <button 
                            id='shorten-btn'
                        >
                                Shorten it!
                        </button>
                      
                    </form>
                </div>
            </div>
        </>

    )
}

export default Shorten

