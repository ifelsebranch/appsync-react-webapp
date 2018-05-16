#!/bin/bash
npm run build
aws s3 sync build/ s3://ifelsebranch --acl public-read --cache-control max-age=31536000,public --exclude 'index.html' --exclude 'service-worker.js'
aws s3 cp build/index.html s3://ifelsebranch --acl public-read --cache-control max-age=0
aws s3 cp build/service-worker.js s3://ifelsebranch --acl public-read --cache-control max-age=0