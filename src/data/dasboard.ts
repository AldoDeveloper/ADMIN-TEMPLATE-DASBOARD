import { TreeSelectData } from "@/components/Tree/interface";
import { getRandomInt } from "@/utilities/random";

export interface PropsRevenueData {
    name: string;
    value: number;
    created_at: string;
};

export interface PropsBarData{
    name: string;
    up: number;
    down: number;
    created_at : string;
}

export const revenueData: Array<PropsRevenueData> = [
    {
        name: "Product",
        value: 20,
        created_at: new Date().toLocaleTimeString()
    },
    {
        name: "Product",
        value: 30,
        created_at: new Date().toLocaleTimeString()
    },
    {
        name: "Product",
        value: 5,
        created_at: new Date().toLocaleTimeString()
    },
    {
        name: "Product",
        value: 150,
        created_at: new Date().toLocaleTimeString()
    },
    {
        name: "Product",
        value: 220,
        created_at: new Date().toLocaleTimeString()
    },
    {
        name: "Product",
        value: 43,
        created_at: new Date().toLocaleTimeString()
    },
];

export const dataSampleRevenue = [
  {
    "id": 1,
    "date": "2025-07-01",
    "customer": "Aldo Mart",
    "amount": 1250000,
    "status": "paid"
  },
  {
    "id": 2,
    "date": "2025-07-01",
    "customer": "TechnoStore",
    "amount": 1875000,
    "status": "paid"
  },
  {
    "id": 3,
    "date": "2025-07-02",
    "customer": "Future Corp",
    "amount": 920000,
    "status": "pending"
  },
  {
    "id": 4,
    "date": "2025-07-02",
    "customer": "Karya Sentosa",
    "amount": 1460000,
    "status": "failed"
  },
  {
    "id": 5,
    "date": "2025-07-03",
    "customer": "Toko Sinar",
    "amount": 575000,
    "status": "paid"
  },
  {
    "id": 6,
    "date": "2025-07-03",
    "customer": "Makmur Abadi",
    "amount": 830000,
    "status": "paid"
  },
  {
    "id": 7,
    "date": "2025-07-03",
    "customer": "PT. Jaya Digital",
    "amount": 1750000,
    "status": "pending"
  },
  {
    "id": 8,
    "date": "2025-07-04",
    "customer": "IndoTix",
    "amount": 2330000,
    "status": "paid"
  },
  {
    "id": 9,
    "date": "2025-07-04",
    "customer": "Garuda Teknologi",
    "amount": 1950000,
    "status": "paid"
  },
  {
    "id": 10,
    "date": "2025-07-04",
    "customer": "Media Nusantara",
    "amount": 1130000,
    "status": "failed"
  },
  {
    "id": 11,
    "date": "2025-07-05",
    "customer": "Rama Elektronik",
    "amount": 980000,
    "status": "paid"
  },
  {
    "id": 12,
    "date": "2025-07-05",
    "customer": "Tirta Gemilang",
    "amount": 1285000,
    "status": "pending"
  },
  {
    "id": 13,
    "date": "2025-07-06",
    "customer": "PT. Mega Karya",
    "amount": 2140000,
    "status": "paid"
  },
  {
    "id": 14,
    "date": "2025-07-06",
    "customer": "SmartOne",
    "amount": 1500000,
    "status": "paid"
  },
  {
    "id": 15,
    "date": "2025-07-06",
    "customer": "Global Mart",
    "amount": 1650000,
    "status": "pending"
  },
  {
    "id": 16,
    "date": "2025-07-07",
    "customer": "Delta Vision",
    "amount": 1390000,
    "status": "failed"
  },
  {
    "id": 17,
    "date": "2025-07-07",
    "customer": "Topindo Network",
    "amount": 1790000,
    "status": "paid"
  },
  {
    "id": 18,
    "date": "2025-07-08",
    "customer": "PT. Andalan",
    "amount": 890000,
    "status": "paid"
  },
  {
    "id": 19,
    "date": "2025-07-08",
    "customer": "CyberXpress",
    "amount": 1530000,
    "status": "pending"
  },
  {
    "id": 20,
    "date": "2025-07-08",
    "customer": "Satria Komputer",
    "amount": 1270000,
    "status": "paid"
  }
]


