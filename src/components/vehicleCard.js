function VehicleCard(props){
    const tireList = props.tireList;
    
    const subheaders = props.subHeaders;
    //console.log(tireList, subheaders)

    const cardH4 = subheaders.map((item, index) => 
        <h4 key={index} style={{lineHeight: 1.4}} className="col-12 p-0 m-0">{item}</h4>
    )

    const tireLi = tireList.map((item, index) =>
        <li key={index} style={{backgroundColor: item[2], fontSize: 20, lineHeight: 1.2}} className="tireLi p-1 text-center font-weight-bold">
            {item[0]}
        </li>
    )

    return (
        <div className="py-3 d-flex flex-row flex-wrap justify-content-center col-12 col-lg-6">
            <div className="shadow py-3 rounded d-flex flex-row flex-wrap justify-content-center col-12">
                <h3 className="col-12 summaryCardHeader">{props.title}</h3>
                {cardH4}
                <ul className="p-0 m-0 list-unstyled w-100 rounded">
                    {tireLi}                   
                </ul>
            </div>                                    
        </div>        
    );
};

export default VehicleCard;