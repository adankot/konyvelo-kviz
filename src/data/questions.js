"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = void 0;
exports.questions = [
    {
        id: 1,
        question: 'What is the maximum size of an AWS Lambda deployment package?',
        answers: [
            { id: 1, answer: '50 MB', correct: false },
            { id: 2, answer: '100 MB', correct: true },
            { id: 3, answer: '250 MB', correct: false },
            { id: 4, answer: '500 MB', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 2,
        question: 'Which AWS service enables developers to deploy and manage applications using Docker containers?',
        answers: [
            { id: 1, answer: 'AWS Elastic Beanstalk', correct: false },
            { id: 2, answer: 'AWS CloudFormation', correct: false },
            { id: 3, answer: 'AWS CodeDeploy', correct: false },
            { id: 4, answer: 'AWS Elastic Container Service (ECS)', correct: true }
        ],
        difficulty: 'easy'
    },
    {
        id: 3,
        question: 'What is the maximum retention period for Amazon CloudWatch Logs?',
        answers: [
            { id: 1, answer: '30 days', correct: false },
            { id: 2, answer: '60 days', correct: false },
            { id: 3, answer: '90 days', correct: true },
            { id: 4, answer: '120 days', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 4,
        question: 'Which AWS service provides a fully managed message queuing service?',
        answers: [
            { id: 1, answer: 'Amazon SQS', correct: true },
            { id: 2, answer: 'Amazon SNS', correct: false },
            { id: 3, answer: 'Amazon MQ', correct: false },
            { id: 4, answer: 'Amazon Kinesis', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 5,
        question: 'What does Amazon S3 stand for?',
        answers: [
            { id: 1, answer: 'Simple Storage Service', correct: true },
            { id: 2, answer: 'Secure Storage Service', correct: false },
            { id: 3, answer: 'Structured Storage Service', correct: false },
            { id: 4, answer: 'Standard Storage Service', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 6,
        question: 'What is the maximum number of tags that can be assigned to an Amazon EC2 instance?',
        answers: [
            { id: 1, answer: '10', correct: false },
            { id: 2, answer: '50', correct: true },
            { id: 3, answer: '100', correct: false },
            { id: 4, answer: '100+', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 7,
        question: 'Which AWS service can be used to deploy a serverless web application?',
        answers: [
            { id: 1, answer: 'Amazon RDS', correct: false },
            { id: 2, answer: 'Amazon EC2', correct: false },
            { id: 3, answer: 'AWS Lambda', correct: true },
            { id: 4, answer: 'Amazon Redshift', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 8,
        question: 'What is the maximum execution duration for an AWS Lambda function?',
        answers: [
            { id: 1, answer: '5 minutes', correct: false },
            { id: 2, answer: '10 minutes', correct: false },
            { id: 3, answer: '15 minutes', correct: true },
            { id: 4, answer: '20 minutes', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 9,
        question: 'Which AWS service provides a serverless database?',
        answers: [
            { id: 1, answer: 'Amazon RDS', correct: false },
            { id: 2, answer: 'Amazon DynamoDB', correct: true },
            { id: 3, answer: 'Amazon Redshift', correct: false },
            { id: 4, answer: 'Amazon ElastiCache', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 10,
        question: 'Which AWS service can be used to monitor and collect metrics from various AWS resources?',
        answers: [
            { id: 1, answer: 'AWS CloudTrail', correct: false },
            { id: 2, answer: 'Amazon CloudFront', correct: false },
            { id: 3, answer: 'Amazon CloudWatch', correct: true },
            { id: 4, answer: 'AWS Config', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 11,
        question: 'What is the maximum number of tags that can be assigned to an Amazon S3 bucket?',
        answers: [
            { id: 1, answer: '10', correct: false },
            { id: 2, answer: '20', correct: false },
            { id: 3, answer: '50', correct: true },
            { id: 4, answer: '100', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 12,
        question: 'Which AWS service provides a managed Apache Hadoop framework?',
        answers: [
            { id: 1, answer: 'Amazon EMR', correct: true },
            { id: 2, answer: 'Amazon Kinesis', correct: false },
            { id: 3, answer: 'AWS Glue', correct: false },
            { id: 4, answer: 'AWS Snowball', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 13,
        question: 'What is the maximum number of characters allowed in an Amazon S3 bucket name?',
        answers: [
            { id: 1, answer: '32', correct: false },
            { id: 2, answer: '63', correct: true },
            { id: 3, answer: '128', correct: false },
            { id: 4, answer: '256', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 14,
        question: 'Which AWS service can be used to deploy containerized applications using Kubernetes?',
        answers: [
            { id: 1, answer: 'Amazon EKS', correct: true },
            { id: 2, answer: 'AWS Batch', correct: false },
            { id: 3, answer: 'AWS Lambda', correct: false },
            { id: 4, answer: 'AWS Elastic Beanstalk', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 15,
        question: 'Which AWS service provides an object-level storage tier that automatically moves data between different storage classes based on access patterns?',
        answers: [
            { id: 1, answer: 'Amazon S3', correct: true },
            { id: 2, answer: 'Amazon EBS', correct: false },
            { id: 3, answer: 'Amazon Glacier', correct: false },
            { id: 4, answer: 'Amazon RDS', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 16,
        question: 'What is the maximum number of security groups allowed per network interface in Amazon VPC?',
        answers: [
            { id: 1, answer: '3', correct: false },
            { id: 2, answer: '5', correct: false },
            { id: 3, answer: '10', correct: true },
            { id: 4, answer: '20', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 17,
        question: 'Which AWS service provides a fully managed Apache Kafka-compatible streaming platform?',
        answers: [
            { id: 1, answer: 'Amazon SNS', correct: false },
            { id: 2, answer: 'Amazon Kinesis', correct: true },
            { id: 3, answer: 'Amazon MQ', correct: false },
            { id: 4, answer: 'AWS Data Pipeline', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 18,
        question: 'What is the maximum number of attributes allowed per item in Amazon DynamoDB?',
        answers: [
            { id: 1, answer: '50', correct: false },
            { id: 2, answer: '100', correct: false },
            { id: 3, answer: '256', correct: true },
            { id: 4, answer: '1000', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 19,
        question: 'Which AWS service provides a fully managed, in-memory data store and cache?',
        answers: [
            { id: 1, answer: 'Amazon RDS', correct: false },
            { id: 2, answer: 'Amazon ElastiCache', correct: true },
            { id: 3, answer: 'Amazon Redshift', correct: false },
            { id: 4, answer: 'Amazon Neptune', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 20,
        question: 'What is the maximum duration for an Amazon EC2 spot instance request?',
        answers: [
            { id: 1, answer: '4 hours', correct: false },
            { id: 2, answer: '6 hours', correct: false },
            { id: 3, answer: '12 hours', correct: true },
            { id: 4, answer: '24 hours', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 21,
        question: 'Which AWS service allows you to run your code without provisioning or managing servers?',
        answers: [
            { id: 1, answer: 'Amazon S3', correct: false },
            { id: 2, answer: 'AWS Lambda', correct: true },
            { id: 3, answer: 'Amazon EC2', correct: false },
            { id: 4, answer: 'AWS Elastic Beanstalk', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 22,
        question: 'Which AWS service provides a fully managed NoSQL database?',
        answers: [
            { id: 1, answer: 'Amazon RDS', correct: false },
            { id: 2, answer: 'Amazon Redshift', correct: false },
            { id: 3, answer: 'Amazon DynamoDB', correct: true },
            { id: 4, answer: 'Amazon Neptune', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 23,
        question: 'What is the maximum number of subnets per Amazon VPC?',
        answers: [
            { id: 1, answer: '5', correct: false },
            { id: 2, answer: '10', correct: false },
            { id: 3, answer: '20', correct: false },
            { id: 4, answer: '200', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 24,
        question: 'Which AWS service provides a fully managed message queue for microservices-based architectures?',
        answers: [
            { id: 1, answer: 'Amazon Kinesis', correct: false },
            { id: 2, answer: 'Amazon SQS', correct: true },
            { id: 3, answer: 'AWS Step Functions', correct: false },
            { id: 4, answer: 'AWS Glue', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 25,
        question: 'Which AWS service enables you to perform real-time analytics on streaming data?',
        answers: [
            { id: 1, answer: 'Amazon CloudFront', correct: false },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'Amazon Kinesis', correct: true },
            { id: 4, answer: 'Amazon RDS', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 26,
        question: 'What is the maximum size of an Amazon RDS database snapshot?',
        answers: [
            { id: 1, answer: '5 TB', correct: false },
            { id: 2, answer: '10 TB', correct: false },
            { id: 3, answer: '16 TB', correct: true },
            { id: 4, answer: '20 TB', correct: false }
        ],
        difficulty: 'hard'
    },
    {
        id: 27,
        question: 'Which AWS service allows you to create private, dedicated connections between your data centers and Amazon VPC?',
        answers: [
            { id: 1, answer: 'AWS Direct Connect', correct: true },
            { id: 2, answer: 'Amazon CloudFront', correct: false },
            { id: 3, answer: 'Amazon Route 53', correct: false },
            { id: 4, answer: 'Amazon Elastic File System', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 28,
        question: 'What is the maximum number of EBS volumes that can be attached to an Amazon EC2 instance?',
        answers: [
            { id: 1, answer: '5', correct: false },
            { id: 2, answer: '10', correct: false },
            { id: 3, answer: '20', correct: true },
            { id: 4, answer: '50', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 29,
        question: 'Which AWS service enables you to create and manage a virtual private network (VPN) connection to your Amazon VPC?',
        answers: [
            { id: 1, answer: 'AWS Direct Connect', correct: false },
            { id: 2, answer: 'Amazon VPC', correct: false },
            { id: 3, answer: 'Amazon Route 53', correct: false },
            { id: 4, answer: 'Amazon VPN', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 30,
        question: 'What is the maximum duration for an Amazon RDS automated backup retention period?',
        answers: [
            { id: 1, answer: '7 days', correct: false },
            { id: 2, answer: '14 days', correct: false },
            { id: 3, answer: '35 days', correct: true },
            { id: 4, answer: '60 days', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 31,
        question: 'Which AWS service provides a fully managed, scalable data warehousing solution?',
        answers: [
            { id: 1, answer: 'Amazon RDS', correct: false },
            { id: 2, answer: 'Amazon Redshift', correct: true },
            { id: 3, answer: 'Amazon DynamoDB', correct: false },
            { id: 4, answer: 'Amazon Aurora', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 32,
        question: 'What is the maximum size of an Amazon S3 object that can be uploaded in a single PUT operation?',
        answers: [
            { id: 1, answer: '1 GB', correct: false },
            { id: 2, answer: '5 GB', correct: true },
            { id: 3, answer: '10 GB', correct: false },
            { id: 4, answer: '20 GB', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 33,
        question: 'Which AWS service enables you to automate infrastructure provisioning and management using code?',
        answers: [
            { id: 1, answer: 'AWS Elastic Beanstalk', correct: false },
            { id: 2, answer: 'AWS CloudFormation', correct: true },
            { id: 3, answer: 'Amazon EC2', correct: false },
            { id: 4, answer: 'AWS Lambda', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 34,
        question: 'What is the maximum number of CloudFront distributions allowed per AWS account?',
        answers: [
            { id: 1, answer: '5', correct: false },
            { id: 2, answer: '10', correct: false },
            { id: 3, answer: '25', correct: false },
            { id: 4, answer: '50', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 35,
        question: 'Which AWS service provides a scalable, fully managed, and serverless database for applications?',
        answers: [
            { id: 1, answer: 'Amazon RDS', correct: false },
            { id: 2, answer: 'Amazon DynamoDB', correct: false },
            { id: 3, answer: 'Amazon Neptune', correct: false },
            { id: 4, answer: 'Amazon Aurora Serverless', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 36,
        question: 'What is the maximum number of CloudWatch Alarms allowed per AWS account?',
        answers: [
            { id: 1, answer: '10', correct: false },
            { id: 2, answer: '50', correct: false },
            { id: 3, answer: '100', correct: false },
            { id: 4, answer: '5000', correct: true }
        ],
        difficulty: 'easy'
    },
    {
        id: 37,
        question: 'Which AWS service provides a scalable and fully managed data integration service?',
        answers: [
            { id: 1, answer: 'AWS Glue', correct: true },
            { id: 2, answer: 'AWS Data Pipeline', correct: false },
            { id: 3, answer: 'Amazon Kinesis', correct: false },
            { id: 4, answer: 'Amazon SQS', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 38,
        question: 'What is the maximum number of security groups allowed per Amazon EC2 instance?',
        answers: [
            { id: 1, answer: '1', correct: false },
            { id: 2, answer: '5', correct: false },
            { id: 3, answer: '10', correct: true },
            { id: 4, answer: '20', correct: false }
        ],
        difficulty: 'easy'
    },
    {
        id: 39,
        question: 'Which AWS service provides a managed message broker for building event-driven architectures?',
        answers: [
            { id: 1, answer: 'Amazon SQS', correct: false },
            { id: 2, answer: 'Amazon SNS', correct: false },
            { id: 3, answer: 'Amazon MQ', correct: true },
            { id: 4, answer: 'AWS Lambda', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 40,
        question: 'What is the maximum number of requests per second per partition key in Amazon DynamoDB?',
        answers: [
            { id: 1, answer: '1000', correct: false },
            { id: 2, answer: '3000', correct: false },
            { id: 3, answer: '5000', correct: true },
            { id: 4, answer: '10000', correct: false }
        ],
        difficulty: 'hard'
    },
    {
        id: 41,
        question: 'Which AWS service provides a fully managed, serverless stream processing service?',
        answers: [
            { id: 1, answer: 'Amazon Kinesis Data Firehose', correct: false },
            { id: 2, answer: 'Amazon Kinesis Data Analytics', correct: false },
            { id: 3, answer: 'Amazon Kinesis Data Streams', correct: false },
            { id: 4, answer: 'Amazon Managed Streaming for Apache Kafka (MSK)', correct: true }
        ],
        difficulty: 'hard'
    },
    {
        id: 42,
        question: 'What is the maximum number of active rules per AWS WAF web ACL?',
        answers: [
            { id: 1, answer: '10', correct: false },
            { id: 2, answer: '25', correct: false },
            { id: 3, answer: '50', correct: false },
            { id: 4, answer: '100', correct: true }
        ],
        difficulty: 'hard'
    },
    {
        id: 43,
        question: 'Which AWS service provides a fully managed graph database?',
        answers: [
            { id: 1, answer: 'Amazon RDS', correct: false },
            { id: 2, answer: 'Amazon Redshift', correct: false },
            { id: 3, answer: 'Amazon DynamoDB', correct: false },
            { id: 4, answer: 'Amazon Neptune', correct: true }
        ],
        difficulty: 'hard'
    },
    {
        id: 44,
        question: 'What is the maximum number of distribution groups allowed per AWS Elemental MediaPackage channel?',
        answers: [
            { id: 1, answer: '10', correct: false },
            { id: 2, answer: '20', correct: false },
            { id: 3, answer: '50', correct: false },
            { id: 4, answer: '100', correct: true }
        ],
        difficulty: 'hard'
    },
    {
        id: 45,
        question: 'Which AWS service provides a fully managed, in-memory cache service?',
        answers: [
            { id: 1, answer: 'Amazon ElastiCache', correct: true },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'Amazon RDS', correct: false },
            { id: 4, answer: 'Amazon DynamoDB', correct: false }
        ],
        difficulty: 'hard'
    },
    {
        id: 56,
        question: 'What is the maximum number of EBS volumes that can be attached to an Amazon EC2 instance at once?',
        answers: [
            { id: 1, answer: '5', correct: false },
            { id: 2, answer: '10', correct: false },
            { id: 3, answer: '15', correct: false },
            { id: 4, answer: '20', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 57,
        question: 'What is the maximum number of IAM roles that can be attached to an IAM user?',
        answers: [
            { id: 1, answer: '1', correct: false },
            { id: 2, answer: '5', correct: false },
            { id: 3, answer: '10', correct: false },
            { id: 4, answer: 'Unlimited', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 59,
        question: 'What is the maximum duration for an AWS Lambda function execution?',
        answers: [
            { id: 1, answer: '1 minute', correct: false },
            { id: 2, answer: '5 minutes', correct: false },
            { id: 3, answer: '15 minutes', correct: false },
            { id: 4, answer: 'Depends on the invocation type (synchronous or asynchronous)', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 60,
        question: 'What is the maximum number of AWS Regions that an IAM user can create resources in?',
        answers: [
            { id: 1, answer: 'All available AWS Regions', correct: false },
            { id: 2, answer: '5', correct: false },
            { id: 3, answer: '10', correct: false },
            { id: 4, answer: 'All AWS Regions except the AWS GovCloud (US) Regions', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 61,
        question: 'Which AWS service provides a fully managed database service for PostgreSQL?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon RDS', correct: true },
            { id: 3, answer: 'Amazon S3', correct: false },
            { id: 4, answer: 'Amazon DynamoDB', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 62,
        question: 'What is the default region for an Amazon S3 bucket when no region is specified?',
        answers: [
            { id: 1, answer: 'us-east-1', correct: true },
            { id: 2, answer: 'us-west-2', correct: false },
            { id: 3, answer: 'eu-west-1', correct: false },
            { id: 4, answer: 'ap-southeast-1', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 63,
        question: 'What is the maximum size of an Amazon S3 object that can be uploaded in a single PUT request?',
        answers: [
            { id: 1, answer: '5 TB', correct: false },
            { id: 2, answer: '10 TB', correct: false },
            { id: 3, answer: '5 GB', correct: true },
            { id: 4, answer: '5 GB for single-part upload and 5 TB for multipart upload', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 64,
        question: 'Which AWS service is used to automatically scale EC2 instances based on demand?',
        answers: [
            { id: 1, answer: 'Amazon EC2 Auto Scaling', correct: true },
            { id: 2, answer: 'AWS Elastic Beanstalk', correct: false },
            { id: 3, answer: 'Amazon CloudFront', correct: false },
            { id: 4, answer: 'Amazon Route 53', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 65,
        question: 'Which AWS service is used to monitor and collect logs from various AWS resources?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'Amazon CloudWatch', correct: true },
            { id: 4, answer: 'AWS Lambda', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 66,
        question: 'Which AWS service provides a fully managed message queuing service?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon SNS', correct: false },
            { id: 3, answer: 'Amazon SQS', correct: true },
            { id: 4, answer: 'Amazon RDS', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 67,
        question: 'What is the maximum number of security groups that can be associated with an EC2 instance?',
        answers: [
            { id: 1, answer: '1', correct: false },
            { id: 2, answer: '5', correct: false },
            { id: 3, answer: '10', correct: false },
            { id: 4, answer: '50', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 68,
        question: 'Which AWS service is used to monitor and troubleshoot network connectivity between EC2 instances?',
        answers: [
            { id: 1, answer: 'Amazon CloudFront', correct: false },
            { id: 2, answer: 'Amazon CloudWatch', correct: false },
            { id: 3, answer: 'Amazon VPC', correct: false },
            { id: 4, answer: 'AWS Elastic Beanstalk', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 69,
        question: 'What is the maximum duration for an AWS Lambda function execution?',
        answers: [
            { id: 1, answer: '1 minute', correct: false },
            { id: 2, answer: '5 minutes', correct: false },
            { id: 3, answer: '15 minutes', correct: false },
            { id: 4, answer: 'Depends on the function configuration, up to 15 minutes', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 70,
        question: 'Which AWS service is used to create and manage a virtual private cloud (VPC)?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'Amazon VPC', correct: true },
            { id: 4, answer: 'Amazon RDS', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 71,
        question: 'Which AWS service is used to store and manage relational databases?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'Amazon RDS', correct: true },
            { id: 4, answer: 'Amazon DynamoDB', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 72,
        question: 'What is the maximum number of subnets that can be created within an Amazon VPC?',
        answers: [
            { id: 1, answer: '5', correct: false },
            { id: 2, answer: '10', correct: false },
            { id: 3, answer: '200', correct: false },
            { id: 4, answer: '500', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 73,
        question: 'Which AWS service provides a fully managed message broker service for event-driven architectures?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon SNS', correct: false },
            { id: 3, answer: 'Amazon MQ', correct: true },
            { id: 4, answer: 'Amazon RDS', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 74,
        question: 'What is the maximum number of Lambda functions that can be associated with an Amazon API Gateway stage?',
        answers: [
            { id: 1, answer: '10', correct: false },
            { id: 2, answer: '25', correct: false },
            { id: 3, answer: '50', correct: false },
            { id: 4, answer: '1000', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 75,
        question: 'Which AWS service is used to distribute incoming application traffic across multiple targets?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'Amazon CloudFront', correct: false },
            { id: 4, answer: 'Amazon ELB (Elastic Load Balancer)', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 76,
        question: 'Which AWS service is used to create and manage containerized applications?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'Amazon ECS (Elastic Container Service)', correct: true },
            { id: 4, answer: 'Amazon RDS', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 77,
        question: 'What is the maximum duration for an Amazon EC2 spot instance?',
        answers: [
            { id: 1, answer: '1 hour', correct: false },
            { id: 2, answer: '6 hours', correct: false },
            { id: 3, answer: '12 hours', correct: false },
            { id: 4, answer: 'Until the spot instance is interrupted by the system or terminated by the user', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 78,
        question: 'Which AWS service provides a scalable NoSQL database?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'Amazon DynamoDB', correct: true },
            { id: 4, answer: 'Amazon RDS', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 79,
        question: 'What is the maximum number of CloudFront distributions that can be created per AWS account?',
        answers: [
            { id: 1, answer: '10', correct: false },
            { id: 2, answer: '50', correct: false },
            { id: 3, answer: '100', correct: false },
            { id: 4, answer: '200', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 80,
        question: 'Which AWS service is used to automate the deployment of applications?',
        answers: [
            { id: 1, answer: 'AWS Elastic Beanstalk', correct: true },
            { id: 2, answer: 'Amazon CloudWatch', correct: false },
            { id: 3, answer: 'Amazon VPC', correct: false },
            { id: 4, answer: 'AWS Lambda', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 81,
        question: 'Which AWS service provides serverless compute capacity for running code without provisioning or managing servers?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'AWS Lambda', correct: true },
            { id: 4, answer: 'Amazon RDS', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 82,
        question: 'What is the maximum number of items that can be retrieved in a single query from Amazon DynamoDB?',
        answers: [
            { id: 1, answer: '100', correct: false },
            { id: 2, answer: '500', correct: false },
            { id: 3, answer: '1000', correct: false },
            { id: 4, answer: 'No limit, but retrieval is limited to 1 MB of data', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 83,
        question: 'Which AWS service is used to create and manage virtual machines in the cloud?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: true },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'Amazon CloudFront', correct: false },
            { id: 4, answer: 'AWS Elastic Beanstalk', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 84,
        question: 'What is the maximum number of attributes that can be defined for an item in Amazon DynamoDB?',
        answers: [
            { id: 1, answer: '10', correct: false },
            { id: 2, answer: '25', correct: false },
            { id: 3, answer: '50', correct: false },
            { id: 4, answer: 'No limit', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 85,
        question: 'Which AWS service is used to deliver streaming content to viewers globally with low latency and high transfer speeds?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'Amazon CloudFront', correct: true },
            { id: 4, answer: 'Amazon RDS', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 86,
        question: 'What is the maximum number of characters allowed for an S3 bucket name?',
        answers: [
            { id: 1, answer: '50', correct: false },
            { id: 2, answer: '63', correct: false },
            { id: 3, answer: '128', correct: false },
            { id: 4, answer: '255', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 87,
        question: 'Which AWS service provides a fully managed database service for MongoDB?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon RDS', correct: false },
            { id: 3, answer: 'Amazon DocumentDB', correct: false },
            { id: 4, answer: 'Amazon DocumentDB with MongoDB compatibility', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 88,
        question: 'What is the maximum size of an object that can be uploaded to Amazon S3?',
        answers: [
            { id: 1, answer: '1 GB', correct: false },
            { id: 2, answer: '5 GB', correct: false },
            { id: 3, answer: '10 GB', correct: false },
            { id: 4, answer: '5 TB', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 89,
        question: 'Which AWS service is used to automate resource provisioning and management across multiple AWS accounts?',
        answers: [
            { id: 1, answer: 'AWS CloudFormation', correct: true },
            { id: 2, answer: 'AWS Step Functions', correct: false },
            { id: 3, answer: 'Amazon API Gateway', correct: false },
            { id: 4, answer: 'AWS Glue', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 90,
        question: 'What is the maximum number of characters allowed for an AWS IAM user name?',
        answers: [
            { id: 1, answer: '32', correct: false },
            { id: 2, answer: '64', correct: false },
            { id: 3, answer: '128', correct: false },
            { id: 4, answer: '255', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 91,
        question: 'Which AWS service is used to deliver email communications to customers?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'Amazon SES (Simple Email Service)', correct: true },
            { id: 4, answer: 'Amazon RDS', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 92,
        question: 'What is the maximum number of rules that can be configured in an AWS WAF web access control list (ACL)?',
        answers: [
            { id: 1, answer: '10', correct: false },
            { id: 2, answer: '25', correct: false },
            { id: 3, answer: '50', correct: false },
            { id: 4, answer: '100', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 93,
        question: 'Which AWS service provides a fully managed service for real-time messaging and streaming?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon SNS', correct: false },
            { id: 3, answer: 'Amazon Kinesis', correct: true },
            { id: 4, answer: 'Amazon RDS', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 95,
        question: 'Which AWS service is used to store and manage non-relational databases?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'Amazon DynamoDB', correct: false },
            { id: 4, answer: 'Amazon DocumentDB', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 96,
        question: 'What is the maximum number of active load balancers per AWS account for the Elastic Load Balancing service?',
        answers: [
            { id: 1, answer: '5', correct: false },
            { id: 2, answer: '10', correct: false },
            { id: 3, answer: '20', correct: false },
            { id: 4, answer: '100', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 97,
        question: 'Which AWS service provides a fully managed data warehousing solution?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'Amazon Redshift', correct: true },
            { id: 4, answer: 'Amazon RDS', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 98,
        question: 'What is the maximum number of subnets that can be created per VPC (Virtual Private Cloud)?',
        answers: [
            { id: 1, answer: '5', correct: false },
            { id: 2, answer: '10', correct: false },
            { id: 3, answer: '20', correct: false },
            { id: 4, answer: '200', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 99,
        question: 'Which AWS service is used to deploy and manage containerized applications?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon ECS (Elastic Container Service)', correct: true },
            { id: 3, answer: 'Amazon S3', correct: false },
            { id: 4, answer: 'Amazon RDS', correct: false }
        ],
        difficulty: 'medium'
    },
    {
        id: 100,
        question: 'What is the maximum number of attributes that can be defined for a document in Amazon DynamoDB?',
        answers: [
            { id: 1, answer: '10', correct: false },
            { id: 2, answer: '25', correct: false },
            { id: 3, answer: '50', correct: false },
            { id: 4, answer: '400', correct: true }
        ],
        difficulty: 'medium'
    },
    {
        id: 101,
        question: 'What is the primary purpose of AWS IAM?',
        answers: [
            { id: 1, answer: 'To manage AWS billing and payment information', correct: false },
            { id: 2, answer: 'To monitor and log AWS service activities', correct: false },
            { id: 3, answer: 'To create and manage AWS user accounts and permissions', correct: true },
            { id: 4, answer: 'To provision and manage AWS resources', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 102,
        question: 'Which of the following is NOT an IAM entity?',
        answers: [
            { id: 1, answer: 'User', correct: false },
            { id: 2, answer: 'Group', correct: false },
            { id: 3, answer: 'Role', correct: false },
            { id: 4, answer: 'Bucket', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 103,
        question: 'What is the maximum number of IAM users that can be created per AWS account by default?',
        answers: [
            { id: 1, answer: '10', correct: false },
            { id: 2, answer: '50', correct: false },
            { id: 3, answer: '100', correct: false },
            { id: 4, answer: '5000', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 104,
        question: 'Which statement is true about IAM roles?',
        answers: [
            { id: 1, answer: 'Roles are associated with AWS accounts', correct: false },
            { id: 2, answer: 'Roles are used to grant access to IAM users', correct: false },
            { id: 3, answer: 'Roles can be assigned to AWS resources', correct: true },
            { id: 4, answer: 'Roles are used for multi-factor authentication', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 105,
        question: 'Which AWS service is used to grant temporary access to AWS resources to users or applications?',
        answers: [
            { id: 1, answer: 'Amazon S3', correct: false },
            { id: 2, answer: 'Amazon EC2', correct: false },
            { id: 3, answer: 'AWS IAM', correct: false },
            { id: 4, answer: 'AWS Security Token Service (STS)', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 106,
        question: 'What is the main purpose of IAM policies?',
        answers: [
            { id: 1, answer: 'To define user names and passwords', correct: false },
            { id: 2, answer: 'To enable multi-factor authentication', correct: false },
            { id: 3, answer: 'To define permissions for AWS resources', correct: true },
            { id: 4, answer: 'To create security groups for VPC', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 107,
        question: 'Which action is NOT allowed by an IAM policy?',
        answers: [
            { id: 1, answer: 'Allow', correct: false },
            { id: 2, answer: 'Deny', correct: false },
            { id: 3, answer: 'Grant', correct: true },
            { id: 4, answer: 'PassRole', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 108,
        question: 'What is the purpose of an IAM group?',
        answers: [
            { id: 1, answer: 'To define permissions for IAM users', correct: true },
            { id: 2, answer: 'To manage AWS billing information', correct: false },
            { id: 3, answer: 'To provide secure access to S3 buckets', correct: false },
            { id: 4, answer: 'To define cross-account access policies', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 109,
        question: 'What is the maximum number of IAM roles that can be created per AWS account by default?',
        answers: [
            { id: 1, answer: '10', correct: false },
            { id: 2, answer: '50', correct: false },
            { id: 3, answer: '100', correct: false },
            { id: 4, answer: '250', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 110,
        question: 'Which AWS service is used to enable federated access to AWS resources using existing corporate credentials?',
        answers: [
            { id: 1, answer: 'AWS Single Sign-On (SSO)', correct: true },
            { id: 2, answer: 'Amazon RDS', correct: false },
            { id: 3, answer: 'Amazon CloudFront', correct: false },
            { id: 4, answer: 'Amazon S3', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 111,
        question: 'What is the purpose of an IAM instance profile?',
        answers: [
            { id: 1, answer: 'To define permissions for IAM users', correct: false },
            { id: 2, answer: 'To provide secure access to S3 buckets', correct: false },
            { id: 3, answer: 'To grant temporary access to AWS resources', correct: false },
            { id: 4, answer: 'To grant permissions to EC2 instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 112,
        question: 'Which AWS service is used to centralize and manage IAM access across multiple accounts?',
        answers: [
            { id: 1, answer: 'AWS Organizations', correct: true },
            { id: 2, answer: 'AWS CloudTrail', correct: false },
            { id: 3, answer: 'Amazon S3', correct: false },
            { id: 4, answer: 'AWS Config', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 113,
        question: 'What is the primary purpose of an IAM password policy?',
        answers: [
            { id: 1, answer: 'To enforce multi-factor authentication', correct: false },
            { id: 2, answer: 'To allow users to reset their passwords', correct: false },
            { id: 3, answer: 'To define the password requirements for IAM users', correct: true },
            { id: 4, answer: 'To generate secure passwords for IAM users', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 114,
        question: 'What is the maximum number of IAM groups that can be created per AWS account?',
        answers: [
            { id: 1, answer: '10', correct: false },
            { id: 2, answer: '50', correct: false },
            { id: 3, answer: '100', correct: false },
            { id: 4, answer: '300', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 115,
        question: 'Which AWS service is used to automate the rotation of IAM user access keys?',
        answers: [
            { id: 1, answer: 'Amazon CloudWatch', correct: false },
            { id: 2, answer: 'AWS Config', correct: false },
            { id: 3, answer: 'AWS Secrets Manager', correct: true },
            { id: 4, answer: 'Amazon S3', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 116,
        question: 'What is the purpose of an IAM policy simulator?',
        answers: [
            { id: 1, answer: 'To generate access keys for IAM users', correct: false },
            { id: 2, answer: 'To simulate IAM policy evaluation', correct: true },
            { id: 3, answer: 'To enable multi-factor authentication', correct: false },
            { id: 4, answer: 'To create security groups for VPC', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 117,
        question: 'Which statement is true about IAM access keys?',
        answers: [
            { id: 1, answer: 'Access keys are used for console login', correct: false },
            { id: 2, answer: 'Access keys are created and managed by AWS Support', correct: false },
            { id: 3, answer: 'Access keys consist of an access key ID and a secret access key', correct: true },
            { id: 4, answer: 'Access keys can only be associated with IAM roles', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 118,
        question: 'What is the purpose of an IAM identity provider?',
        answers: [
            { id: 1, answer: 'To grant access to AWS resources', correct: false },
            { id: 2, answer: 'To enable multi-factor authentication', correct: false },
            { id: 3, answer: 'To define the password policy for IAM users', correct: false },
            { id: 4, answer: 'To establish trust and enable federated access', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 119,
        question: 'Which AWS service is used to track and analyze IAM policy changes?',
        answers: [
            { id: 1, answer: 'AWS CloudTrail', correct: true },
            { id: 2, answer: 'AWS Config', correct: false },
            { id: 3, answer: 'Amazon S3', correct: false },
            { id: 4, answer: 'Amazon CloudFront', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 120,
        question: 'What is the purpose of an IAM role session?',
        answers: [
            { id: 1, answer: 'To define the trust policy for an IAM role', correct: false },
            { id: 2, answer: 'To enable cross-account access to AWS resources', correct: false },
            { id: 3, answer: 'To define the permissions for an IAM user', correct: false },
            { id: 4, answer: 'To establish temporary credentials for a user or application', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 121,
        question: 'What is the purpose of an IAM role?',
        answers: [
            { id: 1, answer: 'To define permissions for IAM users', correct: false },
            { id: 2, answer: 'To provide secure access to S3 buckets', correct: false },
            { id: 3, answer: 'To enable multi-factor authentication', correct: false },
            { id: 4, answer: 'To delegate permissions to AWS services or applications', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 122,
        question: 'Which AWS service allows you to assign an IAM role to an EC2 instance?',
        answers: [
            { id: 1, answer: 'Amazon S3', correct: false },
            { id: 2, answer: 'Amazon RDS', correct: false },
            { id: 3, answer: 'Amazon EC2', correct: true },
            { id: 4, answer: 'Amazon DynamoDB', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 123,
        question: 'What is the purpose of IAM conditions?',
        answers: [
            { id: 1, answer: 'To enforce password policies', correct: false },
            { id: 2, answer: 'To enable multi-factor authentication', correct: false },
            { id: 3, answer: 'To define the password requirements for IAM users', correct: false },
            { id: 4, answer: 'To further restrict access based on specified conditions', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 124,
        question: 'Which action is required to enable IAM access analyzer?',
        answers: [
            { id: 1, answer: 'Attach an IAM policy to a user', correct: false },
            { id: 2, answer: 'Enable IAM role session logging', correct: false },
            { id: 3, answer: 'Enable AWS CloudTrail in the AWS account', correct: false },
            { id: 4, answer: 'Enable IAM Access Analyzer in the AWS Management Console', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 125,
        question: 'What is the purpose of the IAM credential report?',
        answers: [
            { id: 1, answer: 'To track changes to IAM policies', correct: false },
            { id: 2, answer: 'To monitor IAM user login activity', correct: false },
            { id: 3, answer: 'To identify unused IAM access keys', correct: true },
            { id: 4, answer: 'To generate temporary credentials for IAM users', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 126,
        question: 'Which AWS service provides a web-based interface for managing IAM resources?',
        answers: [
            { id: 1, answer: 'Amazon EC2', correct: false },
            { id: 2, answer: 'Amazon S3', correct: false },
            { id: 3, answer: 'AWS Identity and Access Management (IAM)', correct: true },
            { id: 4, answer: 'Amazon VPC', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 127,
        question: 'What is the purpose of the AWS Security Token Service (STS)?',
        answers: [
            { id: 1, answer: 'To enable multi-factor authentication for IAM users', correct: false },
            { id: 2, answer: 'To generate temporary credentials for IAM users', correct: true },
            { id: 3, answer: 'To encrypt data stored in Amazon S3', correct: false },
            { id: 4, answer: 'To manage access to AWS resources across accounts', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 128,
        question: 'Which IAM policy element is used to specify the resources on which the policy applies?',
        answers: [
            { id: 1, answer: 'Effect', correct: false },
            { id: 2, answer: 'Principal', correct: false },
            { id: 3, answer: 'Action', correct: false },
            { id: 4, answer: 'Resource', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 129,
        question: 'What is the purpose of an IAM boundary policy?',
        answers: [
            { id: 1, answer: 'To set the maximum permissions for an IAM user', correct: true },
            { id: 2, answer: 'To enable cross-account access to AWS resources', correct: false },
            { id: 3, answer: 'To define the trust policy for an IAM role', correct: false },
            { id: 4, answer: 'To enforce password policies for IAM users', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 130,
        question: 'Which AWS service is used to manage AWS Secrets Manager?',
        answers: [
            { id: 1, answer: 'AWS CloudFormation', correct: false },
            { id: 2, answer: 'AWS Secrets Manager', correct: true },
            { id: 3, answer: 'AWS Identity and Access Management (IAM)', correct: false },
            { id: 4, answer: 'AWS Key Management Service (KMS)', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 131,
        question: 'What is the purpose of IAM roles for Amazon EC2?',
        answers: [
            { id: 1, answer: 'To define permissions for IAM users', correct: false },
            { id: 2, answer: 'To provide secure access to S3 buckets', correct: false },
            { id: 3, answer: 'To delegate permissions to EC2 instances', correct: true },
            { id: 4, answer: 'To enable multi-factor authentication', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 132,
        question: 'Which AWS service provides a global view of IAM permissions across all accounts?',
        answers: [
            { id: 1, answer: 'AWS Organizations', correct: false },
            { id: 2, answer: 'AWS CloudTrail', correct: false },
            { id: 3, answer: 'AWS Security Hub', correct: false },
            { id: 4, answer: 'AWS IAM Access Analyzer', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 133,
        question: 'What is the purpose of an IAM role policy?',
        answers: [
            { id: 1, answer: 'To define the permissions for an IAM user', correct: false },
            { id: 2, answer: 'To set the maximum permissions for an IAM role', correct: true },
            { id: 3, answer: 'To enable cross-account access to AWS resources', correct: false },
            { id: 4, answer: 'To enforce password policies for IAM users', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 134,
        question: 'What is the purpose of the AWS Managed Policy?',
        answers: [
            { id: 1, answer: 'To enforce password policies for IAM users', correct: false },
            { id: 2, answer: 'To enable multi-factor authentication for IAM users', correct: false },
            { id: 3, answer: 'To set the maximum permissions for an IAM user', correct: false },
            { id: 4, answer: 'To provide pre-defined permissions for common AWS services', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 135,
        question: 'Which AWS service provides a visual editor for creating and managing IAM policies?',
        answers: [
            { id: 1, answer: 'Amazon S3', correct: false },
            { id: 2, answer: 'AWS Config', correct: false },
            { id: 3, answer: 'AWS Identity and Access Management (IAM) Policy Editor', correct: true },
            { id: 4, answer: 'Amazon EC2', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 136,
        question: 'What is the purpose of an IAM role assumption?',
        answers: [
            { id: 1, answer: 'To define the trust policy for an IAM role', correct: false },
            { id: 2, answer: 'To enable cross-account access to AWS resources', correct: false },
            { id: 3, answer: 'To establish temporary credentials for a user or application', correct: true },
            { id: 4, answer: 'To enforce password policies for IAM users', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 137,
        question: 'Which AWS service is used to automate the rotation of IAM access keys?',
        answers: [
            { id: 1, answer: 'AWS Secrets Manager', correct: false },
            { id: 2, answer: 'AWS Identity and Access Management (IAM)', correct: true },
            { id: 3, answer: 'AWS CloudFormation', correct: false },
            { id: 4, answer: 'AWS Key Management Service (KMS)', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 138,
        question: 'What is the purpose of an IAM policy simulator?',
        answers: [
            { id: 1, answer: 'To track changes to IAM policies', correct: false },
            { id: 2, answer: 'To simulate IAM policy evaluations', correct: true },
            { id: 3, answer: 'To enforce password policies for IAM users', correct: false },
            { id: 4, answer: 'To manage access to AWS resources across accounts', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 139,
        question: 'Which AWS service provides a unified view of IAM permissions across AWS accounts?',
        answers: [
            { id: 1, answer: 'AWS Organizations', correct: true },
            { id: 2, answer: 'AWS CloudTrail', correct: false },
            { id: 3, answer: 'AWS Security Hub', correct: false },
            { id: 4, answer: 'AWS IAM Access Analyzer', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 140,
        question: 'What is the purpose of the IAM role trust policy?',
        answers: [
            { id: 1, answer: 'To define the permissions for IAM users', correct: false },
            { id: 2, answer: 'To enable multi-factor authentication', correct: false },
            { id: 3, answer: 'To establish trust and enable federated access', correct: true },
            { id: 4, answer: 'To provide secure access to S3 buckets', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 141,
        question: 'What is the purpose of IAM roles for AWS Lambda functions?',
        answers: [
            { id: 1, answer: 'To define permissions for IAM users', correct: false },
            { id: 2, answer: 'To provide secure access to S3 buckets', correct: false },
            { id: 3, answer: 'To delegate permissions to Lambda functions', correct: true },
            { id: 4, answer: 'To enable multi-factor authentication', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 142,
        question: 'Which AWS service is used to manage IAM access keys?',
        answers: [
            { id: 1, answer: 'Amazon S3', correct: false },
            { id: 2, answer: 'AWS Secrets Manager', correct: false },
            { id: 3, answer: 'AWS Identity and Access Management (IAM)', correct: false },
            { id: 4, answer: 'AWS IAM Access Analyzer', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 143,
        question: 'What is the purpose of an IAM policy version?',
        answers: [
            { id: 1, answer: 'To define the permissions for an IAM user', correct: false },
            { id: 2, answer: 'To set the maximum permissions for an IAM role', correct: false },
            { id: 3, answer: 'To track changes to IAM policies over time', correct: true },
            { id: 4, answer: 'To enforce password policies for IAM users', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 144,
        question: 'Which action is required to enable IAM access key rotation?',
        answers: [
            { id: 1, answer: 'Attach an IAM policy to a user', correct: false },
            { id: 2, answer: 'Enable IAM role session logging', correct: false },
            { id: 3, answer: 'Enable AWS CloudTrail in the AWS account', correct: false },
            { id: 4, answer: 'Enable access key rotation for an IAM user in IAM settings', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 145,
        question: 'What is the purpose of the AWS Security Token Service (STS)?',
        answers: [
            { id: 1, answer: 'To enable multi-factor authentication for IAM users', correct: false },
            { id: 2, answer: 'To generate temporary credentials for IAM users', correct: true },
            { id: 3, answer: 'To encrypt data stored in Amazon S3', correct: false },
            { id: 4, answer: 'To manage access to AWS resources across accounts', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 146,
        question: 'Which IAM policy element is used to specify the actions that are allowed or denied?',
        answers: [
            { id: 1, answer: 'Effect', correct: false },
            { id: 2, answer: 'Principal', correct: false },
            { id: 3, answer: 'Action', correct: true },
            { id: 4, answer: 'Resource', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 147,
        question: 'What is the purpose of an IAM role?',
        answers: [
            { id: 1, answer: 'To define the trust policy for an IAM user', correct: false },
            { id: 2, answer: 'To enable cross-account access to AWS resources', correct: false },
            { id: 3, answer: 'To delegate permissions to AWS services or users', correct: true },
            { id: 4, answer: 'To enforce password policies for IAM users', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 148,
        question: 'Which AWS service is used to manage IAM groups?',
        answers: [
            { id: 1, answer: 'AWS Identity and Access Management (IAM)', correct: true },
            { id: 2, answer: 'AWS Secrets Manager', correct: false },
            { id: 3, answer: 'Amazon S3', correct: false },
            { id: 4, answer: 'Amazon EC2', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 149,
        question: 'What is the purpose of IAM policies?',
        answers: [
            { id: 1, answer: 'To define the permissions for an IAM user', correct: false },
            { id: 2, answer: 'To set the maximum permissions for an IAM role', correct: false },
            { id: 3, answer: 'To enable cross-account access to AWS resources', correct: false },
            { id: 4, answer: 'All of the above', correct: true }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 150,
        question: 'Which AWS service provides a web-based user interface for managing IAM?',
        answers: [
            { id: 1, answer: 'Amazon S3', correct: false },
            { id: 2, answer: 'AWS CloudTrail', correct: false },
            { id: 3, answer: 'AWS Management Console', correct: true },
            { id: 4, answer: 'Amazon EC2', correct: false }
        ],
        difficulty: 'medium',
        category: 'IAM'
    },
    {
        id: 151,
        question: 'What is an Amazon EC2 instance?',
        answers: [
            { id: 1, answer: 'A scalable storage service provided by AWS', correct: false },
            { id: 2, answer: 'A managed relational database service', correct: false },
            { id: 3, answer: 'A virtual server in the cloud', correct: true },
            { id: 4, answer: 'A serverless computing platform', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 152,
        question: 'Which Amazon EC2 feature allows you to launch instances on a recurring schedule?',
        answers: [
            { id: 1, answer: 'Spot Instances', correct: false },
            { id: 2, answer: 'Reserved Instances', correct: false },
            { id: 3, answer: 'Dedicated Hosts', correct: false },
            { id: 4, answer: 'Scheduled Instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 153,
        question: 'What is the purpose of an Amazon Machine Image (AMI) in EC2?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: true },
            { id: 4, answer: 'To scale EC2 instances based on demand', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 154,
        question: 'What is the purpose of an Amazon Elastic IP address?',
        answers: [
            { id: 1, answer: 'To provide secure access to S3 buckets', correct: false },
            { id: 2, answer: 'To attach additional storage volumes to EC2 instances', correct: false },
            { id: 3, answer: 'To provide a static IPv4 address for EC2 instances', correct: true },
            { id: 4, answer: 'To distribute incoming traffic across multiple EC2 instances', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 155,
        question: 'Which AWS service provides a way to monitor the performance of EC2 instances?',
        answers: [
            { id: 1, answer: 'AWS CloudTrail', correct: false },
            { id: 2, answer: 'AWS Config', correct: false },
            { id: 3, answer: 'Amazon CloudWatch', correct: true },
            { id: 4, answer: 'Amazon S3', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 156,
        question: 'What is the purpose of an Amazon EC2 security group?',
        answers: [
            { id: 1, answer: 'To manage access and permissions for EC2 instances', correct: true },
            { id: 2, answer: 'To store data in a highly durable manner', correct: false },
            { id: 3, answer: 'To scale EC2 instances based on demand', correct: false },
            { id: 4, answer: 'To launch instances with pre-configured operating systems and software', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 157,
        question: 'Which Amazon EC2 feature allows you to distribute incoming traffic across multiple EC2 instances?',
        answers: [
            { id: 1, answer: 'Auto Scaling', correct: false },
            { id: 2, answer: 'Elastic Load Balancer', correct: true },
            { id: 3, answer: 'Elastic Block Store', correct: false },
            { id: 4, answer: 'Elastic IP address', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 158,
        question: 'What is the purpose of Amazon EC2 placement groups?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To influence the placement of instances within an Availability Zone', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 159,
        question: 'Which Amazon EC2 instance type is optimized for applications that require low-latency, high-throughput access to storage?',
        answers: [
            { id: 1, answer: 'Compute-optimized instances', correct: false },
            { id: 2, answer: 'Memory-optimized instances', correct: false },
            { id: 3, answer: 'Storage-optimized instances', correct: true },
            { id: 4, answer: 'GPU instances', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 160,
        question: 'Which AWS service allows you to create a virtual private cloud (VPC) for your EC2 instances?',
        answers: [
            { id: 1, answer: 'Amazon S3', correct: false },
            { id: 2, answer: 'Amazon VPC', correct: true },
            { id: 3, answer: 'AWS CloudTrail', correct: false },
            { id: 4, answer: 'AWS Identity and Access Management (IAM)', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 161,
        question: 'Which Amazon EC2 feature allows you to automatically scale your EC2 capacity based on demand?',
        answers: [
            { id: 1, answer: 'Auto Scaling', correct: true },
            { id: 2, answer: 'Elastic Load Balancer', correct: false },
            { id: 3, answer: 'Elastic Block Store', correct: false },
            { id: 4, answer: 'Elastic IP address', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 162,
        question: 'What is the maximum number of Elastic IP addresses that can be associated with an EC2 instance?',
        answers: [
            { id: 1, answer: '1', correct: false },
            { id: 2, answer: '5', correct: false },
            { id: 3, answer: '10', correct: false },
            { id: 4, answer: '50', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 163,
        question: 'Which AWS service can be used to automatically replace unhealthy EC2 instances?',
        answers: [
            { id: 1, answer: 'AWS Elastic Beanstalk', correct: false },
            { id: 2, answer: 'AWS Lambda', correct: false },
            { id: 3, answer: 'Amazon ECS', correct: false },
            { id: 4, answer: 'Auto Scaling', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 164,
        question: 'What is the purpose of an Amazon EC2 instance profile?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To provide AWS credentials to EC2 instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 165,
        question: 'Which Amazon EC2 feature allows you to control traffic to and from your EC2 instances?',
        answers: [
            { id: 1, answer: 'Amazon VPC', correct: false },
            { id: 2, answer: 'Elastic Load Balancer', correct: false },
            { id: 3, answer: 'Security groups', correct: true },
            { id: 4, answer: 'Elastic IP address', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 166,
        question: 'What is the purpose of Amazon Elastic Block Store (EBS) in EC2?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: true },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To provide a static IPv4 address for EC2 instances', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 167,
        question: 'Which Amazon EC2 instance type is optimized for applications that require a balance of compute, memory, and network resources?',
        answers: [
            { id: 1, answer: 'General-purpose instances', correct: true },
            { id: 2, answer: 'Compute-optimized instances', correct: false },
            { id: 3, answer: 'Memory-optimized instances', correct: false },
            { id: 4, answer: 'Storage-optimized instances', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 168,
        question: 'What is the purpose of an Amazon EC2 key pair?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: true },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To provide a static IPv4 address for EC2 instances', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 169,
        factChecked: true,
        question: 'Which Amazon service allows you to run applications without the need to provision or manage servers?',
        answers: [
            { id: 1, answer: 'Amazon VPC', correct: false },
            { id: 2, answer: 'Amazon RDS', correct: false },
            { id: 3, answer: 'AWS Lambda', correct: true },
            { id: 4, answer: 'Elastic Load Balancer', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 170,
        question: 'What is the purpose of Amazon EC2 user data?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To provide additional configuration information to EC2 instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 171,
        question: 'What is the purpose of an Amazon Machine Image (AMI) in Amazon EC2?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: true },
            { id: 4, answer: 'To provide a static IPv4 address for EC2 instances', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 172,
        question: 'Which Amazon EC2 feature allows you to capture a backup of your EC2 instance\'s root volume?',
        answers: [
            { id: 1, answer: 'Elastic Load Balancer', correct: false },
            { id: 2, answer: 'Elastic Block Store', correct: false },
            { id: 3, answer: 'Elastic IP address', correct: false },
            { id: 4, answer: 'Amazon EC2 Instance Store-backed AMIs', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 173,
        question: 'What is the purpose of an Amazon EC2 security group?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: true },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To provide a static IPv4 address for EC2 instances', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 174,
        question: 'Which Amazon EC2 instance type is optimized for applications that require a balance of compute, memory, and storage resources?',
        answers: [
            { id: 1, answer: 'General-purpose instances', correct: false },
            { id: 2, answer: 'Compute-optimized instances', correct: false },
            { id: 3, answer: 'Memory-optimized instances', correct: false },
            { id: 4, answer: 'Storage-optimized instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 175,
        question: 'What is the purpose of an Amazon EC2 security group?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: true },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To provide a static IPv4 address for EC2 instances', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 176,
        question: 'Which Amazon EC2 instance type is optimized for applications that require low-latency, high-throughput access to storage?',
        answers: [
            { id: 1, answer: 'General-purpose instances', correct: false },
            { id: 2, answer: 'Compute-optimized instances', correct: false },
            { id: 3, answer: 'Memory-optimized instances', correct: false },
            { id: 4, answer: 'Storage-optimized instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 177,
        question: 'What is the purpose of an Amazon EC2 placement group?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To ensure low-latency and high-bandwidth connectivity between instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 178,
        question: 'Which Amazon EC2 instance type is optimized for applications that require high-performance computing (HPC)?',
        answers: [
            { id: 1, answer: 'General-purpose instances', correct: false },
            { id: 2, answer: 'Compute-optimized instances', correct: false },
            { id: 3, answer: 'Memory-optimized instances', correct: false },
            { id: 4, answer: 'Accelerated computing instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 179,
        question: 'What is the purpose of an Amazon EC2 instance store?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To provide temporary block-level storage for EC2 instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 180,
        question: 'Which Amazon EC2 feature allows you to run Windows-based applications on EC2 instances?',
        answers: [
            { id: 1, answer: 'AWS Elastic Beanstalk', correct: false },
            { id: 2, answer: 'Amazon EFS', correct: false },
            { id: 3, answer: 'AWS Lambda', correct: false },
            { id: 4, answer: 'Amazon EC2 Windows instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 181,
        question: 'What is the purpose of an Amazon EC2 instance profile?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To provide AWS credentials to EC2 instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 182,
        question: 'Which Amazon EC2 feature allows you to automatically distribute incoming application traffic across multiple instances?',
        answers: [
            { id: 1, answer: 'Amazon RDS', correct: false },
            { id: 2, answer: 'AWS Lambda', correct: false },
            { id: 3, answer: 'Elastic Load Balancer', correct: true },
            { id: 4, answer: 'Amazon CloudFront', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 183,
        question: 'What is the purpose of an Amazon EC2 auto scaling group?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To automatically adjust the number of EC2 instances based on demand', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 184,
        question: 'Which Amazon EC2 instance type is optimized for applications that require low-latency, high-frequency compute power?',
        answers: [
            { id: 1, answer: 'General-purpose instances', correct: false },
            { id: 2, answer: 'Compute-optimized instances', correct: true },
            { id: 3, answer: 'Memory-optimized instances', correct: false },
            { id: 4, answer: 'Storage-optimized instances', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 185,
        question: 'What is the purpose of an Amazon EC2 instance store-backed AMI?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To provide an Amazon EBS-backed root volume for EC2 instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 186,
        question: 'Which Amazon EC2 instance type is optimized for applications that require high-performance network I/O?',
        answers: [
            { id: 1, answer: 'General-purpose instances', correct: false },
            { id: 2, answer: 'Compute-optimized instances', correct: false },
            { id: 3, answer: 'Memory-optimized instances', correct: false },
            { id: 4, answer: 'Network-optimized instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 187,
        question: 'What is the purpose of an Amazon EC2 key pair?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To securely connect to EC2 instances using SSH', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 188,
        question: 'Which Amazon EC2 feature allows you to encrypt the root volume of your EC2 instance?',
        answers: [
            { id: 1, answer: 'Elastic Load Balancer', correct: false },
            { id: 2, answer: 'Elastic Block Store', correct: true },
            { id: 3, answer: 'Elastic IP address', correct: false },
            { id: 4, answer: 'Amazon EC2 Instance Store-backed AMIs', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 189,
        question: 'What is the purpose of an Amazon EC2 dedicated host?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To provide a physical server for your exclusive use', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 190,
        question: 'Which Amazon EC2 instance type is optimized for applications that require high-performance storage subsystems?',
        answers: [
            { id: 1, answer: 'General-purpose instances', correct: false },
            { id: 2, answer: 'Compute-optimized instances', correct: false },
            { id: 3, answer: 'Memory-optimized instances', correct: false },
            { id: 4, answer: 'I/O-optimized instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 191,
        question: 'What is the purpose of an Amazon EC2 security group?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: true },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To provide temporary block-level storage for EC2 instances', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 192,
        question: 'Which Amazon EC2 feature allows you to schedule the start and stop of your instances?',
        answers: [
            { id: 1, answer: 'Amazon CloudFront', correct: false },
            { id: 2, answer: 'Elastic Load Balancer', correct: false },
            { id: 3, answer: 'Amazon EC2 Auto Scaling', correct: false },
            { id: 4, answer: 'Amazon EC2 Instance Scheduler', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 193,
        question: 'What is the purpose of an Amazon EC2 instance metadata service?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To provide instance-specific metadata to EC2 instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 194,
        question: 'Which Amazon EC2 instance type is optimized for applications that require a balance of compute, memory, and network resources?',
        answers: [
            { id: 1, answer: 'General-purpose instances', correct: true },
            { id: 2, answer: 'Compute-optimized instances', correct: false },
            { id: 3, answer: 'Memory-optimized instances', correct: false },
            { id: 4, answer: 'Storage-optimized instances', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 195,
        question: 'What is the purpose of an Amazon EC2 placement group?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To ensure low-latency and high-bandwidth connectivity between instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 196,
        question: 'Which Amazon EC2 instance type is optimized for applications that require high-performance computing (HPC)?',
        answers: [
            { id: 1, answer: 'General-purpose instances', correct: false },
            { id: 2, answer: 'Compute-optimized instances', correct: false },
            { id: 3, answer: 'Memory-optimized instances', correct: false },
            { id: 4, answer: 'GPU instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 197,
        question: 'What is the purpose of an Amazon EC2 instance reservation?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To reserve capacity and receive a significant discount on instance usage', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 198,
        question: 'Which Amazon EC2 feature allows you to attach additional block-level storage volumes to your instances?',
        answers: [
            { id: 1, answer: 'Elastic IP address', correct: false },
            { id: 2, answer: 'Elastic Load Balancer', correct: false },
            { id: 3, answer: 'Elastic Block Store', correct: true },
            { id: 4, answer: 'Amazon EC2 Instance Store', correct: false }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 199,
        question: 'What is the purpose of an Amazon EC2 instance family?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To group instances with similar instance characteristics', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 200,
        question: 'Which Amazon EC2 instance type is optimized for applications that require a balance of compute, memory, and storage resources?',
        answers: [
            { id: 1, answer: 'General-purpose instances', correct: false },
            { id: 2, answer: 'Compute-optimized instances', correct: false },
            { id: 3, answer: 'Memory-optimized instances', correct: false },
            { id: 4, answer: 'Burstable instances', correct: true }
        ],
        difficulty: 'medium',
        category: 'EC2'
    },
    {
        id: 201,
        question: 'What is the primary purpose of an Amazon VPC?',
        answers: [
            { id: 1, answer: 'To store data in a highly durable manner', correct: false },
            { id: 2, answer: 'To manage access and permissions for EC2 instances', correct: false },
            { id: 3, answer: 'To launch instances with pre-configured operating systems and software', correct: false },
            { id: 4, answer: 'To create a virtual network in the AWS cloud', correct: true }
        ],
        difficulty: 'medium',
        category: 'VPC'
    },
    {
        id: 202,
        question: 'What is an Amazon VPC subnet?',
        answers: [
            { id: 1, answer: 'A range of IP addresses in the AWS cloud', correct: true },
            { id: 2, answer: 'A virtual private network connection between on-premises and AWS', correct: false },
            { id: 3, answer: 'A firewall for controlling inbound and outbound traffic to EC2 instances', correct: false },
            { id: 4, answer: 'A load balancer for distributing traffic to multiple EC2 instances', correct: false }
        ],
        difficulty: 'medium',
        category: 'VPC'
    },
    {
        id: 204,
        question: 'What is an Amazon VPC security group?',
        answers: [
            { id: 1, answer: 'A range of IP addresses in the AWS cloud', correct: false },
            { id: 2, answer: 'A virtual private network connection between on-premises and AWS', correct: false },
            { id: 3, answer: 'A firewall for controlling inbound and outbound traffic to EC2 instances', correct: true },
            { id: 4, answer: 'A load balancer for distributing traffic to multiple EC2 instances', correct: false }
        ],
        difficulty: 'medium',
        category: 'VPC'
    },
    {
        id: 205,
        question: 'Which of the following is true about an Amazon VPC endpoint?',
        answers: [
            { id: 1, answer: 'It provides secure communication between on-premises and AWS VPCs', correct: false },
            {
                id: 2,
                answer: 'It provides a virtual private network connection between VPCs in different AWS accounts',
                correct: false
            },
            { id: 3, answer: 'It enables private connectivity to AWS services from within a VPC', correct: true },
            { id: 4, answer: 'It provides load balancing of traffic to multiple EC2 instances', correct: false }
        ],
        difficulty: 'medium',
        category: 'VPC'
    },
    {
        id: 206,
        question: 'What is an Amazon VPC internet gateway?',
        answers: [
            { id: 1, answer: 'A range of IP addresses in the AWS cloud', correct: false },
            { id: 2, answer: 'A virtual private network connection between on-premises and AWS', correct: false },
            { id: 3, answer: 'A firewall for controlling inbound and outbound traffic to EC2 instances', correct: false },
            {
                id: 4,
                answer: 'A horizontally scalable, redundant, and highly available VPC component that allows communication between instances in the VPC and the internet',
                correct: true
            }
        ],
        difficulty: 'medium',
        category: 'VPC'
    },
    {
        id: 207,
        question: 'Which of the following is true about an Amazon VPC NAT gateway?',
        answers: [
            { id: 1, answer: 'It provides secure communication between on-premises and AWS VPCs', correct: false },
            {
                id: 2,
                answer: 'It provides a virtual private network connection between VPCs in different AWS accounts',
                correct: false
            },
            { id: 3, answer: 'It enables private connectivity to AWS services from within a VPC', correct: false },
            { id: 4, answer: 'It allows instances in a private subnet to connect to the internet', correct: true }
        ],
        difficulty: 'medium',
        category: 'VPC'
    },
    {
        id: 208,
        question: 'Which Amazon VPC component is used to connect an on-premises network to an Amazon VPC?',
        answers: [
            { id: 1, answer: 'VPC peering connection', correct: false },
            { id: 2, answer: 'Internet gateway', correct: false },
            { id: 3, answer: 'NAT gateway', correct: false },
            { id: 4, answer: 'Virtual private gateway', correct: true }
        ],
        difficulty: 'medium',
        category: 'VPC'
    },
    {
        id: 209,
        question: 'What is an Amazon VPC route table?',
        answers: [
            { id: 1, answer: 'A range of IP addresses in the AWS cloud', correct: false },
            { id: 2, answer: 'A virtual private network connection between on-premises and AWS', correct: false },
            { id: 3, answer: 'A firewall for controlling inbound and outbound traffic to EC2 instances', correct: false },
            { id: 4, answer: 'A set of rules that determine where network traffic is directed within a VPC', correct: true }
        ],
        difficulty: 'medium',
        category: 'VPC'
    },
    {
        id: 210,
        question: 'Which of the following is true about an Amazon VPC endpoint service?',
        answers: [
            { id: 1, answer: 'It provides secure communication between on-premises and AWS VPCs', correct: false },
            {
                id: 2,
                answer: 'It provides a virtual private network connection between VPCs in different AWS accounts',
                correct: false
            },
            { id: 3, answer: 'It enables private connectivity to AWS services from within a VPC', correct: false },
            {
                id: 4,
                answer: 'It allows access to AWS services using private IP addresses without traversing the internet',
                correct: true
            }
        ],
        difficulty: 'medium',
        category: 'VPC'
    },
    {
        id: 211,
        question: "What is the maximum number of Amazon VPCs per AWS account per AWS Region?",
        answers: [
            { id: 1, answer: "5", correct: false },
            { id: 2, answer: "10", correct: false },
            { id: 3, answer: "20", correct: false },
            { id: 4, answer: "50", correct: true }
        ],
        difficulty: "medium",
        category: "VPC"
    },
    {
        id: 212,
        question: "Which type of subnet allows inbound and outbound traffic from the internet?",
        answers: [
            { id: 1, answer: "Public subnet", correct: true },
            { id: 2, answer: "Private subnet", correct: false },
            { id: 3, answer: "Isolated subnet", correct: false },
            { id: 4, answer: "NAT subnet", correct: false }
        ],
        difficulty: "medium",
        category: "VPC"
    },
    {
        id: 213,
        question: "What is the purpose of an Amazon VPC flow log?",
        answers: [
            { id: 1, answer: "To monitor the performance of VPC endpoints", correct: false },
            { id: 2, answer: "To track changes to VPC security groups", correct: false },
            { id: 3, answer: "To capture information about IP traffic going to and from network interfaces in a VPC", correct: true },
            { id: 4, answer: "To redirect traffic between VPCs using VPC peering", correct: false }
        ],
        difficulty: "medium",
        category: "VPC"
    },
    {
        id: 214,
        question: "What is the purpose of an Amazon VPC network access control list (ACL)?",
        answers: [
            { id: 1, answer: "To manage access and permissions for EC2 instances", correct: false },
            { id: 2, answer: "To create a virtual private network connection between VPCs", correct: false },
            { id: 3, answer: "To provide additional security at the subnet level", correct: true },
            { id: 4, answer: "To launch instances with pre-configured operating systems and software", correct: false }
        ],
        difficulty: "medium",
        category: "VPC"
    },
    {
        id: 215,
        question: "Which Amazon VPC component is used to connect VPCs in different AWS accounts?",
        answers: [
            { id: 1, answer: "VPC peering connection", correct: true },
            { id: 2, answer: "Internet gateway", correct: false },
            { id: 3, answer: "NAT gateway", correct: false },
            { id: 4, answer: "Virtual private gateway", correct: false }
        ],
        difficulty: "medium",
        category: "VPC"
    },
    {
        id: 216,
        question: "Which Amazon VPC feature allows you to control the flow of traffic between subnets?",
        answers: [
            { id: 1, answer: "VPC peering connection", correct: false },
            { id: 2, answer: "Internet gateway", correct: false },
            { id: 3, answer: "NAT gateway", correct: false },
            { id: 4, answer: "Network ACL", correct: true }
        ],
        difficulty: "medium",
        category: "VPC"
    },
    {
        id: 217,
        question: "Which of the following is true about an Amazon VPC endpoint?",
        answers: [
            { id: 1, answer: "It provides secure communication between on-premises and AWS VPCs", correct: false },
            { id: 2, answer: "It provides a virtual private network connection between VPCs in different AWS accounts", correct: false },
            { id: 3, answer: "It enables private connectivity to AWS services from within a VPC", correct: true },
            { id: 4, answer: "It provides load balancing of traffic to multiple EC2 instances", correct: false }
        ],
        difficulty: "medium",
        category: "VPC"
    },
    {
        id: 218,
        question: "Which Amazon VPC feature allows you to provide an additional layer of security for inbound and outbound traffic?",
        answers: [
            { id: 1, answer: "VPC peering connection", correct: false },
            { id: 2, answer: "Internet gateway", correct: false },
            { id: 3, answer: "NAT gateway", correct: false },
            { id: 4, answer: "Network ACL", correct: true }
        ],
        difficulty: "medium",
        category: "VPC"
    },
    {
        id: 219,
        question: "Which of the following is true about Amazon VPC security groups?",
        answers: [
            { id: 1, answer: "They are stateful, meaning that return traffic is automatically allowed", correct: true },
            { id: 2, answer: "They are stateless, meaning that return traffic must be explicitly allowed", correct: false },
            { id: 3, answer: "They can span multiple VPCs within the same AWS account", correct: false },
            { id: 4, answer: "They can be used to control traffic between VPCs in different AWS accounts", correct: false }
        ],
        difficulty: "medium",
        category: "VPC"
    },
    {
        id: 220,
        question: "What is the purpose of an Amazon VPC endpoint service?",
        answers: [
            { id: 1, answer: "It provides secure communication between on-premises and AWS VPCs", correct: false },
            { id: 2, answer: "It provides a virtual private network connection between VPCs in different AWS accounts", correct: false },
            { id: 3, answer: "It enables private connectivity to AWS services from within a VPC", correct: false },
            { id: 4, answer: "It allows access to AWS services using private IP addresses without traversing the internet", correct: true }
        ],
        difficulty: "medium",
        category: "VPC"
    },
    {
        id: 230,
        question: "What is the maximum number of Amazon VPCs per AWS account per AWS Region?",
        answers: [
            { id: 1, answer: "5", correct: false },
            { id: 2, answer: "10", correct: false },
            { id: 3, answer: "20", correct: false },
            { id: 4, answer: "50", correct: true }
        ],
        difficulty: "medium",
        category: "VPC",
        factChecked: false
    },
    {
        id: 221,
        question: "Which type of subnet allows inbound and outbound traffic from the internet?",
        answers: [
            { id: 1, answer: "Public subnet", correct: true },
            { id: 2, answer: "Private subnet", correct: false },
            { id: 3, answer: "Isolated subnet", correct: false },
            { id: 4, answer: "NAT subnet", correct: false }
        ],
        difficulty: "medium",
        category: "VPC",
        factChecked: false
    },
    {
        id: 222,
        question: "What is the purpose of an Amazon VPC flow log?",
        answers: [
            { id: 1, answer: "To monitor the performance of VPC endpoints", correct: false },
            { id: 2, answer: "To track changes to VPC security groups", correct: false },
            { id: 3, answer: "To capture information about IP traffic going to and from network interfaces in a VPC", correct: true },
            { id: 4, answer: "To redirect traffic between VPCs using VPC peering", correct: false }
        ],
        difficulty: "medium",
        category: "VPC",
        factChecked: false
    },
    {
        id: 223,
        question: "What is the purpose of an Amazon VPC network access control list (ACL)?",
        answers: [
            { id: 1, answer: "To manage access and permissions for EC2 instances", correct: false },
            { id: 2, answer: "To create a virtual private network connection between VPCs", correct: false },
            { id: 3, answer: "To provide additional security at the subnet level", correct: true },
            { id: 4, answer: "To launch instances with pre-configured operating systems and software", correct: false }
        ],
        difficulty: "medium",
        category: "VPC",
        factChecked: false
    },
    {
        id: 224,
        question: "Which Amazon VPC component is used to connect VPCs in different AWS accounts?",
        answers: [
            { id: 1, answer: "VPC peering connection", correct: true },
            { id: 2, answer: "Internet gateway", correct: false },
            { id: 3, answer: "NAT gateway", correct: false },
            { id: 4, answer: "Virtual private gateway", correct: false }
        ],
        difficulty: "medium",
        category: "VPC",
        factChecked: false
    },
    {
        id: 225,
        question: "Which Amazon VPC feature allows you to control the flow of traffic between subnets?",
        answers: [
            { id: 1, answer: "VPC peering connection", correct: false },
            { id: 2, answer: "Internet gateway", correct: false },
            { id: 3, answer: "NAT gateway", correct: false },
            { id: 4, answer: "Network ACL", correct: true }
        ],
        difficulty: "medium",
        category: "VPC",
        factChecked: false
    },
    {
        id: 226,
        question: "Which of the following is true about an Amazon VPC endpoint?",
        answers: [
            { id: 1, answer: "It provides secure communication between on-premises and AWS VPCs", correct: false },
            { id: 2, answer: "It provides a virtual private network connection between VPCs in different AWS accounts", correct: false },
            { id: 3, answer: "It enables private connectivity to AWS services from within a VPC", correct: true },
            { id: 4, answer: "It provides load balancing of traffic to multiple EC2 instances", correct: false }
        ],
        difficulty: "medium",
        category: "VPC",
        factChecked: false
    },
    {
        id: 227,
        question: "Which Amazon VPC feature allows you to provide an additional layer of security for inbound and outbound traffic?",
        answers: [
            { id: 1, answer: "VPC peering connection", correct: false },
            { id: 2, answer: "Internet gateway", correct: false },
            { id: 3, answer: "NAT gateway", correct: false },
            { id: 4, answer: "Network ACL", correct: true }
        ],
        difficulty: "medium",
        category: "VPC",
        factChecked: false
    },
    {
        id: 228,
        question: "Which of the following is true about Amazon VPC security groups?",
        answers: [
            { id: 1, answer: "They are stateful, meaning that return traffic is automatically allowed", correct: true },
            { id: 2, answer: "They are stateless, meaning that return traffic must be explicitly allowed", correct: false },
            { id: 3, answer: "They can span multiple VPCs within the same AWS account", correct: false },
            { id: 4, answer: "They can be used to control traffic between VPCs in different AWS accounts", correct: false }
        ],
        difficulty: "medium",
        category: "VPC",
        factChecked: false
    },
    {
        id: 229,
        question: "What is the purpose of an Amazon VPC endpoint service?",
        answers: [
            { id: 1, answer: "It provides secure communication between on-premises and AWS VPCs", correct: false },
            { id: 2, answer: "It provides a virtual private network connection between VPCs in different AWS accounts", correct: false },
            { id: 3, answer: "It enables private connectivity to AWS services from within a VPC", correct: false },
            { id: 4, answer: "It allows access to AWS services using private IP addresses without traversing the internet", correct: true }
        ],
        difficulty: "medium",
        category: "VPC",
        factChecked: false
    }
];
exports.default = exports.questions;
