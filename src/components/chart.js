import Plot from 'react-plotly.js';

//see this url for documnetation: https://plotly.com/javascript/
//axes formatting: https://plotly.com/javascript/axes/

export default function Chart(props){
    return (
        <div>
            <Plot
                    data={props.chartData}
                layout={ props.layout }
            />
        </div>        
    );      
};