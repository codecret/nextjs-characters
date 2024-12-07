# Rick and Morty Character Listing and Filtering

https://github.com/user-attachments/assets/b21d3dfc-4876-4858-969d-7b7a0036fe25


This project allows users to list and filter characters from the [Rick and Morty API](https://rickandmortyapi.com). Characters can be filtered by **status** and **gender**, with the filters working together. For example, you can select "alive" and "male" to view only male characters who are alive.

## Technologies Used

- **Next.js**: For server-side rendering (SSR) and routing.
- **Tailwind CSS**: For styling the user interface.
- **TypeScript**: For type safety and better developer experience.

## Features

- **Character Listing**: Displays a list of characters from the Rick and Morty API.
- **Filtering**: Characters can be filtered based on **status** (alive, dead, unknown) and **gender** (male, female).
- **SSR (Server-Side Rendering)**: Pages are rendered on the server for better SEO and faster initial load times.
- **Integrated Filters**: Filters are designed to work together, allowing the user to choose multiple criteria at once.
- **Responsive Design**: The UI is responsive and adapts to different screen sizes.

## Project Structure

- `app/` - The main app folder where pages and components are stored.
  - `components/` - Shared components such as the `CharacterItem` and filter UI.
  - `pages/` - SSR pages for listing and filtering characters.
  - `styles/` - Tailwind CSS setup for styling.

## Getting Started

### Prerequisites

- Node.js (v16.x or later)
- npm (v7.x or later) or yarn

### Installation

1. Clone the repository:

   - `git clone <repository-url>`

2. Navigate into the project directory:

   - `cd <project-directory>`

3. Install dependencies:

   - `npm install` or `yarn install`

4. Run the development server:

   - `npm run dev` or `yarn dev`

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

- When you open the app, you will see a list of characters from the Rick and Morty API.
- You can filter characters based on **gender** and **status**.
- The results will automatically update as you change the filters.

## Design

The design is based on the following principles:

- **Simple and Clean**: Focus on usability with a minimalistic layout.
- **Responsive**: Ensures the app works well on both mobile and desktop devices.
- **Intuitive Filters**: Easily filter characters without confusion.

## Example:

Select the following filters:

- **Gender**: Male
- **Status**: Alive

This will return all male characters who are alive, integrated seamlessly into the displayed list.
