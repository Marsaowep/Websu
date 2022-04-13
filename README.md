# Websu
Websu is a MERN stack based web app designed to enhance users hand-eye coordination through a simple target-based game. The purpose of this application is to provide users a fun method of practicing their mechanical aiming skills using either touch or mouse movements. This web-app will feature an aiming activity involving targets that will appear on the users screen, in which the user must attempt to click on these targets to add to their user session score. 

The web-app has multiplayer support, where users can battle against one another in the same lobby, measuring the total correct hits, speed and accuracy of their hits against each other. 

[Websu Demo Video](https://drive.google.com/file/d/1g9Q4JXNVLU810jl8J_HDvFrPq0ZCsJMd/view?usp=sharing)

# Setup Instructions
In order to use the database functionality of the web app, you will need to add your public IP address to our Mongo Repository as a trusted IP to allow you to read and write to/from the database. You will need to contact one of the developers of this project to add your IP to our mongo repository, and to send you the .env file. 

## MongoDB Setup 
Please contact one of the developers for setup instructions. 

## NodeJS Server Setup

In your working directory, run the following command<br/> 
```npm i```<br/> 

## React App Setup

Navigate to \Front-End\websu-client and run the following command<br>
```npm i```<br/> 


# Run Instructions
In your working environment, navigate to /WebSu and run the following command:<br/>
``` node server.js ``` <br/>
To run the main backend server.<br/>

Once this is done, Navigate to \Front-End\websu-client, and run<br/> 
```npm start```<br/> to start up the react server. Give it a minute, it may take some time to set up for the first time. 

# Game Instructions:
1. Log in with (username: "test" password: "123") or register to create your own account. There is also automatic checking to make sure if you register, your username is unique, and if you log in your password must be correct.

2. Now you will be at the main menu screen. Select either single player or multiplayer. Single player will automatically start a game for you, and multiplayer will give you the option to create a lobby or join one. 

3. In the lobby screen, you can either generate a lobby with a custom id, that you can send to your friends to allow for multiple users in the lobby, and you will see their name in the lobby list as they leave or join. Or you can join an existing lobby by copy and pasting a lobby ID from a host. If you are the host, you can start the game whenever you want, and if you are not, the game will not allow you to start the game. 

4. When start game is clicked, all users in the lobby will immediatly be sent to the gameplay screen, where there will be 30 randomly generated red buttons that they must click. The goal is to click them all faster than your other friends, where upon completion, your time will be reported to you, and the winner will be announced to all users on the same screen.

5. After a game, you can either return to main menu, or go back to the lobby and wait for the next game to start. If a host leaves the lobby, the lobby will die for all players inside. If a non-host leaves the lobby, the lobby list will be updated accordingly. 
