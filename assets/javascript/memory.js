$(document).ready(function() {
    //Initialize a new object of class GalacticMemoryGame
    let deck = new GalacticMemoryGame();
});
/**
 * Memory game
 * @constructor
 * @param {Object} settings - Default settings of the game.
 * @author Christian Garofoli
 */
class GalacticMemoryGame {
    //class constructor
    constructor(settings) {
        //default settings that will be used later
        this.settings = {
            container: '.memory',
            //card images on the back
            planets: [{
                    name: "earth",
                    img: "earth.jpg"
                },
                {
                    name: "europa",
                    img: "europa.jpg"
                },
                {
                    name: "jupiter",
                    img: "jupiter.jpg"
                },
                {
                    name: "mars",
                    img: "mars.jpg"
                },
                {
                    name: "mercury",
                    img: "mercury.png"
                },
                {
                    name: "moon",
                    img: "moon.jpg"
                },
                {
                    name: "neptune",
                    img: "neptune.jpg"
                },
                {
                    name: "uranus",
                    img: "uranus.jpg"
                },
                {
                    name: "plutos",
                    img: "pluto.jpg"
                },
                {
                    name: "titan",
                    img: "titan.jpg"
                },
                {
                    name: "venus",
                    img: "venus.jpg"
                },
                {
                    name: "saturn",
                    img: "saturn.jpg"
                }
            ],
        }
        //overwrite, where they are declared, the user's settings to the default ones
        this.settings = Object.assign({}, this.settings, settings);
        this.createStartButton();
    }
    //create the button to start the game
    createStartButton() {
        this.container = $(this.settings.container);
        //to refer to the objects of the class, not the click object element
        const _this = this;
        
        this.container.html(
            '<h1 id="title-game">Galactic Memory Game</h1><button class="start" id="start">Start</button>'
        );
    
        $('#start').click(function() {
            //cleans the contents of the container
            _this.container.html('');
            //start the game
            _this.createGame();
        });
    }
    //create the game
    createGame() {
        //create card list to use and sort them randomly
        this.deck = this.settings.planets.concat(this.settings.planets)
            .sort(() => 0.5 - Math.random());
        this.matched = 0;
        this.score = 0;
        this.isStart = false;
        this.click = 0;
        this.first = "";
        this.second = "";
        this.idF = "";
        this.idS = "";
        this.highscore = localStorage.getItem("highscore");
        //create menu
        this.createMenu();
        //adds the cards
        for (var i = 0; i < 24; i++) this.createCard(i);
        //show the cards for a while
        this.showAllCards();
    }
    //create menu, consisting of score and restart button
    createMenu() {
        const _this = this;
        this.container.append(
            '<div class="menu">Score:<span id="score">0</span> &ensp;&ensp;&ensp;<span id="restart" class="restart">Restart</span>&ensp;&ensp;&ensp;High score:<span id="highscore">---</span></div>'
        );
        if ((this.highscore == null)) {
            localStorage.setItem("highscore",0);
             $('#highscore').hidden();
        }else {
            $('#highscore').text(this.highscore);
             $('#highscore').show();
        }
        //restart game
        $('#restart').click(function() {
            _this.container.html('');
            _this.createGame();
        });
    }
    //show the cards when the game starts
    showAllCards() {
        const _this = this;
        //within half a second he shows all the cards
        setTimeout(
            function() {
                $('.card-inner').toggleClass('flipped');
                //within three seconds turn over all the cards
                setTimeout(
                    function() {
                        $('.card-inner').toggleClass('flipped');
                        //confirm game start
                        _this.isStart = true;
                    }, 3000);
            }, 500);
    }
    //ends the game with the respective winning or losing message
    endGame() {
        const _this = this;
        //if the score is greater than 0, you win!
        if (this.score > 0) {
            this.container.html(
                '<div class="end-message"><h2>You Won!</h2><br>You totaled: ' +
                this.score +
                '/120 points</div><div class="playAgain" id="playAgain">play again</div>'
            );
            //if less than 0 you have lost
        } else {
            this.container.html(
                '<div class="end-message"><h2>You Lost!</h2><br><h3>Try Again..</h3></div><div class="playAgain" id="playAgain">play again</div>'
            );
        }
        if (this.score > parseInt(localStorage.getItem(
                "highscore"
            ))) { //if actual score greater than storage higscore
            localStorage.setItem("highscore", this
                .score); //set actual score as highscore
            this.highscore = parseInt(+localStorage.getItem("highscore"));
            $(" .end-message").append(
                '<h3>Congratulations! You have achieved the highest score</h3>')
        }
        //restart game
        $('#playAgain').click(function() {
            _this.container.html('');
            _this.createGame();
        });
    }
    //Update score on screen and end game in case you don't have enough points to finish with positive score
    incScore() {
        $('#score').text(this.score); //update score on screen
        //if you don't have enough cards in play to score a positive score, the game ends
        if (((this.score) + ((24 - ((this.matched) * 2)) * 5)) < 0) {
            this.endGame();
        }
    }
    /**
     * Create memory card
     * @param {Integer} id - Unique card identification number
     * @author Christian Garofoli
     */
    createCard(id) {
        let front = '<div class="front"></div>';
        let back = '<div class="back"><div class="title">' + this.deck[id]
            .name + '</div></div>';
        const _this = this;
        const image_path = 'assets/img/';
        //cards with respective image and the name of the planet behind
        this.container.append('<div class="card"><div id="card' + id +
            '" class="card-inner" data-name="' + this.deck[id]
            .name + '" data-playable="1">' + front + back +
            '</div></div>');
        $('#card' + id + ' .back').css(
            'background-image', 'url("' + image_path + this.deck[id]
            .img + '")');
        $('#card' + id).click(function() {
            //If the game has started and the clicked card is not already turned
            if (_this
                .isStart && $(this).attr('data-playable') == 1) {
                $(this).toggleClass('flipped'); //flip the card
                var playedCard = $(this).attr(
                    'data-name'); //name of the card
                _this.click++;
                if (_this.click == 1) {
                    _this.first =
                        playedCard; //name first card selected
                    _this.idF = $(this); //id first card selected
                    $(this).attr('data-playable',
                        0); //card no longer playable
                }
                if (_this.click == 2) {
                    _this.isStart =
                        false; //avoid clicking on a card before the two wrong combination cards are turned over
                    _this.click = 0; //reset click
                    _this.second =
                        playedCard; //name second card selected
                    _this.idS = $(
                        this); //id second card selected            
                    if (_this.first == _this.second) {
                        //correct match
                        //increases matched cards and the score 10 points
                        _this.matched++;
                        _this.score += 10;
                        _this.incScore();
                        _this.idF.addClass(
                            "matched"
                        ); //added matched class, first card selected
                        _this.idS.addClass(
                            "matched"
                        ); //added matched class, second card selected
                        _this.isStart =
                            true; //set to true boolean variable isStart
                        //end game when you matched all cards
                        $(this).attr('data-playable', 0);
                        if (_this.matched == 12) {
                            _this.endGame();

                        }
                    } else {
                        // wrong match, decreases the score by two points
                        _this.score -= 2;
                        _this.incScore();
                        //after one second turn the wrong card over, reset to playable and set to true boolean variable isStart
                        setTimeout(
                            function() {
                                $(_this.idF).toggleClass(
                                    'flipped');
                                $(_this.idS).toggleClass(
                                    'flipped');
                                $(_this.idF).attr(
                                    'data-playable', 1);
                                $(_this.idS).attr(
                                    'data-playable', 1);
                                _this.isStart = true;
                            }, 1000);
                    }
                }
            }
        });
    }
}