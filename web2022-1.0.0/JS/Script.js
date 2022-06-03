window.addEventListener('load', () => {



    // Top button style
    function mainTopBtn() {

        const titleH5 = document.querySelectorAll('.title-h5'); //Get the H5 tag at the top
        const mainPage = document.querySelectorAll('.mainPage');//Access to the page


        // Click events for all h5 tabs at the top
        for (let i = 0; i < titleH5.length; i++) {

            titleH5[i].addEventListener('click', function () {

                // If determines whether it has been clicked and cannot be clicked again
                if (this.className == 'title-h5') {
                    // Gets the style of the top H5 tag
                    let tempClass = this.className;

                    // Exclusive ideas
                    for (let i = 0; i < titleH5.length; i++) {
                        titleH5[i].className = `${tempClass}`;
                        mainPage[i].style.display = 'none';
                    }

                    // Button to change color
                    this.className = `${tempClass} title-h5-active`;
                    // display a page
                    mainPage[i].style.display = 'block';

                } else {
                    return;
                }

            })

        }

    }
    mainTopBtn();



    // -----------------------------------------------------



    // Plan page
    function plan() {

        const planName = document.querySelector('#planName');               //Gets the name text box
        const annColorButton = document.querySelector('#annColorButton');   //Gets the button to add color
        const colorScreen = document.querySelector('#colorScreen');         //Get ul for color interface
        const dueDate = document.querySelector('#dueDate');                 //Get date bar
        const dayBtn = document.querySelector('#dayBtn').children;          //Get the Day button
        const weekBtn = document.querySelector('#weekBtn').children;        //Get the Week button
        const remindBtn = document.querySelector('#remindBtn');             //Get the reminders button
        const remindTextarea = document.querySelector('#remindTextarea');   //Gets a reminder input box
        const whichDayInput = document.querySelector('#whichDayInput');     //Gets the event input box from which day
        const dailyGoalsBtn = document.querySelector('#male');              //Button to get daily goals
        const startTime = document.querySelector('#startTime');             //  Get the start time
        const finishTime = document.querySelector('#finishTime');           //Get the completion time





        // sidebar
        function leftHurdle() {
            const leftUlBtn = document.querySelector('.plan-left').children[0].children;    //Gets the button in the left column
            const planJsUse = document.querySelectorAll('.plan-js-use');                    //  Get each page

            // Give each side of the li binding a click event
            for (let i = 0; i < leftUlBtn.length; i++) {
                leftUlBtn[i].addEventListener('click', function () {

                    // Exclusive ideas
                    for (let i = 0; i < leftUlBtn.length; i++) {
                        leftUlBtn[i].className = '';
                        planJsUse[i].style.display = 'none';
                    }

                    planJsUse[i].style.display = 'block';
                    // Add color to clicked buttons
                    this.className = 'plan-left-ul-li-active';
                })
            }
        }
        leftHurdle();



        // The color panel
        function ColorPanel() {
            // Monitor the changes in the color detector    Select the color and add Li
            annColorButton.addEventListener('change', function () {

                // Create the Li element and add it to the page
                function createLi() {
                    // Create a Li element
                    let li = document.createElement('li');
                    // Add a user-selected color to the newly created Li tag
                    li.style.backgroundColor = annColorButton.value;

                    // Add the set Li element to the page
                    colorScreen.appendChild(li);
                }
                createLi();



                // Gets each Li element under the color
                let colorScreenList = colorScreen.children;

                // Iterate over each of the following Li elements and add click events
                for (let i = 0; i < colorScreenList.length; i++) {


                    // Bind click events to each LI
                    colorScreenList[i].addEventListener('click', function () {

                        // Exclusive ideas
                        for (let j = 0; j < colorScreenList.length; j++) {
                            colorScreenList[j].className = '';
                        }

                        // Add the class name to the selected Li
                        this.className = 'plus-li-active';
                    })
                }

            })
        }
        ColorPanel()




    






    // -----------------------------------------------------



    // Time page countdown function
    function timeClock() {


        const inputs = document.querySelectorAll('.clock-input-js');      // Access to the input
        const star = document.querySelector('#star-btn');       //Get start button
        let hourState = false;  //Determine whether hours exist
        let minuteState = false;  //Determine if minutes exist
        let flag = false;   //Check whether the timer opens the throttle valve    



        // Check whether the write time is specified
        function isTime(value01, value02) {
            if (value01 > 0 || value02 > 0) {
                return true;
            } else {
                return false;
            }
        }

        // Determine if you have the time
        function isTimeAll(value01, value02) {
            if (value01 == true) {
                return true;
            } else if (value02 == true) {
                return true;
            } else {
                return false
            }
        }

        // Check whether the time input is valid
        function isTimeNumber(inputs) {
            // Legal for true
            let isTimeInvalid = false;

            if (inputs[0].value <= 100) {
                isTimeInvalid = true;
            } else {
                return false;
            }

            if (inputs[1].value <= 9) {
                isTimeInvalid = true;
            } else {
                return false;
            }

            if (inputs[2].value <= 6) {
                isTimeInvalid = true;
            } else {
                return false;
            }

            if (inputs[3].value <= 9) {
                isTimeInvalid = true;
            } else {
                return false;
            }

            if (isTimeInvalid) {
                return true;
            }

        }

        // Check whether the time is a 2-digit number
        function isDouble(value) {
            if (value.length == 2) {
                return value
            } else {
                return `0${value}`;
            }
        }

        // How many minutes to get the countdown
        function duration(hour01, hour02, minute01, minute02, second01, second02) {
            // hour
            let hour = parseInt(hour01) * 10 + parseInt(hour02);
            // minute
            let minute = parseInt(minute01) * 10 + parseInt(minute02) + hour * 60;
            // second
            let second = parseInt(second01) * 10 + parseInt(second02) + minute * 60;

            return second;
        }



        // Bind change events to each input box to prevent the input box from being empty
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('change', function () {
                if (this.value == '') {
                    this.value = 0;
                }
            })
        }


        // Start button click event
        star.addEventListener('click', () => {

            // Check whether the user enters hour or minute
            hourState = isTime(inputs[0].value, inputs[1].value);
            minuteState = isTime(inputs[2].value, inputs[3].value);
            // Check whether the input is valid
            let isTimeInvalid = isTimeNumber(inputs);
            // Check whether all have input time
            let TimeAll = isTimeAll(hourState, minuteState);
            // time
            let hour01 = parseInt(inputs[0].value),
                hour02 = parseInt(inputs[1].value),
                minute01 = parseInt(inputs[2].value),
                minute02 = parseInt(inputs[3].value),
                second01 = parseInt(inputs[4].value),
                second02 = parseInt(inputs[5].value);

            // time of duration
            let durationTime = duration(hour01, hour02, minute01, minute02, second01, second02);





            // If time is available, start the timer
            if (TimeAll && isTimeInvalid) {

                // Check whether the timer already exists
                if (!flag) {
                    let timer = setInterval(() => {
                        // Duration reduction
                        durationTime--;
                        // Throttle true The timer is on
                        flag = true;

                        // Reciprocal computation time algorithm
                        let hour = Math.floor(durationTime / (60 * 60));
                        let minute = Math.floor(durationTime / 60) - (hour * 60);
                        let second = Math.floor(durationTime) - (hour * 60 * 60) - (minute * 60);


                        // Insert the time into the input box  The isDouble function is used to determine whether it is a two-digit number, and if not, to prefix it with 0
                        inputs[0].value = isDouble(hour.toString()).slice(0, 1);
                        inputs[1].value = isDouble(hour.toString()).slice(1, 2);
                        inputs[2].value = isDouble(minute.toString()).slice(0, 1);
                        inputs[3].value = isDouble(minute.toString()).slice(1, 2);
                        inputs[4].value = isDouble(second.toString()).slice(0, 1);
                        inputs[5].value = isDouble(second.toString()).slice(1, 2);


                        // console.log(durationTime);
                        // The end of the countdown clear timer
                        if (durationTime == 0) {
                            flag = false
                            clearInterval(timer);
                        }

                    }, 1000);
                }

            } else {
                alert('输入的时间不合法');
                inputs[0].value = 0;
                inputs[1].value = 0;
                inputs[2].value = 0;
                inputs[3].value = 0;
                inputs[4].value = 0;
                inputs[5].value = 0;
            }


        })
    }
    timeClock();








    // -----------------------------------------------------



 // Tool page  
 function toolPage() {

    // Tool page dictionary and music switch
    function toolPageFunction() {
        const toolLeftBtn = document.querySelector('.tool-left').children[0].children;      // Tool page dictionary and music switch
        const toolPage = document.querySelectorAll('.tool-page');


        // Traverse the left block button
        for (let i = 0; i < toolLeftBtn.length; i++) {
            // 给Bind click events to the left block buttons in sequence
            toolLeftBtn[i].addEventListener('click', function () {

                // Exclusive ideas
                for (let i = 0; i < toolLeftBtn.length; i++) {
                    toolLeftBtn[i].className = '';
                    toolPage[i].style.display = 'none';
                }

                // Add the class name to the left block
                this.className = 'tool-left-ul-li-active';
                toolPage[i].style.display = 'block';
            })
        }
    }
    toolPageFunction();


    // Music page title button music subpage refresh
    function musicTitleBtnFunction() {
        const toolTitleBtn = document.querySelector('.tool-music-box-title').children[0].children;  //Gets the title button of the music interface
        const toolMusicPage = document.querySelectorAll('.tool-music-page')     //Gets the interface under the Music interface


        // Iterate over the title button to add a bind click event to the button
        for (let i = 0; i < toolTitleBtn.length; i++) {

            toolTitleBtn[i].addEventListener('click', function () {

                // Exclusive ideas
                for (let i = 0; i < toolTitleBtn.length; i++) {
                    toolTitleBtn[i].className = '';
                    toolMusicPage[i].style.display = 'none';
                }


                toolMusicPage[i].style.display = 'block';
                this.className = 'tool-music-box-title-ul-li-active';
            })

        }
    }
    musicTitleBtnFunction();


    // Music player program
    function musicPlayerProgram() {
        const musicAudio = document.querySelector('#musicAudio');   //music player
        const playBtn = document.querySelector('#playButton');      //Play button
        const progress = document.querySelector('#progress');       //progress bar
        const progressTime = document.querySelector('#progressTime');//Ongoing time
        const finalTime = document.querySelector('#finalTime');     //Total audio duration

        // Set the playback time through the progress bar
        function setProgressControlTime() {
            // Listen for progress bar changes
            progress.addEventListener('change', function () {
                // Video playback time = the progress bar times the total length of the video divided by 100
                musicAudio.currentTime = (progress.value * musicAudio.duration) / 100;
            })
        }
        setProgressControlTime();


        // Set the time and progress bar values
        function setProgressTimeATime() {

            // Detect music player transformation
            musicAudio.addEventListener('timeupdate', function () {

                // Calculate the length of the progress bar
                // video.currentTime Return media playback time in seconds
                // video.duration   Returns the total length of the media in seconds
                progress.value = (musicAudio.currentTime / musicAudio.duration) * 100;



                // Gets the playing time
                function getProgressTime() {
                    // Math.floor()round down
                    // getMinutes
                    let mins = Math.floor(musicAudio.currentTime / 60);
                    //Get number of seconds
                    let secs = Math.floor(musicAudio.currentTime % 60);
                    //If the second speed is less than 10, add 0
                    // For example, 1 => 01
                    if (mins < 10) {
                        mins = `0${mins} `;
                    }

                    if (secs < 10) {
                        secs = `0${secs} `;
                    }

                    // The playing time
                    progressTime.innerHTML = `${mins}:${secs} `;

                }
                getProgressTime();




                // Gets the total playing time
                function getFinalTime() {
                    // Get minutes
                    let FMins = Math.floor(musicAudio.duration / 60);
                    //Get number of seconds
                    let FSecs = Math.floor(musicAudio.duration % 60);
                    if (FMins < 10) {
                        FMins = `0${FMins}`;
                    }
                    if (FSecs < 10) {
                        FSecs = `0${FSecs}`;
                    }
                    // Total playing time
                    finalTime.innerHTML = `${FMins}:${FSecs} `;
                }
                getFinalTime();


            })

        }
        setProgressTimeATime();


        // Play/pause the video
        function musicPlay() {


            // Play button click events
            playBtn.addEventListener('click', function () {
                // video.paused Whether to pause the video true Pausing the video False Playing the video
                if (musicAudio.paused) {
                    // play video
                    musicAudio.play();
                } else {
                    // Stop video
                    musicAudio.pause();
                }
            })

            // Replace the pause icon or play icon
            function updatePlayIcon() {
                // video.paused Whether to pause the video true Pausing the video False Playing the video
                if (musicAudio.paused) {
                    playBtn.className = 'iconfont icon-playcircle';
                } else {
                    playBtn.className = 'iconfont icon-pause-circle';
                }
            }

            // Audio Playback calls update play and pause video ICONS
            musicAudio.addEventListener('pause', updatePlayIcon);
            // Audio Playback calls update play and pause video ICONS
            musicAudio.addEventListener('play', updatePlayIcon);
        }
        musicPlay();
    }
    musicPlayerProgram();

    //Dictionary page top button
    function dictionaryTopButton() {
        const dictionaryTopBtn = document.querySelector('.tool-dictionary-top').children[1].children;   //Gets the dictionary top button
        const dictionaryOnPage = document.querySelectorAll('.tool-dictionary-on-page'); //Gets a child page under the dictionary page
        const dictionaryDefaultPage = document.querySelector('.tool-dictionary-default-page');
        let flag = [];   //Controls whether the click is clicked True not clicked false


        // The traversal button binds click events to each date button
        for (let i = 0; i < dictionaryTopBtn.length; i++) {
            flag[i] = false;

            // Bind click events to buttons
            dictionaryTopBtn[i].addEventListener('click', function () {
                let temp = flag[i];  //Temporary variables are used to store flag values

                // Exclusive ideas
                for (let j = 0; j < dictionaryTopBtn.length; j++) {
                    // Remove the class name for the button
                    dictionaryTopBtn[j].className = '';
                    // Give dictionary page face page hide
                    dictionaryOnPage[j].style.display = 'none';
                    flag[j] = false;
                }

                if (!temp) {
                    // Never clicked
                    this.className = 'tool-dictionary-top-ul-li-active';
                    // Page display of the current button of the dictionary child
                    dictionaryOnPage[i].style.display = 'block';
                    // Hide the dictionary default page
                    dictionaryDefaultPage.style.display = 'none';
                    flag[i] = true;
                } else {
                    // It's already clicked
                    this.className = '';
                    // Dictionary default page display
                    dictionaryDefaultPage.style.display = 'block';
                    flag[i] = false;
                }

            })
        }

    }
    dictionaryTopButton();

}
    toolPage();


})