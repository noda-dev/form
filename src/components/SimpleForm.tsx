import React from 'react';

type Props = {}

type State = {
  value: string
}

class SimpleForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  //React.ChangeEventという型に<HTMLInputElement>という型を渡している？
  doChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue: string = e.target.value;
    console.log(newValue);
    this.setState({
      value: newValue
    })
  }

  doSubmit(e: React.FormEvent<HTMLFormElement>) {
    window.alert(this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => {this.doSubmit(e)}}>
        <input type="text" value={this.state.value} onChange={(e) => {this.doChange(e)}}/>
        <button>送信</button>
      </form>
    )
  }

}

export default SimpleForm;
