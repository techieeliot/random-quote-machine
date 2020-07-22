import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header `
    .quote-header {
        font-size: xxx-large;
    }

    @media (max-width: 450px) {
        .quote-header {
            font-size: xx-large;
        }
    }
`


const Header = () => {
    return(
        <StyledHeader>
            <section className="quote-header flex-column">
                <h1>Random Quote Machine</h1>
            </section>
        </StyledHeader>
    )
}

export default Header
