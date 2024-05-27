# Cypress-AD-Test

Node JS 

Node JS is one of the tools required for Cypress. Download https://nodejs.org/dist/v18.16.1/node-v18.16.1-x64.msi 
This will install the node command prompt which we’ll use for running Cypress. 

Different Node versions installed 

It is possible to have more than one node version installed in your machine, and this might be required if another project is using an older version. To learn how to install and setup more than one node version follow these guides: 
https://github.com/nvm-sh/nvm 
https://www.digitalocean.com/community/tutorials/nodejs-node-version-manager 

Clone AD-Test repository

Clone the repository containing our cypress tests to the desired path. 
After doing so, open the node command prompt and navigate to the repository location. Navigate to the cypress folder and run the command npm install. This will install the node_modules dependencies necessary to run the tests.

How to run the tests Locally 

There are two ways to run the tests locally. The simplest is to open the node command prompt, navigate to the automation location and type in npx cypress run. This will run the tests automatically, headless, in the default browser. 
The other would be to run it from the Cypress UI. To access it: 
Open node command prompt and navigate to the cypress folder within the repository. 
Run the command npm install. 
Type npx cypress open, this will open the Cypress UI. 
Select E2E testing. 
Select the browser that the tests will be run on. 
The spec list will appear. To run a test individually simply click on the test name. 

Reporter 

Due to Cypress being built on top of mocha, a wide amount of reporters are available and already built-in. The list of available reporters to use locally is https://mochajs.org/#reporters. Junit-reporter will be added for reporting and integration in ADO release pipelines. 

Browser version support 

Cypress supports the browser versions below: 
Chrome 64 and above. 
Edge 79 and above. 
Firefox 86 and above. 

Cypress folder structure 

Cypress structure is very simple to follow. There are 4 folders; downloads, e2e, fixtures and support. 
Downloads: Any files downloaded during a test will be placed here. This should be on .gitignore. 
E2e: This is where the suites, modules and test cases are located. 
Fixtures: Fixtures are used as external pieces of static data that can be used by your tests. 
Support: This file runs before every single spec file, this is done so that it doesn’t have to be imported in every test. The support folder is where we place reusable behaviour such as custom commands and global overrides. 
For more information regarding the folder structure, refer to the https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests 
