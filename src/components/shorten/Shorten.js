import React, {useState, useEffect, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './shorten.css'
import {trackPromise} from 'react-promise-tracker'


//API SHORTEN 
function Shorten() {
     
    // inputs 
    const [userInput, setUserInput] = useState('')
    const [redInput, setRedInput] = useState(false)



    function handleChange(e) {
        const {value} = e.target
        setUserInput(value)

    }

    function handleSubmit(e) {
        e.preventDefault()

        if(userInput === '') {
            setRedInput(true)
        } else {
            setRedInput(false)
            trackPromise(
                fetch(`https://api.shrtco.de/v2/shorten?url=${userInput}`)
                .then(res => res.json())
                .then(data => {

                    localStorage.setItem(uuidv4(), JSON.stringify({
                        original: userInput,
                        shortUrl: data.result.full_short_link
                    }))

                    window.location.reload(true)
                })
                .catch((error) => {
                    console.log(error)
                })
            )
        }
    }
    
    return (
        <>
            <div className='shorten-outer-container'>
                <div className='shorten-section'>
                    <div className='shorten-section-bg'></div>
                    <form 
                        className='form'
                        onSubmit={handleSubmit}
                    >
                        <input 
                        className={redInput ? 'user-input active' :'user-input' }
                        type="text"
                        placeholder="shorten link at..."
                        id="shortenInput"
                        onChange={handleChange}     
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

