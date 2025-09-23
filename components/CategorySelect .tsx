import { Listbox } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import React from "react";

const CategorySelect = ({ categories, selectedCategory, setSelectedCategory }) => {
    return (
        <div className="w-full mt-2">
            <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                <div className="relative">
                    <Listbox.Button className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-accent sm:text-sm">
                        <span className="block truncate">{selectedCategory || "Tüm Kategoriler"}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                        </span>
                    </Listbox.Button>

                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <Listbox.Option
                            key="all"
                            value=""
                            className={({ active }) =>
                                `cursor-pointer select-none relative py-2 pl-3 pr-9 ${active ? "bg-accent/20 text-primary" : "text-gray-900"
                                }`
                            }
                        >
                            {({ selected }) => (
                                <>
                                    <span className={`block truncate ${selected ? "font-semibold" : ""}`}>
                                        Tüm Kategoriler
                                    </span>
                                    {selected ? (
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                                            <Check className="h-5 w-5" />
                                        </span>
                                    ) : null}
                                </>
                            )}
                        </Listbox.Option>

                        {categories.map((cat) => (
                            <Listbox.Option
                                key={cat}
                                value={cat}
                                className={({ active }) =>
                                    `cursor-pointer select-none relative py-2 pl-3 pr-9 ${active ? "bg-accent/20 text-primary" : "text-gray-900"
                                    }`
                                }
                            >
                                {({ selected }) => (
                                    <>
                                        <span className={`block truncate ${selected ? "font-semibold" : ""}`}>{cat}</span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                                                <Check className="h-5 w-5" />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    );
};

export default CategorySelect;
