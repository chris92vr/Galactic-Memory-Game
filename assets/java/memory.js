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
    
}