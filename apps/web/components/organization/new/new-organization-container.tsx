"use client"

import {useEffect, useState} from "react";
import {Card, CardContent, CardTitle} from "../../basics/card";
import {NewOrganizationForm} from "./new-organization-form";
import {NewOrganizationPicture} from "./new-organization-picture";
import {Button} from "../../basics/buttons";

export function NewOrganizationContainer({token}: {
    token: string
}) {
    const [organizationId, setOrganizationId] = useState()
    const [currentCard, setCurrentCard] = useState('Card1');
    const [animationClass, setAnimationClass] = useState('');

    const handleNextClick = () => {
        setAnimationClass('card-exiting');
        setTimeout(() => {
            setCurrentCard('Card2');
            setAnimationClass('card-entering');
        }, 1000); // This should match the duration of your exit animation
    };

    useEffect(() => {
        if (currentCard === 'Card2') {
            setTimeout(() => setAnimationClass(''), 1000); // Remove the class after the animation
        }
    }, [currentCard]);

    return (
        <>
            <div className={"flex items-center justify-center w-screen h-screen"}>
                {currentCard === 'Card1' && (
                    <div className={animationClass}>
                        <Card>
                            <CardContent>
                                <div className={"mb-4"}>
                                    <CardTitle>Create a new organization</CardTitle>
                                </div>
                                <div className={"w-96 h-96"}>
                                    <NewOrganizationForm handleNextClick={handleNextClick}  setOrganizationId={setOrganizationId}/>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
                {currentCard === 'Card2' && (
                    <div className={animationClass}>
                        <NewOrganizationPicture token={token} organizationId={organizationId}/>
                    </div>
                )}
            </div>
        </>
    )
}