export const barValueChart : Array<PropsBarData> = Array.from<PropsBarData>({length : 10}).map((v, k) => {
    return{
        name: "Product",
        up: getRandomInt(10, 1000),
        down: getRandomInt(10, 1000),
        created_at: new Date().toLocaleTimeString()
    }
});

export const ThemeStrokeColor : any= {

    "tq-blue-50": "#edfefe",
    "tq-blue-100": "#d1fbfc",
    "tq-blue-200": "#6eebf2",
    "tq-blue-300": "#6eebf2",
    "tq-blue-400": "#3ddbe6",
    "tq-blue-500": "#10bcca",
    "tq-blue-600": "#1096aa",
    "tq-blue-700": "#14788a",
    "tq-blue-800": "#1a6270",
    "tq-blue-900": "#1a515f",
    "tq-blue-950": "#0b3641",

    "md-purple-50": "#f5f2ff",
    "md-purple-100": "#ede8ff",
    "md-purple-200": "#dcd4ff",
    "md-purple-300": "#c4b1ff",
    "md-purple-400": "#a885ff",
    "md-purple-500": "#8c52ff",
    "md-purple-600": "#7f30f7",
    "md-purple-700": "#711ee3",
    "md-purple-800": "#5e18bf",
    "md-purple-900": "#4e169c",
    "md-purple-950": "#300b6a",

    "red-50" : "#fef2f2",
    "red-100": "#fee2e2",
    "red-200": "#fecaca",
    "red-300": "#fca5a5",
    "red-400": "#f87171",
    "red-500": "#ef4444",
    "red-600": "#dc2626",
    "red-700": "#b91c1c",
    "red-800": "#991b1b",
    "red-900": "#7f1d1d",
    "red-950": "#450a0a",

    "yellow-100" : "#fbffe7",
    "yellow-200" : "#f4ffc1",
    "yellow-300" : "#ecff41",
    "yellow-400" : "#f2ff0d",
    "yellow-500" : "#ffff00",
    "yellow-600" : "#d1bf00",
    "yellow-700" : "#a68b02",
    "yellow-800" : "#896c0a",
    "yellow-900" : "#74580f",
    "yellow-950" : "#443004",

    "grenn-50": "#f0fdf5",
    "green-100": "#dcfce8",
    "green-200": "#bbf7d1",
    "green-300": "#86efad",
    "green-400": "#4ade80",
    "green-500": "#22c55e",
    "green-600": "#16a34a",
    "green-700": "#15803c",
    "green-800": "#166533",
    "green-900": "#14532b",
    "green-950": "#052e14",
};

export const dataSelect : Array<TreeSelectData> = [
    {
        name: "Dasboard",
        className: "px-2 py-2",
        children: [
            {
                name: "Dasboard2",
                className: "px-2 py-2",
            },
            {
                name: "Dasboard3",
                className: "px-2 py-2",
            },
            {
                name: "Dasboard4",
                className: "px-2 py-2",
            },
            {
                name: "Dasboard5",
                className: "px-2 py-2",
                children: [
                    {
                        name: "Sub Dasboard1",
                        className: "text-center"
                    },
                    {
                        name: "Sub Dasboard2",
                        className: "text-center"
                    },{
                        name: "Sub Dasboard3",
                        className: "text-center"
                    }
                ]
            }
        ]
    },
    {
        name: "Setting",
        className: "px-2 py-2",
        children: [
            {
                name: "Sub Setting",
                className: "text-center",
            },
            {
                name: "Sub Setting2",
                className: "text-center",
                children:[
                    {
                        name: "Sub Sub Setting",
                        className: "text-center",
                    },
                    {
                        name: "Sub Sub Setting2",
                        className: "text-center",
                    },
                    {
                        name: "Sub Sub Setting3",
                        className: "text-center",
                        children: [
                            {
                                name: "Sub Sub Setting",
                                className: "text-center",
                            },
                            {
                                name: "Sub Sub Setting",
                                className: "text-center",
                            },
                            {
                                name: "Sub Sub Setting",
                                className: "text-center",
                            },
                            {
                                name: "Sub Sub Setting",
                                className: "text-center",
                            },
                        ]
                    },
                ]
            },
            {
                name: "Sub Setting3",
                className: "text-center",
            },
            {
                name: "Sub Setting4",
                className: "text-center",
            },
        ]
    }
]
