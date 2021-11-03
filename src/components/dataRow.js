function DataRow(props) {
    return (
        <tr>
            <td>
                {props.make}
            </td>
            <td>
                {props.model}
            </td>
            <td>
                {props.size} 
            </td>
            <td>
                {props.count}
            </td>
            <td>
                {props.inventoryStatus}
            </td>
            <td>
                {props.condition}
            </td>
            <td>
                {props.location}
            </td>
        </tr>
    );
};

export default DataRow;