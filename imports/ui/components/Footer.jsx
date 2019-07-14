import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  color: #f5f5f5;
`;

const StyledLink = styled.a`
  :hover {
    color: #f5f5f5;
  }
`;

function Footer() {
  return (
    <footer className="footer has-background-dark">
      <div className="content has-text-centered">
        <StyledParagraph>
          Copyright &copy; 2019, all rights reserved
        </StyledParagraph>
        <StyledParagraph>
          Built by{' '}
          <StyledLink href="https://github.com/algobot76">Kaitian</StyledLink>{' '}
          &amp;{' '}
          <StyledLink href="https://github.com/kristyyang">Kyo</StyledLink> and{' '}
          <StyledLink href="https://github.com/ericjXiao">Eric</StyledLink> with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </StyledParagraph>
      </div>
    </footer>
  );
}

export default Footer;
