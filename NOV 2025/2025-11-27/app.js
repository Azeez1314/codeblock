
// Task:

// ' Wouldn't it be neat if every year, your birthday would fall on a Friday, Saturday or Sunday? 
// Well we cannot create a program for that (yet) but we can find out the exact years this will happen. 

// ' Given a certain date, return a string with the day of the week and the year it will fall in a weekend, 
// starting with the current year (2016). Do this for 50 years in the future. 

// '  INPUT string date_of_birth (with this format: dd-mm) 
// '  OUTPUT string wday-yyyy wday-yyyy ... (where wday can be any of this three values: Fry, Sat, Sun) 

// ' Every date should be separated by one space 
// ' EXAMPLE 
// ' Input "23-10" 
// ' Output "Sun-2016 Fri-2020 Sat-2021 Sun-2022 Fri-2026 Sat-2027 Sat-2032 Sun-2033 Fri-2037 Sat-2038 Sun-2039 
// Fri-2043 Sun-2044 Fri-2048 Sat-2049 Sun-2050 Fri-2054 Sat-2055 Sat-2060 Sun-2061 Fri-2065"


// ' function findWeekendBirthdays(date_of_birth) {
// ' }

function findWeekendBirthdays(date_of_birth) {
    const [day, month] = date_of_birth.split('-').map(Number);
    const targetDays = { 5: "Fri", 6: "Sat", 0: "Sun" };
    let results = [];
    
    for (let year = 2016; year <= 2065; year++) {
        const birthday = new Date(year, month - 1, day);
        const dayOfWeek = birthday.getDay();
        
        if (targetDays.hasOwnProperty(dayOfWeek)) {
            results.push(`${targetDays[dayOfWeek]}-${year}`);
        }
    }
    
    return results.join(' ');
}

// Example usage:
const date_of_birth = "23-10";
console.log(findWeekendBirthdays(date_of_birth));