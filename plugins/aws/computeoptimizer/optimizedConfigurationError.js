var async = require('async');
var helpers = require('../../../helpers/aws');

module.exports = {
    title: 'Optimized Configuration Error',
    category: 'Compute Optimizer',
    domain: 'Management and Governance',
    description: 'Ensure that Compute Optimizer is enabled to avoid any Opt In exception error.',
    more_info: 'AWS Compute Optimizer is a service that analyzes the configuration and utilization metrics of your AWS resources. It reports whether your resources are optimal, and generates optimization recommendations to reduce the cost and improve the performance of your workloads.',
    link: 'https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html',
    recommended_action: 'Enable Compute Optimizer Opt In options to avoid Opt In Required exception error',
    apis: ['ComputeOptimizer:getRecommendationSummaries'],

    run: function(cache, settings, callback) {
        var results = [];
        var source = {};
        var regions = helpers.regions(settings);

        async.each(regions.computeoptimizer, function(region, rcb){
            var getRecommendationSummaries = helpers.addSource(cache, source,
                ['computeoptimizer', 'getRecommendationSummaries', region]);

            if (!getRecommendationSummaries) return rcb();

            if (getRecommendationSummaries && getRecommendationSummaries.err && getRecommendationSummaries.err.code &&
                getRecommendationSummaries.err.code === 'OptInRequiredException'){
                helpers.addResult(results, 2, 
                    'Compute Optimizer is not enabled', region);
            } else if (getRecommendationSummaries.err || !getRecommendationSummaries.data || 
                      !getRecommendationSummaries.data.length) {
                helpers.addResult(results, 3,
                    'Unable to get recommendation summaries: ' + helpers.addError(getRecommendationSummaries), region);       
            } else {
                helpers.addResult(results, 0,
                    'Compute Optimizer is Enabled', region);
            }
          
            rcb();
        }, function(){
            callback(null, results, source);
        });
    }
};