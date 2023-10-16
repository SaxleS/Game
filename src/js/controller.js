// import player from './game.js'


// function controller() {
//     document.addEventListener("keydown", (e) => {
//         // console.log(e.keyCode)

//         switch (e.keyCode) {
//             case 87: //top
//                 player.y -= player.step
//                 player.el.style.top = `${player.y}px`
//                 player.el.style.backgroundImage = `url(${player.side.right})`
//                 anamationWalkRight(player.movR += 1)
//                 break;
//             case 83://bottom
//                 player.y += player.step
//                 player.el.style.top = `${player.y}px`
//                 player.el.style.backgroundImage = `url(${player.side.left})`
//                 anamationWalkLeft(player.movL += 1)
//                 break;

//             case 65://left
//                 player.x -= player.step
//                 player.el.style.left = `${player.x}px`
//                 // player.el.style.backgroundImage = `url(${player.side.left})`             
//                 anamationWalkLeft(player.movL += 1)
//                 backgroundMov(world.positionGround +=5);
//                 backgroundMov(world.positionGroundDecor +=5);
//                 break;
//             case 68://right
//                 player.x += player.step
//                 player.el.style.left = `${player.x}px`
//                 // player.el.style.backgroundImage = `url(${player.side.right})`
//                 anamationWalkRight(player.movR += 1)
//                 backgroundMov(world.positionGround -=5);
//                 backgroundMov(world.positionGroundDecor -=5);
//                 break;
//         }
//     })
// }



// export default controller