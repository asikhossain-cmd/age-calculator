
const getButton = document.getElementById('button');

getButton.addEventListener('click', () => {
    // Get DoB Date
    const getDobData = document.getElementById('bdate');
    
    // Get Current Date
    const getCurrentDate = document.getElementById('cdate');
    
    //Convert Dob Date and Current Date to Object
    const getDobDateToObj = new Date(getDobData.value);

    const getCurrentDateObj = new Date(getCurrentDate.value);
    console.log(getCurrentDateObj)
})