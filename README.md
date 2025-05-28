# Conduit Local testing

## Table of contents

- [Description](#description)
- [Preparation](#preparation)
- [Main Task](#main-task)
- [Task Reporting](#task-reporting)

## Description

In this task you will practice working with the localy setup envioroment with the help of Docker Compose. 
The deployed localy Conduit application has some new functionality implemented which is not yet deployed to the Staging environment. You will need to update the tests according to the changes. 

In this task, you will 
## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running `git checkout -b task_solution`.
3. Run the installation commands:

    - `npm ci`
    - `npx playwright install` 

## Main Task

1. Start the [local Conduit application](https://github.com/mate-academy/qa_pw_conduit_local_setup). using instructions from the theory. 
2. Create file `.env.local` under the `./env` folder. Add the `BASE_URL=http://localhost:1667` to this file.
3. Add npm scripts for short-catting commands: 
 - `ENV_TYPE=local npx playwright test`
 - `ENV_TYPE=local npx playwright test --ui` 
4. Try to run the existing tests against the local Conduit setup. You will see that the tests are faling.
5. Implement the methods for the chnaged functionality and fix all the tests.
6. Note, that some page Routes are changed as well. Add the environment variables for these routes to the corresponding .env files to handle the differences.   
7. Make sure all the tests are passing.  

## Task Reporting

1. Add and commit all your updates.
2. Push the code to the origin.
3. Create a PR for your changes.
4. Keep implementing suggestions from code review until your PR is approved.
