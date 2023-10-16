



// console.log(battlegroundPosition)

document.addEventListener("keydown", checkSide);
let sideLeft = false;
let sideRight = true;

function checkSide(event) {
    if (event.keyCode == 65 || event.keyCode == 83 ) {
        sideLeft = true;
        sideRight = false;
        console.log("Left", sideLeft);
        console.log("Right", sideRight);
        return(sideRight,sideLeft)
    } else if (event.keyCode == 68 || event.keyCode == 87 ) {
        sideLeft = false;
        sideRight = true;
        console.log("Left", sideLeft);
        console.log("Right", sideRight);
        return(sideRight,sideLeft)
    }
}













function controller() {
    document.addEventListener("keydown", (e) => {
        console.log(e.keyCode)

        switch (e.keyCode) {
            case 49: //attack
                setTimeout(pressAttack,1000)
                break;
            case 87: //top
                player.y -= player.step
                player.el.style.top = `${player.y}px`
                player.el.style.backgroundImage = `url(${player.side.right})`
                anamationWalkRight(player.movR += 1)
                break;
            case 83://bottom
                player.y += player.step
                player.el.style.top = `${player.y}px`
                player.el.style.backgroundImage = `url(${player.side.left})`
                anamationWalkLeft(player.movL += 1)
                break;
            case 65://left

                player.x -= player.step
                player.el.style.left = `${player.x}px`
                // player.el.style.backgroundImage = `url(${player.side.left})`             
                anamationWalkLeft(player.movL += 1)
                backgroundMov(world.positionGround += 5);
                backgroundMov(world.positionGroundDecor += 5);
                backgroundMov(world.positionBackDecor += 5);
                backgroundMov(world.positionBackLand += 4);
                break;
            case 68://right

                player.x += player.step
                player.el.style.left = `${player.x}px`
                // player.el.style.backgroundImage = `url(${player.side.right})`
                anamationWalkRight(player.movR += 1)
                backgroundMov(world.positionGround -= 5);
                backgroundMov(world.positionGroundDecor -= 5);
                backgroundMov(world.positionBackDecor -= 5);
                backgroundMov(world.positionBackLand -= 4);
                break;
        }
    })
}


function anamationWalkLeft() {

    switch (player.movL) {
        case 1:
            // player.side.right = "/src/sprites/player/majo/walk/majo-right-walk-1.png";
            player.el.style.backgroundImage = `url(/src/sprites/player/majo/walk/majo-left-walk-1.png)`
            break

        case 2:
            // player.side.right = "/src/sprites/player/majo/walk/majo-right-walk-2.png";
            player.el.style.backgroundImage = `url(/src/sprites/player/majo/walk/majo-left-walk-2.png)`
            break

        case 3:
            // player.side.right = "/src/sprites/player/majo/walk/majo-right-walk-3.png";
            player.el.style.backgroundImage = `url(/src/sprites/player/majo/walk/majo-left-walk-3.png)`
            break

        case 4:
            // player.side.right = "/src/sprites/player/majo/walk/majo-right-walk-4.png";
            player.el.style.backgroundImage = `url(/src/sprites/player/majo/walk/majo-left-walk-4.png)`
            break

        case 5:
            // player.side.right = "/src/sprites/player/majo/walk/majo-right-walk-5.png";
            player.el.style.backgroundImage = `url(/src/sprites/player/majo/walk/majo-left-walk-5.png)`
            break

        case 6:
            // player.side.right = "/src/sprites/player/majo/walk/majo-right-walk-6.png";
            player.el.style.backgroundImage = `url(/src/sprites/player/majo/walk/majo-left-walk-6.png)`
            break

        case 7:
            // player.side.right = "/src/sprites/player/majo/walk/majo-right-walk-7.png";
            player.el.style.backgroundImage = `url(/src/sprites/player/majo/walk/majo-left-walk-7.png)`
            player.movL = 0
            break
    }
}


function anamationWalkRight() {
    switch (player.movR) {
        case 1:
            // player.side.right = "/src/sprites/player/majo/walk/majo-right-walk-1.png";
            player.el.style.backgroundImage = `url(/src/sprites/player/majo/walk/majo-right-walk-1.png)`
            break

        case 2:
            // player.side.right = "/src/sprites/player/majo/walk/majo-right-walk-2.png";
            player.el.style.backgroundImage = `url(/src/sprites/player/majo/walk/majo-right-walk-2.png)`
            break

        case 3:
            // player.side.right = "/src/sprites/player/majo/walk/majo-right-walk-3.png";
            player.el.style.backgroundImage = `url(/src/sprites/player/majo/walk/majo-right-walk-3.png)`
            break

        case 4:
            // player.side.right = "/src/sprites/player/majo/walk/majo-right-walk-4.png";
            player.el.style.backgroundImage = `url(/src/sprites/player/majo/walk/majo-right-walk-4.png)`
            break

        case 5:
            // player.side.right = "/src/sprites/player/majo/walk/majo-right-walk-5.png";
            player.el.style.backgroundImage = `url(/src/sprites/player/majo/walk/majo-right-walk-5.png)`
            break

        case 6:
            // player.side.right = "/src/sprites/player/majo/walk/majo-right-walk-6.png";
            player.el.style.backgroundImage = `url(/src/sprites/player/majo/walk/majo-right-walk-6.png)`
            break

        case 7:
            // player.side.right = "/src/sprites/player/majo/walk/majo-right-walk-7.png";
            player.el.style.backgroundImage = `url(/src/sprites/player/majo/walk/majo-right-walk-7.png)`
            player.movR = 0
            break
    }
}

