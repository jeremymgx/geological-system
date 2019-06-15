$(function () {
    // echarts_4
    var echarts_4 = echarts.init(document.getElementById('echarts_4'));
    var option_4 = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['红色预警', '橙色预警', '黄色预警', '蓝色预警'],
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color:'#fff',
                fontSize:10
            }
        },
        geo: {
            map: 'china',
            roam: false,
            zoom:1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#254572',
                    borderColor: '#254572',
                    borderWidth: '1.2',

                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            },
            silent: true,
            regions: [
                {
                    name: "南海诸岛",
                    value: 0,
                    itemStyle: {
                        normal: {
                            opacity: 0,
                            label: {
                                show: false 
                            }
                        }
                    }
                }
            ]
        },
        series: [
            {
                name: '红色预警',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: mapdata1,
                symbolSize: 6,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fc0000'
                    }
                }
            },
            {
                name: '橙色预警',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: mapdata2,
                symbolSize: 6,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#246bed'
                    }
                }
            },
            {
                name: '黄色预警',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: mapdata3,
                symbolSize: 6,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f8e71c'
                    }
                }
            },
            {
                name: '蓝色预警',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: mapdata4,
                symbolSize: 6,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f18626'
                    }
                }
            }
        ]
    };
    echarts_4.setOption(option_4)

    //echarts_7
    var echarts_7 = echarts.init(document.getElementById('echarts_7'));
    var option_7 = {
        grid:{
            top:20,
            bottom:50
        },
        xAxis: {
            type: 'category',
            data: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'],
            axisLabel:{
                color:'#0DD5F5',
                fontSize:10,
                interval:0
            },
            axisLine:{
                lineStyle:{
                    color:'#0A9AC1',
                    width:0.5
                }
            },
            axisTick:{
                alignWithLabel:true
            },
            axisPointer:{
                show:true,
                type:'shadow',
                label:{
                    show:false
                }
            },
        },
        yAxis: {
            type: 'value',
            data: [20,40,60,80,100],
            axisLine:{
                show:false
            },
            axisTick:{
                show:false,
            },
            axisLabel:{
                color:'#fff'
            },
            splitLine:{
                lineStyle:{
                    color:'#0A9AC1',
                    width:0.5
                }
            },
        },
        series: [{
            data: echarts7Data,
            type: 'line',
            smooth: true,
            lineStyle:{
                color:'#F18626',
                shadowBlur:'13',
                shadowColor: '#F18626',
            },
            emphasis:{
                label:{
                    show:true,
                    color:'#fff',
                    backgroundColor:'#F18626',
                    borderRadius:4,
                    padding:[4,10,2,10],
                }
            },
            showSymbol:false,
        }]
    }
    echarts_7.setOption(option_7)

    // echarts_8
    var echarts_8 = echarts.init(document.getElementById('echarts_8'));
    var option_8 = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['已评估', '未评估'],
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                color:'#fff',
                fontSize:10
            }
        },
        geo: {
            map: 'china',
            roam: false,
            zoom:1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#254572',
                    borderColor: '#254572',
                    borderWidth: '1.2',

                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            },
            silent: true,
            regions: [
                {
                    name: "南海诸岛",
                    value: 0,
                    itemStyle: {
                        normal: {
                            opacity: 0,
                            label: {
                                show: false 
                            }
                        }
                    }
                }
            ]
        },
        series: [
            {
                name: '已评估',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: mapdata1,
                symbolSize: 5,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fc0000'
                    }
                }
            },
            {
                name: '未评估',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: mapdata3,
                symbolSize: 5,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f8e71c'
                    }
                }
            }
        ]
    };
    echarts_8.setOption(option_8)
})        
