import React from "react";

class MessBox extends React.Component {
  render() {
    return (
      <div id="mess_box" class="mess_box">
        {this.props.mess}
      </div>
    );
  }
}

export default MessBox;
