import React from "react";

import MessBox from "./MessBox";
import MyState from "./MyState";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aaa: 0,
      bbb: 0,
      mess: ""
    };
  }

  handleClickInc(e) {
    {
      /*alert(e.timeStamp+"に"+e.target.name+"を増やしました。");*/
    }
    {
      /*this.setState({[e.target.name]:this.state[e.target.name]+1,mess:"aaaを1増やしました。"});*/
    }
    const { name } = e.target;
    this.setState((prevState, props) => ({
      [name]: prevState[name] + 1,
      mess: "aaaを1増やしました。"
    }));
  }

  handleClickDec(e) {
    {
      /*alert(e.timeStamp+"に"+e.target.name+"減らしました。");*/
    }
    {
      /*this.setState({[e.target.name]:prevState[e.target.name]-1,mess:"aaaを1減らしました。"});*/
    }
    const { name } = e.target;
    this.setState((prevState, props) => ({
      [name]: prevState[name] - 1,
      mess: "aaaを1減らしました。"
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    {
      /*document.cookie = 'aaa='+this.state.aaa;*/
    }
    {
      /*document.cookie = 'bbb='+this.state.bbb;*/
    }
    {
      /*
            localStorage.setItem('aaa',this.state.aaa);
            localStorage.setItem('bbb',this.state.bbb);
*/
    }

    localStorage.setItem("aaa", this.state.aaa);
    localStorage.setItem("bbb", this.state.bbb);
  }

  render() {
    return (
      <div>
        <p>{localStorage.getItem("aaa")}</p>
        <p>{localStorage.getItem("bbb")}</p>
        <MessBox mess={this.state.mess} />
        <h1>aaa</h1>
        <MyState
          nor={this.state.aaa}
          name="aaa"
          inc_mess="+1"
          dec_mess="-1"
          onClickInc={e => this.handleClickInc(e)}
          onClickDec={e => this.handleClickDec(e)}
        />
        <h1>bbb</h1>
        <MyState
          nor={this.state.bbb}
          name="bbb"
          inc_mess="+1"
          dec_mess="-1"
          onClickInc={e => this.handleClickInc(e)}
          onClickDec={e => this.handleClickDec(e)}
        />
      </div>
    );
  }
}

export default App;
