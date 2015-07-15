import jsdom from 'jsdom';

function initDocument() {
  global.document = jsdom.jsdom('<!DOCTYPE html><html><head></head><body></body></html>');
  global.window = global.document.parentWindow;
  global.navigator = {userAgent: 'node.js'};
}

describe('Component', () => {
  let React, utils, Component;

  before(() => {
    initDocument();
  });

  beforeEach(() => {
    // remove react from the require cache
    for (var key in require.cache) {
      if (key.match(/\/node_modules\/react\//)) {
        delete require.cache[key];
      }
    }

    global.window.close();

    initDocument();

    React = require('react/addons');
    utils = React.addons.TestUtils;
    Component = require('../components/component');
  });

  it('can use refs without crashing', () => {
    utils.renderIntoDocument(<Component />);
  });

  it('can use refs without crashing', () => {
    utils.renderIntoDocument(<Component />);
  });
});
