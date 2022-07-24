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

- 

## User Stories

When the user starts the app, they will be directed to the landing page. the landing page shows the sign up page when the landing page finish loading. If the user does not have an account they can register an account by clicking on the sign up button after filling in the neccesary information and can proceed to clicking the sign in button to move to the sign in page to login afterwards. If they already have an account, they can directly click on the sign in button to login.

After Logging in, they will be directed to the Dashboard where the List of Boards

### component model :bulb:
![Project 3 backend stuff](https://user-images.githubusercontent.com/44399805/180625949-e63ee2f9-3898-400b-9c78-26cdb462482d.png)



## Getting Started

### signup / login Page

![ezgif com-gif-maker](https://user-images.githubusercontent.com/44399805/180336486-bdb02a56-8f38-478a-b860-a163595710a3.gif)

reference from: https://github.com/anhsirk0/slider-login-signup

### Dashboard

it will display all out projects in a list.

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/44399805/180339057-c79ce1fa-6c4a-464a-84e0-1a73351c64a7.gif)

### Board

Create a new card ,delete or move from todo to inprogress or completed components.
