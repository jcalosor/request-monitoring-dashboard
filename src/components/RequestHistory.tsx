import { useState, useEffect } from "react";
import {MaterialReactTable, useMaterialReactTable} from "material-react-table";
import { fetchHistory } from "../services/api";

const RequestHistory = () => {
    const [data, setData] = useState<any[]>([]);
    const [page, setPage] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5, // Default page size
    });

    const totalPages = Math.ceil(totalCount / pagination.pageSize);

    useEffect(() => {
        fetchHistory(pagination.pageIndex + 1, pagination.pageSize)
            .then((res) => {
               // console.log(res);
                setData(res.data);
                setTotalCount(res.totalPages);
            })
            .catch((error) => {
                console.error("Failed to fetch history:", error);
            });
    }, [pagination]);

    const materialTable = useMaterialReactTable({
        columns: [
                { accessorKey: "data.name", header: "Name" },
                { accessorKey: "data.age", header: "Age", enableSorting: true },
                {
                    accessorKey: "data.isActive",
                        header: "Active",
                    Cell: ({ row }) => (row.original.data.isActive ? "Yes" : "No"),
                },
                { accessorKey: "timestamp", header: "Timestamp" },
        ],
        data,
        manualPagination: true,
        rowCount: totalCount,
        state: {
            pagination: pagination,
        },
        muiTablePaperProps: {
            elevation: 0,
        },
        onPaginationChange: setPagination,
    });

    const handlePageChange = (newPage) => {
        setPagination((prev) => ({ ...prev, pageIndex: newPage }));
    };

    const handlePageSizeChange = (newPageSize) => {
        setPagination((prev) => ({ ...prev, pageSize: newPageSize, pageIndex: 0 }));
    };

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">History</h2>
            <MaterialReactTable table={materialTable} />
            <div className="flex justify-between items-center mt-4">
                <button
                    disabled={pagination.pageIndex === 0}
                    onClick={() => handlePageChange(pagination.pageIndex - 1)}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span>
                    Page {pagination.pageIndex + 1} of {totalPages}
                </span>
                <button
                    disabled={pagination.pageIndex + 1 >= totalPages}
                    onClick={() => handlePageChange(pagination.pageIndex + 1)}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
                <select
                    value={pagination.pageSize}
                    onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                    className="ml-4 p-2 border rounded"
                >
                    {[5, 10, 20, 50].map((size) => (
                        <option key={size} value={size}>
                            {size} per page
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default RequestHistory;
