import React from "react";

const FrameBar = () => {
  const frameBarData = {
    formFields: [
      {
        id: 1,
        label: "Enter City",
        placeholder: "City/Street",
        type: "text",
      },
      {
        id: 2,
        label: "Deluxe Portion",
        placeholder: "Apartment Type",
        type: "text",
      },
      {
        id: 3,
        label: "Min-Max price",
        placeholder: "Price Range",
        type: "number",
      },
    ],
    advancedFilterText: "+ Advance Filter",
    button: {
      label: "Search",
      styles:
        "bg-[#1AD4D4] hover:bg-[#3c7b7b] text-white md:font-semibold md:text-[16px] text-[13px] leading-6 px-3 lg:px-[44px] md:px-[30px]  py-1 lg:py-[14px] md:py-[8px] rounded-[6px]",
    },
    containerStyles:
      "w-full px-[30px] max-w-[1140px] m-auto px-[32px] py-[27px] border-2 shadow-lg shadow-[#00000029] flex flex-col md:flex-row justify-between md:items-center gap-4",
    inputStyles:
      "placeholder:border-none bg-sky-50 rounded-[5px] max-w-[400px] px-3 py-1 placeholder:w-auto text-black font-normal text-[13px] md:text-[16px] focus:outline-none",
    labelStyles:
      "text-[#1AD4D4] font-bold lg:text-[20px] md:text-[18px] leading-7 pt-[18px]",
    advancedFilterStyles:
      "text-[#1AD4D4] md:text-[16px] text-[14px] leading-6 font-normal",
  };

  return (
    <>
      <div className="w-full px-[30px]">
        <div className={frameBarData.containerStyles}>
          {/* Input Fields */}
          <div className="flex flex-col md:flex-row gap-4 lg:gap-8 md:gap-0">
            {frameBarData.formFields.map((field) => (
              <div key={field.id} className="flex flex-col">
                <input
                  className={frameBarData.inputStyles}
                  type={field.type}
                  placeholder={field.placeholder}
                />
                <h1 className={frameBarData.labelStyles}>{field.label}</h1>
              </div>
            ))}
          </div>

          {/* Advanced Filter and Button */}
          <div className="flex flex-wrap sm:flex-row gap-4 md:flex-col lg:flex-row items-center lg:gap-[16px] md:gap-[8px]">
            <p className={frameBarData.advancedFilterStyles}>
              {frameBarData.advancedFilterText}
            </p>
            <button className={frameBarData.button.styles}>
              {frameBarData.button.label}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameBar;
