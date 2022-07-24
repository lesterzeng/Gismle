# Project-3---Gina-Ismail-Lester :desktop_computer:

## GISMLE Tasks Management tool (Introduction) :books:

is the flexible work management tool where teams can ideate plans :memo:
:pencil:, collaborate on projects :file_folder:, organize workflows :chart_with_downwards_trend:, and track progress :round_pushpin:in a
visual,productive, and rewarding way. From brainstorm to planning to execution, Gismle manages the big milestones and the day-to-day tasks of working together and getting things done.

## Brief Description :page_facing_up:

- a Board refers to a single project
- a Card refers to an action that the user want to take regarding to the Board (project)
- a Comment refers to any comments the user wants to input in regards to a specific Card (action) i.e. progress, type of method used to complete the action, etc
- Each Board can have multiple of cards which each card can have only 1 out of 3 type of status namely toDo, inProgress and complete
- Each Card starts as toDo as default and can move to inProgress then lastly to complete
- User able to store/view multiple Boards that have the user listed as on of the members

## Technologies Used

|Frontend     |Backend          |
| ------------|-----------------|
|tailwind     |express          |
|tw-elements  |express-validator|
|react-router |jsonwebtoken     |
|redux toolkit|mongoose         |
|react-icons  |uuid             |
|react        |dotenv           |
|             |bcrypt           |
|             |cors             |
|             |nodemon          |

## Installation Instruction

- Download the `Project-3---Gina-Ismail-Lester-main` folder
- create `.env` file inside the Backend_Stuff folder
  - enter PORT, DATABASE_URL, ACCESS_SECRET and REFRESH_SECRET inside the  `.env` file
    - i.e. 
      - PORT=5000
      - DATABASE_URL=mongodb://127.0.0.1:27017/GA_SEI_Project_3
      - ACCESS_SECRET='90b9d97955ce052120eff64f89dbe7be34007f5bbe17cf29fa4eccb20710d591eb83c37905128dadbeebd9824d385bd4223af38b6553d1a6840568db08bc927c'
      - REFRESH_SECRET='ca168c436414349734121b84ebc2a47eff9bce78a94983b9ba19107b4a7ee0c661d9a5a35dda68bb726abb0076e03750d8e15d607e6a8da1a8ff1e0144b6df9b'
- open split terminal
  - 1st terminal 
    - `cd Backend_Stuff`
    - `npm i`
    - `npm run dev`
  - 2nd terminal
    - `cd FrontEnd`
    - `npm i`
    - `npm start`
  - Sign up with an Email address and a Password in the react app i.e `studenta@generalassemb.ly` ,  `password12345` respectively
  - Sign In with registered account
  - Start using the app

## User Stories

### Landing Page (Register/Login)

successfully register and login
- after successful login, the user will be directed to the Dashboard, where the user will see a list of boards

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/44399805/180629510-fdae5495-3e2f-424c-bfcb-f3982f62e869.gif)

if got existing email/ password does not match
- for sign up
  - if there is an existing email, an error modal will pop up with "email already exist" message
  - if the password does not match, an error modal will pop up "password does not match" message
  - if the required inputs are empty, an error modal will pop up "Please re-enter your inputs" message
- for sign in
  - if the email does not exist, an error modal will pop up "username does not exist" message
  - if the password is wrong, an error modal will pop up "login failed" message

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/44399805/180629693-3b218b88-4b3c-4abb-8a1d-5f92f7703021.gif)

reference for the sliding sign in/ sign up page from: https://github.com/anhsirk0/slider-login-signup
Website used for making the gif: https://ezgif.com/


### Dashboard (List of Boards)

Adding/ Deleting/ Editing of Boards
- the user can enter the title of the board and create a new board which the user can edit the title and description of board via the edit button
- The user can delete the board via the delete button
- The user can view more info regarding the board via the view button which will direct user to the board page specific to the board the user click


![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/44399805/180630564-45f866c0-afd7-497e-bb04-6d976f127a7a.gif)

### Board (List of Cards x3)


When the user starts the app, they will be directed to the landing page. the landing page shows the sign up page when the landing page finish loading. If the user does not have an account they can register an account by clicking on the sign up button after filling in the neccesary information and can proceed to clicking the sign in button to move to the sign in page to login afterwards. If they already have an account, they can directly click on the sign in button to login.

After Logging in, they will be directed to the Dashboard where the List of Boards

### component model :bulb:
![Project 3 backend stuff](https://user-images.githubusercontent.com/44399805/180625949-e63ee2f9-3898-400b-9c78-26cdb462482d.png)




