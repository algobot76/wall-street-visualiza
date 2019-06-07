import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    query: '',
    result: []
  };

  getInfo = () => {
    axios
      .get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data.data // MusicGraph returns an object named data,
          // as does axios. So... data.data
        });
      });
  };

  handleInputChange = () => {
    this.setState({
      query: this.searchbar.value
    });
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search ..."
          ref={input => (this.searchbar = input)}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default SearchBar;
