# WebDriverIO Introduction

This repository contains solutions for automated testing task 3 of the course Automated Testing in JavaScript using WebDriverIO, Mocha, and the Page Object Model pattern.

## Task Description

Automate the following script:


1. Open https://cloud.google.com/.
2. Click on the icon at the top of the portal page and enter "Google Cloud Platform Pricing Calculator" into the search field.
3. Perform the search.
4. Click "Google Cloud Platform Pricing Calculator" in the search results and go to the calculator page.
5. Click COMPUTE ENGINE at the top of the page.
6. Fill out the form with the following data:
   * Number of instances: 4
   * What are these instances for?: leave blank
   * Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or another User-Provided OS
   * Provisioning model: Regular
   * Machine Family: General purpose
   * Series: N1
   * Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
   * Select “Add GPUs“
     * GPU type: NVIDIA Tesla V100
     * Number of GPUs: 1
   * Local SSD: 2x375 Gb
   * Datacenter location: Frankfurt (europe-west3)
   * Committed usage: 1 Year
     Other options leave in the default state.
7. Click 'Add to Estimate'.
8. Check the price is calculated in the right section of the calculator. There is a line “Total Estimated Cost: USD ${amount} per 1 month”
9. click "Share" to see Total estimated cost
10. click "Open estimate summary" to see Cost Estimate Summary, will be opened in separate tab browser.
11. verify that the 'Cost Estimate Summary' matches with filled values in Step 6.



## Installation

Before you begin, ensure you have the following installed:

- Node.js 
- npm or yarn

Clone the repository and install the dependencies:

git clone https://github.com/yourusername/webdriverio_introduction_task3.git

cd webdriverio_introduction_task3

npm install

### or

yarn install

## Running Tests
To run the tests, use the following command:
npm run wdio

To run the tests multiple times, you can use a loop in your terminal using Bash:
for i in {1..10}; do npm run wdio; done
