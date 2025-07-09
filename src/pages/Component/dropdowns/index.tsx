import Card from "@/components/Card";
import React from "react";
import { Dropdown } from "@/components/Dropdowns";
import { Dropdown as DropdownPrime } from 'primereact/dropdown';
import { cities, categories, groupedCities } from "./data";
import { Button } from "primereact/button";

const DropdownsPage: React.FC<{}> = () => {

    const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
    const [selectedCity, setSelectedCity] = React.useState(cities[0]);
    const [selectedCity2, setSelectedCity2] = React.useState();
    const [selectedGroupCity, setSelectedGroupCity] = React.useState();
    const [dropdownLoading, setDropdownLoading] = React.useState(true);
    const [selecterdCityLoading, setSelectedCityLoading] = React.useState();

    const headerCard = () => {
        return (
            <h1 className="text-xl font-semibold">Component Dropdowns</h1>
        )
    };

    const valueTemplate = (option: any, props: any) => {
        if (option) {
            return (
                <div className="flex items-center gap-3 dark:text-slate-100">
                    {option?.icon ?? <></>}
                    <span>{option?.name}</span>
                </div>
            )
        }
        return <span>{props?.placeholder}</span>
    }

    const valueTemplate2 = (option: any, props: any) => {
        if (option) {
            return (
                <div className="flex items-center gap-3 px-3 py-3 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">
                    {option?.icon ?? <></>}
                    <span>{option?.name}</span>
                </div>
            )
        }
        return <span>{props?.placeholder}</span>
    };

    const groupedItemTemplate = (option: any) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={option?.label}
                    src={`https://flagcdn.com/w320/${option?.code.toLowerCase()}.png`}
                    className={`mr-2 flag flag-${option.code.toLowerCase()}`}
                    style={{ width: '20px' }} />
                <div>{option?.label}</div>
            </div>
        );
    };

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (dropdownLoading) {
                setDropdownLoading(false);
            }
        }, 5000);
        return () => clearTimeout(timer);

    }, [dropdownLoading])

    return (
        <React.Fragment>
            <Card header={headerCard()} headerClassName="px-4 py-2 my-4">
                <div className="flex flex-wrap justify-center gap-6 items-center">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-center">Dropdown Custom Component</h1>
                        <div className="flex gap-3 flex-wrap items-center">
                            <Dropdown
                                data={cities}
                                optionLabel="name"
                                value={selectedCity}
                                selectedTemplate={valueTemplate}
                                itemTemplate={valueTemplate2}
                                size="medium"
                                onChange={(val) => setSelectedCity(val)} />

                            <Dropdown
                                data={categories}
                                optionLabel="name"
                                value={selectedCategory}
                                selectedTemplate={valueTemplate}
                                divide
                                size="medium"
                                itemTemplate={valueTemplate2}
                                onChange={(val) => setSelectedCategory(val)} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-center">Dropdown PrimeReact Component</h1>
                        <div className="flex gap-3 flex-wrap items-center">

                            <DropdownPrime
                                value={selectedCity2}
                                onChange={(e) => setSelectedCity2(e.value)}
                                options={cities}
                                optionLabel="name"
                                placeholder="Select a City"
                                showClear
                                className="w-full md:w-14rem" />

                            <DropdownPrime
                                value={selectedGroupCity}
                                onChange={(e) => setSelectedGroupCity(e.value)}
                                options={groupedCities}
                                optionGroupTemplate={groupedItemTemplate}
                                itemTemplate={(option) => (
                                    <>
                                        <span className="ml-3">{option?.label}</span>
                                    </>
                                )}
                                showClear
                                optionGroupLabel="label"
                                optionGroupChildren="items"
                                optionLabel="label"
                                placeholder="Group Select a City"
                                className="w-full md:w-14rem" />
                        </div>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-2 mt-2 max-md:grid-cols-1 gap-4 max-md:gap-2">
                <Card header="Dropdown Loading and Lazy" headerClassName="px-4 py-2">
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-center items-center gap-3 w-full">
                            <DropdownPrime
                                loading={dropdownLoading}
                                value={selecterdCityLoading}
                                onChange={(e) => setSelectedCityLoading(e.value)}
                                className="w-full md:w-14rem"
                                options={cities}
                                optionLabel="name"
                                showClear
                                placeholder={dropdownLoading ? "Loading 5 Seconds..." : "Selected City..."} />
                            <Button
                                loading={dropdownLoading}
                                onClick={() => setDropdownLoading(!dropdownLoading)}
                                label={dropdownLoading ? "Stop Loading" : "Start Loading"} />
                        </div>
                    </div>
                </Card>
                <Card
                    header="Dropdown Filter"
                    headerClassName="px-4 py-2">
                    <div className="flex justify-center">
                        <DropdownPrime
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.value)}
                            options={cities}
                            filter
                            filterBy="name"
                            showClear
                            filterIcon={() => <></>}
                            optionLabel="name"
                            placeholder="Select a City"
                            className="w-full md:w-14rem" />
                    </div>
                </Card>
            </div>
        </React.Fragment>
    )
};

export default DropdownsPage;
