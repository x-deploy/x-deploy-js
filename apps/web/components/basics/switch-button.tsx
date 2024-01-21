'use client';

import React from "react";

export function SwitchButton(
    {
        buttonTab,
        selectedButtonTab,
    } : {
        buttonTab: Array<React.ReactNode>,
        selectedButtonTab?: number,
    }
) {

    const [selected, setSelected] = React.useState(selectedButtonTab)

    return (
        <div className={"flex"}>
            {buttonTab.map((button, index) => {
                return (
                    <SwitchButtonElement
                        roundedLeft={button === buttonTab[0]}
                        roundedRight={button === buttonTab[buttonTab.length - 1]}
                        selected={index === selected}
                        setSelected={setSelected}
                        key={index}
                        index={index}
                        rightBorder={button !== buttonTab[buttonTab.length - 1]}
                    >
                        {button}
                    </SwitchButtonElement>
                )
            })}
        </div>
    )
}

export function SwitchButtonElement({
    children,
    roundedRight,
    roundedLeft,
    selected,
    setSelected,
    index,
    leftBorder,
    rightBorder} : {
        children: React.ReactNode,
        roundedRight?: boolean,
        roundedLeft?: boolean,
        selected?: boolean,
        setSelected?: any,
        index?: number,
        leftBorder?: boolean,
        rightBorder?: boolean,
    }) {
            return (
                <div onClick={
                    () => {
                        setSelected(index)
                    }
                } className={"border-t border-b border-r border-gray-200 dark:border-gray-800 px-4 py-2 cursor-pointer " +
                (roundedRight ? "rounded-r-md " : "") +
                (roundedLeft ? "rounded-l-md border-l " : "") +
                (selected ? "bg-gray-200 dark:bg-gray-800 " : "") +
                    (leftBorder ? "border-l " : "") +
                (rightBorder ? "border-r " : "") +
                "hover:bg-gray-200 dark:hover:bg-gray-800"}>
                    {children}
                </div>

            )
}
