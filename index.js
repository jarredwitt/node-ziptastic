var request = require('browser-request');
var rsvp = require('rsvp');

module.exports = function(query) {
    var zip, country = 'US';

    if (typeof query === 'object') {
        if (!query.zip) {
            throw new Error('Must provide a zip');
        }

        zip = query.zip;
        country = query.country || country;
        country.toUpperCase();
    }
    else if (typeof query === 'number') {
        zip = query;
    }
    else {
        throw new Error('Numeric zipcode must be provided');
    }

    return new rsvp.Promise(function (resolve, reject) {
        var options = {
            url: 'https://zip.getziptastic.com/v2/' + country + '/' + zip
        };

        request.get(options, function(err, res, body){
            if(err){
                reject(err);
            }

            resolve(JSON.parse(body));
        });
    });
}