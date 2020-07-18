# md-resume

This is a sample full stack developer resume template that reads data from a JSON object and dynamically generates the HTML content for you. An example of this can be shown at this [sample-resume](https://resume.madhukm.com/). This is only one available template that will be generated but feel free to contribute and add more templates.

### `Pre-requisites`

1. Just make sure you have a github account, LOL 😛

### `Steps to make your own resume`

1. Fork this repository.
2. To customize it for your needs the only files you will need to change are:

   - `/public/*` (This includes favicons). Highly recommend to use [THIS SITE](https://convertio.co/jpg-ico/). I used the same

     - The `resume.json` is very important as that is the public file that shall be queried for to ftech most recent resume json. (In order to get the same Resume structure, do not change the JSON structure) It should ideally be in sync with `resume-structure.ts` (mentioned below)
     - The `resume.pdf` is the PDF version of the whole page in Laptop mode. I used [Fireshot](https://chrome.google.com/webstore/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg?hl=en) to get a PDF version of the page. (This is a hack. If someone finds a better way to convert HTML -> PDF, kindly let me know as well !)

   - `/src/configs/resume-structure.ts` : It is very important that this file and the `resume.json` (mentioned above stay in sync). The data inside them is ideally the same.
   - `/src/configs/index.ts` : There is just one variable you need to change which is the `resumePublicURL`. It should point to the raw github content of the `resume.json` in your forked repository.
   - `/.github/workflows/master_deploy.yml` : To set up your own workflow follow [this YouTube video](https://www.youtube.com/watch?v=N63C0mkFDFw) or [this very nice blog post](https://keithweaver.ca/lesson/deploy-react-gh-pages-using-github-actions)
   - `/CNAME` : Remove this file, and update the `/package.json` **_deploy-npm-script_** if you **don't** plan to use a custom Domain for your deployment.

3. Push your code to your master 😄 (The pipeline will kick in and your app will be hosted on gh-pages)
4. **NOTE**: Just make sure your Repository is PUBLIC else the raw github URL to fetch the updated latest `resume.json` won't work.
5. After you have deployed this app, just change that one JSON file, and your resume site will automatically take the new content!!🤗

## Stack

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.
- The UI Framework used was [MUI](https://material-ui.com/)

## Ways to show appreciation

If you liked the content, please do the following:

- Star this repository ⭐
- Fork it! 🍴
- I'd say Like and Subscribe 😂, but I don't have a YouTube channel (Yet)

## Contributors

Madhusoodhanan KM
