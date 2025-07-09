import { TreeNode } from "primereact/treenode";
import { BsArchive, BsCalendar2, BsDownload, BsFile, BsFolder2, BsHouseAdd, BsImage, BsInbox } from "react-icons/bs";

export const TreeData : TreeNode[] = [
    {
        key: '0',
        label: 'Documents',
        data: 'Documents Folder',
        icon: () => <BsInbox size={18} className="mr-2 ml-2"/>,
        children: [
            {
                key: '0-0',
                label: 'Work',
                data: 'Work Folder',
                icon: 'pi pi-fw pi-cog',
                children: [
                    {
                        key: '0-0-0',
                        label: 'Expenses.doc',
                        icon: () => <BsFile size={18} className="mr-2 ml-2" />,
                        data: 'Expenses Document',
                    },
                    {
                        key: '0-0-1',
                        label: 'Resume.doc',
                        icon: () => <BsFile size={18} className="mr-2 ml-2" />,
                        data: 'Resume Document',
                    },
                ],
            },
            {
                key: '0-1',
                label: 'Home',
                data: 'Home Folder',
                icon: <BsHouseAdd size={18} className="mr-2 ml-2"/>,
                children: [
                    {
                        key: '0-1-0',
                        label: 'Invoices.txt',
                        icon: () => <BsFile size={18} className="mr-2 ml-2" />,
                        data: 'Invoices for this month',
                    },
                ],
            },
        ],
    },
    {
        key: '1',
        label: 'Projects',
        data: 'Projects Folder',
        icon: () => <BsArchive size={18} className="mr-2 ml-2"/>,
        children: [
            {
                key: '1-0',
                label: 'Client A',
                data: 'Client A Folder',
                icon: 'pi pi-fw pi-user',
                children: [
                    {
                        key: '1-0-0',
                        label: 'Proposal.pdf',
                        icon: () => <BsFile size={18} className="mr-2 ml-2" />,
                        data: 'Proposal Document',
                    },
                    {
                        key: '1-0-1',
                        label: 'Contract.docx',
                        icon: () => <BsFile size={18} className="mr-2 ml-2" />,
                        data: 'Contract Document',
                    },
                ],
            },
            {
                key: '1-1',
                label: 'Client B',
                data: 'Client B Folder',
                icon: 'pi pi-fw pi-users',
                children: [
                    {
                        key: '1-1-0',
                        label: 'Invoice.pdf',
                        icon: () => <BsFile size={18} className="mr-2 ml-2" />,
                        data: 'Invoice for project',
                    },
                ],
            },
        ],
    },
    {
        key: '2',
        label: 'Media',
        data: 'Media Folder',
        icon: <BsImage size={18} className="mr-2 ml-2"/>,
        children: [
            {
                key: '2-0',
                label: 'Photos',
                data: 'Photos Folder',
                icon: 'pi pi-fw pi-camera',
                children: [
                    {
                        key: '2-0-0',
                        label: 'Vacation.jpg',
                        icon: () => <BsFile size={18} className="mr-2 ml-2" />,
                        data: 'Vacation Photo',
                    },
                    {
                        key: '2-0-1',
                        label: 'Family.png',
                        icon: () => <BsFile size={18} className="mr-2 ml-2" />,
                        data: 'Family Photo',
                    },
                ],
            },
            {
                key: '2-1',
                label: 'Videos',
                data: 'Videos Folder',
                icon: 'pi pi-fw pi-video',
                children: [
                    {
                        key: '2-1-0',
                        label: 'Birthday.mp4',
                        icon: () => <BsFile size={18} className="mr-2 ml-2" />,
                        data: 'Birthday Video',
                    },
                ],
            },
        ],
    },
    {
        key: '3',
        label: 'Downloads',
        data: 'Downloads Folder',
        icon: () => <BsDownload size={18} className="mr-2 ml-2"/>,
        children: [
            {
                key: '3-0',
                label: 'Software',
                data: 'Software Folder',
                icon: 'pi pi-fw pi-desktop',
                children: [
                    {
                        key: '3-0-0',
                        label: 'Installer.exe',
                        icon: () => <BsFile size={18} className="mr-2 ml-2" />,
                        data: 'Software Installer',
                    },
                ],
            },
            {
                key: '3-1',
                label: 'Books',
                data: 'Books Folder',
                icon: 'pi pi-fw pi-book',
                children: [
                    {
                        key: '3-1-0',
                        label: 'Ebook.pdf',
                        icon: () => <BsFile size={18} className="mr-2 ml-2" />,
                        data: 'Ebook File',
                    },
                ],
            },
        ],
    },
    {
        key: '4',
        label: 'Archive',
        data: 'Archive Folder',
        icon: () => <BsFolder2 size={18} className="mr-2 ml-2"/>,
        children: [
            {
                key: '4-0',
                label: '2023',
                data: '2023 Folder',
                icon: 'pi pi-fw pi-calendar',
                children: [
                    {
                        key: '4-0-0',
                        label: 'Report.docx',
                        icon: () => <BsFile size={18} className="mr-2 ml-2" />,
                        data: '2023 Report',
                    },
                ],
            },
            {
                key: '4-1',
                label: '2022',
                data: '2022 Folder',
                icon: 'pi pi-fw pi-calendar-minus',
                children: [
                    {
                        key: '4-1-0',
                        label: 'Summary.pdf',
                        icon: () => <BsFile size={18} className="mr-2 ml-2" />,
                        data: '2022 Summary',
                    },
                ],
            },
        ],
    },
];
