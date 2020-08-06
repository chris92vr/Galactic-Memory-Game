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
}