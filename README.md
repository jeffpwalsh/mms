# mms
mms-chart-app
## Overview
Frontend application that imports a dataset and renders to a dashboard.
User has configuration options.
## Tech Stack
HTML<br>
CSS<BR>
Bootstrap<BR>
JavaScript ES6 + Module Exports<BR>
Chart.js<BR>
Web Storage API | Chrome<BR>
Jest - Testing<BR>
## Application Workflow
### onload
GET: Asynchronus fetch request to RESTful API for data. <BR>
Receive JSON data<BR>
Map through JSON data<BR>
Create 3 arrays from oject mapping<BR>
POST: Data arrays to local web storage API<BR>
Run config file to save additional default settings to local web storage API<BR>
Chart function renders chart from data saved in local browser web storage<BR>
### on user interaction
User can select 3 different charts<BR>
Bar and Line have same data set - RESTFul API<br>
Waterfall chart has static data <br>
Selecting a chart from the menu will update existing chart<BR>
Selecting a new background colour will update exsiting chart<BR>
All values are persisted and saved to local web storage.<BR>
Reloading of program will load previous user state.<BR>
Import data button will run getData function and log new time stamp to UI and local webs storage.<BR>
All chartS intereact on hover to presenting data.<BR>
### testing
Unit test conducted on time stamp function via Jest.<BR>
Multiple console logs on firing functions.<BR>
<br>
<br>  
![mms - snapshot](https://user-images.githubusercontent.com/60255918/181375178-78db3982-f925-4677-8ea4-077b72f79b1b.png)



