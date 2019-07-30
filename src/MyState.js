import React from "react";

class MyState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: new Date(),
      nor: 0,
      mess: ""
    };

    this.onSubmitInc = this.onSubmitInc.bind(this);
    this.onSubmitDec = this.onSubmitDec.bind(this);
  }

  onSubmitInc(e) {
    console.log(e.type);
    console.log(e.target.name);
    console.log(e.currentTarget);
    this.props.onClickInc(e);
    this.setState({ nor: this.state.nor + 1 });
    document.cookie = "nor=" + this.state.nor;
    //alert(document.cookie);
  }

  onSubmitDec(e) {
    console.log(e.type);
    console.log(e.target.name);
    console.log(e.currentTarget);
    this.props.onClickDec(e);
    this.setState({ nor: this.state.nor - 1 });
  }

  resetLs() {
    localStorage.setItem("aaa", 0);
    localStorage.setItem("bbb", 0);
  }

  render() {
    //document.cookie = 'nor='+this.state.nor;
    console.log(document.cookie);
    return (
      <div>
        <h1>{this.props.rolltype}</h1>
        <form action="" method="POST">
          <table>
            <tbody>
            <tr>
              <td>
                <input
                  className="button_inc"
                  type="button"
                  name={this.props.name}
                  value={this.props.inc_mess}
                  onClick={this.onSubmitInc}
                />
                {/*<input className ="button_inc" type="button" name={this.props.name} value={this.props.inc_mess} onClick={this.props.onClickInc}/>*/}
              </td>
              <td>
                <div className="nor_css">
                  <h1>{this.state.nor}</h1> 回<h2>{this.props.nor}</h2>回
                </div>
              </td>
              <td>
                <input
                  className="button_dec"
                  type="button"
                  name={this.props.name}
                  value={this.props.dec_mess}
                  onClick={this.onSubmitDec}
                />
                {/*<input className ="button_dec" type="button" name={this.props.name} value={this.props.dec_mess} onClick={this.props.onClickDec}/>*/}
              </td>
            </tr>
            </tbody>
          </table>
        </form>
        <hr />
        <button id="reset" onClick={this.resetLs}>
          ローカルストレージリセット
        </button>
      </div>
    );
  }
}

export default MyState;
