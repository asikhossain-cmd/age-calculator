
const getButton = document.getElementById('button');

getButton.addEventListener('click', () => {
    // Get DoB Date
    const getDobData = document.getElementById('bdate');
    
    // Get Current Date
    const getCurrentDate = document.getElementById('cdate');
    
    //Convert Dob Date and Current Date to Object
    const getDobDateToObj = new Date(getDobData.value);
    const getCurrentDateObj = new Date(getCurrentDate.value);

    // Extract Year and Months
    const getYearDoB = getDobDateToObj.getFullYear();
    const getMonthDoB = getDobDateToObj.getMonth();
    const getDayDoB = getDobDateToObj.getDate();


    const getYearCdate = getCurrentDateObj.getFullYear();
    const getMonthCdate = getCurrentDateObj.getMonth();
    const getDayCdate = getCurrentDateObj.getDate();

    // Calculate Year and Full Age
    let getYear = getYearCdate - getYearDoB - 1;

    // Check if Pass 12 Month then add 1 year to getYear
    if(getMonthDoB >= getMonthCdate && getDayCdate >= getDayDoB) {
        getYear += 1
    } 
    
    // Lets Get Age Show and Show it to web browser
    const getShowAge = document.getElementById('show-age');
    getShowAge.innerText = `Your Age is ${getYear}`;
    
})