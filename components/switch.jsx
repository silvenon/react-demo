import React from 'react/addons';

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    off: React.PropTypes.shape({
      el: React.PropTypes.node,
      value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
      ])
    }).isRequired,
    on: React.PropTypes.shape({
      el: React.PropTypes.node,
      value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
      ])
    }).isRequired,
    state: React.PropTypes.bool
  },

  getInitialState() {
    return {
      state: this.props.state || false
    };
  },

  handleClick(event) {
    event.preventDefault();
    this.setState({
      state: !this.state.state
    });
  },

  render() {
    let value;

    if (this.state.state) {
      value = (
        <span className="switch-value-on">
          {this.props.on.el}
        </span>
      );
    } else {
      value = (
        <span className="switch-value-off">
          {this.props.off.el}
        </span>
      );
    }

    return (
      <div className="switch">
        <a
          ref="link"
          className="switch-link"
          href="#"
          onClick={this.handleClick}>

          <span ref="value" className="switch-value">
            {value}
          </span>

        </a>

        <select
          ref="select"
          className="switch-select"
          name={this.props.name}
          value={this.state.state ? this.props.on.value : this.props.off.value}>
          <option value={this.props.off.value}>{this.props.off.value}</option>
          <option value={this.props.on.value}>{this.props.on.value}</option>
        </select>
      </div>
    );
  }
});
