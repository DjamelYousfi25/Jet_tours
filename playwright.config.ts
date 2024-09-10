import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
 
  /* Run tests in files in parallel */
  fullyParallel: true,
  //timeout:10000,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
 // retries: process.env.CI ? 2 : 0,
 retries:3,
  /* Opt out of parallel tests on CI. */
  workers:4
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: 'https://www.jettours.com/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [

    {
      name: 'iphone 14 pro max',
      use: { ...devices["iPhone 14 Pro Max"] },
      testMatch: /.mobile/
    },
    {
      name: 'Samsung tab 4',
      use: { ...devices["Galaxy Tab S4"] },
      testMatch: /.mobile/
    },

    {
      name: 'Samsung s9+',
      use: { ...devices["Galaxy S9+"] },
      testMatch: /.mobile/
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
      testMatch: /.mobile/
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
      testMatch: /.mobile/
    },

    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /.desktop/
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] },
      testMatch: /.desktop/
    },


    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      testMatch: /.desktop/
    },
    {
      name: 'iPad 11 pro',
      use: { ...devices["iPad Pro 11"] },
      testMatch: /.Ipad/
      
    },

    // {
    //   name: 'staging',
    //   use: {
    //     baseURL: 'staging.example.com',
    //   },
    //   retries: 2,
    // },
    // {
    //   name: 'production',
    //   use: {
    //     baseURL: 'production.example.com',
    //   },
    //   retries: 0,
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
