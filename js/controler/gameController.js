import gameView from "../view/gameView.js";
import raceService from "../service/raceService.js";

let points1;
let points2;
let points3;
let points4;

let isMoving1 = false;
let isMoving2 = false;
let isMoving3 = false;
let isMoving4 = false;

function setPoints1(newPoints) {
    points1 = newPoints;
}
function setPoints2(newPoints) {
    points2 = newPoints;
}
function setPoints3(newPoints) {
    points3 = newPoints;
}
function setPoints4(newPoints) {
    points4 = newPoints;
}

function setIsMoving1(newIsMoving) {
    isMoving1 = newIsMoving;
}
function setIsMoving2(newIsMoving) {
    isMoving2 = newIsMoving;
}
function setIsMoving3(newIsMoving) {
    isMoving3 = newIsMoving;
}
function setIsMoving4(newIsMoving) {
    isMoving4 = newIsMoving;
}

function getPoints1() {
    return points1;
}
function getPoints2() {
    return points2;
}   
function getPoints3() {
    return points3;
}   
function getPoints4() {
    return points4;
}   


function getIsMoving1() {
    return isMoving1;
}
function getIsMoving2() {
    return isMoving2;
}
function getIsMoving3() {
    return isMoving3;
}
function getIsMoving4() {
    return isMoving4;
}

export function init() {
    gameView.render();
}

export default {
    getPoints1,
    getPoints2,
    getPoints3,
    getPoints4,
    getIsMoving1,
    getIsMoving2,
    getIsMoving3,
    getIsMoving4,
    setPoints1,
    setPoints2,
    setPoints3,
    setPoints4,
    setIsMoving1,
    setIsMoving2,
    setIsMoving3,
    setIsMoving4,
};
