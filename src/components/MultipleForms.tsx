import React from 'react';

type Props = {}

type State = {
  name: string,
  age: string,
  hobby: string
}

class MultipleForms extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      hobby: ''
    };
  }

  doChange(e: React.ChangeEvent<HTMLInputElement>) {
    const key: string = e.target.name;
    const value: string = (key === 'age') ? e.target.value.replace(/[^0-9]/g, '') : e.target.value;
    //ここ改善できないかな〜
    if(key === 'name') {
      this.setState({
        name: value
      })
    } else if(key === 'age') {
      this.setState({
        age: value
      })
    } else {
      this.setState({
        hobby: value
      })
    }
  }

  doSubmit(e: React.FormEvent<HTMLFormElement>) {
    window.alert(this.state.name);
    window.alert(this.state.age);
    window.alert(this.state.hobby);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => {this.doSubmit(e)}}>
        名前:<br/>
        <input type="text" name="name" value={this.state.name} onChange={(e) => {this.doChange(e)}}/><br/>
        年齢:<br/>
        <input type="text" name="age" value={this.state.age} onChange={(e) => {this.doChange(e)}}/><br/>
        趣味:<br/>
        <input type="text" name="hobby" value={this.state.hobby} onChange={(e) => {this.doChange(e)}}/><br/>
        <button>送信</button>
      </form>
    )
  }

}

export default MultipleForms;
