$(document).ready(function() {
    //Initialize a new object of class GalacticMemoryGame
    var deck = new GalacticMemoryGame();
});

class GalacticMemoryGame {
    //class constructor
    constructor(settings) {
        //default settings that will be used later
        this.settings = {
            container: '.memory',
            //card images on the back
            planets: [{
                    name: "earth",
                    img: "assets/img/earth.jpg"
                },
                {
                    name: "europa",
                    img: "assets/img/europa.jpg"
                },
                {
                    name: "jupiter",
                    img: "assets/img/jupiter.jpg"
                },
                {
                    name: "mars",
                    img: "assets/img/mars.jpg"
                },
                {
                    name: "mercury",
                    img: "assets/img/mercury.png"
                },
                {
                    name: "moon",
                    img: "assets/img/moon.jpg"
                },
                {
                    name: "neptune",
                    img: "assets/img/neptune.jpg"
                },
                {
                    name: "uranus",
                    img: "assets/img/uranus.jpg"
                },
                {
                    name: "plutos",
                    img: "assets/img/pluto.jpg"
                },
                {
                    name: "titan",
                    img: "assets/img/titan.jpg"
                },
                {
                    name: "venus",
                    img: "assets/img/venus.jpg"
                },
                {
                    name: "saturn",
                    img: "assets/img/saturn.jpg"
                }
            ],
            //unique code that associated with the id elements of the class, allows to avoid interference with other homonymous elements not created by the class itself
            uniqueId: 'c0d31nst1tut3'
        }
        //overwrite, where they are declared, the user's settings to the default ones
        this.settings = Object.assign({}, this.settings, settings);
        this.createStartButton();
    }
    //create the button to start the game
    createStartButton() {
        this.container = $(this.settings.container);
        //to refer to the objects of the class, not the click object element
        var _this = this;
        this.container.html('<h1 id="title-game">Galactic Memory Game</h1><button class="start" id="start' + _this.settings.uniqueId + '">Start</button>');
        $('#start' + _this.settings.uniqueId).click(function() {
            //cleans the contents of the container
            _this.container.html('');
            //start the game
            _this.createGame();
        });
    }

    createGame() {
        console.log(typeof this.settings);
        //create card list to use and sort them randomly
        this.deck = this.settings.planets.concat(this.settings.planets).sort(() => 0.5 - Math.random());
        this.matched = 0;
        this.actualCard = "";
        this.score = 0;
        this.isStart = false;
        //create menu
        this.createMenu();
        //adds the cards
        for (var i = 0; i < 24; i++) this.createCard(i);
        //show the cards for a while
        this.showAllCards();
    }
    createMenu() {
        var _this = this;
        this.container.append('<div class="menu">' + 'Score:<span id="score' + this.settings.uniqueId + '">0</span> &ensp;&ensp;&ensp;<span id="restart' + this.settings.uniqueId + '" class="restart">Restart</span></div>');
        $('#restart' + this.settings.uniqueId).click(function() {
            _this.container.html('');
            _this.createGame();
        });
    }
    showAllCards() {
        var _this = this;
        //within half a second he shows all the cards
        setTimeout(
            function() {
                $('.card').flip(true);
                //within three seconds turn over all the cards
                setTimeout(
                    function() {
                        $('.card').flip(false);
                        //confirm game start
                        _this.isStart = true;
                    }, 3000);
            }, 500);
    }
    endGame() {
        var _this = this;
        //if the score is greater than 0, you win!
        if (this.score > 0) {
            this.container.html('div class="end-message"><h2>You Win!</h2><br>You totaled' + this.score + 'points</div>');
        } else this.container.html('<div class="end-message"><h2>You Lose!</h2><br>Try Again</div><div class="playAgain" id="playAgain' + _this.settings.uniqueId + '">play again</div>');
        //restart game
        $('#playAgain' + this.settings.uniqueId).click(function() {
            _this.container.html('');
            _this.createGame();
        });

    }
    incScore() {
        $('#score' + this.settings.uniqueId).text(this.score);
        //if you don't have enough cards in play to score a positive score, the game ends
        if (((this.score) + ((24 - ((this.matched) * 2)) * 5)) < 0) {
            this.endGame();
        }
    }

    createCard(id) {
        var front = '<div class="front"></div>';
        var back = '<div class="back"><div class="title">' + this.deck[id].name + '</div></div>';
        var _this = this;
        //cards with respective image and the name of the planet behind
        this.container.append('<div id="card' + id + '-' + this.settings.uniqueId + '" class="card" data-name="' + this.deck[id].name + '" data-playable="1">' + front + back + '</div>');
        $('#card' + id + '-' + this.settings.uniqueId + ' .back').css('background-image', 'url("' + this.deck[id].img + '")');
        $('#card' + id + '-' + this.settings.uniqueId).flip({
            axis: 'y',
            trigger: 'manual'
        });
        $('#card' + id + '-' + this.settings.uniqueId).click(function() {
            if ($(this).attr('data-playable') == 1 && _this.isStart) {
                var card = $(this).data("flip-model");
                if (card.isFlipped) {
                    $(this).flip(false);
                } else {
                    $(this).flip(true);
                }
                var playedCard = $(this).attr('data-name');
                if (_this.actualCard == "") {
                    _this.actualCard = playedCard;
                    $(this).attr('data-playable', 0);
                } else {
                    if (_this.actualCard == playedCard) {
                        // correct
                        $('div[data-name="' + _this.actualCard + '"]').attr('data-playable', 0);
                        //increases matched cards and the score 10 points
                        _this.matched++;
                        _this.score += 10;
                        _this.incScore();
                        //end game when you matched all cards
                        if (_this.matched == 12) {
                            _this.endGame();
                        }
                    } else if (_this.actualCard != "" && _this.actualCard != playedCard) {
                        // wrong, decreases the score by two points
                        _this.score -= 2;
                        _this.incScore();
                        var actualCard = _this.actualCard;
                        //after one second turn the wrong card over and reset playable
                        setTimeout(
                            function() {

                                $('div[data-name="' + actualCard + '"]').flip(false);
                                $('div[data-name="' + playedCard + '"]').flip(false);
                                $('div[data-name="' + actualCard + '"]').attr('data-playable', 1);
                                $('div[data-name="' + playedCard + '"]').attr('data-playable', 1);

                            }, 1000);

                    }
                    _this.actualCard = "";
                }
            }

        });

    }
}