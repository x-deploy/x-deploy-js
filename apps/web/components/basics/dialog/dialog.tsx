"use client";

import React, {useCallback, useContext, useEffect, useState} from "react";
import {Card} from "../card";
import {createContext} from "node:vm";

export function Dialog({children}: { children: React.ReactNode }) {

    const [isOpen, setIsOpen] = useState(false);
    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {isOpen, openDialog, closeDialog});
        }
        return child;
    });

    return <>{childrenWithProps}</>;
}


export function DialogTrigger({openDialog, children}
                                  : { openDialog: any, children: React.ReactNode }) {
    return (
        <div onClick={openDialog}>{children}</div>
    )
}

export const DialogContent = ({isOpen, closeDialog, children} : { isOpen: boolean, closeDialog: any, children: React.ReactNode }) => {


    if (!isOpen) return null;
    const stopPropagation = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
    };

    const handleBackdropClick = useCallback((event: any) => {
        // Check if the click is outside the dialog content
        if (event.target.id === 'dialog-backdrop') {
            closeDialog();
        }
    }, [closeDialog]);

    useEffect(() => {
        window.addEventListener('click', handleBackdropClick);
        return () => window.removeEventListener('click', handleBackdropClick);
    }, [handleBackdropClick]);


    const childrenWithClose = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { closeDialog });
        }
        return child;
    });


    return (
        <div style={
            {
                top: "-50px",
            }
        }  id="dialog-backdrop" className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] w-screen h-screen">
            <Card className={"dark:bg-black bg-white"} onClick={stopPropagation} >
                {/*<button*/}
                {/*    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"*/}
                {/*    onClick={closeDialog}*/}
                {/*>*/}
                {/*    Close*/}
                {/*</button>*/}
                {childrenWithClose}
            </Card>
        </div>
    );
};
