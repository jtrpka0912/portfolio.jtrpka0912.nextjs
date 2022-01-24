The following information is divided by directories:

### .VSCode
Different tasks that are used most often when developing the portfolio such as running a dev environment of NextJS and the Jest test runner.

### __Tests__
All of the unit tests that are done using Jest and the React Testing Library. The folders are structured to mimic the root folders of the web application.

### API
These are the third-party API requests that go to REST API services.

### Components
All of the React non-NextJS components rest. They are divided into sub-directories based on need:

- Context: All of the Context API/hooks are constructed.
- Home Page: All of the home page only components.
- Layout: The page layout components like the header, body, and footer.
- Modals: Each of the different modals available from the base component in _ui_
- Project Detail Page: This will include the main area content, side bar widgets, and the image gallery.
- Sections: Full section components that will be used throughout the rest of the web application.
- UI: Small, reusable components that are frequently around the web app.

### Cypress
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
All of the integration and end-to-end testing are used with Cypress

### Helpers
Helper functions, based on specific needs, are used around the web application.

There is an _API_ folder that is specifically tailored to help with the API requests in the _API root_ folder.

### Models
These are the different data types used through the web application. This includes the *portfolio* and *resume* types. (Resumes are coming soon.)

### Pages
The NextJS page components rest here.

### Posts
The actual content in the form of Markdown files that populate the web application.

### Public
Assets such as images are stored in this folder. This also includes the JSON file that stores all of the technologies used for my projects and job experiences (resumes and job experiences are coming soon).

### Styles
The collection of SASS style sheets include references to the Bulma SASS files are in this folder. There is not much styling happening as this mostly utilizing the utility classes available from Bulma.