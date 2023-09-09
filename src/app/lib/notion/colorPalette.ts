const tagColors = (color: any) => {

    let tagColor = "";
    switch(color) {
    case "blue":
        tagColor = "#D3E5EF";
        break;
    case "brown":
        tagColor = "#EEE0DA";
        break;
    case "default":
        tagColor = "#E3E2E080";
        break;
    case "gray":
        tagColor = "#E3E2E0";
        break;
    case "green":
        tagColor = "#DBEDDB";
        break;
    case "orange":
        tagColor = "#FADEC9";
        break;
    case "pink":
        tagColor = "#F5E0E9";
        break;
    case "purple":
        tagColor = "#E8DEEE";
        break;
    case "red":
        tagColor = "#FFE2DD";
        break;
    case "yellow":
        tagColor = "#FDECC8";
        break;
    }
    return { backgroundColor: tagColor };
}

const textColors = (color: string) => {
    let textColor = "";
    switch(color) {
    case "blue":
        textColor = "blue";
        break;
    case "brown":
        textColor = "brown";
        break;
    case "gray":
        textColor = "gray";
        break;
    case "green":
        textColor = "green";
        break;
    case "orange":
        textColor = "orange";
        break;
    case "pink":
        textColor = "pink";
        break;
    case "purple":
        textColor = "purple";
        break;
    case "red":
        textColor = "red";
        break;
    case "yellow":
        textColor = "yellow";
        break;
    case "blue_background":
        textColor = "#D3E5EF";
        break;
    case "brown_background":
        textColor = "#EEE0DA";
        break;
    case "gray_background":
        textColor = "#E3E2E0";
        break;
    case "green_background":
        textColor = "#DBEDDB";
        break;
    case "orange_background":
        textColor = "#FADEC9";
        break;
    case "pink_background":
        textColor = "#F5E0E9";
        break;
    case "purple_background":
        textColor = "#E8DEEE";
        break;
    case "red_background":
        textColor = "#FFE2DD";
        break;
    case "yellow_background":
        textColor = "#FDECC8";
        break;
    default:
        textColor = "";
    }
    return color.endsWith("_background") ? { backgroundColor: textColor } : { color: textColor };
}

export { tagColors, textColors };