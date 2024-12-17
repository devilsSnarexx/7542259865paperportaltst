let sidebar = document.querySelector(".viewer__mark-scheme");
let sidebarBtn = document.querySelector(".ms__button");
let sideToolViewer = document.querySelector(".viewer__sidebar");
let msCloseButton = document.querySelector(".msButtonToClose");
let paperViewerRes = document.querySelector(".full-widthExt");

sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
    msCloseButton.classList.toggle("not_showing");
    sideToolViewer.classList.toggle("hiddenSide");
    paperViewerRes.classList.toggle("resize-full");
});

msCloseButton.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
    msCloseButton.classList.toggle("not_showing");
    sideToolViewer.classList.toggle("hiddenSide");
    paperViewerRes.classList.toggle("resize-full");
});

let vid_sidebar = document.querySelector(".video__sidebar");
let vid_closebtn = document.querySelector(".vid__close");
let vid_openbtn = document.querySelector(".vid__button");

vid_openbtn.addEventListener("click", ()=>{
    vid_sidebar.classList.toggle("hiddenVideo");
    vid_closebtn.classList.toggle("not_showing");
});

vid_closebtn.addEventListener("click", ()=>{
    vid_sidebar.classList.toggle("hiddenVideo");
    vid_closebtn.classList.toggle("not_showing");
});

// EXAM MODE
let exammodeBtn = document.querySelector(".exam_mode");
let exammodeConf = document.querySelector(".exc-modal");
let exammodeClose = document.querySelector(".end-exammode");
let exammodeOpen = document.querySelector(".start-exammode");
let paperViewer = document.querySelector(".pastPaper");
let taskBar = document.querySelector(".viewer__taskbar");
let transitionSlide = document.querySelector(".transitionExM");

exammodeBtn.addEventListener("click", ()=>{
    exammodeConf.classList.toggle("not_showing");
});

exammodeClose.addEventListener("click", ()=>{
    exammodeConf.classList.toggle("not_showing");
});

exammodeOpen.addEventListener("click", ()=>{
    sideToolViewer.classList.toggle("hiddenSide");
    transitionSlide.classList.toggle("transitionACTIVE");
    paperViewer.classList.toggle("full-size-exammode");
    exammodeConf.classList.toggle("not_showing");
    taskBar.classList.toggle("hiddenTaskbar");
});

// IN EXAM MODE
let examModeExitBtn = document.querySelector(".animated-button2");
let examModeTurnInBtn = document.querySelector(".animated-button1");
let examModeExitConfCard = document.querySelector(".exc-modalExit");
let examModeExitConfBtn = document.querySelector(".exit-exammode-true");
let examModeExitFalseBtn = document.querySelector(".exit-exammode-false");

let examModeTurnInConfCard69 = document.querySelector(".modalTurnIn");
let examModeTurnInConfBtn = document.querySelector(".exam-modeSubmit");
let examModeMSBtn = document.querySelector(".openMSExM");
let examModeTurnInFalseBtn = document.querySelector(".submitmarks-exammode-false");

examModeExitBtn.addEventListener("click", ()=>{
    examModeExitConfCard.classList.toggle("not_showing");
});

examModeExitConfBtn.addEventListener("click", ()=>{
    location.reload();
});

examModeExitFalseBtn.addEventListener("click", ()=>{
    examModeExitConfCard.classList.toggle("not_showing");
});


examModeTurnInBtn.addEventListener("click", ()=>{
    examModeTurnInConfCard69.classList.toggle("not_showing");
});

// ADD SUBMISSION LOGIC HERE LATER - MUST
examModeTurnInConfBtn.addEventListener("click", ()=>{
    location.reload();
});

examModeMSBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    examModeTurnInConfCard69.classList.toggle("ms_showing69");
    examModeTurnInConfCard69.classList.toggle("exc-modalTurnIn");
    paperViewer.classList.toggle("resize-full");

    // Toggle the text content
    if (examModeMSBtn.textContent.trim() === "Open Mark Scheme") {
        examModeMSBtn.textContent = "Close Mark Scheme";
    } else {
        examModeMSBtn.textContent = "Open Mark Scheme";
    }
});

examModeTurnInFalseBtn.addEventListener("click", ()=>{
    examModeTurnInConfCard69.classList.toggle("not_showing");
});




// Programmatically Input Timer Values
const defaultHours = 1; // Set Hours dynamically
const defaultMinutes = 0; // Set Minutes dynamically
const defaultSeconds = 0; // Set Seconds dynamically

// Total Time in Seconds based on dynamic values
let totalTimeInSeconds = defaultHours * 3600 + defaultMinutes * 60 + defaultSeconds;

// Exam Mode Confirmation Card
const examModeTurnInConfCard = document.getElementById("examModeTurnInConfCard");

