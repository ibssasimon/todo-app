import * as React from 'react';
import * as enzyme from 'enzyme';
import SearchBox from './SearchBox';

describe('state of component', ()=>{
  it('initialize with empty query in state', ()=>{
    const search = enzyme.shallow(<SearchBox name="Item"/>);
    expect(search.state()).toEqual({
      query: ''
    });
  });

  it('autoupdates state with user search', ()=>{
    const search = enzyme.shallow(<SearchBox name="Item"/>);
    search.simulate('change', { target: { value: 'Clean the house' } });
    search.setState({
      query: 'Clean the house',
    })
  });
});