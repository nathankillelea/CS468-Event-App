// not working ??
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
            key: '1'
        },
        {
            deal: '10% OFF CONCERT TICKET',
            title: 'Krannert Center for the Performing Arts',
            description: 'Experience the music live at the Krannert Center for the Performing Arts and save 10% off of a concert ticket.',
            timeRemaining: '4 days remaining',
            img: require('../assets/krannert.jpg'),
            color: '#E5461F',
            isFavorited: false,
            key: '2'
        },
        {
            deal: 'FREE COOKING CLASS',
            title: 'ARC Instructional Kitchen',
            description: 'Learn how to cook through a free course at the ARC Instructional Kitchen.',
            timeRemaining: '5 days remaining',
            img: require('../assets/cooking.jpg'),
            color: '#E5461F',
            isFavorited: false,
            key: '3'
        }
    ],
};

const DealReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FAVORITE':
            return {
                isFavorited: action.isFavorited,
            };
        case 'UNFAVORITE':
            return {
                isFavorited: action.isFavorited,
            };
        default:
            return state;
    }
};

export default DealReducer;