import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const StyledFooter = styled.footer `

    * {
        background: white;
    }

    .duru-font {
        font-family: "Duru Sans", san-serif;
    }

    .footer-copyright, .footer-created-by {
        width: 49vw;
    }

    .footer-created-by {
        display: flex;
        justify-content: flex-end;
    }

    .flexbox {
        display: flex;
        flex-direction: row;
        align-content: space-between;
    }

    .quote-footer {
        width: 100vw;
    }

    @media (max-width: 768px) { 
        .quote-footer {
            font-size: larger;
        }
    }

    @media (max-width: 450px) {
        .quote-footer {
            width: 100vw;
        }
        .flexbox {
            display: flex;
            flex-direction: column;
        }

        .footer-copyright, .footer-created-by {
            width: 100vw;
            justify-content: center;
            text-align: center;
        }
    }
`

const Footer = () => {
    return(
        <StyledFooter>
                <section className='quote-footer flexbox'>
                    <article className='footer-copyright'>
                        <p>
                            &copy; Copyright {moment().format('YYYY')}<span> All Rights Reserved.</span>
                        </p>
                    </article>
                    <article className='footer-created-by'>
                        <p className='reduce-space-between'>Created with &#10084; by </p>
                        <span className='duru-font'>&nbsp;
                            <a href='https://techieeliot.com' target='_blank' rel="noopener noreferrer">
                                Eliot Sanford 
                            </a>
                        </span>  	
                    </article>
                </section>
        </StyledFooter>
    )
}

export default Footer