import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';

export default function TemperatureColumn() {
  const data = useSelector(state => state.project.data);
  var i = 0;
  var humiarr = [];

  const [option, setoption] = useState({
    options: {
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top' // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return val + '%';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758']
        }
      },
      xaxis: {
        categories: [
          '0h',
          '1h',
          '2h',
          '3h',
          '4h',
          '5h',
          '6h',
          '7h',
          '8h',
          '9h',
          '10h',
          '11h',
          '12h',
          '13h',
          '14h',
          '15h',
          '16h',
          '17h',
          '18h',
          '19h',
          '20h',
          '21h',
          '22h',
          '23h'
        ],
        position: 'top',
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val) {
            return val + '%';
          }
        }
      },
      title: {
        text: 'Humidity 8-12',
        floating: true,
        offsetY: 400,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
    series: [
      {
        name: 'Inflation',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  });

  useEffect(() => {
    if (data !== null) humiFunction();
  }, [data]);

  const humiFunction = async () => {
    i = 0;
    await data.data.map(hour => {
      humiarr[i] = hour.temperature.reduce((a, b) => a + b, 0) / hour.temperature.length;
      humiarr[i] = Math.round(humiarr[i] * 100) / 100;
      if (Number.isNaN(humiarr[i])) {
        humiarr[i] = 0;
      }
      i++;
    });

    setoption({
      options: {
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top' // top, center, bottom
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return val + '%';
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#b45229']
          }
        },
        xaxis: {
          categories: [
            '0h',
            '1h',
            '2h',
            '3h',
            '4h',
            '5h',
            '6h',
            '7h',
            '8h',
            '9h',
            '10h',
            '11h',
            '12h',
            '13h',
            '14h',
            '15h',
            '16h',
            '17h',
            '18h',
            '19h',
            '20h',
            '21h',
            '22h',
            '23h'
          ],
          position: 'top',
          labels: {
            offsetY: -18
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#b45229',
                colorTo: '#b45229',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true,
            offsetY: -35
          }
        },
        fill: {
          gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function(val) {
              return val + '%';
            }
          }
        },
        title: {
          text: 'Tempurature 8-12',
          floating: true,
          offsetY: 400,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      },
      series: [
        {
          name: 'Inflation',
          data: humiarr
        }
      ]
    });
    console.log(option);
  };

  return (
    <div className='align-self-center'>
      <div id='chart'>
        <Chart options={option.options} series={option.series} type='bar' width='700' />
      </div>
    </div>
  );
}
