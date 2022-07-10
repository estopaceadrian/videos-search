import React from 'react';

class SearchBar extends React.Component {
  state = { keyword: '' };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.keyword}
              onChange={(event) =>
                this.setState({ keyword: event.target.value })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
