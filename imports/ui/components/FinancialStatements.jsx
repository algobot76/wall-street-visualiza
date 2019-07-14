import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding-top: 0.3rem !important;
  padding-bottom: 0.3rem !important;
`;

const StyledLink = styled.a`
  color: #ffffff;
  :hover {
    color: #ffffff;
  }
`;

function FinancialStatements({ symbol }) {
  return (
    <StyledSection className="section">
      <div className="container">
        <div className="content has-text-centered">
          <button className="button is-rounded is-dark">
            <span className="icon is-left">
              <FontAwesomeIcon icon={faFileCsv} />
            </span>
            <span>
              <StyledLink
                href={`https://financialmodelingprep.com/api/v3/financials/income-statement/${symbol}?datatype=csv`}
              >
                Financial Statements
              </StyledLink>
            </span>
          </button>
        </div>
      </div>
    </StyledSection>
  );
}

FinancialStatements.propTypes = {
  symbol: PropTypes.string
};

export default FinancialStatements;
