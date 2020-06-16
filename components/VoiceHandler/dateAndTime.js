//MONTHS
months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"]

/////////
// DATE AND TIME
////////


export const dateWords = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var monthText = ''
    var fullDate = ''
    var yearText = year
    var dateText = date
    monthText = months[month - 1]
    fullDate = dateText + "th of " + monthText + " " + yearText
    return fullDate
}

export const timeWords = () => {
    var hour = new Date().getHours();
    var newHour = hour
    var timeType = ''
    var minutes = new Date().getMinutes();
    var fullTime = ''
    var newMinutes = minutes
    var hour1 = hour

    if (hour > 12) {
        newHour = hour - 12
    }
    if (hour1 > 11) {
        timeType = 'pm'
    }
    else {
        timeType = 'am'
    }
    fullTime = newHour + " " + newMinutes + " " + timeType

    return fullTime

}

export const onlyHour = () => {
    var hour = new Date().getHours();
    return hour

}