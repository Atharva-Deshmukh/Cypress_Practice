command to create package.json ->  **npm -i init**

To verify if cypress is installed correctly ->  **cypress verify**

command to install cypress -> **npm install cypress --save -dev**

create **.gitignore** file and add node_modules to avoid pushing them

command to run cypress -> **npx cypress open**

__________________________________________________
after adding this in package.json -> 
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
command to run cypress -> **npm run cypress:open**
_____________________________________________________

command to install cy.waitUntil() -> **npm install --save-dev cypress-wait-until**
command to install cy.waitUntil() -> **npm install --save-dev @types/cypress**

<!-- if a spec is of .ts, then changes are to be made in this file -->
command to create a tsconfig.json file -> **tsc --init --types cypress --lib es6**

to run cypress without browser, inside terminal like the pipeline -> cypress run --headless
