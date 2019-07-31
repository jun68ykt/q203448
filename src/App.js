import React from "react";

import MessBox from "./MessBox";
import MyState from "./MyState";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [
        { name:'aaa', count:0, roletype: 'りんご' },
        { name:'bbb', count:0, roletype: 'みかん' },
        { name:'ccc', count:0, roletype: 'バナナ' }
      ],
      mess: ""
    };
  }

  handleClickInc(e) {
    const nextTypes = this.state.types.map(type => ({
      ...type,
      count: type.count + (type.name === e.target.name)
    }))
    this.setState({
      types: nextTypes,
      mess: `${e.target.name}を1増やしました。`
    });
  }

  handleClickDec(e) {
    const nextTypes = this.state.types.map(type => ({
      ...type,
      count: type.count - (type.name === e.target.name)
    }))
    this.setState({
      types: nextTypes,
      mess: `${e.target.name}を1減らしました。`
    });
  }

  componentDidUpdate(prevProps, prevState) {
    /* document.cookie = 'aaa='+this.state.aaa;*/
    /* document.cookie = 'bbb='+this.state.bbb;*/
    /*
       localStorage.setItem('aaa',this.state.aaa);
       localStorage.setItem('bbb',this.state.bbb);
    */

    this.state.types.forEach(type => {
      localStorage.setItem(type.name, type.count);
    })
  }

  render() {
    return (
      <div>
        {this.state.types.map(type => (<p>{localStorage.getItem(type.name)}</p>))}
        <MessBox mess={this.state.mess} />
        {
          this.state.types.map(type => (
            <div key={type.name}>
              <h1>{type.name}</h1>
              <MyState
                roletype={type.roletype}
                nor={type.count}
                name={type.name}
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
