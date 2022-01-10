Task: Country finder
Libraries (required): React js, Redux, Redux-saga
Instructions: (demo - ws application).
1. Write a promise which should be resolved every 30 seconds, with data from this API, by
alphabetical order (a-z).
2. Use redux-saga event channel to handle the promise response and send it to redux state.
3. Store the data (add validation, check if the data already exist in the state).
4. Create a sidebar component:
a. Alphabetical sidebar navigation (only for countries that exist in the list).
b. Clicking on a letter should display all the countries that start with the same letter in a list next
to the sidebar.
c. Advantage: add search country input.
5. Create a list component:
a. Clicking on the country name from the list should display the country’s details in the “Country
Details” component (detailed below).
6. Create a “Country Details” component:
a. Create a title, use Country.name.
b. Create the below view :
Capital Country.capital
Population Country.population
alpha2Code Country.alpha2Code
Flag Country.flag (image)
● Use CSS / SCSS / styled-component, design it yourself. (Advantage: add media queries).
● Use Modern JS syntax.
● Use saga, function generators.
 API Link : https://restcountries.com
● Place a “back” button in the top corner (right || left) show the button when it is possible to go back.
 Use github / gitlab / other