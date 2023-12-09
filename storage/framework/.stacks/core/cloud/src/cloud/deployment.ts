/* eslint-disable no-new */
import type { aws_cloudfront as cloudfront, aws_s3 as s3 } from 'aws-cdk-lib'
import { AssetHashType, aws_s3_deployment as s3deploy } from 'aws-cdk-lib'
import { config } from '@stacksjs/config'
import { websiteSourceHash } from '@stacksjs/utils'
import type { Construct } from 'constructs'
import type { NestedCloudProps } from '../types'

export interface DeploymentStackProps extends NestedCloudProps {
  publicBucket: s3.Bucket
  privateBucket: s3.Bucket
  cdn: cloudfront.Distribution
}

export class DeploymentStack {
  privateSource: string
  docsSource: string
  websiteSource: string

  constructor(scope: Construct, props: DeploymentStackProps) {
    // following paths are relative to where the command is run from
    this.privateSource = '../../../../private'
    this.docsSource = '../../../../framework/docs'
    this.websiteSource = config.app.docMode === true ? this.docsSource : '../../../../framework/views/dist/'

    new s3deploy.BucketDeployment(scope, 'Website', {
      sources: [s3deploy.Source.asset(this.websiteSource, {
        assetHash: websiteSourceHash,
        assetHashType: AssetHashType.CUSTOM,
      })],
      destinationBucket: props.publicBucket,
      distribution: props.cdn,
      distributionPaths: ['/*'],
    })

    new s3deploy.BucketDeployment(scope, 'PrivateFiles', {
      sources: [s3deploy.Source.asset(this.privateSource)],
      destinationBucket: props.privateBucket,
    })
  }
}
