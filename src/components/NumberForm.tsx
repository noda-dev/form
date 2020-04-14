import React from 'react';

type Props = {}

type State = {
  value: string
}

class NumberForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  //React.ChangeEventという型に<HTMLInputElement>という型を渡している？
  doChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value: string = e.target.value;
    const newValue: string = value.replace(/[^0-9]/g, '');
    this.setState({
      value: newValue
    })
  }

  doSubmit(e: React.FormEvent<HTMLFormElement>) {
    window.alert(Number(this.state.value));
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

export default NumberForm;
