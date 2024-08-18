import gameController from "../controler/gameController.js";

let animationFrameId;

function move1({ target }) {
    const actualPosition = parseInt(getComputedStyle(target).left);
    const points1 = gameController.getPoints1();
    if (points1 === 10) {
        target.style.left = actualPosition + 4   + "px";
    } else if (points1 === 8) {
        target.style.left = actualPosition + 3 + "px";
    } else if (points1 === 7) {
        target.style.left = actualPosition + 2 + "px";
    } else if (points1 === 5) {
        target.style.left = actualPosition + 1 + "px";
    }
}
function move2({ target }) {
    const actualPosition = parseInt(getComputedStyle(target).left);
    const points2 = gameController.getPoints2();
    if (points2 === 10) {
        target.style.left = actualPosition + 4 + "px";
    } else if (points2 === 8) {
        target.style.left = actualPosition + 3 + "px";
    } else if (points2 === 7) {
        target.style.left = actualPosition + 2 + "px";
    } else if (points2 === 5) {
        target.style.left = actualPosition + 1 + "px";
    }
}
function move3({ target }) {
    const actualPosition = parseInt(getComputedStyle(target).left);
    const points3 = gameController.getPoints3();
    if (points3 === 10) {
        target.style.left = actualPosition + 4 + "px";
    } else if (points3 === 8) {
        target.style.left = actualPosition + 3 + "px";
    } else if (points3 === 7) {
        target.style.left = actualPosition + 2 + "px";
    } else if (points3 === 5) {
        target.style.left = actualPosition + 1 + "px";
    }
}
function move4({ target }) {
    const actualPosition = parseInt(getComputedStyle(target).left);
    const points4 = gameController.getPoints4();
    if (points4 === 10) {
        target.style.left = actualPosition + 4 + "px";
    } else if (points4 === 8) {
        target.style.left = actualPosition + 3 + "px";
    } else if (points4 === 7) {
        target.style.left = actualPosition + 2 + "px";
    } else if (points4 === 5) {
        target.style.left = actualPosition + 1 + "px";
    }
}


function checkAndMove1() {
    if (!gameController.getIsMoving1()) {
        cancelAnimationFrame(animationFrameId);
        return;
    }
    const playerElement = document.querySelector("#player1");
    move1({ target: playerElement });
    animationFrameId = requestAnimationFrame(checkAndMove1);
}

function checkAndMove2() {
    if (!gameController.getIsMoving2()) {
        cancelAnimationFrame(animationFrameId);
        return;
    }
    const playerElement = document.querySelector("#player2");
    move2({ target: playerElement });
    animationFrameId = requestAnimationFrame(checkAndMove2);
}

function checkAndMove3() {
    if (!gameController.getIsMoving3()) {
        cancelAnimationFrame(animationFrameId);
        return;
    }
    const playerElement = document.querySelector("#player3");
    move3({ target: playerElement });
    animationFrameId = requestAnimationFrame(checkAndMove3);
}

function checkAndMove4() {
    if (!gameController.getIsMoving4()) {
        cancelAnimationFrame(animationFrameId);
        return;
    }
    const playerElement = document.querySelector("#player4");
    move4({ target: playerElement });
    animationFrameId = requestAnimationFrame(checkAndMove4);
}

export default { checkAndMove1,checkAndMove2,checkAndMove3,checkAndMove4 };    