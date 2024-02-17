# Countries Catalog Implementation

This project is a catalog of countries, implemented using React.js. It utilizes the [REST Countries API](https://restcountries.com/) to fetch country-related data and provides various features as described below.

## Requirements

1. **API Usage**: The project utilizes the [REST Countries API](https://restcountries.com/) to fetch country data.

2. **Displayed Fields**:
   - Flags: Displayed using the PNG file within the `flags` property.
   - Country Name: Official country name (`name.official`).
   - 2-character Country Code: `cca2`.
   - 3-character Country Code: `cca3`.
   - Native Country Name: Native country name (`name.nativeName`).
   - Alternative Country Name: Alternative spellings (`altSpellings`).
   - Country Calling Codes: International dialing codes (`idd`).

3. **Search Functionality**: Users can search for countries by name using fuzzy search.

4. **Sorting**: Countries can be sorted by name in ascending or descending order.

5. **Pagination**: Pagination is implemented with 25 rows per page.

6. **Modal Popup**: Clicking on a country name opens a modal popup displaying additional information about the country.

## Deployment

The project is deployed to GitHub Pages, and the commit history is maintained.

## Technologies Used

- React.js: Used as the frontend framework for building the project.
- REST Countries API: Utilized to fetch country-related data.

## Project Structure

- **src/components**: Contains React components used in the project, including the Catalog and Modal components.
- **src/services**: Includes the service file for fetching data from the REST Countries API.
- **src/styles**: Holds CSS files for styling components.

## Usage

To run the project locally, follow these steps:

1.Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```
2. Navigate to the project directory:

  ```bash
  cd your-repository
  ```
3. Install dependencies:

  ```bash
  npm install
  ```
4. Start the development server:

  ```bash
  npm start
  ```
5. Access the project in your web browser.
