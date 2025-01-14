
# README


## Requirements
- Node
- [Pusher Account](pusher.com) [pusher.com] this is needed for the websocket feature to function


## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <it@github.com:jcalosor/request-monitoring-dashboard.git
   cd request-monitoring-dashboard
   ```

2. **Install Dependencies**
   Make sure you have Node.js and npm installed. Run:
   ```bash
   npm install
   ```

3. **Create the pusher config** In `lib/` directory copy pusher.ts.txt to pusher.ts, and fill up the necessary details:
   ```bash
   const pusherConfig = {
       channel: "",
       event: "",
       appId: "",
       key: "",
       secret: "",
       cluster: "",
       useTLS: false,
   }
   ```
   follow the steps in [pusher.com](pusher.com) to retrieve these values.

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).

5. **Build for Production**
   To create an optimized production build:
   ```bash
   npm run build
   npm start
   ```

6. **Run Tests**
   To execute tests (if configured):
   ```bash
   npm test
   ```

## Architecture Overview

The `request-monitor-frontend` application is structured as follows:

- **Pages**: All application routes are defined within the `pages/` directory, leveraging Next.js’s file-based routing.
- **Components**: Reusable UI components are located in the `components/` directory.
- **Styles**: Tailwind CSS is used for styling. Configuration is managed in `tailwind.config.js`.
- **State Management**: The application leverages React Context API for global state management (if applicable).
- **API Integration**: API calls are centralized within a service layer for maintainability.

## Choice of Technologies and Reasoning

- **Next.js**: Provides server-side rendering (SSR) and static site generation (SSG) for optimal performance and SEO.
- **React**: Enables a component-based architecture for better reusability and scalability.
- **Tailwind CSS**: Simplifies styling with utility-first CSS classes.
- **TypeScript**: Adds static typing, improving code quality and developer experience.
- **Jest/Testing Library**: Ensures robust testing of components and application logic.
- **MaterialReactTable**: Light-weight feature rich react-based data parser table generator package

## Assumptions Made

#### Why did I use MaterialReactTable?

Not too much assumptions in terms of consumption of the API Responses, since there is already a defined spec of the data-structure, 
it gave me the freedom to experiment in some packages that will render data, in the end I have selected MaterialReactTable,
due to it's ease of implementation that almost "out-of-the-box" is functional.

Still in terms of performance it does parsing and rendering in pretty much the same with other js-based table generators,
so there is no compromise between ease-of-implementation and optimization

## Future Improvements

1. **Enhanced Testing**: Add end-to-end (E2E) tests with tools like Cypress.
2. **Internationalization (i18n)**: Support multiple languages for a broader user base.
3. **Performance Optimization**: Integrate lazy loading for components and images.
4. **CI/CD Pipeline**: Automate testing and deployment with GitHub Actions or similar tools.
5. **Advanced State Management**: Evaluate Redux or Zustand for more complex applications.
6. **Support Cross Browser Compatibility**

---
