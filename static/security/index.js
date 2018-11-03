import {LineChart} from './../charts_modules/line.js';


function getChartsObject(type){
	let obj;
	switch (type){
		case "line":
			obj = new LineChart();
            break;
        default:
			obj = new LineChart();
            break;
    }
    return obj;
}

export {
	getChartsObject
}