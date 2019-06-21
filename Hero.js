class Hero extends Person {
    constructor(name){
        super(name);
    }
    render() {
        return `
        <h2>${this.name}</h2>
        <div class="container">
         <div class="skills css" style="width:${this.health}%; background-color: red;">${this.health}</div>
        </div>
        <img src="${this.picture}" width="200px" height="250px">`
    }
}