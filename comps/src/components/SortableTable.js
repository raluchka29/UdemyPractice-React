import Table from "./Table";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import useSort from "../hooks/use-sort";

function SortableTable(props){
    
    const { config, data } = props;
    const {
        sortBy,
        sortOrder,
        sortedData,
        getSortColumn,
    } = useSort(data, config);
   

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return{
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => getSortColumn(column.label)}>
                <div className="flex items-center"> 
            {getIcons(column.label, sortBy, sortOrder)}  
            {column.label}
                </div>
            </th>
        }
    });

    return (
    <Table {...props} data={sortedData} config={updatedConfig} />       
    );
}

function getIcons(label, sortBy, sortOrder) {
    if(label !== sortBy) {
        return (
        <div>
            <TiArrowSortedUp />
            <TiArrowSortedDown />
        </div>);
    }


    if (sortOrder === null) {
        return <div>
        <TiArrowSortedUp />
        <TiArrowSortedDown />       
        </div>;
    } else if (sortOrder === 'asc') {
        return <div>
        <TiArrowSortedUp />                
    </div>;
    } else if (sortOrder === 'desc') {
        return <div>      
        <TiArrowSortedDown />
    </div>;
    }
}
export default SortableTable;
