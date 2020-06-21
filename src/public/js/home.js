changeToJune2020("sentiment-pie-chart")


let days = [
    [ "8", [30, 50, 20], ["Bubble Tea", "Fish Cakes", "Brownies"] ],
    [ "9", [50, 50, 0], ["Bubble Tea", "Fish Cakes", "Brownies"] ],
    [ "11", [15, 70, 15], ["Bubble Tea", "Fish Cakes", "Brownies"] ],
    [ "19", [70, 15, 15], ["Bubble Tea", "Fish Cakes", "Brownies"] ],
    [ "20", [15, 20, 65], ["Bubble Tea", "Fish Cakes", "Brownies"] ],
    [ "23", [20, 20, 60], ["Bubble Tea", "Fish Cakes", "Brownies"] ],
    [ "26", [70, 15, 15], ["Bubble Tea", "Fish Cakes", "Brownies"] ],
    [ "27", [40, 60, 0], ["Bubble Tea", "Fish Cakes", "Brownies"] ],
    [ "29", [70, 15, 15], ["Bubble Tea", "Fish Cakes", "Brownies"] ]
]

changeReportChart("June", "9", [90, 10, 0], ["Bubble Tea", "Peppa Pig", "BTS"])

setCalendar(days);

function setCalendar(days) {
    for (let i = 0; i < 100; i++) {
        var day = document.getElementsByClassName("day")[i];

        if (days[i][1][1] > days[i][1][0] && days[i][1][1] > days[i][1][2]) {
            day.className = "neu"
        } else if (days[i][1][2] > days[i][1][0] && days[i][1][2] > days[i][1][1]) {
            day.className = "neg"
        } else {
            day.className = "pos"
        }
    }

}

function changeReportChart(month, day, percents, subjects) {
    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = month;
    makePie("sentiment-pie-chart", percents);
    document.getElementsByTagName("li")[0].innerHTML = subjects[0];
    document.getElementsByTagName("li")[1].innerHTML = subjects[1];
    document.getElementsByTagName("li")[2].innerHTML = subjects[2];

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