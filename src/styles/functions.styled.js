export const handleColorType = color => {
    switch (color) {
        case "greenSuccessColor":
            return "#28a745";
        case "lighterRedColor":
            return "#cf1717";
        case 'orangeColor':
            return '#ffa500';
        default:
            return "transparent";
    }
};
