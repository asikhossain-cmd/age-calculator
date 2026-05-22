
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
    const getDayDoB = getDobDateToObj.getDay();

    const getYearCdate = getCurrentDate.getFullYear();
    const getMonthCdate = getCurrentDate.getMonth();
    const getDayCdate = getCurrentDate.getDay();

    
})