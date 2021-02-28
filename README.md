# TestCafe Project


[![|Tested with TestCafe](https://img.shields.io/badge/tested%20with-TestCafe-2fa4cf.svg)](https://github.com/DevExpress/testcafe)

### Getting Started

#### Installation

Ensure that GIT is already installed, if it's not, please download and install [git](https://git-scm.com/downloads) .

It also requires [Node.js](https://www.npmjs.com/get-npm) .

Download the project, in the command line:

##### Project
Now you're ready to clone the project.

`$ git clone https://github.com/ccmenezes/challenge-testcafe.git`

After you should execute the command below to install all project dependencies.

>Ensure that Node.js (Current or Active LTS is recommended, version 10 at >minimum) and npm are installed on your computer before running it:

`$ npm install -g testcafe`

##### Docker 
It' a docker project, so it's important to install docker in your machine. Follow the orientatons at [docker](https://docs.docker.com/docker-for-windows/install/) .

Download the [testcafe](https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/use-testcafe-docker-image.html) container.

To perform the tests using testcafe type the comand below:

`$ docker run -v ${PWD}/tests:/tests -it testcafe/testcafe chromium tests/specs/**/*.spec.ts`

>You can perform the test using the command line or execute all regression >tests.

- Unique test class
`$ npm testcafe <path + class_name.extention>`
`$ testcafe chrome tests/specs/**/newsletter.spec.ts`


- The regression tests
`$ npm run regression`

Once executed by the command line you can open the report.

`npm run report-allure-open`

To close it press _Ctrl + C_ at the terminal.


#### License

ISC

[git]: <https://git-scm.com/downloads>

[Node.js]: <https://www.npmjs.com/get-npm>

[docker]: <https://docs.docker.com/docker-for-windows/install/>