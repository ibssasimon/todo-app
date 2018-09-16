import * as React from 'react';

export interface SearchProps {
  querySearch: string;
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

  handleChange(event: React.FormEvent) {
    const searchValue: string = event.currentTarget.value;

    this.setState({
      query: searchValue
    });
  }

  render() {
    return (
      <form>
        <label>
          Item: 
          <input type="text" value={this.state.query} onChange={this.handleChange}></input>
        </label>

      </form>
    );
  }
}

export default SearchBox;