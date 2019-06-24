$(function () {
    // echarts_1
    var echarts_1 = echarts.init(document.getElementById('echarts_1'));
    var option_1 = {
        tooltip: {
            trigger: 'item'
        },
        color: ['#F74B8F', '#37A1EE', '#45D9A5', '#9280FC'],
        grid:{
            top:10,
            left:40,
            bottom:40
        },
        legend: {
            icon:'circle',
            orient: 'vertical',
            bottom:'bottom',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color:'#fff',
                fontSize:10
            },
            data: ['综合风险度1', '综合风险度2', '综合风险度3','综合风险度4']
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                data: ['1142', '932', '1186', '681', '1101','1115','996','dqf'],
                axisLine:{
                    lineStyle:{
                        color: '#0ED5F5',
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine:{
                    show:false,
                },
                min:0,
                max:200,
                minInterval:20,
                splitNumber:10,
                axisLine:{
                    show:false,
                    lineStyle:{
                        color:'#999',
                    }
                },
                axisTick:{
                    show:false,
                },
            }
        ],
        series: [
            {
                name: '综合风险度1',
                type: 'bar',
                barWidth:3,
                itemStyle:{
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#F74B8F'},
                                {offset: 1, color: 'rgba(255,255,255,0)'}
                            ]
                        ),
                        barBorderRadius:[8,8,0,0],
                    },
                    emphasis: {
                        shadowColor:'#F74B8F',
                        shadowBlur:40,
                        shadowOffsetX:5,
                        shadowOffsetY:5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#F74B8F'},
                                {offset: 0.7, color: '#F74B8F'},
                                {offset: 1, color: '#F74B8F'}
                            ]
                        ),
                        barBorderRadius:[8,8,0,0],
                    }
                },
                barGap: 1,
                data: [120, 70, 110, 10, 200,80,170,80]
            },
            {
                name: '综合风险度2',
                type: 'bar',
                barWidth:3,
                itemStyle:{
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#37A1EE'},
                                {offset: 1, color: 'rgba(255,255,255,0)'}
                            ]
                        ),
                        barBorderRadius:[8,8,0,0],
                    },
                    emphasis: {
                        shadowColor:'#37A1EE',
                        shadowBlur:40,
                        shadowOffsetX:5,
                        shadowOffsetY:5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#37A1EE'},
                                {offset: 0.7, color: '#37A1EE'},
                                {offset: 1, color: '#37A1EE'}
                            ]
                        ),
                        barBorderRadius:[8,8,0,0],
                    }
                },
                barGap: 1,
                data: [70, 200, 60, 200, 140,160,70,80]
            },
            {
                name: '综合风险度3',
                type: 'bar',
                barWidth:3,
                itemStyle:{
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#45D9A5'},
                                {offset: 1, color: 'rgba(255,255,255,0)'}
                            ]
                        ),
                        barBorderRadius:[8,8,0,0],
                    },
                    emphasis: {
                        shadowColor:'#45D9A5',
                        shadowBlur:40,
                        shadowOffsetX:5,
                        shadowOffsetY:5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#45D9A5'},
                                {offset: 0.7, color: '#45D9A5'},
                                {offset: 1, color: '#45D9A5'}
                            ]
                        ),
                        barBorderRadius:[8,8,0,0],
                    }
                },
                barGap: 1,
                data: [120, 150, 200, 120, 200,70,80,80]
            },
            {
                name: '综合风险度4',
                type: 'bar',
                barWidth:3,
                itemStyle:{
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#9280FC'},
                                {offset: 1, color: 'rgba(255,255,255,0)'}
                            ]
                        ),
                        barBorderRadius:[8,8,0,0],
                    },
                    emphasis: {
                        shadowColor:'#9280FC',
                        shadowBlur:40,
                        shadowOffsetX:5,
                        shadowOffsetY:5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#9280FC'},
                                {offset: 0.7, color: '#9280FC'},
                                {offset: 1, color: '#9280FC'}
                            ]
                        ),
                        barBorderRadius:[8,8,0,0],
                    }
                },
                barGap: 1,
                data: [30, 40, 200, 120, 90,60,70,80]
            },
        ]
    };
    echarts_1.setOption(option_1);

    // echarts_2
    var echarts_2 = echarts.init(document.getElementById('echarts_2'));
    var option_2 = {
        tooltip: {
            trigger: 'item'
        },
	    legend: {                        
	        show: true,         
	        icon: 'circle',
            left : '60',     
            bottom:'-5',
	        itemWidth: 10,
	        itemHeight: 10,
	        textStyle: {
	            fontSize: 10,
	            color: '#fff'
	        },
	    },
	    radar: [{                       // 雷达图坐标系组件，只适用于雷达图。
	        center: ['50%', '50%'],             // 圆中心坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
	        radius: 68,                        // 圆的半径，数组的第一项是内半径，第二项是外半径。
	        startAngle: 90,                     // 坐标系起始角度，也就是第一个指示器轴的角度。[ default: 90 ]
	        name: {                             // (圆外的标签)雷达图每个指示器名称的配置项。
	            formatter: '{value}',
	            textStyle: {
	                fontSize: 10,
	                color: '#0ED5F5'
                },
	        },
	        splitNumber: 7,                     // (这里是圆的环数)指示器轴的分割段数。[ default: 5 ]
            nameGap:5,
            shape: 'circle',                    // 雷达图绘制类型，支持 'polygon'(多边形) 和 'circle'(圆)。[ default: 'polygon' ]
	        axisLine: {                         // (圆内的几条直线)坐标轴轴线相关设置
	            lineStyle: {
	                color: '#0ED5F5',                   // 坐标轴线线的颜色。
	                width: 0.5,                      	 // 坐标轴线线宽。
	                type: 'solid',                   // 坐标轴线线的类型。
	            }
	        },
	        splitLine: {                        // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
	            lineStyle: {
	                color: '#0ED5F5',                       // 分隔线颜色
	                width: 0.5, 							 // 分隔线线宽
	            }
	        },
	        splitArea: {                        // 坐标轴在 grid 区域中的分隔区域，默认不显示。
	            show: true,
	            areaStyle: {                            // 分隔区域的样式设置。
	                color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)'],       // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
	            }
	        },
	        indicator: [{               // 雷达图的指示器，用来指定雷达图中的多个变量（维度）,跟data中 value 对应
	            name: '部署与实施',                           // 指示器名称   
                max: 15000,                           // 指示器的最大值，可选，建议设置
	        }, {
	            name: '工作进度',
	            max: 10000
	        }, {
	            name: '人员与时间投入',
	            max: 8000
	        }, {
	            name: '原始资料',
	            max: 2000
	        }, {
	            name: '质量控制',
	            max: 500
	        }]
	    }],
	    series: [{
	        name: '雷达图',
	        type: 'radar',
	        itemStyle: {                // 折线拐点标志的样式。
	            normal: {                   // 普通状态时的样式
	                lineStyle: {
	                    width: 1
	                },
	                opacity: 1
	            },
	            emphasis: {                 // 高亮时的样式
	                lineStyle: {
	                    width: 3
	                },
	                opacity: 1
	            }
	        },
	        data: [{                    // 雷达图的数据是多变量（维度）的
	            name: '综合风险度1',                 // 数据项名称
	            value: [11035, 6013, 5067, 1520, 184],        // 其中的value项数组是具体的数据，每个值跟 radar.indicator 一一对应。
	            symbol: 'circle',                   // 单个数据标记的图形。
	            symbolSize: 5,                      // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
	            label: {                    // 单个拐点文本的样式设置                            
	                    normal: {  
	                        show: false,             // 单个拐点文本的样式设置。[ default: false ]
	                        position: 'top',        // 标签的位置。[ default: top ]
	                        distance: 5,            // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
	                        color: 'rgba(57,166,241,1)',          // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
	                        fontSize: 12,           // 文字的字体大小
	                        formatter:function(params) {  
	                            return params.value;  
	                        }  
	                    }  
	                },
	            itemStyle: {                // 单个拐点标志的样式设置。
	                normal: {
                        color: 'rgba(57,166,241,1)',  
	                    borderColor: 'rgba(57,166,241,1)',       // 拐点的描边颜色。[ default: '#000' ]
	                    borderWidth: 0,                        // 拐点的描边宽度，默认不描边。[ default: 0 ]
	                }
	            },
	            lineStyle: {                // 单项线条样式。
	                normal: {
                        color: 'rgba(57,166,241,1)',  
	                    opacity: 0.5            // 图形透明度
	                }
	            },
	            areaStyle: {                // 单项区域填充样式
	                normal: {
	                    color: 'rgba(57,166,241,0.5)'       // 填充的颜色。[ default: "#000" ]
	                }
	            }
	        }, {
	            name: '综合风险度2',
	            value: [13408, 5065, 5947, 856, 302],
	            symbol: 'circle',
	            symbolSize: 5,
	            label: {                        
	                    normal: {  
	                        show: false,
	                        position: 'top',
	                        distance: 5,
	                        color: 'rgba(243,77,143,1)',
	                        fontSize: 14,
	                        formatter:function(params) {  
	                            return params.value;  
	                        }  
	                    }  
	                },
	            itemStyle: {
	                normal: {
	                    color: 'rgba(243,77,143,1)',
	                    borderColor: 'rgba(243,77,143,1)',
	                    borderWidth: 0,
	                }
	            },
	            lineStyle: {
	                normal: {
	                    opacity: 0.5
	                }
	            },
	            areaStyle: {
	                normal: {
	                    color: 'rgba(243,77,143,0.5)'
	                }
	            }
	        }]
	    }, ]
    }
    echarts_2.setOption(option_2)

    // echarts_3
    var echarts_3 = echarts.init(document.getElementById('echarts_3'));
    var option_3 = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            icon:'circle',
            orient: 'vertical',
            itemWidth: 10,
            itemHeight: 10,
            left:40,
            bottom:5,
            textStyle: {
                color:'#fff',
                fontSize:10
            },
            data: ['综合风险度']
        },
        xAxis: {
            type: 'category',
            data: ['西安地调中心','地质力学所','天津地调中心','南京地调中心','油气调查中心','水环中心','水环所','发展研究中心','成都地调中心'],
            interval:0,//强制显示
            rotate:-90,
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize:10,
                },
                interval:0,//强制显示,
                formatter:function(params) {
                    var newParamsName = "";
                    var paramsNameNumber = params.length;
                    var provideNumber = 3;  //一行显示几个字
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                    if (paramsNameNumber > provideNumber) {
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";
                            var start = p * provideNumber;
                            var end = start + provideNumber;
                            if (p == rowNumber - 1) {
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;
                        }

                    } else {
                        newParamsName = params;
                    }
                    return newParamsName
                },
            },
            axisTick: {
                show: false
            },
            axisLine:{
                lineStyle:{
                    color: '#0ED5F5',
                }
            }
        },
        yAxis: {
            type: 'value',
            splitLine:{
                show:false,
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            {
                type: 'bar',
                itemStyle: {
                    
                    normal: {
                        color: 'rgba(245,248,255,0.2)',
                        barBorderRadius:8,
                    }
                },
                barWidth:6,
                barGap:'-100%',
                barCategoryGap:'40%',
                data: [100,100,100,100,100,100,100,100,100],
                animation: false
            },
            {
                type: 'bar',
                itemStyle: {
                    color: '#F74B8F',
                    barBorderRadius:8,

                },
                name:'综合风险度',
                barWidth:6,
                data: [100,70,50,40,80,20,30,50,90],
            }
        ]
    };
    echarts_3.setOption(option_3);

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
                data: [
                    { value: [118.88, 28.97, 177] },
                    { value: [116.7, 39.53, 193] }
                ],
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
                data: [
                    { value: [100.88, 30.97, 177] },
                    { value: [111.7, 40.53, 193] }
                ],
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
            },
            {
                name: '黄色预警',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: [
                    { value: [115.88, 25.97, 177] },
                    { value: [116.7, 36.53, 193] }
                ],
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
                data: [
                    { value: [113.88, 28.97, 177] },
                    { value: [116.7, 33.53, 193] }
                ],
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
            }
        ]
    };
    echarts_4.setOption(option_4)

    // echarts_5_1
    var echarts_5_1 = echarts.init(document.getElementById('echarts_5_1'));
    var option_5_1 = {
        tooltip: {
            trigger: 'item'
        },
        legend:[
            {
                icon:'circle',
                x : '0',
                y : '70%',
                itemWidth:10,
                itemHeight:10,
                data: ['工作手段'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
                pageButtonGap:1,
            },
            {
                icon:'circle',
                x : '50%',
                y : '70%',
                itemWidth:10,
                itemHeight:10,
                data: [ '工作精度'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
            },
            {
                icon:'circle',
                x : '0',
                y : '78%',
                itemWidth:10,
                itemHeight:10,
                data: ['工作量'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
            },
            {
                icon:'circle',
                x : '50%',
                y : '78%',
                itemWidth:10,
                itemHeight:10,
                data: ['委托工作量'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                        },
                    },
        ],
        // legend:{
        //     icon:'circle',
        //     orient: 'vertical',
        //     bottom:'bottom',
        //     itemWidth: 10,
        //     itemHeight: 10,
        //     textStyle: {
        //         color:'#fff',
        //         fontSize:10
        //     },
        //     data: ['工作手段', '工作精度', '工作量','委托工作量']
        // },
        color: ['#809DE8', '#019CD5', '#78E0E1', '#ECEDF1'],
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'工作手段'},
                    {value:310, name:'工作精度'},
                    {value:274, name:'工作量'},
                    {value:235, name:'委托工作量'},
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                    show:false,
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
    
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    }
    echarts_5_1.setOption(option_5_1);
    
    // echarts_5_2
    var echarts_5_2 = echarts.init(document.getElementById('echarts_5_2'));
    var option_5_2 = {
        tooltip: {
            trigger: 'item'
        },
        legend:[
            {
                icon:'circle',
                x : '0',
                y : '70%',
                itemWidth:10,
                itemHeight:10,
                data: ['工作手段'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
                pageButtonGap:1,
            },
            {
                icon:'circle',
                x : '50%',
                y : '70%',
                itemWidth:10,
                itemHeight:10,
                data: [ '工作精度'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
            },
            {
                icon:'circle',
                x : '0',
                y : '78%',
                itemWidth:10,
                itemHeight:10,
                data: ['工作量'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
            },
            {
                icon:'circle',
                x : '50%',
                y : '78%',
                itemWidth:10,
                itemHeight:10,
                data: ['委托工作量'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
            },
        ],
        color: ['#809DE8', '#019CD5', '#78E0E1', '#ECEDF1'],
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'工作手段'},
                    {value:310, name:'工作精度'},
                    {value:274, name:'工作量'},
                    {value:235, name:'委托工作量'},
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                    show:false,
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
    
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    }
    echarts_5_2.setOption(option_5_2);

    // echarts_5_3
    var echarts_5_3 = echarts.init(document.getElementById('echarts_5_3'));
    var option_5_3 = {
        tooltip: {
            trigger: 'item'
        },
        legend:[
            {
                icon:'circle',
                x : '0',
                y : '70%',
                itemWidth:10,
                itemHeight:10,
                data: ['工作手段'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
                pageButtonGap:1,
            },
            {
                icon:'circle',
                x : '50%',
                y : '70%',
                itemWidth:10,
                itemHeight:10,
                data: [ '工作精度'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
            },
            {
                icon:'circle',
                x : '0',
                y : '78%',
                itemWidth:10,
                itemHeight:10,
                data: ['工作量'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
            },
            {
                icon:'circle',
                x : '50%',
                y : '78%',
                itemWidth:10,
                itemHeight:10,
                data: ['委托工作量'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
            },
        ],
        color: ['#809DE8', '#019CD5', '#78E0E1', '#ECEDF1'],
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'工作手段'},
                    {value:310, name:'工作精度'},
                    {value:274, name:'工作量'},
                    {value:235, name:'委托工作量'},
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                    show:false,
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
    
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    }
    echarts_5_3.setOption(option_5_3);

    // echarts_5_4
    var echarts_5_4 = echarts.init(document.getElementById('echarts_5_4'));
    var option_5_4 = {
        tooltip: {
            trigger: 'item'
        },
        legend:[
            {
                icon:'circle',
                x : '0',
                y : '70%',
                itemWidth:10,
                itemHeight:10,
                data: ['自检'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
                pageButtonGap:1,
            },
            {
                icon:'circle',
                x : '50%',
                y : '70%',
                itemWidth:10,
                itemHeight:10,
                data: [ '互检'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
            },
        ],
        color: ['#019CD5','#809DE8'],
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'自检'},
                    {value:510, name:'互检'},
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                    show:false,
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
    
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    }
    echarts_5_4.setOption(option_5_4);

    // echarts_5_5
    var echarts_5_5 = echarts.init(document.getElementById('echarts_5_5'));
    var option_5_5 = {
        tooltip: {
            trigger: 'item'
        },
        legend:[
            {
                icon:'circle',
                x : '0',
                y : '70%',
                itemWidth:10,
                itemHeight:10,
                data: ['工作手段'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
                pageButtonGap:1,
            },
            {
                icon:'circle',
                x : '50%',
                y : '70%',
                itemWidth:10,
                itemHeight:10,
                data: [ '工作精度'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
            },
            {
                icon:'circle',
                x : '0',
                y : '78%',
                itemWidth:10,
                itemHeight:10,
                data: ['工作量'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
            },
            {
                icon:'circle',
                x : '50%',
                y : '78%',
                itemWidth:10,
                itemHeight:10,
                data: ['委托工作量'],
                textStyle: {
                    color:'#0ED5F5',
                    fontSize:7
                },
            },
        ],
        color: ['#809DE8', '#019CD5', '#78E0E1', '#ECEDF1'],
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'工作手段'},
                    {value:310, name:'工作精度'},
                    {value:274, name:'工作量'},
                    {value:235, name:'委托工作量'},
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                    show:false,
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
    
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    }
    echarts_5_5.setOption(option_5_5);
    // echarts_6
    var color6 = ['#FF3939','#F18626','#F8E71C','#246bed']
    var style6 = color6.map(function(item){
        return {
            color:item,
            barBorderRadius:2,
            shadowBlur:13,
            shadowColor:item
        }
    })
    var echarts_6 = echarts.init(document.getElementById('echarts_6'));
    var option_6 = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            data:['红色预警','橙色预警','黄色预警','蓝色预警'],
            itemWidth: 8,
            itemHeight: 8,
            icon: 'circle',
            bottom:'30',
            textStyle: {
                color:'#fff',
                fontSize:10
            },
        },
        grid:{
            top:20,
            bottom:30,
            containLabel: true
        },
        yAxis: {
            type: 'category',
            data: ['周凯德','林文哲','禹羽','陈丽','刘建华'],
            axisLine:{
                show:false
            },
            axisTick:{
                show:false,
            },
            axisLabel:{
                color:'#fff',
                fontSize:11
            },
        },
        xAxis: {
            type: 'value',
            show: false,
        },
        series: [{
            name:'红色预警',
            data: [120, , , , ],
            type: 'bar',
            stack:'all',
            barWidth:3,
            itemStyle:style6[0]
        },
        {
            name:'橙色预警',
            data: [, 200, , , 70],
            type: 'bar',
            stack:'all',
            itemStyle:style6[1]
        },
        {
            name:'黄色预警',
            data: [, , , 80, ],
            type: 'bar',
            stack:'all',
            itemStyle:style6[2]
        },
        {
            name:'蓝色预警',
            data: [, , 150, , ],
            type: 'bar',
            stack:'all',
            itemStyle:style6[3]
        }]
    };
    echarts_6.setOption(option_6)

    // echarts_7
    var echarts_7 = echarts.init(document.getElementById('echarts_7'));
    var option_7 = {
        grid:{
            top:20,
            bottom:60
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
            data: [23, 43, 42, 54, 32, 12, 23, 65, 87, 45, 28, 45],
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
                data: [
                    { value: [118.88, 28.97, 177] },
                    { value: [116.7, 39.53, 193] }
                ],
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
                data: [
                    { value: [115.88, 25.97, 177] },
                    { value: [116.7, 36.53, 193] }
                ],
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
