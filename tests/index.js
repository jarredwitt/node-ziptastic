var test = require('tape');
var ziptastic = require('../index');

test('Try with zip and country object', function(t){
    var query = {
        zip: 73013,
        country: 'US'
    };

    ziptastic(query).then(function(result){
        t.equal(result.city.toLowerCase(), 'edmond');
        t.end();
    }).catch(function(err){
        throw new Error(err);
    });
});

test('Try with just zip', function(t){
   ziptastic(73013).then(function(result){
       t.equal(result.city.toLowerCase(), 'edmond');
       t.end();
   }).catch(function(err){
       throw new Error(err);
   });
});

test('Make sure error is thrown when no zip supplied', function(t){
    t.throws(function(){
        ziptastic();
    }, Error);
    t.end();
});