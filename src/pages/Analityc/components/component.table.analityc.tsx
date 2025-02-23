import Card from "@/components/Card";
import Table from "@/components/Table";
import { createColumnHelper, PaginationState } from "@tanstack/react-table";
import React from "react";

const exampleData = [
    {
        id: 1,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 1,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 1,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
     {
        id: 1,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 1,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 1,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 1,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 1,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 1,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 1,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 1,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 1,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 1,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 1,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    },
    {
        id: 2,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan9999@gmail.com",
        age: 25,
    }
]

const TableAnalitic: React.FC<{}> = ({ }) => {

    const createColumn = createColumnHelper<typeof exampleData[0]>();
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: 0,
        pageSize: 5
    });

    const [visibilityColumn, setVisibilityColumn] = React.useState<TypeOptions<typeof exampleData[0]>>({
        id: true,
        name: true,
        email: true,
        age: true
    });

    const columns = [

        createColumn.accessor("id", {
            header: "ID",
        }),

        createColumn.group({
            id: "info",
            header: () => <span>Info</span>,
            columns: [
                createColumn.accessor("email", {
                    header: "Email",
                }),

                createColumn.accessor("name", {
                    header: "Name"
                }),

                createColumn.accessor("age", {
                    header: "Age"
                }),

                createColumn.display({
                    header: "More Action"
                })
            ],
        }),

        createColumn.display({
            header: "Action",
            cell: (prop) => "Action"
        })
    ];

    return (
        <React.Fragment>
            <h1 className="mt-3 font-bold">TABLE ANALITIC</h1>
            <Card 
                darkMode 
                className="w-full mt-3" bodyClassName="px-4 py-4">
                <Table 
                    columns={columns} 
                    data={exampleData}
                    canVisibility
                    canPagination
                    optionsVisibility={{ visibility: visibilityColumn, setChangeVisibility: setVisibilityColumn }}
                    optionsPagination={{ paginate: pagination, setChangePagination: setPagination }}
                    />
            </Card>
        </React.Fragment>
    )
};

export default TableAnalitic;