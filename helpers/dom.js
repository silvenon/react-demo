import jsdom from 'jsdom';

export function domCreate() {
  global.document = jsdom.jsdom('<!DOCTYPE html><html><head></head><body></body></html>');
  global.window = global.document.parentWindow;
  global.navigator = {userAgent: 'node.js'};
}

export function domDestroy() {
  global.window.close();
  delete global.document;

  // remove react from the require cache
  for (var key in require.cache) {
    if (key.match(/\/node_modules\/react\//)) {
      delete require.cache[key];
    }
  }
}
