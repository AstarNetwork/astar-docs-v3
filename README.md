# Astar Network Official Docs 3.0

Welcome to the Astar Network Official Docs Repo.

This website is built using [Docusaurus](https://docusaurus.io/), a static website generator.

## How to contribute to Astar Docs using a local instance of the Docusaurus engine

### Prerequisites

  - Method 1: Make sure `git` and `yarn` exist as commands in your terminal or VS Code: [https://yarnpkg.com/](https://yarnpkg.com/) **(NOTE: Please make sure you use yarn 1 (classic) by using command `yarn set version classic`**
  - Git/Github: understand what the following commands do
      - managing branches (`git checkout main` and `git checkout -b feat/your-new-branch`
      - Commits (`git add .` and `git commit`, `git push -u origin feat/your-new-branch`)
      - Creating PR in Github
      - maybe: stashing (`git stash` and `git stash pop` are your best friends)
  - Markdown basics
      - titles, subtitles
      - lists
      - hyperlinks
  
  - Method 2: Make sure `yarn` exists as a command in your terminal or VS Code and Github Desktop is installed. All the `git` operations described below can also be found within the menu of the desktop application, and common operations are clearly visible on launch.

### Setup: First time only

  - Clone repo `git clone https://github.com/AstarNetwork/astar-docs-v3`
  - Install dependencies by running `yarn` (`cd astar-docs-v3`, `yarn` )
  - `yarn start` - builds and displays a realtime copy of the docs that updates dynamically based on new updates to the code.

### New document / Modify existing document --> Submit a PR
  
  -  Get latest version of docs locally
      - Make sure you’re on the main branch (`git checkout main`)
      - Pull the latest version of the docs (`git pull`)
      - Create a new branch (`git checkout -b feat/new-feature-name-here`)
  - Create/update the docs as you please
      - Spin up live docs (`yarn start`)
        - If you are working on a translation of a document use `yarn start --locale IT` (example for Italian) (checkout [Docusaurus docs or further reference](https://docusaurus.io/docs/i18n/tutorial)
      - Add new page/tweaks/etc
      - When you’re happy with it, ensure `yarn build` runs without errors
  - PR and staging environment
      - Commit your changes and push the new branch up to Github (`git add .` and `git commit`, `git push -u origin feat/your-new-branch`)
      - Create a new PR on Github (https://github.com/AstarNetwork/astar-docs-v3)
      - Wait for feedback from the team

### Working with images

  - kindly import and use the `<Figure/>` tag instead of `![image]` as this enables smoother translation of docs to other languages (automatic reference to original images, no need to copy images to translated subfolders) and applies some styling such as line breaks, which keeps things prettier.
    
    - Example - as seen in [Astar Docs v2](https://github.com/AstarNetwork/astar-docs/blob/d530139ca7a5ab034a783981d313542e02fdfb54/docs/about/token-economics/inflationary-model.md):
      
      at top of file:
      ```
      import Figure from "/src/components/figure"
      ```
      
      within the file:
      ```
      <Figure caption="Tokenomics Model" src={require('/docs/about/token-economics/img/tokenomics_1.png').default } width="100%" /> 
      ```

    - Please use the absolute path to the image (e.g. `/docs/about/token-economics/img/tokenomics_1.png` instead of `img/tokenomics_1.png` as this facilitates i18n, thank you.
