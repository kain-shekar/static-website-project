let eng = document.querySelector(".eng");
let progressValueEng = document.querySelector(".eng-progress-value");
let progressStartValueEng = 0;
let progressEndValueEng = 80;
var speed = 10;

let progressEng = setInterval(() => {
    if (progressStartValueEng <= progressEndValueEng) {
        progressStartValueEng++;

        progressValueEng.textContent = progressStartValueEng +'%';
        let calDeg = progressStartValueEng * 3.6;
        eng.style.background = `conic-gradient(aqua, ${calDeg}deg, white 0deg)`;
    } else {
        clearInterval(progressEng); // Clear interval when progress reaches the end value
    }
}, speed);


 let hin = document.querySelector(".hin");
 let progressValueHin = document.querySelector(".hin-progress-value");
 let progressStartValueHin = 0;
 let progressEndValueHin = 93;


 let progressHin = setInterval(() => {
    if (progressStartValueHin <= progressEndValueHin) {
        progressStartValueHin++;

        progressValueHin.textContent = progressStartValueHin +'%';
        let calDeg = progressStartValueHin * 3.6;
        hin.style.background = `conic-gradient(aqua, ${calDeg}deg, white 0deg)`;
    } else {
        clearInterval(progressHin); // Clear interval when progress reaches the end value
    }
}, speed);


 let  tel = document.querySelector(".tel");
 let progressValueTel = document.querySelector(".tel-progress-value");
 let progressStartValueTel = 0;
 let progressEndValueTel = 70;

 let progressTel = setInterval(() => {
    if (progressStartValueTel <= progressEndValueTel) {
        progressStartValueTel++;

        progressValueTel.textContent = progressStartValueTel +'%';
        let calDeg = progressStartValueTel * 3.6;
        tel.style.background = `conic-gradient(aqua, ${calDeg}deg, white 0deg)`;
    } else {
        clearInterval(progressTel); // Clear interval when progress reaches the end value
    }
}, speed);

//------------------------------otherSkills---------------------------------- 

let  probSolv = document.querySelector(".prob-solv");
 let progressValueProbSolv = document.querySelector(".prob-progress-value");
 let progressStartValueProbSolv = 0;
 let progressEndValueProbSolv = 80;

 let progressProbSolv = setInterval(() => {
    if (progressStartValueProbSolv <= progressEndValueProbSolv) {
        progressStartValueProbSolv++;

        progressValueProbSolv.textContent = progressStartValueTel +'%';
        let calDeg = progressStartValueProbSolv * 3.6;
        probSolv.style.background = `conic-gradient(aqua, ${calDeg}deg, white 0deg)`;
    } else {
        clearInterval(progressProbSolv); // Clear interval when progress reaches the end value
    }
}, speed);



let  comm = document.querySelector(".comm");
 let progressValueComm = document.querySelector(".comm-progress-value");
 let progressStartValueComm = 0;
 progressEndValueComm = 85;

 let progressComm = setInterval(() => {
    if (progressStartValueComm <= progressEndValueComm) {
        progressStartValueComm++;

        progressValueComm.textContent = progressStartValueComm +'%';
        let calDeg = progressStartValueComm * 3.6;
        comm.style.background = `conic-gradient(aqua, ${calDeg}deg, white 0deg)`;
    } else {
        clearInterval(progressComm); // Clear interval when progress reaches the end value
    }
}, speed);
    