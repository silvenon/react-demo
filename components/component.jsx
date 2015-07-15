import React from 'react/addons';

export default React.createClass({
  render() {
    return <div ref="div">
      When this HTML innerText is here, the tests fail
      {this.state && this.state.foo}
    </div>;
  }
});
