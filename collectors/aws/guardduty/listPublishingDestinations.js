var AWS = require('aws-sdk');
var async = require('async');

module.exports = function(AWSConfig, collection, retries, callback) {
    var guardduty = new AWS.GuardDuty(AWSConfig);
    async.eachLimit(collection.guardduty.listDetectors[AWSConfig.region].data, 15, function(detectorId, cb) {
        collection.guardduty.listPublishingDestinations[AWSConfig.region][detectorId] = {};
        var params = {
            'DetectorId': detectorId
        };

        guardduty.listPublishingDestinations(params, function(err, data) {
            if (err) {
                collection.guardduty.listPublishingDestinations[AWSConfig.region][detectorId].err = err;
            }
            collection.guardduty.listPublishingDestinations[AWSConfig.region][detectorId].data = data;
        });

        cb();
    }, function(){
        callback();
    });
};
