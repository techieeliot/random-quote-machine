import styled from 'styled-components'

const StyledMain = styled.main`

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
  }
  
  #quote-box {
    width: 50vw;
    margin: 0;
	padding: 3em;
	border-radius: 3em;
    border: 0.1em black solid;
    background: hotpink;
  }

.quote-author-box {
	border-radius: 2em;
	background: white;
	padding: 1em;
	border: 0.1em black solid;
  }

  #text, #author {
    background: white;
    font-size: x-large;
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
  
  #new-quote, #tweet-quote {
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
    #text, #author {
        font-size: x-large;
    }
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

   #text, #author {
    font-size: large;
   }
` 

export default StyledMain