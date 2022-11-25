import React from "react";
import {RateCalculator} from "../components/RateCalculator/RateCalculator";

export function HomePage() {
    return <div className="container mx-auto">
        <h1>CNB Currency Calculator</h1>
        <RateCalculator />
    </div>
}
