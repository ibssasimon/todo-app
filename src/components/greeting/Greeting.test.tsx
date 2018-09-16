import * as React from 'react';
import * as enzyme from 'enzyme';
import Greeting from './Greeting';

describe('behavior for presenter component, greeter', ()=>{
  it('contains name property when initialized in constructor', ()=>{
    const greeting = enzyme.shallow(<Greeting name={'Simon'}/>);
    expect(greeting.find('.primaryGreeting').text()).toEqual('Hello, Simon.');
  });

  it('throws an error when name is not provided', ()=>{
    expect(() => {
      enzyme.shallow(<Greeting name=''/>);
    }).toThrow();
  });

  it('contains unaffected secondary greeting', ()=>{
    const greeting = enzyme.shallow(<Greeting name={'Nathaniel'}/>);
    expect(greeting.find('.secondaryGreeting').text()).toEqual('What\'s on your mind?');
  })
});