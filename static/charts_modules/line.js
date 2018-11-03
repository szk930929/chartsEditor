//线图
var LineChart = (function () {
    function LineChart() {//构造函数
        this.option = {
				title:{
					show:true,
					text:'',
				},
				legend:{
					show:true,
					align:'auto',
				},
				xAxis: {
					type: 'category',
					show: true,
					name:'',
					nameTextStyle:{
						color:'#333',
						fontStyle:'normal',
						fontSize:12,
						align:'center',
					},
					axisLine:{
						lineStyle:{
							color:'#333',
							width:1,
							type:'sold',
						}
					},
					splitLine:{
						show:true,
						lineStyle:{
							color:'#333',
							width:1,
							type:'sold',
						}
					},
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: [{
					type: 'value',
					nameTextStyle:{
						color:'#333',
						fontStyle:'normal',
						fontSize:12,
						align:'center',
					},
					axisLine:{
						lineStyle:{
							color:'#333',
							width:1,
							type:'sold',
						}
					},
					splitLine:{
						show:true,
						lineStyle:{
							color:'#333',
							width:1,
							type:'sold',
						}
					},
				}],
				series: [{
					data: [820, 932, 901, 934, 1290, 1330, 1320],
					type: 'line'
				}],
				colors: ['#5182E4', '#9BCC66', '#3FB27E', '#F7CB4A', '#F88D48', '#F35352', '#CE62D6', '#8954D4', '#5156B8', '#51B4F1', '#69D4DB', '#D42D6B']
			}
        };
    //组装样式配置
    LineChart.prototype.packageChartsOpt = function (param) {
        this.option.xAxis = param.xAxis;
        this.option.yAxis[0] = param.yAxis;
        this.option.title.text = param.name;
        this.option.colors = param.color;
        this.option.legend = param.legend;
        return this.option;
    };
    /*组装数据(
    	x:维度轴数据；
    	y:数值轴数据；
    	yOpt:次轴数据；
    	name:数据名称；
    	nameOpt:次轴数据名称；
    	infoData:原始数据；
    	option:配置项；
      )
    */
    LineChart.prototype.packageChartsData = function (x, y, yOpt, name, nameOpt, infoData, options,chartOutPut) {
        options.series = [];
        options.chart.type = "spline";
        options.xAxis.categories = x;
        options.legend.data = name;
        var arr = [];
        for (var k = 0; k < y.length; k++) {
            var dom = {
                name: name[k],
                smooth: true,
                maxPointWidth: 50,
                data: y[k]
            };
            arr.push(dom);
        }
        options.series = arr;
        return options;
    };
    //初始化配置项
    LineChart.prototype.initChartsOpt = function (param) {
        var lenAlignX = param.legend.align;
        var lenAlignY = param.legend.verticalAlign;
        var legendEdit = "";
        if (lenAlignX == "right") {
            legendEdit = "right";
        }
        else {
            if (lenAlignY == "top") {
                legendEdit = "top";
            }
            else {
                legendEdit = "bottom";
            }
        }
        var ctStyle = {
            name: param.title.text,
            xAxis: param.xAxis,
            yAxis: param.yAxis[0],
            legend: param.legend,
            legendEdit: legendEdit,
            color: param.colors
        };
        return ctStyle;
    };
    //获取默认option
    LineChart.prototype.getDefaultOpt = function () {
        return this.option;
    };
    
    return LineChart;
}());

export {LineChart}
