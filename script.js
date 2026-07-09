/* ===========================================
   RailGuardPro v3 Pro
   JavaScript Phase-1
=========================================== */

const app = {
    version: "3.0 Pro",
    name: "RailGuardPro",
    language: "hi",
    darkMode: false,
    currentUser: null,
    wttDatabase: [],
    publicTimeTable: [],
    reports: []
};

// Dark Mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}function login() {

    const employeeId = document.getElementById("employeeId").value.trim();
    const password = document.getElementById("password").value.trim();

    if (employeeId === "" || password === "") {
        alert("कृपया Employee ID और Password दर्ज करें।");
        return;
    }

    // अभी Demo Login
    alert("Login Successful");

    window.location.href = "dashboard.html";
}

// Logout
function logout() {

    alert("Logout Successful");

}

// Dashboard
function openDashboard() {

    alert("Dashboard Opening...");

}

// Train Search
function searchTrain() {

    let trainNo = prompt("Enter Train Number");

    if (trainNo == null || trainNo == "") {

        return;

    }

    alert("Searching Train " + trainNo);

}

// WTT Upload
function uploadWTT() {

    alert("Working Time Table Upload Module");// ===============================
// RailGuardPro v3 Pro
// WTT Application Logic Part-1
// ===============================

// WTT Database
let WTTDatabase = [];

// Upload PDF
function uploadWTT() {

const file = document.getElementById("wttFile");

if (!file || file.files.length === 0) {
alert("Please Select WTT PDF");
return;
}

alert("WTT PDF Selected : " + file.files[0].name);

}

// Train Search
function searchTrain(){

const train=document.getElementById("trainNumber").value;

if(train==""){
alert("Enter Train Number");
return;
}

alert("Searching Train : "+train);

}

// Auto Fill
function autoFillWTT(){

document.getElementById("trainName").value="Sample Express";

document.getElementById("origin").value="Katni";

document.getElementById("destination").value="Jabalpur";

document.getElementById("distance").value=91;

document.getElementById("speed").value=110;

document.getElementById("runningTime").value="01:30";

document.getElementById("railArrival").value="08:00";

document.getElementById("publicArrival").value="08:10";

document.getElementById("railDeparture").value="08:05";

document.getElementById("publicDeparture").value="08:15";

alert("Demo WTT Loaded");

}

}

// Public Time Table
function uploadPublicTime() {

    alert("Public Time Table Upload");

}

// AI Assistant
function openAI() {

    alert("RailGuard AI Assistant");

}

// Report
function generateReport() {

    alert("Professional Running Report");

}

console.log("RailGuardPro v3 Pro Loaded Successfully");// =====================================
// RailGuardPro v3 Pro
// Application Logic Part-2
// =====================================

// Time Difference (Minutes)
function getMinutesDifference(start, end){

if(start=="" || end=="") return 0;

const s=start.split(":");
const e=end.split(":");

const startMin=parseInt(s[0])*60+parseInt(s[1]);
const endMin=parseInt(e[0])*60+parseInt(e[1]);

return endMin-startMin;

}

// Running Calculation
function calculateRunning(){

const railArrival=document.getElementById("railArrival").value;
const railDeparture=document.getElementById("railDeparture").value;

const publicArrival=document.getElementById("publicArrival").value;
const publicDeparture=document.getElementById("publicDeparture").value;

const actualArrival=document.getElementById("actualArrival").value;
const actualDeparture=document.getElementById("actualDeparture").value;

const distance=parseFloat(document.getElementById("distance").value)||0;

let detention=0;
let gain=0;
let loss=0;

// Railway Detention
if(actualArrival!="" && actualDeparture!=""){
detention=getMinutesDifference(actualArrival,actualDeparture);
}

// Railway Gain/Loss
if(railArrival!="" && actualArrival!=""){

const diff=getMinutesDifference(railArrival,actualArrival);

if(diff<0){
gain=Math.abs(diff);
}
else{
loss=diff;
}

}

// Average Speed

let speed=0;

if(distance>0 && detention>0){

speed=(distance/(detention/60)).toFixed(2);

}

document.getElementById("gainTime").value=gain;

document.getElementById("lossTime").value=loss;

document.getElementById("detention").value=detention;

document.getElementById("averageSpeed").value=speed;

alert("Running Calculation Completed");

}
