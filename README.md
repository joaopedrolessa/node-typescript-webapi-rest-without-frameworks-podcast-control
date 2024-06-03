
# Podcast Manager

## Description

Podcast Manager is an innovative platform that offers a Netflix-like experience, allowing users to explore a wide variety of podcasts in video format. With an intuitive and user-friendly interface, users can browse through an extensive library of podcasts, organized into various categories such as Health, Fitness, Mindset, Humor, and Politics.

Our platform not only provides a wide range of content for podcast enthusiasts but also facilitates the discovery of new programs through advanced filtering features. Users can easily find specific episodes by searching for the desired podcast name, making content discovery even faster and more efficient.

## Domain

Podcast Manager is a platform that offers a variety of podcasts in video format. With a broad selection of content, ranging from health and humor to politics, our platform allows users to watch and enjoy their favorite podcasts in an engaging visual experience.

With attractive episode covers and direct links to full videos, Podcast Manager makes podcast discovery and viewing simpler and more accessible than ever. Whether for learning something new, having fun, or staying updated, Podcast Manager is your destination to explore the world of video podcasts.

## Features

- Listing podcasts in category sessions:
  - Health, Fitness, Mindset, Humor, Politics, among others
- Filtering episodes by podcast name

## Implementation

### Feature: Listing podcasts in category sessions

**Endpoint:**

- **GET**: Returns the list of episodes

### Feature: Filtering episodes by podcast name

**Endpoint:**

- **GET**: Returns the list of episodes based on a parameter sent by the client for the podcast name

### Controllers

- `podcast-controller.js`: Controllers to list and filter episodes

### Repositories

- `podcast-repository.js`: Repository to access podcast data

### Services

- `serviceFilterEp.js`: Service to filter episodes
- `serviceListEp.js`: Service to list episodes

### Routes

- `routes.js`: Defines application routes

### Utils

- `http-methods.js`: Defines used HTTP methods
- `status-code.js`: Defines used HTTP status codes

## How to Run

1. Clone the repository
2. Install dependencies using `npm install`
3. Create a `.env` file with necessary configurations (e.g., server port)
4. Run the server in development mode using `npm run start:dev`

Here's the README with a hyperlink to the utilized technologies:

## Technologies Used

- [Node.js](https://nodejs.org/)
- [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)

If you need anything else, feel free to ask!

## License

This project is licensed under the MIT License.
