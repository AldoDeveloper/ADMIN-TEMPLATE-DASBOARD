import { 
    BsSpeedometer2,
    BsGraphUp,
    BsPeople,
    BsBoxSeam,
    BsReceipt,
    BsGear,
    BsEnvelope,
    BsBell,
    BsCreditCard,
    BsQuestionCircle,
    BsClockHistory,
    BsMegaphone,
    BsFolder,
    BsShieldLock,
    BsExclamationTriangle,
    BsPerson,
    BsLayoutWtf,
    BsFillMenuButtonFill,
    BsArrowsCollapse,
    BsDistributeVertical,
    BsGrid3X3,
    BsIntersect,
    BsCardText,
    BsSegmentedNav,
    BsUnion,
    BsFillTreeFill,
    BsPencil,
    BsPersonAdd,
    BsSignDoNotEnter,
    BsSignMergeLeft,
    BsRulers,
    BsStack
    
 } from "react-icons/bs";
 

export const dataSidebar = (theme: any) : Array<TreeNodeProps> => [
    {
        id: 1,
        name: "Dasboard",
        to: "/dasboard",
        icon: <BsSpeedometer2 size={16} fill={theme}/>,
        className: "",
    },
    {
        id: 2,
        name: "Analityc",
        to: "/dasboard/analityc",
        icon: <BsGraphUp size={16} fill={theme}/>,
        className: ""
    },
    {
        id: 17,
        name: "Component",
        to: "#",
        icon: <BsLayoutWtf size={16} fill={theme}/>,
        className: "",
        children: [
            {
                id: 100,
                to:"/dasboard/component/buttons",
                icon: <BsFillMenuButtonFill size={15} color={theme}/>,
                name: "Button"
            },
            {
                id: "1",
                to: "/dasboard/component/dropdowns",
                icon: <BsArrowsCollapse size={15} color={theme}/>,
                name: "Dropdowns"
            },
            {
                id: 2,
                to:"/dasboard/component/toast",
                icon: <BsDistributeVertical size={15} color={theme}/>,
                name: "Toast"
            },
            {
                id: "3",
                to: "/dasboard/component/table",
                icon: <BsGrid3X3 size={15} color={theme}/>,
                name: "Table"
            },
            {
                id: "4",
                to: "/dasboard/component/breadcrumbs",
                icon: <BsIntersect size={15} color={theme}/>,
                name: "BreadCrumbs"
            },
            {
                id: "u1824",
                to: "/dasboard/component/card",
                icon: <BsCardText size={15} color={theme}/>,
                name: "Card"
            },
            {
                id: "1as",
                to: "/dasboard/component/navbar",
                icon: <BsSegmentedNav size={15} color={theme}/>,
                name: "Navbar"
            },
            {
                id: "5",
                to: "/dasboard/component/modal",
                icon: <BsUnion size={15} color={theme}/>,
                name: "Modal"
            },
            {
                id: "912hd",
                to: "/dasboard/component/tree",
                icon: <BsFillTreeFill size={15} color={theme}/>,
                name: "Tree"
            },
            {
                id: "12js",
                to: "/dasboard/component/inputtext",
                icon: <BsPencil size={15} color={theme}/>,
                name: "Input Text"
            },
            {
                id: "92jsx",
                to: "/dasboard/component/timeline",
                icon: <BsPencil size={15} color={theme}/>,
                name: "Timeline"
            },
              {
                id: "2u591b",
                to: "/dasboard/component/steper",
                icon: <BsStack size={15} color={theme}/>,
                name: "Steper"
            }
        ]
    },
    {
        id: 3,
        name: "Account",
        to: "/dasboard/account",
        icon: <BsPeople size={16} fill={theme}/>,
        className: "",
    },
    {
        id: 4,
        name: "Product",
        to: "/dasboard/product",
        icon: <BsBoxSeam size={16} fill={theme}/>,
        className: "",
    },
     {
        id: 1020,
        name: "Auth",
        to: "#",
        icon: <BsPersonAdd size={16} fill={theme}/>,
        children: [
            {
                id: 1021,
                name: "Login",
                to: "/auth/sign-in",
                icon: <BsSignDoNotEnter size={16} fill={theme}/>
            },
            {
                id: 2,
                name: "Register",
                to: "/auth/sign-up",
                icon: <BsSignMergeLeft size={16} fill={theme}/>
            },
            {
                id: 3,
                name: "Reset Password",
                to: "/auth/reset-password",
                icon: <BsRulers size={16} fill={theme}/>
            }
        ]
    },
    {
        id: 5,
        name: "Orders",
        icon: <BsReceipt size={16} fill={theme}/>,
        className: ""
    },
    {
        id: 6,
        name: "Settings",
        icon: <BsGear size={16} fill={theme}/>,
        className: "",
    },
    {
        id: 7,
        name: "Messages",
        icon: <BsEnvelope size={16} fill={theme}/>,
        className: "",
    },
    {
        id: 8,
        name: "Reports",
        icon: <BsBell size={16} fill={theme}/>,
        className: "",
    },
    {
        id: 9,
        name: "Billing/Payments",
        icon: <BsCreditCard size={16} fill={theme}/>,
        className: "",
    },
    {
        id: 10,
        name: "Support/Help",
        icon: <BsQuestionCircle size={16} fill={theme}/>,
        className: "",
    },
    
    {
        id: 11,
        name: "Activity Logs",
        icon: <BsClockHistory size={16} fill={theme}/>,
        className: "",
    },
    {
        id: 12,
        name: "Marketing",
        icon: <BsMegaphone size={16} fill={theme}/>,
        className: "",
    },
    {
        id: 11,
        name: "Activity Logs",
        icon: <BsFolder size={16} fill={theme}/>,
        className: "",
    },
    {
        id: 12,
        name: "Media Library",
        icon: <BsShieldLock size={16} fill={theme}/>,
        className: "",
    },
    {
        id: 12,
        name: "Media Library",
        icon: <BsFolder size={16} fill={theme}/>,
        className: "",
    },
    {
        id: 13,
        name: "Permission",
        icon: <BsShieldLock size={16} fill={theme}/>,
        className: "",
    },
    {
        id: 14,
        name: "Logs/Error",
        icon: <BsExclamationTriangle size={16} fill={theme}/>,
        className: "",
    },
    {
        id: 15,
        name: "Profile",
        icon: <BsPerson size={16} fill={theme}/>,
        className: "",
    }

]