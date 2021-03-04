import React from 'react';
import '../../assets/styles/sections/Diagram.css';
import {Line} from 'react-chartjs-2';

function Diagram(){
    const data = (canvas) => {
        const ctx = canvas.getContext("2d")
        const gradient = ctx.createLinearGradient(0,0,50,350);
        gradient.addColorStop(0, "#DFF8E4");
        gradient.addColorStop(1, "#fff");
        return {
            labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
                datasets: [
                    {
                        data: [40, 45, 40, 60, 60, 80, 40, 50, 70, 40,62,52],
                        borderColor: "#13CD3C",
                        fill: true,
                        backgroundColor: gradient,
                        borderWidth: 4,
                        pointBackgroundColor: 'transparent',
                        pointBorderColor: 'transparent',
                        pointHoverBackgroundColor: '#13CD3C',
                        pointHoverBorderColor: '#fff',
                    },
                    {
                        data: [25, 25, 30, 45, 40, 60, 30, 30, 50, 30,42,32],
                        borderColor: "#4D53D9",
                        fill: true,
                        borderWidth: 4,
                        backgroundColor: '#fff',
                        pointBackgroundColor: 'transparent',
                        pointBorderColor: 'transparent',
                        pointHoverBackgroundColor: '#4D53D9',
                        pointHoverBorderColor: '#fff',
                    }
                ]
        }
    }

    return (
        <div className="wp-diageam">
            <div className="diagram-header">
                <p className="diagram-header-title">Biểu đồ thống kê</p>
                <div className="diagram-header-select">
                    <select>
                        <option>23/01/2021</option>
                        <option>22/01/2021</option>
                        <option>21/01/2021</option>
                    </select>
                </div>
            </div>
            <div className="line-hint">
                <div className="line-hint-item">
                    <div className="item-line line-open"></div>
                    <div className="line-hint-txt">Lượt mở</div>
                </div>
                <div className="line-hint-item">
                    <div className="item-line line-click"></div>
                    <div className="line-hint-txt">Lượt click</div>
                </div>
            </div>
            <div className="diagram-content">
                <Line 
                    data={data} 
                    options={{
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    color: "#F2F3F5",
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    color: "#fff",
                                },
                                ticks: {
                                    min: 20,
                                    max: 100,
                                    stepSize: 20,
                                }   
                            }]
                        },
                        tooltips: {
                            enabled: false,

                            custom: function(tooltipModel) {
                                // Tooltip Element
                                var tooltipEl = document.getElementById('chartjs-tooltip');

                                // Create element on first render
                                if (!tooltipEl) {
                                    tooltipEl = document.createElement('div');
                                    tooltipEl.id = 'chartjs-tooltip';
                                    tooltipEl.innerHTML = '<table></table>';
                                    document.body.appendChild(tooltipEl);
                                }

                                // Hide if no tooltip
                                if (tooltipModel.opacity === 0) {
                                    tooltipEl.style.opacity = 0;
                                    return;
                                }

                                // Set caret Position
                                tooltipEl.classList.remove('above', 'below', 'no-transform');
                                if (tooltipModel.yAlign) {
                                    tooltipEl.classList.add(tooltipModel.yAlign);
                                } else {
                                    tooltipEl.classList.add('no-transform');
                                }

                                function getBody(bodyItem) {
                                    return bodyItem.lines;
                                }

                                // Set Text
                                if (tooltipModel.body) {
                                    var titleLines = tooltipModel.title || [];
                                    var bodyLines = tooltipModel.body.map(getBody);

                                    var innerHtml = '<thead>';

                                    titleLines.forEach(function(title) {
                                        innerHtml += '<tr><th>' + title + '</th></tr>';
                                    });
                                    innerHtml += '</thead><tbody>';

                                    bodyLines.forEach(function(body, i) {
                                        var colors = tooltipModel.labelColors[i];
                                        var style = 'background:' + colors.backgroundColor;
                                        style += '; border-color:' + colors.borderColor;
                                        style += '; border-width: 2px';
                                        var span = '<span style="' + style + '"></span>';
                                        innerHtml += '<tr><td>' + span + body + ' người </td></tr>';
                                    });
                                    innerHtml += '</tbody>';

                                    var tableRoot = tooltipEl.querySelector('table');
                                    tableRoot.innerHTML = innerHtml;
                                }

                                // `this` will be the overall tooltip
                                var position = this._chart.canvas.getBoundingClientRect();

                                // Display, position, and set styles for font
                                tooltipEl.style.opacity = 1;
                                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Diagram;