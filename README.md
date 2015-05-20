# node-ziptastic
ziptastic for node...

Promised based browserify node module for [Ziptastic](https://www.getziptastic.com/).

## Usage
```
var ziptastic = require('ziptastic');

var query = {
  zip: 12345,
  country: 'US'
};

ziptastic(query).then(function(result){
  \\result is an object containing city, country, county, state, state_short, postal_code
});
```

or

```
var ziptastic = require('ziptastic');

//country defaults to US when only zip is provided
ziptastic(12345).then(function(result){
  \\result is an object containing city, country, county, state, state_short, postal_code
});
```
