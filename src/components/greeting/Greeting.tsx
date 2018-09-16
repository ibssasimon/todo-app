import * as React from 'react';
import './Greeting.css';

export interface Props {
  name: string;
}

class Greeting extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const name = this.props.name;

    /**
     * Preventing null names as well as names that aren't of type string
     */
    if(name === '') {
      throw new Error("Is that really your name?");
    }

    return (
      <div className="greeting">
        <div className="container">
          <div className="primaryGreeting">
            Hello, {name}.
          </div>
          <div className="secondaryGreeting">
            What's on your mind?
          </div>
        </div>
      </div>
    );
  }
}

export default Greeting;