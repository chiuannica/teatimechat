changeToJune2020("sentiment-pie-chart")


let days = [
    [ 8, [50, 30, 20], ["Bubble Tea", "Fish Cakes", "Brownies"], "June" ],
    [ 9, [50, 50, 0], ["Masterchef", "Lemon Tarts", "Chicken"], "June"  ],
    [ 10, [15, 70, 15], ["BTS", "Chicken Nuggets", "Tartar Sauce"], "June"  ],
    [ 19, [70, 15, 15], ["Coffee", "Ice Cream", "Lobster"], "June"  ],
    [ 20, [15, 20, 65], ["The Legend of Korra", "Fried Chicken", "Chinatown"], "June"  ],
    [ 23, [20, 20, 60], ["Avatar The Last Airbender", "Ice Cream", "Netflix"], "June"  ],
    [ 27, [70, 15, 15], ["Running", "Park", "Dog"], "June"  ],
    [ 28, [40, 60, 0], ["Bubble Tea", "Scrambled Eggs", "BTS"], "June"  ],
    [ 29, [70, 15, 15], ["Germany", "Boyfriend", "Chocolate"], "June"  ]
]

changeReportChart(days, 0)


setCalendar(days);

function setCalendar(days) {
    let calendarHTML = ""

    // days of the week
    let daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    dOTWCounter = 0
    calendarHTML += "<tr>"
    for (let i = 0; i < 7; i++) {
        calendarHTML += "<th>" + daysOfTheWeek[dOTWCounter++] + "</th>"
    }
    calendarHTML += "</tr>"

    // numbering the days
    // first day is 31
    let dayCounter = 30
    let specialDayCounter = 0
    for (let i = 0; i < 5; i++) {
        calendarHTML += "<tr>"
        for (let j = 0; j < 7; j++) {
            calendarHTML += '<td>' + (dayCounter % 31 + 1) + "</td>"
            dayCounter++
        }
        calendarHTML += "</tr>"
    }
    document.getElementById("calendar-table").innerHTML = calendarHTML;



    for (let i = 7; i < 42; i++) {
        let day = document.getElementsByTagName("td")[i]
        for (let k = 0; k < days.length; k++) {
            if (Number(day.innerHTML) == days[k][0]) {
                if (days[k][1][1] >= days[k][1][0] && days[k][1][1] >= days[k][1][2]) {
                    day.className = "neu"
                } else if (days[k][1][2] >= days[k][1][0] && days[k][1][2] >= days[k][1][1]) {
                    day.className = "neg"
                } else {
                    day.className = "pos"
                }
            } 
        }
    }
}
function reportNext() {
    let currDay = Number(document.getElementById("day").innerHTML)
    for (let i = 0; i < days.length; i++) {
        if (days[i][0] == currDay) {
            changeReportChart(days, (i+1)%days.length)
        }
    }
}
function reportPrev() {
    let currDay = Number(document.getElementById("day").innerHTML)
    
    for (let i = 0; i < days.length; i++) {
        if (days[i][0] == currDay) {
            if (i == 0) {
                changeReportChart(days, days.length-1)
            }
            changeReportChart(days, (i-1)%days.length)
        }
    }
}
function changeReportChart(days, dayIndex) {
    document.getElementById("day").innerHTML = days[dayIndex][0];
    document.getElementById("month").innerHTML = days[dayIndex][3];
    makePie("sentiment-pie-chart", days[dayIndex][1]);
    document.getElementsByTagName("li")[0].innerHTML = days[dayIndex][2][0];
    document.getElementsByTagName("li")[1].innerHTML = days[dayIndex][2][1];
    document.getElementsByTagName("li")[2].innerHTML = days[dayIndex][2][2];
}
function changeToApril2020() {
    percents = [60, 20, 20]
    makePie("sentiment-pie-chart-2", percents)
    document.getElementById("journal-title").innerHTML = "April 2020"
}
function changeToMay2020() {
    percents = [30, 35, 35]
    makePie("sentiment-pie-chart-2", percents)
    document.getElementById("journal-title").innerHTML = "May 2020"
}
function changeToJune2020() {
    percents = [40, 20, 40]
    makePie("sentiment-pie-chart-2", percents)
    document.getElementById("journal-title").innerHTML = "June 2020"
}



function makePie(idName, percents) {
    let chart = document.getElementById(idName)
    let size = 500
    chart.width = size
    chart.height = size

    ctx = chart.getContext("2d")

    var slices = percents.map(percent => calcAngle(percent))
    drawPieSlice(ctx, size/2, size/2, size/2, 0, slices[0], '#a4f4a480')
    drawPieSlice(ctx, size/2, size/2, size/2, slices[0], slices[1]+slices[0], '#ecc08380')
    drawPieSlice(ctx, size/2, size/2, size/2, slices[1]+slices[0], slices[2]+slices[1]+slices[0], '#ed6e7880')
}
function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, radius, startAngle, endAngle)
    ctx.closePath()
    ctx.fill()
}
function calcAngle(percent) {
    let startAngle = (percent / 100) * 2 * Math.PI
    return startAngle
}