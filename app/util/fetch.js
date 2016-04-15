//This is a utility for the fetch

import _fetch from 'isomorphic-fetch';

var fetch = {};
var init_setting = {
  mode: 'cors',
  cache: 'default',
  headers: {
    "Accept": "application/json, text/plain, */*",
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  }
}

fetch.get = function(url, token) {
  let setting = init_setting;
  setting.method= 'GET';
  return _fetch(url, setting).then(
    req => {
      return req.json();
    }
  );
}

module.exports = fetch;
