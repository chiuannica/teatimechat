let sentimentPercents = [50, 25, 25]
makePie("sentiment-pie-chart", sentimentPercents)

let sentimentPercents2 = [50, 25, 25]
makePie("sentiment-pie-chart-2", sentimentPercents2)


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