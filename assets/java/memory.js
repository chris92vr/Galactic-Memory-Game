$(document).ready(function() {
    var deck = new GalacticMemoryGame();
});

class GalacticMemoryGame {
    constructor(settings) {
        this.settings = {
            container : '.memory',
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
                    img: "assets/img/mercury1.png"
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
                    img: "assets/img/Titan.jpg"
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
            uniqueId: 'c0d31nst1tut3'
        }

        this.settings = Object.assign({}, this.settings, settings);
        this.createButtonStart();
    }
    createButtonStart() {
        this.container = $(this.settings.container);
        var _this = this;
        this.container.html('<button class="start" id="start' + _this.settings.uniqueId + '">Start</button>');
        $('#start' + _this.settings.uniqueId).click(function() {
        _this.container.html('');
        _this.createGame();
        });
     }
   
    createGame() {
        this.deck = this.settings.planets.concat(this.settings.planets).sort(() => 0.5 - Math.random());
        this.matched = 0;
        this.actualCard = "";
        this.score = 0;
        this.isStart = false;
        this.cardsFounded = 0;
        this.createMenu();
        for (var i = 0; i < 24; i++) this.createCard(i);
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
        setTimeout(
            function() {
                $('.card').flip(true);
                setTimeout(
                    function() {
                        $('.card').flip(false);
                        _this.isStart = true;
                    }, 3000);
            }, 500);
    }
    endGame() {
        var _this = this;
        if (this.cardsFounded > 0) {
            this.container.html('div class="end-message"><h2>You Win!</h2><br>You totaled' + this.cardsFounded + 'points</div>');
        } else this.container.html('<div class="end-message"><h2>You Lose!</h2><br>Try Again</div><div class="playAgain" id="playAgain' + _this.settings.uniqueId + '">play again</div>');
        $('#playAgain' + this.settings.uniqueId).click(function() {
            _this.container.html('');
            _this.createGame();
        });

    }
    incScore() {
        $('#score' + this.settings.uniqueId).text(this.cardsFounded);
        if (((this.cardsFounded) + ((24 - ((this.matched) * 2)) * 5)) < 0) {
            this.endGame();
        }
    }
    createCard(id) {
        var front = '<div class="front"></div>';
        var back = '<div class="back"><div class="title">' + this.deck[id].name + '</div></div>';
        var _this = this;
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

                        _this.matched++;
                        _this.cardsFounded += 10;

                        _this.incScore();
                        console.log(_this.matched);
                        if (_this.matched == 12) {
                            _this.endGame();
                        }
                    } else if (_this.actualCard != "" && _this.actualCard != playedCard) {
                        // wrong
                        _this.cardsFounded -= 2;
                        _this.incScore();
                        var actualCard = _this.actualCard;

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