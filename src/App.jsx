import React from "react";
import Header from "./components/Header"
import styled from 'styled-components';

const Main = styled.main`

html, body, div, span, applet, object,
iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
pre, a, abbr, acronym, address, big, cite,
code, del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, b,
u, i, center, dl, dt, dd, ol, ul, li, fieldset,
form, label, legend, table, caption, tbody,
tfoot, thead, tr, th, td, article, aside,
canvas, details, embed, figure, figcaption,
footer, header, hgroup, menu, nav, output, ruby,
section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

 {
	width: 100vw;
	height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-content: stretch;
  }

  * {
    font-size: 1rem;
	background: hotpink;
  }
  
  #quote-box {
    width: 50vw;
    margin: 0;
	padding: 3em;
	border-radius: 3em;
	border: 0.1em black solid;
  }

.quote-author-box {
	border-radius: 2em;
	background: white;
	padding: 1em;
	border: 0.1em black solid;
  }

  #text, #author {
	background: white;
  }

  #author {
	  text-align: right;
  }
  
  .quote-author-box {
	height: 30vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
  }

  .quote-header {
	font-size: xx-large;
	font-family: monospace;
}

.quote-header h1 {
	background: white;

}
  
  .flex-column {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;
  }
  
  .button-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;
	font-size: 100%;  
	margin: 2vh;
  }
  
  .button-box button, a {
    width: 20vw;
    height: 5vh;
    font-family: BrandonText-Medium,sans-serif;
    border: 1px solid #515762;
    text-align: center;
    line-height: 1.15;
    margin: 0;
    overflow: visible;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    align-items: flex-start;
    cursor: default;
    background-color: white;
    padding: 0.1em 0.3em;
	border-radius: 3em;
	font: 400 13.3333px Arial;
	box-sizing: border-box;
	appearance: button;
	text-transform: none;
	text-deocoration: none;
	text-vertical-align: center;
	padding: 0.75em;
  }
  
  .button-box button::selection, a::selection {
    background: #e7e8e9;
    text-shadow: none;  
  }

  @media (max-width: 768px) { 

	.button-box {
		display: flex;
		flex-direction: column;
		height: 15vh;
	}
	}
	  
	#new-quote, #tweet-quote {
		width: 30vw;
    	font-size: larger;
	}
   }

   @media (max-width: 450px) {
	#new-quote, #tweet-quote {
		width: 40vw;
    	font-size: smaller;
   }
`


const App = () => {
  const quoteSource=[
		{
			quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			name:"Francis of Assisi"
	    },
	    {
	    	quote:"Believe you can and you're halfway there.",
	    	name:"Theodore Roosevelt"
	    },
	    {
	    	quote:"It does not matter how slowly you go as long as you do not stop.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name:"Thomas A. Edison"
	    },
	    {
	    	quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Don't watch the clock; do what it does. Keep going.",
	    	name:"Sam Levenson"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"Expect problems and eat them for breakfast.",
	    	name:"Alfred A. Montapert"
	    },
	    {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	name:"Arthur Ashe"
	    },
	    {
	    	quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
	    	name:"Samuel Beckett"
	    },
	    {
	    	quote:"Be yourself; everyone else is already taken.",
	    	name:"Oscar Wilde"
	    },
	    {
	    	quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
	    	name:"Albert Einstein"
	    },
	    {
	    	quote:"Always remember that you are absolutely unique. Just like everyone else.",
	    	name:"Margaret Mead"
	    },
	    {
	    	quote:"Do not take life too seriously. You will never get out of it alive.",
	    	name:"Elbert Hubbard"
	    },
	    {
	    	quote:"People who think they know everything are a great annoyance to those of us who do.",
	    	name:"Isaac Asimov"
	    },
	    {
	    	quote:"Procrastination is the art of keeping up with yesterday.",
	    	name:"Don Marquis"
	    },
	    {
	    	quote:"Get your facts first, then you can distort them as you please.",
	    	name:"Mark Twain"
	    },
	    {
	    	quote:"A day without sunshine is like, you know, night.",
	    	name:"Steve Martin"
	    },
	    {
	    	quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
	    	name:"Ellen DeGeneres"
	    },
	    {
	    	quote:"Don't sweat the petty things and don't pet the sweaty things.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Always do whatever's next.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Atheism is a non-prophet organization.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	name:"Dalai Lama"
		}
		
	];
	const tweetQuote = () => {
		return console.log("Tweet")
	}
	
  return(
    <Main id="main">
		<Header />
		<div id="quote-box">
			<section className="quote-author-box flex">
				<article id="text">Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.</article>
				<article id="author">- Francis of Assisi</article>
			</section>
			<section className="button-box">
				<button id="new-quote">New Quote</button>
				{/* twitter.com/intent/tweet */}
				<a href="https://twitter.com/intent/tweet" id="tweet-quote" role="button">Tweet</a>
			</section>
		</div>
      
    </Main>
  );
}

export default App