function backgroundMov() {


    // battleground = document.querySelector('.backgroundGame_item-battleground')
    // frontDecor = document.querySelector('.backgroundGame_item-frontDecor')
    // backLand = document.querySelector('.backgroundGame_item-backLand')
    // backDecor = document.querySelector('.backgroundGame_item-backDecor')
    // groundDecor = document.querySelector('.backgroundGame_item-groundDecor')

    // let battlegroundPosition = 0
    // let frontDecorPosition = 0
    // let backLandPosition = 0
    // let backDecorPosition = 0
    // let groundPosition = 0

    // battleground.style.left = battlegroundPosition
    // frontDecor.style.left = frontDecorPosition
    // backLand.style.left = backLandPosition
    // backDecor.style.left = backDecorPosition
    // groundDecor.style.left = groundPosition  

    // battlegroundPosition = "300px"




    battleground.style.left = world.positionGround + "px"
    groundDecor.style.left = world.positionGroundDecor + "px"
    backDecor.style.left = world.positionBackDecor + "px"
    backLand.style.left = world.positionBackLand + "px"




}


function init() {
    gameZone.innerHTML += `<div class="player" style="left: ${player.x}px; top: ${player.y}px; background-image: ${player.img}url "></div>`
    player.el = gameZone = document.querySelector('.player')


    world.el = battleground = document.querySelector('.backgroundGame_item-battleground')
    battleground.style.left = world.positionGround + "px"


    world.el = groundDecor = document.querySelector('.backgroundGame_item-groundDecor')
    groundDecor.style.left = world.positionGroundDecor + "px"


    world.el = backDecor = document.querySelector('.backgroundGame_item-backDecor')
    backDecor.style.left = world.positionBackDecor + "px"


    world.el = backLand = document.querySelector('.backgroundGame_item-backLand')
    backLand.style.left = world.positionBackLand + "px"

}

function game() {
    init();
    controller();


}

let battleground = document.querySelector('.backgroundGame_item-battleground')
let frontDecor = document.querySelector('.backgroundGame_item-frontDecor')
let backLand = document.querySelector('.backgroundGame_item-backLand')
let backDecor = document.querySelector('.backgroundGame_item-backDecor')
let groundDecor = document.querySelector('.backgroundGame_item-groundDecor')

let gameZone = document.querySelector('.game_viewer'),
    fps = 1000 / 60;
player = {
    run: false,
    position: 1,
    step: 20,
    el: false,
    x: 550,
    y: 400,
    side: {
        right: "/src/sprites/player/majo/stay/majo-right-stay.png",
        left: "/src/sprites/player/majo/stay/majo-left-stay.png",
    },
    movR: 1,
    movL: 1,


}


world = {
    el: false,
    positionGround: -200,
    positionGroundDecor: -200,
    positionBackDecor: -200,
    positionBackLand: -200,

}


intervalsObject = {
    run: false,

}





// Attack
let timerAnimation = 1
let itemAnimation = 1

function UnblockAtack() {
    let disableAtack = document.querySelector(".attack")
    disableAtack.removeAttribute("disabled")
}
function pressAttack() {
    let disableAtack = document.querySelector(".attack")
    disableAtack.setAttribute("disabled", "disabled")
    setTimeout(UnblockAtack, 1000)


    if (sideRight != false) {
        animationAttackRight()
    } else if (sideLeft != false) {
        animationAttackLeft()
    }

}




//Attack right


function animationAttackRight() {
    if (timerAnimation != 7) {

        startAnimationRight()
        setTimeout(animationAttackRight, 30)

    } else {
        timerAnimation = 1
        itemAnimation = 1
        player.el.style.backgroundImage = `url(/src/sprites/player/majo/stay/majo-right-stay.png)`

    }
}


function startAnimationRight() {
    player.el.style.backgroundImage = `url(/src/sprites/player/majo/attack/rightAttack-${itemAnimation}.png)`
    timerAnimation += 1
    itemAnimation = timerAnimation

}

//Atteck left



function animationAttackLeft() {
    if (timerAnimation != 7) {

        startAnimationLeft()
        setTimeout(animationAttackLeft, 30)

    } else {
        timerAnimation = 1
        itemAnimation = 1
        player.el.style.backgroundImage = `url(/src/sprites/player/majo/stay/majo-left-stay.png)`

    }
}


function startAnimationLeft() {
    player.el.style.backgroundImage = `url(/src/sprites/player/majo/attack/leftAttack-${itemAnimation}.png)`
    timerAnimation += 1
    itemAnimation = timerAnimation

}










game();