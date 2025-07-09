import Card from "@/components/Card";
import CircularProgress from "@/components/CircularProgress";
import { getRandomInt } from "@/utilities/random";
import { shortEnMessage } from "@/utilities/string";
import classNames from "classnames";
import React from "react";
import Avatar from "react-avatar";
import { BsArrowRight, BsCheck, BsChevronRight, BsEye, BsFile, BsFolder2, BsFolderPlus, BsShare } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const URL_ACCOUNT = "/avatar";

const randomDate = new Date();
randomDate.setMonth(randomDate.getMonth() - getRandomInt(0, 10));
randomDate.setDate(randomDate.getDate() - getRandomInt(0, 30));

type NotifProps = {
    subject?: string;
    message?: string;
    date?: string | Date;
    avatart?: string;
};


const NotificationData: Array<NotifProps> = [
    {
        subject: "QRIS Transaction Successfull!",
        message: "Your QRIS transaction has been successfully processed.",
        date: "13.00",
        avatart: "red",
    },
    {
        subject: "GoPay Top Up Successfull",
        message: "Your GoPay top up has been successfully processed.",
        date: "16.00",
        avatart: "blue",
    },
    {
        subject: "Ovo Top Up Successfull",
        message: "Your Ovo top up has been successfully processed.",
        date: "18.00",
        avatart: "green",
    },
    {
        subject: "You`ve Received Funds!",
        message: "You have received funds from your friend.",
        date: "20.00",
        avatart: "red"
    }
];

const accountMember  = [
    {
        id: 1,
        thumbenail: `${URL_ACCOUNT}/avatar1.png`,
        name: "Aldo Ratmawan",
        email: "aldo.ratmawan@company.com",
        message: "Lorem ipsum dolor sit amet..."
    },
    {
        id: 2,
        thumbenail: `${URL_ACCOUNT}/avatar2.png`,
        name: "Budi Santoso",
        email: "budi.santoso@company.com",
        message: "Consectetur adipiscing elit..."
    },
    {
        id: 3,
        thumbenail: `${URL_ACCOUNT}/avatar3.png`,
        name: "Cindy Lestari",
        email: "cindy.lestari@company.com",
        message: "Sed do eiusmod tempor incididunt..."
    },
    {
        id: 4,
        thumbenail: `${URL_ACCOUNT}/avatar4.png`,
        name: "Diana Putri",
        email: "diana.putri@company.com",
        message: "Ut labore et dolore magna aliqua..."
    },
    {
        id: 5,
        thumbenail: `${URL_ACCOUNT}/avatar5.png`,
        name: "Eko Prabowo",
        email: "eko.prabowo@company.com",
        message: "Quis autem vel eum iure reprehenderit..."
    },
    {
        id: 6,
        thumbenail: `${URL_ACCOUNT}/avatar6.png`,
        name: "Fani Nurhaliza",
        email: "fani.nurhaliza@company.com",
        message: "Nemo enim ipsam voluptatem quia..."
    },
    {
        id: 7,
        thumbenail: `${URL_ACCOUNT}/avatar7.png`,
        name: "Gilang Ramadhan",
        email: "gilang.ramadhan@company.com",
        message: "Temporibus autem quibusdam et aut..."
    },
    {
        id: 8,
        thumbenail: `${URL_ACCOUNT}/avatar8.png`,
        name: "Hani Maulani",
        email: "hani.maulani@company.com",
        message: "At vero eos et accusamus et iusto..."
    },
    {
        id: 9,
        thumbenail: `${URL_ACCOUNT}/avatar9.png`,
        name: "Iwan Setiawan",
        email: "iwan.setiawan@company.com",
        message: "Ducimus qui blanditiis praesentium..."
    },
    {
        id: 10,
        thumbenail: `${URL_ACCOUNT}/avatar10.png`,
        name: "Joko Widodo",
        email: "joko.widodo@company.com",
        message: "Excepteur sint occaecat cupidatat non..."
    }
];

