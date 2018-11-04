const fixture = {
    requestHomePage: jest.fn(),
    home: {
        isFetching: false,
        homeData: [
        {
            name: 'station-name',
            tubeLines: [
            'circle',
            'district'
            ]
        }
        ]
    },
    history: {
        push: jest.fn()
    }
};

export default fixture;