import DataRow from './dataRow.js';

const Data = [
    {
        make: "Michelin",
        model: "XDA5+",
        size: "11R24.5",
        count: "400",
        inventoryStatus: "Yard Stock",
        condition: "New",
        location: "Yard 1"
    },
    {
        make: "Michelin",
        model: "X LINE ENERGY Z",
        size: "11R24.5",
        count: "900",
        inventoryStatus: "Rolling",
        condition: "New",
        location: "Yard 2"
    },
    {
        make: "BFGOODRICH",
        model: "DR454",
        size: "275/80R22.5",
        count: "300",
        inventoryStatus: "At Retreader",
        condition: "Retreads",
        location: "At Retreader"
    },
    {
        make: "BFGOODRICH",
        model: "DR454",
        size: "275/80R22.5",
        count: "200",
        inventoryStatus: "Waiting for Retread",
        condition: "Retreads",
        location: "Yard 3"
    }
]

function DataTable(){
    return (
        <table className="w-100 table">
                    <tr>
                        <th className="top-row">
                            Make
                        </th>
                        <th className="top-row">
                            Model
                        </th>
                        <th className="top-row">
                            Size
                        </th>
                        <th className="top-row">
                            Count
                        </th>
                        <th className="top-row">
                            Inventory Status
                        </th>
                        <th className="top-row">
                            Condition
                        </th>                                    
                        <th className="top-row">
                            Location
                        </th>
                    </tr>
                    {Data.map((item) => (
                        <DataRow 
                            make={item.make} 
                            model={item.model} 
                            size={item.size} 
                            count={item.count} 
                            inventoryStatus={item.inventoryStatus}
                            condition={item.condition}
                            location={item.location}
                        />
                    ))} 
                </table>
    );
};

export default DataTable;