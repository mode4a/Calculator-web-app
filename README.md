# Calculator Application

## This calculator application is a web-based tool designed to perform arithmetic calculations with a dynamic, user-friendly interface. Built with React on the frontend and powered by a Spring Boot backend, it supports basic mathematical operations like addition, subtraction, multiplication, division, modulo, and exponentiation, along with special operators like square roots and reciprocals.
### Key Features:

    * Arithmetic Operations: Users can input expressions involving multiple operators in one calculation, such as 3 + 5 * 2, and the backend will evaluate the result.
    * Expression Parsing: The Spring Boot backend parses the expression string, identifies operators, and handles the calculation, ensuring accuracy and consistency.
    * Asynchronous Communication: The frontend communicates with the backend using Axios for asynchronous HTTP requests, providing a smooth user experience.
    * Error Handling: Errors during evaluation are managed gracefully, with user-friendly messages displayed in case of invalid inputs or server issues.

## Technical Details:

   * Frontend: Built using React for a responsive interface, with state management for handling inputs and displaying results.
   * Backend: Developed with Spring Boot, providing RESTful endpoints to handle evaluation requests. The backend evaluates the expression, processes operator precedence, and returns the result to the frontend.
    * Expressive UI: Includes clear buttons for each operator and a display area for the current expression and results.

## This application serves as an example of integrating frontend and backend technologies to build a functional, interactive tool with real-world applications.
