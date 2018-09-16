import * as React from 'react';
import './SearchBox.css';

export interface SearchProps {
  name: string;
}

export interface SearchState {
  query: string;
}
class SearchBox extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event:{target: {value: string}}) {
    const searchValue: string = event.target.value;
    console.log("A search with ", searchValue, " was inputted");
    this.setState({
      query: searchValue
    });
  }

  render() {
    return (
      <form className="searchBox">
        <label>{this.props.name}: </label>
        <textarea value={this.state.query} onChange={this.handleChange}></textarea>

      </form>
    );
  }
}

export default SearchBox;