var horizontalStatus = {
    rainy: {
        ios: "ios-rainy",
        android: "md-rainy",
    },
    cloud: {
        ios: "ios-cloud",
        android: "md-cloud",
    },
    thunderstorm: {
        ios: "ios-thunderstorm",
        android: "md-thunderstorm",
    },
    sunny: {
        ios: "ios-sunny",
        android: "md-sunny",
    },
};

var horizontalFlatListData = [
    {
        hour: "1 AM",
        status: horizontalStatus.rainy,
        degrees: 57
    },
    {
        hour: "2 AM",
        status: horizontalStatus.cloud,
        degrees: 33
    },
    {
        hour: "3 AM",
        status: horizontalStatus.cloud,
        degrees: 12
    },
    {
        hour: "4 AM",
        status: horizontalStatus.sunny,
        degrees: 47
    },
    {
        hour: "5 AM",
        status: horizontalStatus.thunderstorm,
        degrees: 37
    },
    {
        hour: "6 AM",
        status: horizontalStatus.cloud,
        degrees: 40
    },
    {
        hour: "7 AM",
        status: horizontalStatus.sunny,
        degrees: 45
    },
    {
        hour: "8 AM",
        status: horizontalStatus.sunny,
        degrees: 20
    },
    {
        hour: "9 AM",
        status: horizontalStatus.cloud,
        degrees: 43
    },
];

export {horizontalStatus};
export {horizontalFlatListData};
