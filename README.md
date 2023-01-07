# nodeAss3

<h3>What is Middleware in node.js ?</h3>
<p>
Middleware are like any general functions which takes three parameters as request,response and next function.<br>
* These middleware are used to execute some function before the response is send back to the client.<br>
* It mostly gets used for the authentication,that before we send the response,we can authenticate if the API request is called from the       client with proper user credentials or not.<br>
* These middleware can be applied on the whole applications level as well as on one particular API route.<br>
* next() function is very important ,after the end of each middleware we should execute next function so that the program<br>
   execution can move either to next middleware or to main route,if this function is not added then execution will not move forward.
</p>
