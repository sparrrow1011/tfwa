import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Spiders = ({ graph }:any) => {
    const options = {
        chart: {
            polar: true,
            type: 'line',
        },

        title: {
            text: '',
            x: -80,
        },

        pane: {
            size: '80%',
        },

        xAxis: {
            categories: [
                'Efficiency and Transparency of border administration',
                'Availability and use of ICTs',
                'Availability and quality of transport services',
                'Availability and quality of transport infrastructure',
            ],
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },

        tooltip: {
            shared: true,
            pointFormat:
                '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
        },

        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'vertical',
        },

        series: [
            {
                name: 'Global Worst',
                data: [324, 234, 123, 211],
                pointPlacement: 'on',
            },
            {
                name: 'Global Best',
                data: [234, 321, 123, 211],
                pointPlacement: 'on',
            },
            {
                name: 'Ecowas Average',
                data: [123, 234, 321, 123],
                pointPlacement: 'on',
            },
        ],

        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500,
                    },
                    chartOptions: {
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom',
                            layout: 'horizontal',
                        },
                        pane: {
                            size: '70%',
                        },
                    },
                },
            ],
        },
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default Spiders;
