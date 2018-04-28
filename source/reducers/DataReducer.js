const initialState = {
    data: [
        {
            deal: '$5 OFF STUDENT TICKET',
            title: 'Fighting Illini Athletics',
            description: 'Support your team and save $5 on a student ticket to any game this month!',
            timeRemaining: '2h remaining',
            img: require('../assets/fightingillinibasketball.jpg'),
            color: '#E5461F',
            isFavorited: false,
            isRedeemed: false,
            index: 0,
            type: 'deal',
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
            isRedeemed: false,
            index: 1,
            type: 'deal',
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
            isRedeemed: false,
            index: 2,
            type: 'deal',
            latitude: 40.15,
            longitude: -88.25
        },
        {
            deal: '\'MEET THE TEAM\' RAFFLE',
            title: 'Fighting Illini',
            description: 'Attend this raffle to win a change to meet the Fighting Illini football team!',
            timeRemaining: '2 days remaining',
            img: require('../assets/fightingillinifootball.jpg'),
            color: '#4B60B4',
            isFavorited: false,
            isRedeemed: false,
            index: 3,
            type: 'experience',
            latitude: 40.0991869,
            longitude: -88.2381443
        },
        {
            deal: 'Cherry Blossoms in Bloom',
            title: 'Japan House',
            description: 'The cherry blossoms are in full bloom. Come and see them before they are gone!',
            timeRemaining: '6 days remaining',
            img: require('../assets/japanhouse.jpg'),
            color: '#4B60B4',
            isFavorited: false,
            isRedeemed: false,
            index: 4,
            type: 'experience',
            latitude: 40.0927979,
            longitude: -88.2200977
        },
        {
            deal: 'Yoga & Meditation Session',
            title: 'YesPlus UIUC',
            description: 'Come de-stress and energize your body and mind with 1-hour session of mixed yoga and meditation. Yoga mats provided.',
            timeRemaining: '5 hours',
            img: require('../assets/yoga.jpg'),
            color: '#4B60B4',
            isFavorited: false,
            isRedeemed: false,
            index: 5,
            type: 'experience',
            latitude: 40.1092101,
            longitude: -88.2294112
        }
    ],
};

const DataReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            return {
                data: state.data.map(
                    (item) => item.index === action.index ? {...item, isFavorited: !item.isFavorited}
                                                          : item
                )
            };
        case 'REDEEM':
            return {
                data: state.data.map(
                    (item) => item.index === action.index ? {...item, isRedeemed: true}
                                                          : item
                )
            };
        default:
            return state;

    }
};

export default DataReducer;