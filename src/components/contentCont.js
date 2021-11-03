import FilterBar from './filterBar';
import DataTable from './dataTable.js';
import DataSummaryCard from './dataSummaryCard.js';

const Data = [
    {
        title:"Stock",
        subHeader1: "New: 600",
        subHeader2: "Retreads: 600"
    },
    {
        title:"Rolling",
        subHeader1: "Trucks: 10,000",
        subHeader2: "Trailers: 8,000"
    },
    {
        title:"At Retread",
        subHeader1: "350"
    },
    {
        title:"Scrapped in Last 30 days",
        subHeader1: "120"
    }
]

function ContentCont(props){
    return (
        <div className="contentCont py-5 d-flex flex-row flex-wrap justify-content-center col-12 col-sm-8 col-lg-9">
            <FilterBar />
            <div className="w-100 pt-3">
                {props.navView==="summary"?
                    <DataTable/> :                 
                    <div className=" d-flex flex-row flex-wrap justify-content-start">
                    {
                        Data.map((item,index) => (
                            <DataSummaryCard key={index} title={item.title} subHeader1={item.subHeader1} subHeader2={item.subHeader2} />
                        ))
                    }
                    </div> 
                }
            </div>                        
        </div>
    );
};

export default ContentCont;