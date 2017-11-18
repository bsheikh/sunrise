<p align="center">
  <img src="https://user-images.githubusercontent.com/7809061/31871004-28eeb018-b77f-11e7-8b4d-a2ff6cbb6ded.png" alt="Sunrise Logo" height="250">
</p>

<p align="center">
  <a herf="https://github.com/bsheikh/sunrise">
    <img src="https://img.shields.io/badge/v-0.0.1--beta-blue.svg" alt="version">
  </a>
  <a href="https://github.com/bsheikh/sunrise/blob/master/LICENSE">
    <img src="https://badges.frapsoft.com/os/mit/mit.svg?v=102" alt="MIT License">
  </a>
  <a href="https://github.com/bsheikh/sunrise/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="pull-requests">
  </a>
</p>



## Project Details
Creating a new project is time consuming. As developers, we spend more time bootstrapping projects instead of adding functionality. Sunrise is tackling this problem by helping developers easily get up and running without worrying about the build configuration.


## Table of Contents
* [Requirements](#requirements)
* [Getting Started](#getting-started)
* [Deployment](#deployment)
  * [Static Server](#static-server)
  * [S3 Deploy)](#s3-deploy)
* [Supported Browsers](#supported-browsers)
* [React](#react)
* [Redux-Saga](#redux-saga)
* [React-Router](#react-router)
* [Re-Select](#re-select)
* [React-Intl](#react-intl)
* [Jest](#jest)
  * [Running tests](#running-tests)
  * [Running tests in `watch` mode](#running-tests-in-watch-mode)
  * [Updating snapshots](#updating-snapshots)
* [Redux DevTools](#redux-devtools)
* [License](#License)

## Requirements

* [![node)](https://img.shields.io/badge/node-%3E%3D4.5.0-brightgreen.svg)]()

* [![yarn)](https://img.shields.io/badge/yarn-%3E%3D0.20.3-brightgreen.svg)]()

* [![npm)](https://img.shields.io/badge/npm-%3E%3D3.0.0-brightgreen.svg)]()

## Getting Started

```bash
$ git clone https://github.com/bsheikh/sunrise.git <project-name>
$ cd <project-name>
$ yarn install
$ yarn run start:dev
Server is now running at http://localhost:4000.
```

## Deployment
`[npm|yarn] run deploy:prod` creates a `dist` directory with a production build of your app. Set HTTP server to serve index.html and the application will load.

### Static Server
For environments using Node, install `serve` and let it handle the rest.
```
npm install -g serve
serve -s build
```
More Information: [https://github.com/zeit/serve](https://github.com/zeit/serve)

### S3 Deploy
1. Navigate to the S3 service and click `Create Bucket`. Make up a clever name for your new bucket, then click `Create`.
1. Click on the newly-created bucket. Within the `Properties`, open the `Static Website Hosting` tab, and select `Enable website hosting`. Fill in `index.html` for both the Index and Error Documents. By setting `index.html` as the Error Document, we can allow something like react-router to handle routes outside of the root.
1. Add the contents of your `dist` directory to this bucket. This can be done by clicking on the bucket and clicking `Upload`. That’s it! You can find the URL to your application back under the `Static Website Hosting` tab, labeled `Endpoint`.
1. Open the `Permissions` tab, then select `Edit bucket policy`. Edit bucket policy to allow read-only permissions for anonymous users.


## Jest
Sunrise uses Jest as the test runner. Jest is a Node-based runner in which tests are ran in a node environment instead of a browser environment. This enables fast iteration speed and prevents flakiness.

### Filename Conventions
Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.

It's recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter.

### Running tests
```
$ [npm|yarn] run test
```

### Running tests in `watch` mode
```
$ [npm|yarn] run test -- --watch
```

### Updating snapshots
```
$ [npm|yarn] run test -- --u
```
## Supported Browsers
* Chrome
* Mozilla
* Safari

## License
Copyright (c) 2017 Bill Sheikh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
