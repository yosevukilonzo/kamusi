import React, { Component } from "react";
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Input = styled.input`
  font-size: 1.5em;
`;
const Results = styled.div`
  font-size: .9em;
  height: 15px;
  margin: 10px 0;
`;
const SearchIcon = styled(FontAwesome)`
  font-size: 1.5em !important;
  position: relative;
  left: -27px;
  opacity: .5
`;
class Search extends Component {
  handleChange = event => {
    this.props.onSearch(event.target.value);
  };

  render() {
    const { searching, results } = this.props;
    return (
      <d>
        <Input
          autoFocus
          type="text"
          onChange={this.handleChange}
          placeholder="Basic search"
        />
        <SearchIcon name="search" />
        <Results className="results">{searching && results.toLocaleString() + " results"}</Results>
      </d>
    );
  }
}

export default Search;
