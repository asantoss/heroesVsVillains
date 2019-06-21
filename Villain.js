class Villain extends Person {
    constructor(name){
        super(name);
        this.picture = null;
    }
    render(){
        return `
        <h2>${this.name.toUpperCase()}</h2>
        <div class="container">
         <div class="skills css" style="width:${this.health}%; background-color: red;">${this.health}</div>
        </div>
        <img src="${this.picture}" id="villainImage" width="200px" height="250px">`
    }
}