Task Description:
UC-1 Test Login form with empty credentials:
Type any credentials into "Username" and "Password" fields.
Clear the inputs.
Hit the "Login" button.
Check the error messages: "Username is required".
UC-2 Test Login form with credentials by passing Username:
Type any credentials in username.
Enter password.
Clear the "Password" input.
Hit the "Login" button.
Check the error messages: "Password is required".
UC-3 Test Login form with credentials by passing Username & Password:
Type credentials in username which are under Accepted username are sections.
Enter password as secret sauce.
Click on Login and validate the title “Swag Labs” in the dashboard.
Provide parallel execution, add logging for tests and use Data Provider to parametrize tests. Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.

Two files were added as “step-definitions”: action-steps and validation-steps. The file action-steps.js includes the actions “Given” and “When”. In validation-steps, there are only the “Then” actions. Inside the folder named “pages” are: base.page.js (essentials of the web page), login.page.js (actions to do in the login page), dashboard.page.js (actions to do in the dashboard after login). 
The components, the error.component is the definition of the text that comes out when you try to log in with invalid credentials. The header should include the objects that are in the header of the page, including the dashboard.
A support file named “compare-text” is included to compare the text in the validation steps.
