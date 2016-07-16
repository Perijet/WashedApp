// Morris.js Charts sample data for SB Admin template

$(function() {

   

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Speed Queen",
            value: 19
        }, {
            label: "Maytag",
            value: 11
        }, {
            label: "Unimac",
            value: 3
        }, {
            label: "Wascomat",
            value: 8
        },
        {
            label: "Whirlpool",
            value: 4
        },
        {
            label: "Continental",
            value: 4
        },
        {
            label: "Electrolux",
            value: 7
        },
        {
            label: "Haier",
            value: 13
        },
        {
            label: "Huebsch",
            value: 14
        },
        {
            label: "IPSO",
            value: 4
        },
        {
            label: "Laundylux",
            value: 8
        },
        {
            label: "LG",
            value: 5
        }],
        resize: true
    });

   

    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            Brand: 'Tide',
            Quantity: 156
        }, {
            Brand: 'Cheer',
            Quantity: 156
        }, {
            Brand: 'Gain',
            Quantity: 181
        }, {
            Brand: 'All',
            Quantity: 100
        }, {
            Brand: 'Wisk',
            Quantity: 30
        }, {
            Brand: 'Ares',
            Quantity: 54
        }, {
            Brand: 'Disolvol',
            Quantity: 100
        },
        {
            Brand: 'Surf',
            Quantity: 20
        },
        {
            Brand: 'Fab',
            Quantity: 156
        },
        {
            Brand: 'Bounce',
            Quantity: 15
        },
        {
            Brand: 'Downy',
            Quantity: 156
        },
        {
            Brand: 'Snuggle',
            Quantity: 110
        },
        {
            Brand: 'Oxy Clean',
            Quantity: 156
        },
        {
            Brand: 'Clorox II',
            Quantity: 20
        },
        {
            Brand: 'Clorox',
            Quantity: 54
        },
        {
            Brand: 'Lever Color Safe Bleach',
            Quantity: 100
        }],
        xkey: 'Brand',
        ykeys: ['Quantity'],
        labels: ['Quantity'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });


});
