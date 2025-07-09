import useIsMobile from "@/hooks/useMobile";
import { Card } from "primereact/card";
import { Timeline } from "primereact/timeline";
import React from "react";
import { BsBehance, BsCheck, BsClockFill, BsThreeDotsVertical, BsTruck } from "react-icons/bs";

const PageTimeLine: React.FC = () => {

    const isMobile = useIsMobile();
    
    const headerCard = () => {
        return (
            <div className="flex justify-between items-center px-4 py-4">
                <h1 className="text-xl font-semibold">Component Timeline Vertical</h1>
                <BsThreeDotsVertical size={18} />
            </div>
        )
    };

    const headerCard2 = () => {
        return (
            <div className="flex justify-between items-center px-4 py-4">
                <h1 className="text-xl font-semibold">Component Timeline Horizontal</h1>
                <BsThreeDotsVertical size={18} />
            </div>
        )
    };

    const headerCard3 = () => {
        return (
            <div className="flex justify-between items-center px-4 py-4">
                <h1 className="text-xl font-semibold">Timeline Template</h1>
                <BsThreeDotsVertical size={18} />
            </div>
        )
    };

    const customizedMaker = (item: any) => {
        return(
            <span style={{backgroundColor: item?.color}} className="w-[2rem] h-[2rem] rounded-full flex justify-center items-center text-white">
                { item?.icon()  }
            </span>
        )
    };

    const customizedContent = (item: any) => {
        return(
            <Card title={item.status} subTitle={item.date} className="my-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid praesentium qui consectetur modi nobis excepturi quod totam aliquam? Cupiditate, officia!</p>
            </Card>
        )
    }
    const events = [
        { status: 'Pre-Ordered', date: '01/06/2025 09:00', icon: () => <BsClockFill size={18} />, color: '#9E9E9E' },
        { status: 'Processing', date: '10/06/2025 10:00', icon: () => <BsBehance size={18} />, color: '#673AB7' },
        { status: 'Shipped', date: '15/06/2025 16:30', icon: () => <BsTruck size={18} />, color: '#FF9800' },
        { status: 'Delivered', date: '17/06/2025 12:00', icon: () => <BsCheck size={18} />, color: '#607D8B' }
    ];

    const events2 = [
        { status: 'Pre-Order', date: '01/07/2025 08:00', icon: 'pi pi-clock', color: '#9E9E9E' },
        { status: 'Payment Pending', date: '01/07/2025 08:15', icon: 'pi pi-credit-card', color: '#FFC107' },
        { status: 'Payment Confirmed', date: '01/07/2025 09:00', icon: 'pi pi-check-circle', color: '#4CAF50' },
        { status: 'Order Processing', date: '01/07/2025 12:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Packaging', date: '01/07/2025 15:30', icon: 'pi pi-box', color: '#3F51B5' },
        { status: 'Shipped', date: '02/07/2025 07:00', icon: 'pi pi-truck', color: '#FF9800' },
        { status: 'In Transit', date: '02/07/2025 14:00', icon: 'pi pi-send', color: '#03A9F4' },
        { status: 'Out for Delivery', date: '03/07/2025 08:00', icon: 'pi pi-directions', color: '#00BCD4' },
        { status: 'Delivered', date: '03/07/2025 14:45', icon: 'pi pi-check', color: '#607D8B' },
        { status: 'Warranty Activated', date: '04/07/2025 09:00', icon: 'pi pi-shield', color: '#4CAF50', image: 'warranty.jpg' }
    ];

    return (
        <div className="grid grid-cols-1 space-y-3 mt-3">
            <Card header={headerCard}>
                <div className="grid grid-cols- space-y-4">
                    <div className="grid grid-cols-4 max-md:grid-cols-1 justify-center">
                        <Timeline
                            value={events}
                            opposite={(item) => item.status}
                            content={(item) => <small className="text-color-secondary">{item.date}</small>} />

                        <Timeline
                            value={events}
                            align="right"
                            content={(item) => item.status}
                            className="w-full md:w-20rem" />

                        <Timeline
                            value={events}
                            align="left"
                            content={(item) => item.status}
                            className="w-full md:w-20rem" />

                        <Timeline
                            value={events2.slice(0, 6)}
                            align="alternate"
                            opposite={(item) => <span className="text-xs">{item.date}</span>}
                            content={(item) => item.status}
                            className="w-full md:w-20rem" />
                    </div>
                </div>
            </Card>
            <Card header={headerCard2}>
                <div className="grid grid-cols-1 justify-center items-center space-y-4">
                    <Timeline
                        value={events}
                        opposite={(item) => item.status}
                        align="top"
                        className="w-full md:w-20rem"
                        layout="horizontal" />

                    <Timeline
                        value={events}
                        opposite={(item) => item.status}
                        align="bottom"
                        className="w-full md:w-20rem"
                        layout="horizontal" />
                </div>
            </Card>

            <Card header={headerCard3}>
                <Timeline
                    value={events}
                    align={isMobile ? "left" : "alternate"}
                    opposite={(item) => <span className="text-xs">{item.date}</span>}
                    content={customizedContent}
                    marker={customizedMaker}
                    className="w-full md:w-20rem" />
            </Card>
        </div>
    )
}
export default PageTimeLine;