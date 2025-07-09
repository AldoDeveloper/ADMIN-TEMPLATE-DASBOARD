import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { BsBoxArrowDown, BsBoxArrowDownLeft, BsBoxArrowDownRight, BsBoxArrowLeft, BsBoxArrowRight, BsBoxArrowUp, BsBoxArrowUpLeft, BsBoxArrowUpRight, BsThreeDotsVertical } from "react-icons/bs";

const PageModal: React.FC = () => {

    const [visible, setVisible] = useState<boolean>(false);
    const [visible2, setVisible2] = useState<boolean>(false);
    const [position, setPosition] = useState<string>("center");

    const headerCard = () => {
        return (
            <div className="flex justify-between items-center px-3 py-3">
                <h1 className="text-xl font-semibold text-gray-500">Modal Basic</h1>
                <BsThreeDotsVertical size={20} />
            </div>
        )
    };

    const headerCard2 = () => {
        return (
            <div className="flex justify-between items-center px-3 py-3">
                <h1 className="text-xl font-semibold text-gray-500">Modal Position {position.toUpperCase()}</h1>
                <BsThreeDotsVertical size={20} />
            </div>
        )
    }

    const headeModal1 = () => {
        return (
            <div>
                <h1>Modal Basic Header</h1>
            </div>
        )
    };

    const headerModal2 = () => {
        return (
            <div>
                <h1>Modal Position</h1>
            </div>
        )
    };

    const showModal = (position: string) => {
        setPosition(position);
        setVisible2(true)
    }

    return (
        <React.Fragment>
            <div className="grid grid-cols-1">
                <Card header={headerCard} className="w-full my-2">
                    <div className="flex justify-center">
                        <Button
                            label="Show Modal"
                            iconPos="left"
                            onClick={() => setVisible(true)}
                            icon={() => <BsBoxArrowUpRight size={18} className="mr-3" />}
                        />
                    </div>
                </Card>
                <Card header={headerCard2} className="w-full my-2">
                    <div>
                        <div className="flex items-center flex-wrap justify-center gap-2">
                            <Button
                                label="Left"
                                iconPos="left"
                                onClick={() => showModal("left")}
                                icon={() => <BsBoxArrowRight size={20} />}
                                className="min-w-[10rem]" />
                            <Button
                                label="Right"
                                iconPos="left"
                                onClick={() => showModal("right")}
                                icon={() => <BsBoxArrowLeft size={20} />}
                                className="min-w-[10rem]" />
                        </div>
                        <div className="flex items-center flex-wrap justify-center gap-2 mt-3">
                            <Button
                                label="Left"
                                iconPos="left"
                                severity="warning"
                                onClick={() => showModal("top-left")}
                                icon={() => <BsBoxArrowUpRight size={20} />}
                                className="min-w-[10rem]" />
                            <Button
                                label="Right"
                                severity="warning"
                                iconPos="left"
                                onClick={() => showModal("top")}
                                icon={() => <BsBoxArrowUp size={20} />}
                                className="min-w-[10rem]" />
                            <Button
                                label="Right"
                                iconPos="left"
                                severity="warning"
                                onClick={() => showModal("top-right")}
                                icon={() => <BsBoxArrowUpLeft size={20} />}
                                className="min-w-[10rem]" />
                        </div>
                        <div className="flex items-center flex-wrap justify-center gap-2 mt-3">
                            <Button
                                label="Left"
                                iconPos="left"
                                severity="success"
                                onClick={() => showModal("bottom-left")}
                                icon={() => <BsBoxArrowDownRight size={20} />}
                                className="min-w-[10rem]" />
                            <Button
                                label="Right"
                                severity="success"
                                iconPos="left"
                                onClick={() => showModal("bottom")}
                                icon={() => <BsBoxArrowDown size={20} />}
                                className="min-w-[10rem]" />
                            <Button
                                label="Right"
                                iconPos="left"
                                severity="success"
                                onClick={() => showModal("bottom-right")}
                                icon={() => <BsBoxArrowDownLeft size={20} />}
                                className="min-w-[10rem]" />
                        </div>
                    </div>
                </Card>
            </div>

            <Dialog
                visible={visible}
                id="modal-basic"
                className="w-[50vw]"
                header={headeModal1}
                draggable={false}
                onHide={() => setVisible(false)}>
                {
                    Array.from({ length: 3 }).map((_, idx) => (
                        <p key={idx} className="mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ex, eos fuga praesentium, dolor delectus dignissimos nostrum totam sit tenetur maxime similique repellat et vitae voluptatibus excepturi omnis repellendus. Iusto?</p>
                    ))
                }
            </Dialog>

            <Dialog
                visible={visible2}
                id="modal-position"
                className="w-[40vw]"
                position={position as any}
                onHide={() => setVisible2(false)}
                header={headerModal2}>
                {
                    Array.from({ length: 1 }).map((_, idx) => (
                        <p key={idx} className="mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ex, eos fuga praesentium, dolor delectus dignissimos nostrum totam sit tenetur maxime similique repellat et vitae voluptatibus excepturi omnis repellendus. Iusto?</p>
                    ))
                }

            </Dialog>
        </React.Fragment>
    )
}


export default PageModal;