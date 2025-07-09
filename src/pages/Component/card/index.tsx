import Card from "@/components/Card";
import React from "react";
import { Card as PCard } from 'primereact/card';
import { Button } from "primereact/button";

const PageCard: React.FC = () => {

    const headerCard = () => {
        return (
            <h1 className="text-xl px-4 py-3">Card Component</h1>
        )
    };

    const footerCard1 = () => {
        return (
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Start</h1>
                <Button
                    label="Submited"
                    size="small"
                    className="bg-purple-500 border-none hover:bg-purple-600 py-3 px-2" />
            </div>
        )
    }

    return (
        <div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3 my-3">
                <PCard title={"Simple Card"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi deserunt quas fugit nam, quod veniam totam voluptas asperiores doloremque debitis incidunt alias facere voluptates autem nesciunt porro harum. Maxime.
                </PCard>
                <PCard title={"Card Header and Footer"} footer={footerCard1}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi deserunt quas fugit nam, quod veniam totam voluptas asperiores doloremque debitis incidunt alias facere voluptates autem nesciunt porro harum. Maxime.
                </PCard>

                <PCard title={"Card Header and Sub Header"} subTitle={"Sub Header Title"} footer={footerCard1}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi deserunt quas fugit nam, quod veniam totam voluptas asperiores doloremque debitis incidunt alias facere voluptates autem nesciunt porro harum. Maxime.
                </PCard>
            </div>
        </div>
    )
}

export default PageCard;