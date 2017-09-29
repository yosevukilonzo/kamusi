import React from 'react';
import styled from 'styled-components';
import FontAwesome from "react-fontawesome";

const FromDirection = styled.span`
  color: red;
`;
const ToDirection = styled.span`
  color: green;
`;
const ExchangeIcon = styled(FontAwesome)`
  color: black;
`;
const Header = ({ direction, onChangeDirection }) => {
  return (
    <div>
      {direction === "eng-swa" &&
        <div>
          <a onClick={onChangeDirection}>
            <h1>
              <FromDirection>English</FromDirection> <ExchangeIcon name="exchange" /> <ToDirection>Swahili</ToDirection>
            </h1>
          </a>
        </div>
      }
      {direction === "swa-eng" &&
        <div>
          <a  onClick={onChangeDirection}>
            <h1>
              <FromDirection>Kiswahili</FromDirection> <ExchangeIcon name="exchange" /> <ToDirection>Kiingereza</ToDirection>
            </h1>
          </a>
        </div>
      }
    </div>
  );
};

export default Header;