import React from 'react';
import './App.css';
import NumberForm from './components/NumberForm';

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
        <NumberForm/>
      </div>
    )
  }

}

export default App;
