import React, { Component } from "react";
import Bundle from "./Bundle";

// import Test from "bundle-loader?lazy&name=[name]!./test";

const BeforeLoadComponent = props =>
  <div>
    before load {props.name}
  </div>;

class HomePage extends Component {
  render() {
    return (
      <div>
        <Bundle name="flypie"  beforeLoad={BeforeLoadComponent} />
      </div>
    );
  }
}

export default HomePage;