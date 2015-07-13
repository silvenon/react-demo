import jsdomify from 'jsdomify';
import assert from 'assert';

describe('Component', () => {
  before(() => jsdomify.create());
  beforeEach(() => jsdomify.clear());

  it('is able to set state without crashing', () => {
    const React = require('react/addons');
    const utils = React.addons.TestUtils;

    function getTestFactory(Component) {
      return React.createFactory(React.createClass({
        getInitialState() {
          return this.props;
        },

        render() {
          console.log(this.state);
          return (
            <Component ref="el"
              {...this.props}
              {...this.state} />
          );
        }
      }));
    }

    const factory = getTestFactory(React.createClass({
      getDefaultProps() {
        return {num: 0}
      },

      render() {
        return <div>{this.props.num}</div>;
      }
    }));

    const parent = utils.renderIntoDocument(factory());
    const node = React.findDOMNode(parent);

    assert.equal(node.textContent, '0');
    parent.setState({num: 5});
    assert.equal(node.textContent, '5');
  });

  after(() => jsdomify.destroy());
});
