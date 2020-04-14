import React from 'react';
import './App.css';
import MultipleForms from './components/MultipleForms';

type Props = {}

type State = {}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MultipleForms/>
      </div>
    )
  }

}

export default App;
