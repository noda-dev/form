import React from 'react';
import './App.css';
import SimpleForm from './components/SimpleForm';

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
        <SimpleForm/>
      </div>
    )
  }

}

export default App;
