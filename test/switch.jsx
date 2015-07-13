import jsdomify from 'jsdomify';
import assert from 'assert';

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

  it('can use refs without crashing', () => {
    const React = require('react/addons');
    const utils = React.addons.TestUtils;
    const Switch = require('../components/switch');

    const el = utils.renderIntoDocument(
      <Switch />
    );

    assert(el.refs.div);
  });

  it('can use refs without crashing', () => {
    const React = require('react/addons');
    const utils = React.addons.TestUtils;
    const Switch = require('../components/switch');

    const el = utils.renderIntoDocument(
      <Switch />
    );

    assert(el.refs.div);
  });

  after(() => {
    jsdomify.destroy();
  });
});