const uncomingPaymentData: Array<NotifProps & { iconColor?: string }> = [
    {
        subject: "Home Electricity",
        message: "Your electricity bill is due on 15.00",
        date: randomDate,
        iconColor: "bg-sky-500"
    },
    {
        subject: "Vechicle Installment",
        message: "Your vehicle installment is due on 17.00",
        date: randomDate,
        iconColor: "bg-blue-500"
    },
    {
        subject: "Subscribtions",
        date: randomDate,
        iconColor: "bg-red-500"
    },
    {
        subject: "Gym Plan",
        message: "Your gym plan is due on 19.00",
        date: randomDate,
        iconColor: "bg-green-500"
    }
]

export default class PreviewMore extends React.Component {

    public constructor(props: any) {
        super(props);
    }

    private headerNotification(): React.ReactNode {
        return (
            <React.Fragment>
                <div className="px-6 p-2">
                    <div className="flex justify-start items-center mb-3">
                        <h1 className="text-slate-600 dark:text-slate-100 font-semibold">Notification</h1>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-slate-400 dark:text-slate-100 text-xs">TODAY</span>
                        <NavLink to={"#"} className={"text-blue-500 text-xs font-semibold"}>Mask all as read</NavLink>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    private templateNotification({ bgColor, data }: { bgColor?: "red" | "green" | "blue", data?: NotifProps }): React.ReactNode {

        const bgColorClassName = classNames({
            "bg-red-400": bgColor === "red",
            "bg-green-400": bgColor === "green",
            "bg-blue-400": bgColor === "blue",
            "bg-slate-200": bgColor === undefined
        });

        return (
            <React.Fragment>
                <div className="flex justify-between mb-2">
                    <div className="flex gap-2 items-center">
                        <div className={`inline-flex justify-center items-center h-10 w-10 rounded-full ${bgColorClassName}`}>
                            <BsFolderPlus color="white" />
                        </div>
                        <div className="relative">
                            <h1 className="text-sm font-semibold">{shortEnMessage(data?.subject as string, 30)}</h1>
                            <span className="text-xs">{shortEnMessage(data?.message as string, 25)}</span>
                            <div className="absolute top-0 -left-14 w-2 h-2 rounded-full bg-red-500"></div>
                        </div>
                    </div>
                    <span className="text-xs">{data?.date as any}</span>
                </div>
            </React.Fragment>
        )
    }

    private currentBalance(): React.ReactNode {
        return (
            <h1 className="px-3 py-2 text-sm font-light">Current Balance</h1>
        )
    }

    private AchievmentHeader(): React.ReactNode {
        return (
            <h1 className="px-7 pt-5 text-xl">Achievment</h1>
        )
    }

    private headerUpcomingPayment(): React.ReactNode {
        return (
            <div className="px-4 pt-5 pb-3 flex justify-between items-center border-b">
                <div className="flex gap-2 items-center">
                    <BsFile />
                    <span className="text-sm font-semibold">Upcoming Payment</span>
                </div>
                <NavLink to={"#"}>
                    <BsArrowRight />
                </NavLink>
            </div>
        )
    }

    private bodyListUpcomingPayment({ iconColor, date, subject }: NotifProps & { iconColor?: string }): React.ReactNode {

        const dates = date instanceof Date ? date : new Date()
        const month = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];

        return (
            <li className="w-full flex justify-between py-3 hover:bg-slate-100 hover:dark:bg-slate-700">
                <div className="flex gap-2 items-center">
                    <div className="bg-slate-100 dark:bg-slate-700 p-1 shadow-sm rounded-lg flex items-center flex-col">
                        <p className="text-center text-xs font-semibold mb-1">{month[dates.getMonth() - 1]}</p>
                        <div className="w-9 text-xs rounded-sm bg-slate-50 dark:bg-slate-600 text-center">
                            <span>{dates.getDate()}</span>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold">{subject}</h1>
                        <p className="text-xs text-slate-400 dark:text-slate-300">{shortEnMessage(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi excepturi doloremque libero ratione aliquam quos. Numquam saepe accusantium ipsam provident?", 25)}</p>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <div className="p-1 text-center border border-slate-300 rounded-lg text-xs">
                        $182,55
                    </div>
                    <div className={`p-1 ${iconColor ? iconColor : "bg-red-500"} rounded-full`}>
                        <BsFolder2 size={12} color="white" />
                    </div>
                </div>
            </li>
        )
    }

    private headerAccountMember(): React.ReactNode {
        return (
            <div className="px-3 py-3 flex justify-between items-center border-b">
                <h1 className="text-s, font-semibold text-slate-600 dark:text-slate-50">
                    Account Member
                </h1>
                <BsShare />
            </div>
        )
    }

    private chexboxSelectionAccount(data: typeof accountMember[0]): React.ReactNode {

        const [checked, setChecked] = React.useState<boolean>(false);
        return (
            <label className="has-[:checked]:bg-indigo-50 cursor-pointer has-[:checked]:text-indigo-300 has-[:checked]:ring-indigo-500 inline-flex w-full justify-between items-center p-4 rounded-sm">
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={checked}
                        className="peer hidden"
                        onChange={() => setChecked(!checked)} />
                    <span className="inline-flex mr-2 gap-3 justify-center items-center w-5 h-5 rounded-md border border-indigo-300 peer-checked:bg-indigo-400">
                        {
                            checked ? <BsCheck size={20} color="white" /> : <></>
                        }
                    </span>
                    <Avatar src={data.thumbenail} size="35"/>
                    <div>
                        <h1 className="text-sm text-slate-700">{data.name}</h1>
                        <span className="text-xs text-slate-400">{shortEnMessage(data.message, 25)}</span>
                    </div>
                </div>
                <BsChevronRight/>
            </label>
        )
    }

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className="col-span-2 grid grid-cols-2 max-md:grid-cols-1 gap-2">
                    <div className="col-span-1">
                        <Card
                            header={this.headerNotification}
                            bodyClassName="py-3 px-6"
                            className="bg-white h-auto">
                            <ul className="divide-y divide-slate-200 list-none">
                                {
                                    NotificationData.map((val, idx) => (
                                        <li className="py-3" key={idx}>
                                            <this.templateNotification
                                                bgColor={val.avatart as any}
                                                data={val} />
                                        </li>
                                    ))
                                }
                            </ul>
                        </Card>

                        <Card
                            header={this.headerUpcomingPayment}
                            bodyClassName="px-3"
                            className="bg-white my-3 min-h-[17rem]">
                            <ul className="list-none divide-y py-2 m-0">
                                {
                                    uncomingPaymentData.map((val, idx) => (
                                        <this.bodyListUpcomingPayment key={idx} {...val} />
                                    ))
                                }
                            </ul>
                        </Card>
                    </div>
                    <div className="col-span-1">
                        <Card
                            header={this.currentBalance}
                            bodyClassName="px-3"
                            className="bg-white min-h-[7rem] col-span-1">
                            <div className="flex gap-2 items-center">
                                <h1 className="text-2xl">$81,000,00</h1>
                                <BsEye />
                            </div>

                            <div className="flex justify-between items-center py-5">
                                <div className="text-center">
                                    <div className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-blue-500">
                                        <BsFolderPlus color="white" />
                                    </div>
                                    <p className="text-xs mt-1">Transfer</p>
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-blue-500">
                                        <BsFolderPlus color="white" />
                                    </div>
                                    <p className="text-xs mt-1">Top Up</p>
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-blue-500">
                                        <BsFolderPlus color="white" />
                                    </div>
                                    <p className="text-xs mt-1">Witdraw</p>
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-blue-500">
                                        <BsFolderPlus color="white" />
                                    </div>
                                    <p className="text-xs mt-1">Inves</p>
                                </div>
                            </div>
                        </Card>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <Card bodyClassName="flex justify-center h-full items-center" className="bg-white h-[10rem]">
                                <div className="w-[5rem] h-[5rem]">
                                    <CircularProgress
                                        value={80}
                                        sizeText={0.5}
                                        trailStroke={"#e2e8f0"}
                                        strokeWidth={13}
                                        strokeColor={"bg-green-500"} />
                                    <p className="text-sm mt-1 text-center font-semibold text-slate-400 dark:text-slate-50">Task</p>
                                </div>
                            </Card>
                            <Card bodyClassName="flex justify-center h-full items-center" className="bg-white h-[10rem]">
                                <div className="w-[5rem] h-[5rem]">
                                    <CircularProgress
                                        value={50}
                                        sizeText={0.5}
                                        trailStroke={"#e2e8f0"}
                                        strokeWidth={13}
                                        strokeColor={"bg-red-500"} />
                                    <p className="text-sm mt-1 text-center font-semibold text-slate-400 dark:text-slate-50">Task</p>
                                </div>
                            </Card>
                            <Card bodyClassName="flex justify-center h-full items-center" className="bg-white h-[10rem]">
                                <div className="w-[5rem] h-[5rem]">
                                    <CircularProgress
                                        value={35}
                                        sizeText={0.5}
                                        trailStroke={"#e2e8f0"}
                                        strokeWidth={13}
                                        strokeColor={"bg-blue-500"} />
                                    <p className="text-sm mt-1 text-center font-semibold text-slate-400 dark:text-slate-50">Activity</p>
                                </div>
                            </Card>
                            <Card bodyClassName="flex justify-center h-full items-center" className="bg-white h-[10rem]">
                                <div className="w-[5rem] h-[5rem] text-center">
                                    <CircularProgress
                                        value={86}
                                        sizeText={0.5}
                                        trailStroke={"#e2e8f0"}
                                        strokeWidth={13}
                                        strokeColor={"bg-tq-blue-400"} />
                                    <p className="text-sm mt-1 text-center font-semibold text-slate-400 dark:text-slate-50">Task</p>
                                </div>
                            </Card>
                        </div>
                        <Card
                            header={this.AchievmentHeader}
                            bodyClassName="py-3 px-6"
                            className="bg-white my-2 min-h-[12rem]">
                            <div className="grid grid-cols-2 gap-2">
                                <Card
                                    darkMode={false}
                                    bodyClassName="flex justify-center h-full items-center"
                                    className="bg-slate-50 h-[5rem] dark:bg-slate-700">
                                    <img className="object-cover h-16" src="/img/airlane.png" />
                                </Card>
                                <Card darkMode={false} bodyClassName="flex justify-center h-full items-center" className="dark:bg-slate-700">
                                    <img className="object-cover w-16 h-16" src="/img/timeline_mng.png" />
                                </Card>
                                <Card darkMode={false} bodyClassName="flex justify-center h-full items-center" className="h-[5rem] dark:bg-slate-700">
                                    <img className="object-cover h-16" src="/img/react.png" />
                                </Card>
                                <Card darkMode={false} bodyClassName="flex justify-center h-full items-center" className="dark:bg-slate-700">
                                    <img className="object-cover h-16" src="/img/devices.png" />
                                </Card>
                            </div>
                        </Card>
                    </div>
                </div>
                <Card
                    bodyClassName="px-3"
                    header={this.headerAccountMember}>
                    <ul className="py-3 divide-y divide-indigo-300">
                       {
                        accountMember.slice(1).map((account, idx) => (
                            <this.chexboxSelectionAccount 
                                key={account.id} 
                                {...account}/>
                        ))
                       }
                    </ul>
                </Card>
            </React.Fragment>
        )
    }
}