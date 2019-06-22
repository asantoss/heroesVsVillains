
var computer;
var player;

function createHero(name) {
    player = new Hero(name);
    player.equip(new Weapon('Axe'));
    return pullPicture(player, 'hero');
}

function createVillain(name){
    computer = new Villain(name);
    computer.equip(new Weapon('Sword'));
    return pullPicture(computer, 'villain');

}

document.getElementById('villainSubmit').addEventListener('click',()=>{
    let text = document.getElementById('villainText').value
    createVillain(text);
})
document.getElementById('heroSubmit').addEventListener('click',()=>{
    let text = document.getElementById('heroText').value;
    createHero(text);
})


document.getElementById('heroAttack').addEventListener('click', () => {
    player.attack(computer);  
    document.getElementById('heroContainer').classList.toggle('heroAttack');
    setTimeout(() => {document.getElementById('heroContainer').classList.toggle('heroAttack');}, 500)
    if(computer.health <= 0){
        return document.getElementById('mainContainer').innerHTML = `<div id="gameOver">
        <h1>You win!</h1>
        <button onclick=reset() width="50px;" height="20px;">Restart</button>
        </div>
        `
    }else{
 return document.getElementById('villain').innerHTML = computer.render()

    }
})
document.getElementById('villainAttack').addEventListener('click', () => {
    computer.attack(player);
        document.getElementById('villainContainer').classList.toggle('villainAttack');
        setTimeout(() => {document.getElementById('villainContainer').classList.toggle('villainAttack');}, 500)
    if(player.health <= 0){
        return document.getElementById('mainContainer').innerHTML = `<div id="gameOver">
        <h2>Game Over!</h2>
        <button onclick=reset() width="50px;" height="20px;">Restart</button>
        </div>
        `
    }else{
       return document.getElementById('hero').innerHTML = player.render();
    }
})

function pullPicture(person, element){
    let pic;
    axios.get(`https://www.superheroapi.com/api.php/10214783813889538/search/${encodeURIComponent(person.name)}`)
    .then(response => {
        pic = response.data.results[0].image.url;
        person.picture = pic;
        document.getElementById(`${element}`).innerHTML = person.render();
    })
}


function reset(){
    computer = null;
    player = null;
    location.href = 'index.html'
}