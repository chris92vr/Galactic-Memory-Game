# Galactic Memory Game 
Stream Two Project: Interactive Frontend Development - Code Institute

Directly from the depths of the solar system: Galactic Memory Game! Find all the planet combinations!
<h1 align="center">
  <a href="https://chris92vr.github.io/Galactic-Memory-Game/"><img src="https://i.ibb.co/rdJMVPQ/logo-Memory.png" alt="logo-Memory" border="0"></a>
</h1>

## Demo

A live demo can be found [here](https://chris92vr.github.io/Galactic-Memory-Game/).

## UX
 
A memory game for people of all ages (from child to adult), able to teach the appearance and names of the planets (and some satellites).
In total there are 12 cards to match. Each successful pair earns 10 points, each wrong attempt two are deducted. The game ends when all cards are matched, or if you don't have enough points to complete the game with a positive score. You win if you finish with a positive score.
Once the game is finished, the respective message (you won or lost) appears with the final score and a button to restart the game.

### User stories

1. As a new player, I want to easily start the game. 
2. As a new player, I want to see the actual score
3. As a new player, I want to restart the game at any time
4. As a player, I want to see my highest score
4. As a potential client, I want it to be compatible on any screen resolution.
5. As a potential client, I want that works well on any browser, even mobile. 

### Strategy

My goal in design was to make it intuitive and easy to interact to make the gaming experience better.

### Scope

Teach the names of the planets while having fun.

### Design and colors:

#### Fonts:

I used Permanent Marker, from Google Fonts for the initial title of the game.
I used Lato, from Google Fonts for the names of the planets on the cards.


#### Colors:

* ![#0040c8](https://placehold.it/15/0040c8/000000?text=+) #0040c8 - hover buttons background color

* ![#fff](https://placehold.it/15/fff/000000?text=+) #fff - font color buttons and planets name retro cards

* ![#000000](https://placehold.it/15/000000/000000?text=+) black - color of the score and the final message

* ![#adff2f](https://placehold.it/15/adff2f/000000?text=+) greenyellow - color of the name of the matched cards


### Skeleton

[Start wireframe](https://github.com/chris92vr/Galactic-Memory-Game/blob/master/project-documentation/wireframes/start%20wireframe.png)

[Galactic Memory Game wireframe](https://github.com/chris92vr/Galactic-Memory-Game/blob/master/project-documentation/wireframes/galactic%20memory%20game%20wireframe.png)

[end winning message wireframe](https://github.com/chris92vr/Galactic-Memory-Game/blob/master/project-documentation/wireframes/end%20winning%20message%20wireframe.png)

[end losing message wireframe](https://github.com/chris92vr/Galactic-Memory-Game/blob/master/project-documentation/wireframes/end%20losing%20message%20wireframe.png)

[Start (mobile) wireframe](https://github.com/chris92vr/Galactic-Memory-Game/blob/master/project-documentation/wireframes/home%20screeen%20(mobile)%20wireframe.png)

[Galactic Memory Game (mobile) wireframe](https://github.com/chris92vr/Galactic-Memory-Game/blob/master/project-documentation/wireframes/galactic%20memory%20game%20(mobile)%20wireframe.png)

[end winning message (mobile) wireframe](https://github.com/chris92vr/Galactic-Memory-Game/blob/master/project-documentation/wireframes/end%20winning%20message%20(mobile)%20wireframe.png)

[end losing message (mobile) wireframe](https://github.com/chris92vr/Galactic-Memory-Game/blob/master/project-documentation/wireframes/end%20losing%20message%20(mobile)%20wireframe.png)


## Features

This game was developed thanks to HTML%, CSS3 asd Javascript's jquery library. Once the game is started, the cards are shown for three seconds. Once a card is clicked it shows the image with the respective name, if the card clicked later is the same it remains turned over, otherwise it turns over.

### Existing Features

- Start button - allows users to start the game
- Score - shows the user's current score
- Restart button - allows the user to restart the game at any time
- High score - shows the highest score obtained in all previous games
- Card matching - each matched card underlines the name and becomes bold
- End message - shows the user the final result with the respective score

### Features Left to Implement

- Implement different levels of difficulty to better test your memory. 
- Add sound effects 

## Technologies Used

- HTML5
- CSS3
- [Google Fonts](https://fonts.google.com/)
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

Several tests were carried out to verify the correct functioning of the project with positive results.
The functionality of the site is optimal. The memory game contains no bugs and is playable on any browser and device.
Browser compatibility is verified for Firefox, Chrome, Edge and Opera on Windows 10 home; Firefox, Chrome on Ubuntu 19.10 and Firefox, Chrome on Android 10. The responsiveness of the pages is suitable on desktop screens, tablets and mobile phones.
In the folder [project-documentation/testing](https://github.com/chris92vr/Galactic-Memory-Game/tree/master/project-documentation/testing), there are screenshots named in the following format: (screen resolution) - Operating system (browser) - screen description.


In order to to check the validity of the website code, I have used the following:

    - HTML Validation: https://validator.w3.org/ - no errors identified.
    - CSS Validation: https://jigsaw.w3.org/css-validator/ - Identified issues with bootstrap not with my project. 

#### Functionality Test

|Test Description | Expected Outcome | Pass/Fail
| ---|:-----------------------------------------:| :---: | 
| start button| clear screen and start game| pass
| show cards | shows the cards for three seconds once the game is started| pass
| flip cards | the card flips on click, if it is not already rotated and the turned cards have completed their rotation| pass
| card matching| select two cards, if they are the same they remain turned if they do not turn over| pass
| score | the score increases by 10 points for each card match and decreases by two for each wrong attempt | pass
| end game | the game ends when all matches have been found, or if you do not have enough cards available to make a positive score | pass
| high score| The game records and shows the most score high obtained in previous games | pass
| end message | once the game is finished, a message appears with the final result and the score achieved | pass
| end message high score | If finished the game the current score is higher than the current high score, in the final message it writes "Congratulations! You have achieved the highest score" | pass
| responsiveness| the game adapts to all screen resolutions and device | pass
| browser compatibility | the game works correctly on any browser | pass



## Deployment

This project was developed using the [Gitpod online IDE](https://gitpod.io/), committed to git and pushed to GitHub. 

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/chris92vr/Galactic-Memory-Game), the following steps were taken: 
1. Log into GitHub. 
2. From the list of repositories on the screen, select **chris92vr/Galactic-Memory-Game**.
3. From the menu items near the top of the page, select **Settings**.
4. Scroll down to the **GitHub Pages** section.
5. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
6. On selecting Master Branch the page is automatically refreshed, the website is now deployed. 
7. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website.

At the moment of submitting this Milestone project the Development Branch and Master Branch are identical. 

### How to run this project locally

To clone this project from GitHub:
1. Follow this link to the [Project GitHub repository](https://github.com/chris92vr/Galactic-Memory-Game).
2. Under the repository name, click "Clone or download".
3. In the Clone with HTTPs section, copy the clone URL for the repository. 
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type ```git clone```, and then paste the URL you copied in Step 3.
```console
git clone https://github.com/USERNAME/REPOSITORY
```
7. Press Enter. Your local clone will be created.

## Author

**Christian Garofoli** 

## Credits

### Images 
   - Images supplied by Pixbay, Upsplash, Pexels. 

Development time 30 days. 