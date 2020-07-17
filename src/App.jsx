import React from "react";
import styled from 'styled-components';

const Main = styled.main`
 {
	width: 100vw;
	height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
  }
  
  .quote-author-box {
    height: 30vh;
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
  
  }
  
  .button-box button, a {
    width: 10vw;
    height: 10vh;
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
  
  }
  
  .button-box button::selection, a::selection {
    background: #e7e8e9;
    text-shadow: none;  
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
  
  return(
    <Main id="main">
		<div id="quote-box">
			<header className="quote-header flex-column">
			<h1>Random Quote Machine</h1>
			</header>
			<section className="quote-author-box flex">
			<article id="text">Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.</article>
			<article id="author">- Francis of Assisi</article>
			</section>
			<section className="button-box">
			<button id="new-quote">New Quote</button>
			<a href="/tweet" id="tweet-quote" role="button">Tweet</a>
			</section>
		</div>
      
    </Main>
  );
}

export default App