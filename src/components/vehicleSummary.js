import VehicleCard from './vehicleCard.js';

const Data = [
    {
        title:"1205",
        subHeaders: ["Type: Truck","Yard: MTY", "Gate: 1", "Last Read: 9/30/21 1100"], 
        list: [
            ["301854AAC31B3183EA05199C", "100%", "#3ACD74"],
            ["301854AAC31B3183EA051979", "100%", "#3ACD74"],
            ["301854AAC31B3183EA051961", "100%", "#3ACD74"],
            ["301854AAC31B3183E9FEF4D7", "100%", "#3ACD74"],
            ["301854AAC31B3183EA051996", "100%", "#3ACD74"],
            ["301854AAC2E3D403EFD64DFB", "100%", "#3ACD74"],
            ["301854AAC2E3D403EFD64A4E", "100%", "#3ACD74"],
            ["301854AAC31B3183E9FEF4E0", "100%", "#3ACD74"],
            ["301854AAC31B3183EA05199D", "100%", "#3ACD74"]
        ]       
    },
    {
        title:"1101",
        subHeaders: ["Type: Truck","Yard: MTY", "Gate: 1", "Last Read: 9/29/21 1700"], 
        list: [
            ["301854AAC31B3183EA05199C", "100%", "#3ACD74"],
            ["301854AAC31B3183EA051979", "100%", "#3ACD74"],
            ["301854AAC31B3183EA051961", "100%", "#3ACD74"],
            ["301854AAC31B3183E9FEF4D7", "100%", "#F0EC0A"],
            ["301854AAC31B3183EA051996", "100%", "#3ACD74"],
            ["301854AAC2E3D403EFD64DFB", "100%", "#3ACD74"],
            ["301854AAC2E3D403EFD64A4E", "100%", "#EC3333"],
            ["301854AAC31B3183E9FEF4E0", "100%", "#3ACD74"],
            ["301854AAC31B3183EA05199D", "100%", "#3ACD74"]
        ]       
    },
    {
        title:"1192",
        subHeaders: ["Type: Truck","Yard: MTY", "Gate: 1", "Last Read: 9/30/21 0800"], 
        list: [
            ["301854AAC31B3183EA05199C", "100%", "#3ACD74"],
            ["301854AAC31B3183EA051979", "100%", "#3ACD74"],
            ["301854AAC31B3183EA051961", "100%", "#3ACD74"],
            ["301854AAC31B3183E9FEF4D7", "100%", "#F0EC0A"],
            ["301854AAC31B3183EA051996", "100%", "#EC3333"],
            ["301854AAC2E3D403EFD64DFB", "100%", "#EC3333"],
            ["301854AAC2E3D403EFD64A4E", "100%", "#3ACD74"],
            ["301854AAC31B3183E9FEF4E0", "100%", "#3ACD74"],
            ["301854AAC31B3183EA05199D", "100%", "#3ACD74"]
        ]       
    },
    {
        title:"1286",
        subHeaders: ["Type: Trailer","Yard: MTY", "Gate: 1", "Last Read: 8/22/21 0900"], 
        list: [
            ["301854AAC31B3183EA05199C", "100%", '#3ACD74'],
            ["301854AAC31B3183EA051979", "100%", '#3ACD74'],
            ["301854AAC31B3183EA051961", "100%", '#3ACD74'],
            ["301854AAC31B3183E9FEF4D7", "100%", '#3ACD74'],
            ["301854AAC31B3183EA051996", "100%", '#3ACD74'],
            ["301854AAC2E3D403EFD64DFB", "100%", '#3ACD74'],
            ["301854AAC2E3D403EFD64A4E", "100%", '#3ACD74']
        ]       
    }
]

const vehicleCards = Data.map((item,index) => (
    <VehicleCard key={index} title={item.title} subHeaders={item.subHeaders} tireList={item.list} />
))

function VehicleSummary(){
    return (
        <div className="d-flex flex-row flex-wrap justify-content-start">
            {vehicleCards}
        </div>
    );
};

export default VehicleSummary;