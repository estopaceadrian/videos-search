import React from 'react';

class SearchBar extends React.Component {
  state = { keyword: '' };

  onInputChange = (event) => {
    this.setState({ keyword: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.keyword}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
