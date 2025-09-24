"use client";

import React from "react";
import Select, {
  SingleValue,
  StylesConfig,
  GroupBase,
} from "react-select";

interface CategoryOption {
  value: string;
  label: string;
}

interface CategorySelectProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

// Stil tipini tanımla
const customStyles: StylesConfig<CategoryOption, false, GroupBase<CategoryOption>> = {
  control: (base) => ({
    ...base,
    borderColor: "#d1d5db",
    paddingTop: 2,
    paddingBottom: 2,
    boxShadow: "none",
    "&:hover": {
      borderColor: "#ccc",
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#3b82f6"
      : state.isFocused
      ? "#bfdbfe"
      : undefined,
    color: state.isSelected ? "white" : "#111827",
  }),
};

const CategorySelect: React.FC<CategorySelectProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const options: CategoryOption[] = [
    { value: "", label: "Tüm Kategoriler" },
    ...categories.map((cat) => ({ value: cat, label: cat })),
  ];

  const selectedOption = options.find((opt) => opt.value === selectedCategory);

  const handleChange = (selected: SingleValue<CategoryOption>) => {
    setSelectedCategory(selected?.value || "");
  };

  return (
    <div className="mt-2">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isSearchable={false}
        className="text-sm"
        classNamePrefix="react-select"
        styles={customStyles}
      />
    </div>
  );
};

export default CategorySelect;
