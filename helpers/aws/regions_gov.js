// Source: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html

var regions = [
    'us-gov-west-1',
    'us-gov-east-1'
];

module.exports = {
    default: ['us-gov-west-1'],
    all: regions,
    optin: [],
    accessanalyzer: regions,
    acm: regions,
    apigateway: regions,
    athena: ['us-gov-west-1'],
    cloudfront: [],
    autoscaling: regions,
    iam: regions,
    route53: [],
    route53domains: [],
    s3: regions,
    s3control: regions,
    cloudtrail: regions,
    cloudwatchlogs: regions,
    cloudformation: regions,
    comprehend: ['us-gov-west-1'],
    configservice: regions,
    dlm: regions,
    dms: regions,
    dax: [],
    devopsguru: regions,
    dynamodb: regions,
    ec2: regions,
    ecr: regions,
    eks: [],
    efs: regions,
    elasticbeanstalk: regions,
    elastictranscoder: [],
    elb: regions,
    elbv2: regions,
    emr: regions,
    es: regions,
    eventbridge: regions,
    kinesis: [],
    firehose: [],
    glue: regions,
    kms: regions,
    vpc: regions,
    flowlogs: regions,
    rds: regions,
    redshift: regions,
    cloudwatch: regions,
    ecs: regions,
    sagemaker: [],
    secretsmanager: regions,
    ses: [],
    servicequotas: [],
    shield: [],
    sns: regions,
    sqs: regions,
    ssm: regions,
    // SSE via KMS is only supported in some regions
    // even though SQS is supported in all regions.
    sqs_encrypted: regions,
    sts: regions,
    support: [],
    transfer: [],
    lambda: regions,
    mwaa: regions,
    directconnect: regions,
    directoryservice: [],
    organizations: regions,
    guardduty: ['us-gov-west-1'],
    wafregional: [],
    wafv2: regions,
    workspaces: ['us-gov-west-1'],
    xray: [],
    resourcegroupstaggingapi: regions,
    codestar: regions,
    codebuild: regions,
    mq: regions,
    glacier: regions,
    codepipeline: ['us-east-1', 'us-east-2', 'us-west-1', 'us-west-2', 'ap-east-1', 'ap-south-1', 'ca-central-1', 'eu-central-1',
        'eu-west-1', 'eu-west-2', 'eu-west-3', 'eu-north-1', 'eu-south-1', 'ap-northeast-1',
        'ap-northeast-2', 'ap-southeast-1', 'ap-southeast-2', 'ap-south-1', 'ap-east-1',
        'sa-east-1'],
};