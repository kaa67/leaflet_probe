 const api = {
    getSitesList: () => [
        {
            id: 92,
            name: 'Cевастополь',
            lat: 45,
            lon: 35,
        },
        {
            id: 821,
            name: 'Евпатория',
            lat: 45,
            lon: 35,
        },
        {
            id: 82,
            name: 'Симферополь',
            lat: 45,
            lon: 35,
        },
        {
            id: 822,
            name: 'Керчь',
            lat: 45,
            lon: 35,
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