var echarts_1_1 = echarts.init(document.getElementById('echarts_1_1'));
var option1_1 = {
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['化探完成率'],
        left:0,
        itemWidth:13,
        itemHeight:13,
        textStyle:{
            color:'#777'
        }
    },
    xAxis: {
        type: 'category',
        data: ['1101', '1142', '932', '1186', '996', 'dqf', '1115','681'],
        axisTick:{
            show:false
        },
        axisLine:{
            lineStyle:{
                color:'#d8d8d8'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#333',
                fontSize: 12,
            },
        }
    },
    yAxis: {
        type: 'value',
        splitLine:{
            show:false
        },
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        axisLabel: {
            textStyle: {
                color: '#777',
                fontSize: 12,
            },
        }
    },
    color:['#32B787 '],
    series: [{ // For shadow
        type: 'bar',
        barWidth:16,
        itemStyle: {
            normal: {color: 'rgba(0,0,0,0.05)'}
        },
        barGap:'-100%',
        barCategoryGap:'40%',
        data: [100, 100, 100, 100, 100, 100, 100,100],
        animation: false
    },
        {
        name:'化探完成率',
        data: [35, 23, 55, 80, 70, 34, 13,20],
        type: 'bar',
        barWidth:16,
        }]
};
echarts_1_1.setOption(option1_1);
