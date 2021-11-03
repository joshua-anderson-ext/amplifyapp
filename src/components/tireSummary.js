import Chart from './chart.js';
import FilterBar from './filterBar';

const stolenTires = {
        y: [3,4,2,1,4],
        x: ["25-Sept", "26-Sept", "27-Sept", "28-Sept", "29-Sept"],
        type: 'bar',
        name: 'Stolen',
        marker: {
            color: ["#EC3333", "#EC3333", "#EC3333","#EC3333","#EC3333"]
        }
    }

const unresolvedTires = {
        y: [7,5,2,1,2],
        x: ["25-Sept", "26-Sept", "27-Sept", "28-Sept", "29-Sept"],
        name: 'Unresolved',
        type: 'bar',
        marker:{
            color: ["#F0EC0A","#F0EC0A","#F0EC0A","#F0EC0A","#F0EC0A" ]
        }
    }

const rollingTires = {
        y: [90,91,96,98,94],
        x: ["25-Sept", "26-Sept", "27-Sept", "28-Sept", "29-Sept"],
        name: 'Rolling',
        type: 'bar',
        marker: {
            color: ["#3ACD74", "#3ACD74", "#3ACD74", "#3ACD74", "#3ACD74"]
        }
    }

const stackedData = [rollingTires, unresolvedTires, stolenTires ]

const stackedLayout = {
    barmode: 'stack', 
    title: "Tires by Category",
    yaxis: {title: "% of All Tires"},
    xaxis: {title: "Date"}
}

export default function Summary(props){
    return (
        <div>
            <FilterBar/>
            <div clasName="container w-100"> 
                <div className="row mt-4">
                    <div className="col-12 col-lg-6">                
                        <Chart chartData={stackedData} layout={stackedLayout} />
                    </div>
                    <div className="col-12 col-lg-6 mt-4 pl-5">
                      
                    </div>
                </div>
            </div>
        </div>
    );
}