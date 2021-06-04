import React, {useState, useRef, useEffect} from 'react'


function Resultados(props) {
    
    const [allItems, setAllItems] = useState()
   
    let items = []

    useEffect( () => {
        const allItems = Object.keys(localStorage)
        for(let i = 0; i < allItems.length; i++) {
            let parsedUrl = JSON.parse(localStorage.getItem(allItems[i]))
            items.push(parsedUrl)
        }
        setAllItems(items)

    }, [])

       return (
        <div>
            {
                allItems === undefined ? '' :
                allItems.map((url, index) => (
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

