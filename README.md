### Pokémon Search Web Application

This project is a simple web application that allows users to search for Pokémon by name or ID number and displays detailed information about the Pokémon retrieved from an external API. The app utilizes HTML, CSS, and JavaScript to interact with the [PokeAPI](https://pokeapi.co/) (through a proxy) and dynamically render Pokémon data on the webpage.

#### Features:

1. **Search Functionality**:
   - The user can input a Pokémon's name or ID number into a search field and click a search button to fetch data from the API.

2. **Clear Previous Data**:
   - Before displaying new Pokémon data, the app clears any existing information to ensure the interface is updated correctly.

3. **Fetch Pokémon Data**:
   - The `fetchData` function retrieves Pokémon data from the API using the user input (either the name or ID).
   - The fetched data includes details such as the Pokémon's name, ID, weight, height, types, base stats, and sprite (image).

4. **Display Pokémon Data**:
   - The app displays various Pokémon attributes including:
     - **Name**: Displayed in uppercase.
     - **ID**: Displayed with a `#` symbol.
     - **Weight**: Displayed with the label "Weight".
     - **Height**: Displayed with the label "Height".
   - The Pokémon's base stats (HP, Attack, Defense, Special Attack, Special Defense, and Speed) are shown with individual values.
   - The Pokémon's image sprite is displayed dynamically.

5. **Pokémon Types**:
   - The app shows the types associated with the Pokémon.
   - Each type has an associated image, which is fetched and displayed using the `fetchTypeImg` function.

6. **Dynamic Image and Type Handling**:
   - The app dynamically sets and displays the Pokémon's sprite and type images using helper functions like `setImg` and `setTypeImage`.

7. **Error Handling**:
   - If a Pokémon is not found or there is an error in fetching data, the app alerts the user.

#### How It Works:

- **HTML Elements**: The app references various DOM elements using `getElementById` to dynamically update the UI based on the API data.
- **Event Listener**: The `searchButton` is tied to an event listener that triggers the Pokémon search and data display when clicked.
- **Async/Await**: The app uses asynchronous JavaScript (`async/await`) to handle API requests, ensuring smooth and non-blocking operations.

#### How to Use:

1. **Search for a Pokémon**:
   - Enter the name or ID of a Pokémon in the search input field.
   - Click the "Search" button to retrieve and display the Pokémon's data.

2. **View Pokémon Information**:
   - The Pokémon's name, ID, weight, height, base stats, image, and types will be displayed on the page.

This web app serves as a practical example of how to fetch and display data from an external API using JavaScript. It's ideal for those looking to understand basic web development concepts and API integration.
