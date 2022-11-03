var ctx = document.getElementById('compare-plot').getContext('2d');
let sentiments = data['normalizedSentiment']
var prices = data['normalizedPrice']
let months = data['months']

console.log(sentiments.length)
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Social Media Sentiment',
                data: sentiments,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 4
            }, {
                label: 'Market Price',
                data: prices,
                borderWidth: 4,
                borderColor: '#e63946'

            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });