import jsdomify from 'jsdomify';
import assert from 'assert';

var React, utils, Switch;

describe.only('Switch', () => {
  before(() => {
    jsdomify.create();
  });

  beforeEach(() => {
    // remove react from the require cache
    for (var key in require.cache) {
      if (key.match(/\/node_modules\/react\//)) {
        delete require.cache[key];
      }
    }

    jsdomify.clear();
  });

  after(() => {
    jsdomify.destroy();
  });

  it('defaults to off', () => {
    React = require('react/addons');
    utils = React.addons.TestUtils;
    Switch = require('../components/switch');

    const off = {el: <span>Off</span>, value: '0'};
    const on = {el: <span>On</span>, value: '1'};
    const el = utils.renderIntoDocument(
      <Switch off={off} on={on} name="state" />
    );

    assert(!el.state.state);
  });

  it('renders props correctly', () => {
    React = require('react/addons');
    utils = React.addons.TestUtils;
    Switch = require('../components/switch');

    const off = {el: <span>Off</span>, value: '0'};
    const on = {el: <span>On</span>, value: '1'};
    const el = utils.renderIntoDocument(
      <Switch off={off} on={on} name="state" state={true} />
    );

    assert.equal(React.findDOMNode(el.refs.value).textContent, 'On');
    assert.equal(el.refs.select.props.name, 'state');
    assert.equal(React.findDOMNode(el.refs.select).value, '1');
  });

  it('switches on click', () => {
    React = require('react/addons');
    utils = React.addons.TestUtils;
    Switch = require('../components/switch');

    const off = {el: <span>Off</span>, value: '0'};
    const on = {el: <span>On</span>, value: '1'};
    const el = utils.renderIntoDocument(
      <Switch off={off} on={on} name="state" />
    );
    const value = React.findDOMNode(el.refs.value);
    const select = React.findDOMNode(el.refs.select);

    assert.equal(value.textContent, 'Off');
    assert.equal(select.value, '0');
    utils.Simulate.click(React.findDOMNode(el.refs.link));
    assert.equal(value.textContent, 'On');
    assert.equal(select.value, '1');
  });
});
