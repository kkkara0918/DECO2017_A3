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




        // Give the Week button under the Add page week 
        function addWeekBtn() {
            // Traversing the Week button binds click events to each date button
            for (let i = 0; i < weekBtn.length; i++) {
                weekBtn[i].addEventListener('click', function () {

                    // Sent his thoughts
                    for (let j = 0; j < weekBtn.length; j++) {
                        weekBtn[j].className = '';
                    }

                    // Add a class name to the button you click
                    this.className = 'plan-right-add-right-finish-btn01-li-active';
                    //  Adds a button index to the object
                    // planObj.CompleteNumber = i;
                    return i;
                })
            }
        }
        addWeekBtn();




        // The date button on the Add page is day 
        function addBtnDay() {

            // Add click events to each day button
            for (let i = 0; i < dayBtn.length; i++) {
                dayBtn[i].addEventListener('click', function () {

                    // Check whether it has been clicked. If it has been clicked, cancel it
                    if (this.className) {
                        this.className = '';
                        // Delete the index of the cancelled week in the object
                        // planObj.weekDay.splice(i, 1);
                    } else {
                        // Add click events to click buttons
                        this.className = 'plan-right-add-right-finish-btn01-li-active';
                        // Add click week index to the object
                        // planObj.weekDay.push(i + 1);
                        // Sort an array
                        // planObj.weekDay.sort();
                    }
                    //  Wrapped date data
                    // return planObj.weekDay;
                })
            }
        }
        addBtnDay();



        // The remind event reminds the input box
        function remindEvent() {
            let flag = false;   //Determine whether the prompt input button has been clicked   false未点击  true已点击
            // Monitor whether the reminder button is clicked
            remindBtn.addEventListener('click', function () {
                if (!flag) {
                    // Click the button to display the information receiving box
                    // The prompt input box is displayed
                    remindTextarea.style.display = 'block';
                    flag = true;
                } else {
                    // Prompt input box Display Prompt input box hidden
                    remindTextarea.style.display = 'none';
                    flag = false;
                }

            })
        }
        remindEvent();


        // Determine whether the daily goal button is on or off      true open    false close
        let isDailyGoalsValue = false;
        //Daily Goal button
        function isDailyGoals() {
            // Listen for the daily goal button
            dailyGoalsBtn.addEventListener('click', function () {
                // Determine whether the daily goal button is on or off
                if (isDailyGoalsValue) {
                    // If it is on, it becomes off
                    isDailyGoalsValue = false;
                } else {
                    isDailyGoalsValue = true;
                }
                // Adds state to the object
                // planObj.dailyGoals = isDailyGoals;

            })
        }
        isDailyGoals();





        // Gets the user plan name
        function getPlanName() {
            let name;   //Used to receive the contents of the name input box
            // Receive the contents of the name input box
            name = planName.value;
            // Export name
            return name;
        }

        // Get color palette User-selected color
        function getColorPanel() {
            // Gets each Li element under the color
            let colorScreenList = colorScreen.children;
            // Iterate over each li element
            for (let i = 0; i < colorScreenList.length; i++) {
                // Check if this li is selected
                if (colorScreenList[i].className) {
                    return colorScreenList[i].style.backgroundColor;
                }

            }
        }

        // Gets the date of the expiration date column
        function getdueDate() {
            let date;       //Used to receive and retrieve date bar content
            date = dueDate.value;
            return date;
        }

        // Gets the subscript to select the week button
        function getWeekBtn() {
            // Traverse weekBtn
            for (let i = 0; i < weekBtn.length; i++) {
                // Check whether the weekBtn button is clicked
                if (weekBtn[i].className) {
                    // Returns the subscript
                    return i;
                }
            }
        }

        // Gets the TAB that selects the Day button
        function getDayBtn(weekDay) {
            let arr = weekDay;    //Defines an array to store iterated subscripts
            // Traverse dayBtn btn
            for (let i = 0; i < dayBtn.length; i++) {
                if (dayBtn[i].className) {
                    // If selected, the subscript is stored
                    arr.push(i + 1);
                } else {
                    //unselected delete i
                    arr.splice(i, 1);
                }
            }
            return arr;
        }

        // Gets the contents of the reminder input box
        function getRemindTextarea() {
            let str;        //Used to receive the contents of the notification input box
            str = remindTextarea.value;
            return str;
        }

        //Gets the date from which the time input box starts
        function getWhichDayInput() {
            let day;        //Used to receive the contents of the time input box from which day
            day = whichDayInput.value;
            return day;
        }

        // Get the start time
        function getStartTime() {
            let StartTimeValue; //The time used to start receiving
            StartTimeValue = startTime.value;
            return StartTimeValue;
        }

        //Get the completion time
        function getFinishTime() {
            let finishTimeValue;    //The time used to receive completion
            finishTimeValue = finishTime.value;
            return finishTimeValue;
        }





        //Gets the parameters configured by the user on the Add page
        function getUserConfig() {

            //Creates an object to receive the parameters of the plan to be created
            let planObj = {
                //Creates an object to receive the parameters of the plan to be created
                planName: '',                       //The task name
                bgColor: 'red',                     //background color    default red
                dueDate: null,                      //deadline
                CompleteNumber: 0,                  //When will you finish the project  fixation:0    Every week:1    Every month:2
                weekDay: [],                        //Storage week Monday:1 ~~~~ Sunday:7
                remind: null,                       //Events that store reminders
                WhichDay: null,                     //The date from which the storage starts input time
                dailyGoals: false,                  //Store whether daily goals are open  default false   open true   close false
                StartTime: null,                    //Store the start time
                finishTime: null,                   //Store the end time
            };


            // Add to an object  task name
            planObj.planName = getPlanName();

            // Add to an object bgColor
            planObj.bgColor = getColorPanel();

            // Add to an object deadline 
            planObj.dueDate = getdueDate();

            // Add to an object fulfilment of plan  week
            planObj.CompleteNumber = getWeekBtn();

            // Add to an object week
            planObj.weekDay = getDayBtn(planObj.weekDay);

            // Add to an object Remind events
            planObj.remind = getRemindTextarea();

            // Add to an object Which day began input time
            planObj.WhichDay = getWhichDayInput();

            // Add to an object Daily goal status
            planObj.dailyGoals = isDailyGoalsValue;

            // Add to an object start time
            planObj.StartTime = getStartTime();

            // Add to an object finish time
            planObj.finishTime = getFinishTime();



            return planObj;
        }


        // Calculate the time and the length of the square shift X
        function countTimeX(time) {
            let moveLight;      //Length of movement
            // Extract the last two strings
            // time = time.slice(-2);
            // Convert to value
            time = parseInt(time);

            moveLight = time;

            return moveLight;
        }

        // Calculate the time and the length of the shift Y
        function countTimeY(time) {
            let moveLight;     //Length of movement
            // Extract the last two strings
            // time = time.slice(0, 2);
            // Convert to value
            time = parseInt(time);

            // Determine if there is a problem with the input time
            if (time >= 8 && time < 16) {
                // Calculate the total distance of the displacement
                moveLight = (time - 7) * 40;
            } else {
                alert('The time exceeds the maximum limit!!!Maximum of 8:00-18:00');
            }

            return moveLight;
        }

        // Calculate time and block length
        function countTimeWidth(starTime, finishTime) {
            let widthLight;      //The length of the cube

            // Formatting time
            function formTime(time) {
                // Extract the last two strings
                // time = time.slice(-2);
                // Convert to value
                time = parseInt(time);

                return time;
            }

            // Formatting time
            starTime = formTime(starTime);
            // Formatting time
            finishTime = formTime(finishTime);

            if (finishTime > starTime) {
                widthLight = (finishTime - starTime) * 3;
            } else if (finishTime < starTime) {
                widthLight = (starTime - finishTime) * 3;
            } else {
                widthLight = 180;
            }

            return widthLight;
        }

        // Calculate the start time and end time
        function countStartOrFinish(startTime, finishTime) {
            // For hours
            let hour01 = startTime.slice(0, 2);
            let hour02 = finishTime.slice(0, 2);

            // minutes
            let minute01 = startTime.slice(-2);
            let minute02 = finishTime.slice(-2);

            // Two hour difference
            let hour = Math.abs(hour02 - hour01);
            // Minute difference
            let minute = Math.abs(minute01 - minute02);

            return `${hour == 0 ? '' : hour + 'h'} ${minute == 0 ? '' : minute + 'min'}`;
        }


        // The time page is displayed. The shutdown function is displayed
        function clockPopUpBox() {
            const PopUpBox = document.querySelector('#PopUpBox');   //pop-up box
            const clockCloseBtn = document.querySelector('#clockCloseBtn'); //The cancel button is displayed
            const learningBtn = document.querySelector('#learningBtn');     //learning btn

            // watch learning btn
            learningBtn.addEventListener('click', function () {
                // Display pop-up box
                PopUpBox.style.display = 'block';
            })

            // Listen for the pop-up close button
            clockCloseBtn.addEventListener('click', function () {
                // Hide the Pop-up
                PopUpBox.style.display = 'none';
                // console.log(getUserConfig());
            })

        }

        clockPopUpBox();

        // Create an HTML template for the color palette
        function createColorPanelHtml(bgColor, planName, time) {

            let colorFatherDiv = document.createElement('div'); //Create the largest container
            let colorDiv = document.createElement('div');   //Create a color div,
            let planNameSpan = document.createElement('span');  //Create a plan name span
            let PlanTimeSpan = document.createElement('span');  //Create a span of scheduled time

            // Add the class name to the largest container
            colorFatherDiv.className = 'plan-right-record-bottom-tag-color-box';

            // Add the class name and color to the color box
            colorDiv.className = 'plan-right-record-bottom-tag-color';
            colorDiv.style.backgroundColor = bgColor;

            // Add a name to the plan name
            planNameSpan.innerHTML = planName;

            // Add time to schedule time
            PlanTimeSpan.innerHTML = `${time}`;

            // Add a color box, plan name, and schedule time to the largest container
            colorFatherDiv.appendChild(colorDiv);
            colorFatherDiv.appendChild(planNameSpan);
            colorFatherDiv.appendChild(PlanTimeSpan);

            return colorFatherDiv;
        }


        // Interactive function -- Add content to plan table
        function planAddContent() {

            const planMoveBox = document.querySelector('#planMoveBox');     //Gets the parent of the box to which the schedule moves
            const planColorPanelSee = document.querySelector('#planColorPanelSee');    //Get plan color UL of record page of plan page


            document.querySelector('#addBtn').addEventListener('click', function () {

                const obj = getUserConfig();  //Used to receive objects configured by the user
                let moveDiv = document.createElement('div');    //create div
                // div class
                moveDiv.className = 'move';
                // Writes attributes to the created div
                moveDiv.style.width = `${countTimeWidth(obj.StartTime.slice(-2), obj.finishTime.slice(-2))}px`
                moveDiv.style.backgroundColor = obj.bgColor;
                moveDiv.style.transform = `translate(${countTimeX(obj.StartTime.slice(-2))}px, ${countTimeY(obj.StartTime.slice(0, 2))}px)`;

                // Add written boxes to your to-do list
                planMoveBox.appendChild(moveDiv);



                // --------------------------------------------


                // The color plan panel is displayed below
                let li = document.createElement('li');  //Create a Li element

                // Accepts the template created by the HTML template that created the color palette
                let colorFatherDiv = createColorPanelHtml(obj.bgColor, obj.planName, countStartOrFinish(obj.StartTime, obj.finishTime));


                // Add the largest container for Li
                li.appendChild(colorFatherDiv);
                // Add LI to UL
                planColorPanelSee.appendChild(li);

                alert('添加成功');

            })
        }
        planAddContent();


        //Interactive functions ---- Add content to the Record table
        function recordAddContent() {
            const inputs = document.querySelectorAll('.clock-input-js');      // Access to the input
            const star = document.querySelector('#star-btn');                 //Get start button
            const recordMoveBox = document.querySelector('#recordMoveBox');     //Gets the parent of the box to which the schedule moves
            const recordColorPanelSee = document.querySelector('#recordColorPanelSee');    //Get record color UL of record page of plan page
            




            star.addEventListener('click', function () {

                // Gets the current hour
                let nowTime = new Date();
                nowTime = nowTime.getHours();

                // hour
                let hour = inputs[0].value + inputs[1].value;
                hour = hour.slice(0, 1) == 0 ? hour.slice(1) : hour;
                // minute
                let min = inputs[2].value + inputs[3].value;
                min = min.slice(0, 1) == 0 ? min.slice(1) : min;

                const obj = getUserConfig();  //Used to receive objects configured by the user
                let moveDiv = document.createElement('div');    //create div
                // Give the created div class name
                moveDiv.className = 'move';
                // Writes attributes to the created div
                moveDiv.style.width = `${countTimeWidth(0, min)}px`
                moveDiv.style.backgroundColor = obj.bgColor;
                moveDiv.style.transform = `translate(${countTimeX(min)}px, ${countTimeY(nowTime)}px)`;

                // Add written boxes to your to-do list
                recordMoveBox.appendChild(moveDiv);





                // --------------------------------------------



                // The color plan panel is displayed below
                let li = document.createElement('li');  //Create a Li element

                // Accepts the template created by the HTML template that created the color palette
                let colorFatherDiv = createColorPanelHtml(obj.bgColor, obj.planName, `${hour}h${min}min`);


                // Add the largest container for Li
                li.appendChild(colorFatherDiv);
                // Add LI to UL
                recordColorPanelSee.appendChild(li);




            })
        }
        recordAddContent();





    }
    plan();










    // -----------------------------------------------------



})