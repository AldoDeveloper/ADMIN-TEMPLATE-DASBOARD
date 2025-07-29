import Skelton from "@/components/Skelton";
import React from "react";
import Card from "@/components/Card";
import TablePrime from "@/components/Table/prime/table.prime";
import product from "@/data/product";
import { ColumnProps } from "primereact/column";
import { loadComponent } from "@/utilities/load";
import Button from "@/components/Button";
import { BsClipboard2Fill, BsTrashFill } from "react-icons/bs";
import useIsMobile from "@/hooks/useMobile";

const LoadComposedChart = React.lazy(async () => await loadComponent(import("./components/composed.chart.analitic")) as any);

const LoadingSkelton = (): React.ReactNode => {
    return (
        <React.Fragment>
            <Card className="w-full" bodyClassName="py-5 px-5">
                <Skelton className="rounded-md w-full h-[50vh]" />
            </Card>
        </React.Fragment>
    )
};

export default function Analityc(): React.ReactNode {

    const [dataProduct, setDataProduct] = React.useState<Array<any>>(product);

    const handleEditData = (data: any) => {
        console.log(data)
    };

    const isMobile = useIsMobile();

    const renderBodyTableAction = (product: any) => {
        return (
            <div className="flex gap-3 items-center text-slate-100">
                <Button 
                    className="px-2" 
                    bgColor={"success"} 
                    size={"sm"} 
                    onClick={async() => handleEditData(product)}
                    label={<BsClipboard2Fill size={20}/>} />
                <Button 
                    className="px-2" 
                    bgColor={"danger"} 
                    size={"sm"} 
                    label={<BsTrashFill size={20}/>} />
            </div>
        )
    };
    const columns: ColumnProps[] = [
        {
            field: "id",
            header: "ID",
            sortable: true,
        },
        {
            field: "name",
            header: "Name",
            sortable: true
        },
        {
            field: "price",
            header: "Price",
            sortable: true
        },
        {
            field: "stock",
            header: "Stock",
            sortable: true
        },
        {
            field: "category",
            header: "Category",
            sortable: true
        },
        {
            header: "Action",
            body(data, options) {
                return renderBodyTableAction(data);
            },
        }
    ];

    return (
        <React.Fragment>
            <div className="grid grid-cols-1 grid-flow-row mt-3">
                <h1 className="text-2xl font-semibold mb-2 mt-2">Analitic</h1>
                <React.Suspense fallback={<LoadingSkelton />}>
                    <LoadComposedChart isMobile={isMobile}/>
                </React.Suspense>
                <TablePrime 
                    data={dataProduct} 
                    stripedRows 
                    selectionMode={"multiple"} 
                    columns={columns} />
            </div>
        </React.Fragment>
    )
};
