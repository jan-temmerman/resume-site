import {DateTime} from "luxon";
import _ from "lodash";

export function getDurationString(start?: string, end?: string): string {
    const startDate = start ? DateTime.fromISO(start): DateTime.now();
    const endDate = end ? DateTime.fromISO(end): DateTime.now();

    const duration = endDate.diff(startDate, ["years", "months", "days"]);
    const result = [];
    if (duration.years) result.push(duration.years === 1 ? "1 year" : `${duration.years} years`);
    if (duration.months) {
        if (duration.years && !duration.days) result.push(" and ");
        else if (duration.years) result.push(", ");
        result.push(duration.months === 1 ? "1 month" : `${duration.months} months`);
    }
    if (duration.days) {
        if (result.length !== 0) result.push(" and ");
        result.push(duration.days === 1 ? "1 day" : `${_.round(duration.days)} days`);
    }

    return result.join("");
}