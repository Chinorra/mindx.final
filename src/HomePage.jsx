import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HomePage() {

    const [quoteList, setQuoteList] = useState([])
    const [quote, setQuote] = useState([])

    useEffect(() => {
        getQuote().then(data => {
            const results = data.results
            setQuoteList(results)
        })
    },[])

    

async function getQuote() {
    const respone = await axios.get('https://api.quotable.io/quotes')
    const result = respone.data

    return result
}

// Random a quote
const handleRandomQuote = () => {
setQuote([quoteList[Math.floor(Math.random() * quoteList.length)]])
}


// render list of quote with the same author
// none of the quotes has them same author so it looks like doesn't work 
const handleQuoteList = (authorName) => {
        setQuote(quoteList.filter((item) => item.author === authorName))
}


  return (
    <div className='content'>
        <button onClick={handleRandomQuote}>Random Quote</button>
        {
            quote.map((item) => {
                return (
                    <div key={item._id} className='item'>
                        <p>{item.content}</p>
                        <button className='author' onClick={() => handleQuoteList(item.author)}>
                            <span className='author-content'>
                            <h4>{item.author}</h4>
                            {item.tags.map((tag, i) => <p className='tag' key={i}>{tag}</p>)}                          
                            </span>
                            </button>
                    </div>
                )
            })
        }

    </div>
  )
}

export default HomePage

