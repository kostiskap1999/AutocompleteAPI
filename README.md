# Ad challenge

This project aims for a simple form for housing ad creations, using an external api for autocomplete Area selection suggestions. It features a MySQL database,
backend created with Node/Express and a frontend in React, with SCSS styling

## The backend

The backend connects to a MySQL database, and the handling of the autocomplete suggestions happens in the backend, as well as two more database calls
about posting an ad and getting all ads.

## The frontend

The frontend connects only to the backend, and has two pages and simple react-dom routing, one of which is the form itself, and another is a list of created ads.

## More information

The project features input validation both on the front and back ends, so for example inputs have a maximum number of characters or numeric ones stay numeric. It also cares that on both ends there is some caching for less API calls, with a timeout for caching on the backend. Its architectural design revolves around model classes for both ends so that data always initialise and the developer has better control and dataflow, while calls between the endpoints happen via fetch. Its responsive UI makes it friendly for smaller devices. Error handling has been implemented so that in a bigger project it can be easily expanded and more error codes and detailed alerts on the frontend become available.

## Setting up

To set up the database, backend and frontend, in terms of installing dependencies and uploading the schema to Workbench, navigate to the respective
folders `backend` and `frontend` and follow `README.md` instructions there.