// ----- First Timer Elements -----
let timerElement = document.getElementById("timer");
let startPauseBtn = document.getElementById("startPauseBtn");
let resetBtn = document.getElementById("resetBtn");

let currentTime = totalTimeInSeconds;
let interval = null;
let isRunning = false;

// Function to format time
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimerDisplay() {
    timerElement.textContent = formatTime(currentTime);
}

function startPauseTimer() {
    if (isRunning) {
        clearInterval(interval);
        startPauseBtn.textContent = "Start";
    } else {
        interval = setInterval(() => {
            if (currentTime > 0) {
                currentTime--;
                updateTimerDisplay();
            } else {
                clearInterval(interval);
                startPauseBtn.textContent = "Start";
            }
        }, 1000);
        startPauseBtn.textContent = "Pause";
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(interval);
    currentTime = totalTimeInSeconds;
    updateTimerDisplay();
    startPauseBtn.textContent = "Start";
    isRunning = false;
}

// ----- Second Timer Elements -----
let timerElementTask = document.getElementById("timerTask");
let startPauseBtnTask = document.getElementById("startPauseBtnTask");
let resetBtnTask = document.getElementById("resetBtnTask");

let currentTimeTask = totalTimeInSeconds;
let intervalTask = null;
let isRunningTask = false;

function updateTimerDisplayTask() {
    timerElementTask.textContent = formatTime(currentTimeTask);
}

function startPauseTimerTask() {
    if (isRunningTask) {
        clearInterval(intervalTask);
        startPauseBtnTask.innerHTML = `<i class='bx bx-play'></i>`;
    } else {
        intervalTask = setInterval(() => {
            if (currentTimeTask > 0) {
                currentTimeTask--;
                updateTimerDisplayTask();
            } else {
                clearInterval(intervalTask);
                startPauseBtnTask.innerHTML = `<i class='bx bx-play'></i>`;
                examModeTurnInConfCard69.classList.toggle("not_showing"); // Toggle card
            }
        }, 1000);
        startPauseBtnTask.innerHTML = `<i class='bx bx-pause'></i>`;
    }
    isRunningTask = !isRunningTask;
}

function resetTimerTask() {
    clearInterval(intervalTask);
    currentTimeTask = totalTimeInSeconds;
    updateTimerDisplayTask();
    startPauseBtnTask.innerHTML = `<i class='bx bx-play'></i>`;
    isRunningTask = false;
}

// ---- Synchronize Both Timers Dynamically ----
function setDynamicTimer(hours, minutes, seconds) {
    totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
    currentTime = totalTimeInSeconds;
    currentTimeTask = totalTimeInSeconds;

    updateTimerDisplay();
    updateTimerDisplayTask();
}

// Event Listeners
startPauseBtn.addEventListener("click", startPauseTimer);
resetBtn.addEventListener("click", resetTimer);

startPauseBtnTask.addEventListener("click", startPauseTimerTask);
resetBtnTask.addEventListener("click", resetTimerTask);

// ----- Initialize Timers -----
setDynamicTimer(defaultHours, defaultMinutes, defaultSeconds); // Set both timers dynamically



// Marks Input
document.addEventListener('DOMContentLoaded', function () {
    const maxMarksLabel = document.getElementById('maxMarks');
    const marksInput = document.getElementById('marksInput');
    const submitBtn = document.getElementById('submitBtn');
    const errorMsg = document.getElementById('errorMsg');

    // Default max marks (can be updated dynamically from backend)
    let maxMarks = 75;

    // Function to update max marks dynamically
    function updateMaxMarks(newMaxMarks) {
        maxMarks = newMaxMarks;
        maxMarksLabel.textContent = `/${maxMarks}`;
    }

    // Validation function
    function validateInput(value) {
        // Check if the input is a valid integer
        if (!/^\d+$/.test(value)) {
            return "Holy cow? Enter a valid integer (whole number and positive).";
        }

        // Convert the input to a number
        const numValue = parseInt(value, 10);

        // Check if the value is within range
        if (numValue < 0) {
            return "Damn! Less than zero!?";
        }
        if (numValue > maxMarks) {
            return `Woah there player! You cannot get more than ${maxMarks} marks... Or can you?.`;
        }

        // No validation errors
        return "";
    }

    // Handle form submission
    submitBtn.addEventListener('click', function () {
        const value = marksInput.value.trim();
        const error = validateInput(value);

        if (error) {
            errorMsg.textContent = error;
            errorMsg.style.display = 'block';
        } else {
            errorMsg.style.display = 'none';
            alert(`Submitted marks: ${value}/${maxMarks}`);
            // Add your backend submission logic here
        }
    });
});