<h1 align="center">
  <a href="https://standardjs.com"><img src="https://github.com/codedecks-in/Big-Omega-Extension/blob/main/public/logo128.png" alt="LeetHub - Automatically sync your code to GitHub." width="80"></a>
  <br>
  <a href="https://chrome.google.com/webstore/detail/big-%CF%89-enhance-leetcoding/hfjfkofmpdgbfpkgnknikojbpljnkfkf">Big Ω - Enhance Leetcode experience
  <br>
  <br>
</h1>

<p align="center">
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license"/>
  </a>
  <a href="https://chrome.google.com/webstore/detail/big-%CF%89-enhance-leetcoding/hfjfkofmpdgbfpkgnknikojbpljnkfkf">
    <img src="https://img.shields.io/chrome-web-store/v/hfjfkofmpdgbfpkgnknikojbpljnkfkf.svg" alt="chrome-webstore"/>
  </a>
  <a href="https://chrome.google.com/webstore/detail/big-%CF%89-enhance-leetcoding/hfjfkofmpdgbfpkgnknikojbpljnkfkf">
    <img src="https://img.shields.io/chrome-web-store/d/hfjfkofmpdgbfpkgnknikojbpljnkfkf.svg" alt="users">
  </a>
  <a href="https://github.com/codedecks-in/Big-Omega-Extension/graphs/contributors" alt="Contributors">
    <img src="https://img.shields.io/github/contributors/codedecks-in/Big-Omega-Extension" />
  </a>
  <a href="https://github.com/codedecks-in/Big-Omega-Extension/issues" alt="Contributors">
    <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" />
  </a>
  <a href="https://github.com/codedecks-in/Big-Omega-Extension/actions/workflows/github-code-scanning/codeql" alt="CodeQL">
    <img src="https://github.com/codedecks-in/Big-Omega-Extension/actions/workflows/github-code-scanning/codeql/badge.svg?style=flat-square" />
  </a>
</p>

<h2>Find us on Telegram, Chrome-Webstore & Mozilla Firefox</h2>

<a href="https://t.me/codecks"><img align="left" height=200 src="https://media.giphy.com/media/wlR4kWTnwEyY8RwHKM/giphy.gif"></a>
[![Chrome](https://user-images.githubusercontent.com/53124886/111952712-34f12300-8aee-11eb-9fdd-ad579a1eb235.png)](https://chrome.google.com/webstore/detail/big-%CF%89-enhance-leetcoding/hfjfkofmpdgbfpkgnknikojbpljnkfkf) [![Firefox](https://user-images.githubusercontent.com/53124886/126341427-4a4e57aa-767a-467e-83d2-b31fa3564441.png)](https://addons.mozilla.org/en-US/firefox/addon/big-omega-extension/)

## Big Ω - Demo (YouTube Video):
<a href="http://www.youtube.com/watch?feature=player_embedded&v=IhRoe7p1V-I
" target="_blank"><img src="https://github.com/codedecks-in/Big-Omega-Extension/blob/main/public/big-omega.png" 
alt="Big Ω - Enhance Leetcoding experience" height="500" border="10" /></a>

## What is Big Ω?
Big Ω (Big Omega) is a browser extension which enhances your experience while you are solving coding problems online on various competitive programming websites like Leetcode

★ Company Tags
- Reveals information about which companies have asked the problem that you are currently solving and how many times this problem been asked by the same companies

★ Question list for a specific Company
- Provides the company wise list of problems upon click of any specific company tag.
- Users can click on problem and that same problem is opened in a new tab, currently only new UI is supported to show problem list model, for old UI styles are to be added separately.

Your feedback and constructive criticism, is always appreciated, and we look forward to make this browser plugin better day by day, step by step.

Reach out to our Big Omega Team via email - manage.bigomega@gmail.com
  
### BONUS: Star this [repository](https://github.com/codedecks-in/Big-Omega-Extension/) for further development of features. If you want a particular feature, simply request for it!

## Running extention locally
- Go to `chrome://extentions`
- Toggle developer mode on top right in order to enable it
- Click Load unpacked and choose the `build` folder in root of this project
- Your extention is loaded sucessfully, you don't even need to click it, just go to any leetcode problem and extention will start working

## How to build locally
  For Mac:
- Clone project
- Open in any editor of your choice
- If you want to add/remove code then react code is present under `src/`, which you can edit
- Now run `npm run build` to create a loadable build/ folder
- Now to actually test changes we need to load the extention in browser so go to `chrome://extensions` through browser searchbar
- Toggle developer mode on top right in order to enable it
- Click Load unpacked and choose the `build` folder in root of this project
- Your extention is loaded sucessfully, you don't even need to click it, just go to any leetcode problem and extention will start working
  
For Windows: 
- Clone project
- Open in any editor of your choice
- If you want to add/remove code then react code is present under `src/`, which you can edit
- Replace the `scripts` part in `package.json` file to the below mentioned one
```
"scripts": {
          "start": "react-scripts start",
          "zip-build": "bestzip big-omega-extension.zip build/",
          "move-files": "copy leetcode-live.zip ../webapp/public",
          "test": "react-scripts test",
          "eject": "react-scripts eject",
          "build": "set INLINE_RUNTIME_CHUNK=false && node ./build-rewired.js && npm run clean && npm run move-index",
          "clean": "cd build && move static\\js\\*.js big-omega-tools.js && move static\\css\\*.css big-omega-tools.css",
          "move-index": "copy public\\index.html build\\index.html"
        },
```
- Now run `npm run build` to create a loadable build/ folder
- Now to actually test changes we need to load the extention in browser so go to `chrome://extentions` through browser searchbar
- Toggle developer mode on top right in order to enable it
- Click Load unpacked and choose the `build` folder in root of this project
- Your extention is loaded sucessfully, you don't even need to click it, just go to any leetcode problem and extention will start working

## Code References
Special thanks to Huan Xu for this [leetcode-company-wise-problems-2022](https://github.com/hxu296/leetcode-company-wise-problems-2022/blob/main/data/leetcode_problems_and_companies.csv) csv file which helps our extension to unlock the information about which companies have asked the problem.

## Creators [Big Omega Team]
- [Omkar Ajagunde](https://www.linkedin.com/in/omkarajagunde/)
- [Gourav R](https://www.linkedin.com/in/grusiya/)
- [Gaurav Garg](https://www.linkedin.com/in/gaurav-garg-339518141/)
