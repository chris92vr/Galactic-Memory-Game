class GalacticMemoryGame{
    constructor(settings){
        this.settings= {
            container = ".memory",
            planets: [
                {name:"earth", img:"assets/img/earth.jpg"},
                {name:"earth", img:"assets/img/earth.jpg"},
                {name:"earth", img:"assets/img/earth.jpg"},
                {name:"earth", img:"assets/img/earth.jpg"},
                {name:"earth", img:"assets/img/earth.jpg"},
                {name:"earth", img:"assets/img/earth.jpg"},
                {name:"earth", img:"assets/img/earth.jpg"},
                {name:"earth", img:"assets/img/earth.jpg"},
                {name:"earth", img:"assets/img/earth.jpg"},
                {name:"earth", img:"assets/img/earth.jpg"},
                {name:"earth", img:"assets/img/earth.jpg"},
                {name:"earth", img:"assets/img/earth.jpg"}
            ],
            uniqueId:"c0d31nst1tut3"
        }

        this.settings=Object.assign({},this.settings);
        this.createButtonStart();
    }
    createStartButton(){
        this.containe=$(this.container);
        var _this=this;
        this.container.html('<button class="start id="start"'+_this.settings.uniqueId+'">Start</button>');
        $('#start'+_this.settings.uniqueId).click(function(){
            this.container.html("");
            this.createGame();
        });
    }
    createGame(){
        this.deck =this.settings.planets.concat(this.settings.planets).sort(()=>0.5 -Math.random());
        this.matched =0;
        this.actualCard="";
        this.score= 0;
        this.isSTart=false;
        this.cardFounded=0;
        this.createMenu();
        for(var i=0;i<24;i++) this.createCard(i);
        this.showAllCards;
    }
    createMenu(){
        var _this=this;
        this.containe.append('<div class="menu">'+'Score:<span id="score'+this.settings.uniqueId+'">0</span></div> &ensp;&ensp;&ensp;&ensp;<span id="restart'+this.settings.uniqueId+'"class="restart">Restart</span>&ensp;&ensp;&ensp;</div>');
        $('#restart'+this.settings.uniqueId).click(function(){
            _this.container.html('');
            _this.createGame();
        });
    }
    showAllCards(){
        var _this=this;
        setTimeout(
            function(){
                $('.card').flip(true);
                setTimeout(
                    function(){
                        $('.card').flip(false);
                        _this.isStart= true;
                    },3000);
            }, 500);
        }
        
        
    }

    
