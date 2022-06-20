 const api = {
    getSitesList: () => [
        {
            id: 92,
            name: 'Cевастополь',
            lat: 44.61665,
            lon: 33.52537,
        },
        {
            id: 821,
            name: 'Евпатория',
            lat: 45.2009,
            lon: 33.3666,
        },
        {
            id: 82,
            name: 'Симферополь',
            lat: 44.9572,
            lon: 34.1108,
        },
        {
            id: 822,
            name: 'Керчь',
            lat: 45.3396,
            lon: 36.466,
        },
    ],
    getRoutesList: () => [
        {
            from: 82,
            to: 92,
        },
        {
            from: 82,
            to: 821,
        },
        {
            from: 822,
            to: 92,
        },
        {
            from: 822,
            to: 82,
        },
    ],
};

export default api;