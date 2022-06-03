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




    

})