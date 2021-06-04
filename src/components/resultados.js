import React, {useState, useEffect} from 'react'

//Creamos la funcion que nos va retornar el link acortado

function Resultados(props) {

    const [allItems, setAllItems] = useState()
   
    let items = []

    //Utilizamos UseEffect para obtener los items 
    useEffect( () => {
        const allItems = Object.keys(localStorage)
        
        }
    ) 
       return (
        <div>
            {
                allItems === undefined ? '' :
                allItems.map((url) => (
                    <div 
                        className='results-container'>
                        <p 
                            value={url.shortUrl}
                            className='shortened-url'>
                            {url.shortUrl}
                        </p>
                    </div> 
                ))
            }
           
        </div>
    )
}

export default Resultados

