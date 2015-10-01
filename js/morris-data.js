$(function() {

    Morris.Bar({
        element: 'morris-area-chart',
        stacked: true,
        data: [{
            period: 'Mon',
            A: 3,
            B: 9,
            C: 12,
            D: 13,
            E: 1
        }, {
            period: 'Tue',
            A: 11,
            B: 4,
            C: 17,
            D: 5,
            E: 13
        }, {
            period: 'Wed',
            A: 20,
            B: 4,
            C: 1,
            D: 4,
            E: 2
        }, {
            period: 'Thur',
            A: 6,
            B: 2,
            C: 17,
            D: 14,
            E: 14
        }, {
            period: 'Fri',
            A: 6,
            B: 2,
            C: 5,
            D: 4,
            E: 7
        }
        ],
        xkey: 'period',
        ykeys: ['A', 'B', 'C', 'D', 'E'],
        labels: ['A', 'B', 'C', 'D', 'E'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
        barColors: ['#4169E1', '#87CEFA', '#D3D3D3', '#FF7F50', '#DC143C'],
        fillOpacity: .5
    });


});
