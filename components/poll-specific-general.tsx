"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { User } from "next-auth";
import BarChartGeneral from "@/components/bar-chart-general";
import {AnonymousVoteButton} from "@/components/anonymous-vote-button";
import {LoggedInVoteButton} from "@/components/logged-in-vote-button";
import {GlobalProblem, WishingWell} from "@prisma/client";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import MarkdownRendererForItem from "@/components/MarkdownRendererForItem";

interface PollProps<T> {
    thisItem: WishingWell | GlobalProblem;
    thatItem: WishingWell | GlobalProblem;
    updatePair?: () => void;
    user?: User;
    getItemName: (item: {name: string}) => string;
    getItemImage: (item: {featuredImage: string | null}) => string;
    createAllocation: (thisItemId: string, thatItemId: string, thisItemPercentage: number) => void;
}

export const PollSpecificGeneral = <T,>({
                             thisItem,
                             thatItem,
                             updatePair,
                             user,
                             getItemName,
                             getItemImage,
                             createAllocation,
                         }: PollProps<T>) => {
    const [thatPercentageDesired, setThatPercentageDesired] = useState(50);
    const [thisPercentageDesired, setThisPercentageDesired] = useState(50);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const thatPercentageDesired = parseInt(event.target.value, 10);
        const thisPercentageDesired = 100 - thatPercentageDesired;
        setThatPercentageDesired(thatPercentageDesired);
        setThisPercentageDesired(thisPercentageDesired);

        createAllocation(thisItem.id, thatItem.id, thisPercentageDesired);
    };

    function onButtonClick() {
        if (updatePair) {
            updatePair();
        }
        setThatPercentageDesired(50);
        setThisPercentageDesired(50);
    }

    return (
        <section className="space-y-4 pb-12 pt-4 md:space-y-8 md:pt-5 lg:py-16">
            <div className="container flex max-w-[64rem] flex-col items-center gap-0 text-center">
                <p className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
                    How Much Would You Donate to
                </p>
                <Dialog defaultOpen={false}>
                    <DialogTrigger asChild className={"cursor-pointer"}>
                        <h1 className="text-4xl font-semibold sm:text-4xl md:text-5xl lg:text-5xl pt-2">
                            {getItemName(thisItem)}
                        </h1>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] w-full max-h-[90vh] overflow-auto rounded-lg">
                        <MarkdownRendererForItem item={thisItem} />
                    </DialogContent>
                </Dialog>
                <h1 className="text-2xl font-semibold sm:text-2xl md:text-3xl lg:text-3xl pt-2">
                    vs
                </h1>
                <Dialog defaultOpen={false}>
                    <DialogTrigger asChild className={"cursor-pointer"}>
                        <h1 className="text-4xl font-semibold sm:text-4xl md:text-5xl lg:text-5xl pt-2">
                            {getItemName(thatItem)}
                        </h1>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] w-full max-h-[90vh] overflow-auto rounded-lg">
                        <MarkdownRendererForItem item={thatItem} />
                    </DialogContent>
                </Dialog>
                <div id="poll-description">
                    <div className="text-sm md:text-xl px-0 pb-2 pt-2">
                        Adjust the slider to indicate how much you'd donate to each item if you had to donate $100.
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div id="chart-and-slider-container"
                         className="px-4 lg:px-8 text-sm" style={{maxWidth: "400px"}}>
                        <BarChartGeneral
                            thisItem={thisItem}
                            thatItem={thatItem}
                            thisPercentageDesired={thisPercentageDesired}
                            getItemName={getItemName}
                            getItemImage={getItemImage}
                        />
                        <Input
                            type="range"
                            min="0"
                            max="100"
                            value={thatPercentageDesired.toString()}
                            onChange={handleSliderChange}
                        />
                        <div style={{display: "flex", width: "100%"}}>
                            <span style={{flex: "1 1 50%", textAlign: "left", wordWrap: "break-word"}}>
                                👈 More to
                            </span>
                            <span style={{flex: "1 1 50%", textAlign: "right", wordWrap: "break-word"}}>
                                More to 👉
                            </span>
                        </div>

                        <div style={{display: "flex", width: "100%"}}>
                            <span style={{flex: "1 1 50%", textAlign: "left", wordWrap: "break-word"}}>
                                {getItemName(thisItem)}
                            </span>
                            <span style={{flex: "1 1 50%", textAlign: "right", wordWrap: "break-word"}}>
                                {getItemName(thatItem)}
                            </span>
                        </div>
                    </div>
                </div>
                <LoggedInVoteButton
                    user={user}
                    data={{thisItem, thatItem, thisPercentageDesired}}
                    onButtonClick={onButtonClick}
                ></LoggedInVoteButton>
                <AnonymousVoteButton user={user}/>
            </div>
        </section>
    );
};