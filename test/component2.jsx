import {domCreate, domDestroy} from '../helpers/dom';

describe('Component 2', () => {
  let React, utils, Component;

  before(() => {
    domCreate();

    React = require('react/addons');
    utils = React.addons.TestUtils;
    Component = require('../components/component');
  });

  it('can use refs and setState without crashing', () => {
    const el = utils.renderIntoDocument(<Component />);
    el.setState({foo: 'bar'});
  });

  after(() => {
    domDestroy();
  });
});
