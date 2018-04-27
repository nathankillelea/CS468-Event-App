const initialState = {
    dealList: [
        {
            deal: '$5 OFF STUDENT TICKET',
            title: 'Fighting Illini Athletics',
            description: 'Support your team and save $5 on a student ticket to any game this month!',
            timeRemaining: '2h remaining',
            img: require('../assets/fightingillinibasketball.jpg'),
            color: '#E5461F',
            isFavorited: false,
            index: 0,
            latitude: 40.0963625,
            longitude: -88.2360834
        },
        {
            deal: '10% OFF CONCERT TICKET',
            title: 'Krannert Center for the Performing Arts',
            description: 'Experience the music live at the Krannert Center for the Performing Arts and save 10% off of a concert ticket.',
            timeRemaining: '4 days remaining',
            img: require('../assets/krannert.jpg'),
            color: '#E5461F',
            isFavorited: false,
            index: 1,
            latitude: 40.1079313,
            longitude: -88.2225308
        },
        {
            deal: 'FREE COOKING CLASS',
            title: 'ARC Instructional Kitchen',
            description: 'Learn how to cook through a free course at the ARC Instructional Kitchen.',
            timeRemaining: '5 days remaining',
            img: require('../assets/cooking.jpg'),
            color: '#E5461F',
            isFavorited: false,
            index: 2,
            latitude: 40.15,
            longitude: -88.25
        }
    ],
};

const DealReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            return {
                dealList: state.dealList.map(
                    (deal) => deal.index === action.index ? {...deal, isFavorited: !deal.isFavorited}
                                                          : deal
                )
            };
        default:
            return state;
    }
};

export default DealReducer;