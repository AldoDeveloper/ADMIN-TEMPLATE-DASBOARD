
import { FaLaptop, FaTshirt, FaCouch, FaBook, FaPuzzlePiece } from 'react-icons/fa';
import { BsPersonBadge } from 'react-icons/bs';

export const categories = [
    {
        name: 'Electronics',
        code: 'ELC',
        icon: <FaLaptop className="fill-blue-500" />
    },
    {
        name: 'Clothing',
        code: 'CLT',
        icon: <FaTshirt className="fill-pink-500" />
    },
    {
        name: 'Home & Kitchen afasf safasf gaa asas',
        code: 'HMK',
        icon: <FaCouch className="fill-green-500" />
    },
    {
        name: 'Books',
        code: 'BKS',
        icon: <FaBook className="fill-yellow-500" />
    },
    {
        name: 'Toys',
        code: 'TOY',
        icon: <FaPuzzlePiece className="fill-purple-500" />
    },
    {
        name: 'Books',
        code: 'BKS',
        icon: <FaBook className="fill-yellow-500" />
    },
    {
        name: 'Toys',
        code: 'TOY',
        icon: <FaPuzzlePiece className="fill-purple-500" />
    },
    {
        name: 'Books',
        code: 'BKS',
        icon: <FaBook className="fill-yellow-500" />
    },
    {
        name: 'Toys',
        code: 'TOY',
        icon: <FaPuzzlePiece className="fill-purple-500" />
    }
];

export const cities = [
        {
            name: 'New York',
            code: 'NY',
            icon: <BsPersonBadge className="fill-blue-400" />
        },
        {
            name: 'Rome',
            code: 'RM',
            icon: <BsPersonBadge className="fill-blue-400" />
        },
        {
            name: 'London',
            code: 'LDN',
            icon: <BsPersonBadge className="fill-blue-400" />
        },
        {
            name: 'Istanbul',
            code: 'IST',
            icon: <BsPersonBadge className="fill-blue-400" />
        },
        {
            name: 'Paris',
            code: 'PRS',
            icon: <BsPersonBadge className="fill-blue-400" />
        }
    ];

    export const groupedCities = [
        {
            label: 'Germany',
            code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA',
            code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan',
            code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];