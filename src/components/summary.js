import Chart from './chart.js';
import FilterBar from './filterBar';

const currentSummary = [
    {
        values: [90, 2, 8],
        labels: ["Rolling", "Stolen", "Unresolved"],
        hole: 0.4,
        type: 'pie',
        marker: {
            colors: ["#3ACD74", "#EC3333", "#F0EC0A"]
        }
    }
    ]

const currentLayout = {width: 320, height: 275, title: 'Selected Date Range'}

const last30Data = [
    {
        values: [96, 1, 3],
        labels: ["Rolling", "Stolen", "Unresolved"],
        hole: 0.4,
        type: 'pie',
        marker: {
            colors: ["#3ACD74", "#EC3333", "#F0EC0A"]
        }
    }
    ]

const last30Layout = {width: 320, height: 275, title: 'Last 30 days'}

const truckData = [
    {
        y: [4, 3, 2, 1,1],
        x: ['Tru1205', 'Tru11011', 'Tra1116', 'Tra1280', 'Tra116'],
        type: 'bar'
    }
]

const truckLayout = {width: '100%', height: 320, title: 'Trucks with stolen tires in last 30 days'}

export default function Summary(props){
    return (
        <div>
            <FilterBar/>
            <div clasName="container w-100"> 
                <div className="row mt-4">
                    <div className="col-12 col-lg-5 border-right border-dark summary-border">                
                        <Chart chartData={currentSummary} layout={currentLayout} />
                        <Chart chartData={last30Data} layout={last30Layout} />
                    </div>
                    <div className="col-12 col-lg-7 mt-4 pl-5">
                        <h4 style={{lineHeight: 1.5}}><span style={{fontWeight: "bold"}}>Avg. Time to resolve Missing Tires:</span>  10hrs</h4>
                        <h4 style={{lineHeight: 1.5}}><span style={{fontWeight: "bold"}}>Vehicles Missing Tires:</span> 100</h4>
                        <h4 style={{lineHeight: 1.5}}><span style={{fontWeight: "bold"}}>Vehicles with Stolen Tires:</span> 3</h4>
                        <Chart chartData={truckData} layout={truckLayout} />
                    </div>
                </div>
            </div>
        </div>
    );
}