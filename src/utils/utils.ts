export const formatSubscribers = (count: number | undefined) => {
    if(typeof count === "undefined") return "0";
    if (count >= 1000000) {
        return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
        return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
};

export const process = (workType: string) => {
    switch (workType) {
        case "FULL_TIME":
            return "Full Time";
        case "PART_TIME":
            return "Part Time";
        case "PROJECT_BASED":
            return "Project Based";
        default:
            return "Full Time";
    }
}