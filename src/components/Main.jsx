import React, {useState} from 'react'
import StyledMain from './StyledMain'
import quoteSource from '../quoteSource'
import Header from './Header'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Main = () => {
    const [quoteObj, setQuoteObj] = useState(quoteSource[1])
    console.log(quoteSource.length)
	const newQuote = () => { 
        const newIndex = Math.floor(Math.random() * quoteSource.length);
        console.log(newIndex);
        if(quoteSource[newIndex===undefined]){
            newIndex=0;
        }
		return setQuoteObj(quoteSource[newIndex]);
	}

	const getTextAndAuthor = () => {
		const encodedQuote = encodeURI(quoteObj.quote)
		const encodedAuthor = encodeURI(quoteObj.name)
		const encodedStr = `${encodedQuote}%20%0A%20%0A${encodedAuthor}%20%0A%20%0A%23lifequotes`
		return encodedStr;
    }
    
    return(
        <StyledMain id="main">
            <Header />
            <div id="quote-box">
                <section className="quote-author-box flex">
                    <article id="text">{quoteObj.quote}</article>
                    <article id="author">{`- ${quoteObj.name}`}</article>
                </section>
                <section className="button-box">
                    <button id="new-quote" onClick={newQuote}>New Quote</button>
                    {/* twitter.com/intent/tweet */}
                    <a href={`https://twitter.com/intent/tweet?text=${getTextAndAuthor()}`} id="tweet-quote" role="button" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />&nbsp; Tweet
                    </a>
                </section>
            </div>
            <Footer />
        </StyledMain>
    )
}

export default Main