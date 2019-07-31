import React from "react";

import MessBox from "./MessBox";
import MyState from "./MyState";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: {
        ccc: 0,
        aaa: 0,
        bbb: 0
      },
      mess: ""
    };
  }

  handleClickInc(e) {
    const { name } = e.target
    const { types } = this.state
    this.setState({
      types: { ...types, [name]: types[name] + 1 },
      mess: `${name}を1増やしました。`
    });
  }

  handleClickDec(e) {
    const { name } = e.target
    const { types } = this.state
    this.setState({
      types: { ...types, [name]: types[name] - 1 },
      mess: `${name}を1減らしました。`
    });
  }

  componentDidUpdate(prevProps, prevState) {
    /* document.cookie = 'aaa='+this.state.aaa;*/
    /* document.cookie = 'bbb='+this.state.bbb;*/
    /*
       localStorage.setItem('aaa',this.state.aaa);
       localStorage.setItem('bbb',this.state.bbb);
    */

    Object.entries(this.state.types).forEach(([name, count]) => {
      localStorage.setItem(name, count);
    })
  }

  render() {

    const sortedTypes = Object.entries(this.state.types)
                              .sort((e1, e2) => e1[0].localeCompare(e2[0]))

    return (
      <div>
        {sortedTypes
          .map(([name]) =>
            <p key={name}>{name}: {localStorage.getItem(name)}</p>
          )}
        <MessBox mess={this.state.mess} />
        {
          sortedTypes.map(([name, count]) => (
            <div key={name}>
              <h1>{name}</h1>
              <MyState
                roletype={name}
                nor={count}
                name={name}
                inc_mess="+1"
                dec_mess="-1"
                onClickInc={e => this.handleClickInc(e)}
                onClickDec={e => this.handleClickDec(e)}
              />
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
