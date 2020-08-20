const initialState = {
  data: [
    {
      deal: '$5 OFF STUDENT TICKET',
      title: 'Fighting Illini Athletics',
      description: 'Support your team and save $5 on a student ticket to any game this month!',
      timeRemaining: '2h remaining',
      date: '4/30',
      img: require('../assets/fightingillinibasketball.jpg'),
      color: '#E5461F',
      isFavorited: false,
      isRedeemed: false,
      index: 0,
      type: 'deal',
      latitude: 40.0963625,
      longitude: -88.2360834,
      points: 50,
      fromStore: false,
    },
    {
      deal: 'Yoga & Meditation Session',
      title: 'YesPlus UIUC',
      description: 'Come de-stress and energize your body and mind with 1-hour session of mixed yoga and meditation. Yoga mats provided.',
      timeRemaining: '5 hours',
      date: '4/30',
      img: require('../assets/yoga.jpg'),
      color: '#4B60B4',
      isFavorited: false,
      isRedeemed: false,
      index: 1,
      type: 'experience',
      latitude: 40.1092101,
      longitude: -88.2294112,
      points: 10,
      fromStore: false,
    },
    {
      deal: '\'MEET THE TEAM\' RAFFLE',
      title: 'Fighting Illini',
      description: 'Attend this raffle to win a change to meet the Fighting Illini football team!',
      timeRemaining: '2 days remaining',
      date: '5/2',
      img: require('../assets/fightingillinifootball.jpg'),
      color: '#4B60B4',
      isFavorited: false,
      isRedeemed: false,
      index: 2,
      type: 'experience',
      latitude: 40.0991869,
      longitude: -88.2381443,
      points: 10,
      fromStore: false,
    },
    {
      deal: '10% OFF CONCERT TICKET',
      title: 'Krannert Center',
      description: 'Experience the music live at the Krannert Center for the Performing Arts and save 10% off of a concert ticket.',
      timeRemaining: '4 days remaining',
      date: '5/4',
      img: require('../assets/krannert.jpg'),
      color: '#E5461F',
      isFavorited: false,
      isRedeemed: false,
      index: 3,
      type: 'deal',
      latitude: 40.1079313,
      longitude: -88.2225308,
      points: 25,
      fromStore: false,
    },
    {
      deal: 'FREE COOKING CLASS',
      title: 'ARC Instructional Kitchen',
      description: 'Learn how to cook through a free course at the ARC Instructional Kitchen.',
      timeRemaining: '5 days remaining',
      date: '5/5',
      img: require('../assets/cooking.jpg'),
      color: '#E5461F',
      isFavorited: false,
      isRedeemed: false,
      index: 4,
      type: 'deal',
      latitude: 40.1010528,
      longitude: -88.2364309,
      points: 10,
      fromStore: false,
    },
    {
      deal: 'Cherry Blossoms in Bloom',
      title: 'Japan House',
      description: 'The cherry blossoms are in full bloom. Come and see them before they are gone!',
      timeRemaining: '6 days remaining',
      date: '5/6',
      img: require('../assets/japanhouse.jpg'),
      color: '#4B60B4',
      isFavorited: false,
      isRedeemed: false,
      index: 5,
      type: 'experience',
      latitude: 40.0927979,
      longitude: -88.2200977,
      points: 5,
      fromStore: false,
    },
  ],
  history: [],
  userPoints: 0,
  store: [
    {
      deal: '50% OFF DJ TICKET',
      title: 'The Canopy Club',
      description: 'Megaphonix headlining The Canopy Club! Megaphonix is a progressive and electric house artist from Chicago, IL. His work has gained recognition from blogs such as http://House.NET and http://ThisSongSlaps.com, and is regularly supported by DJs across the country.',
      timeRemaining: '11 days remaining',
      date: '5/11',
      img: require('../assets/megaphonix.jpg'),
      color: '#E5461F',
      isFavorited: false,
      isRedeemed: false,
      index: 0, // set the index to length of data array
      type: 'deal',
      latitude: 40.1064834,
      longitude: -88.2236989,
      points: 0,
      pointsCost: 100,
      fromStore: true,
    },
    {
      deal: '25% OFF SEASON TICKET',
      title: 'Fighting Illini',
      description: 'Take 25% off a football season ticket for the 2018-2019 season.',
      timeRemaining: '12 days remaining',
      date: '5/12',
      img: require('../assets/seasonticket.jpg'),
      color: '#E5461F',
      isFavorited: false,
      isRedeemed: false,
      index: 1, // set the index to length of data array
      type: 'deal',
      latitude: 40.0982516,
      longitude:  -88.2447328,
      points: 0,
      pointsCost: 500,
      fromStore: true,
    },
    {
      deal: '50% OFF MAGIC SHOW',
      title: 'State Farm Center',
      description: 'The Illusionists is a touring magic production which features a rotating cast of 5 to 8 magicians who all specialise in specific branches of magic from stage illusions to mind reading to escapology and comedic magic.',
      timeRemaining: '15 days remaining',
      date: '5/15',
      img: require('../assets/illusionists.jpg'),
      color: '#E5461F',
      isFavorited: false,
      isRedeemed: false,
      index: 2, // set the index to length of data array
      type: 'deal',
      latitude: 40.0962595,
      longitude: -88.2369835,
      points: 0,
      pointsCost: 250,
      fromStore: true,
    }
  ]
};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return {
        data: state.data.map(
          (item) => item.index === action.index ? {...item, isFavorited: !item.isFavorited}
                              : item
        ),
        history: state.history.map(
          (item) => item.index === action.index ? {...item, isFavorited: !item.isFavorited}
            : item
        ),
        userPoints: state.userPoints,
        store: state.store,
      };
    case 'REDEEM':
      for(let i = 0; i < state.data.length; i++) {
        if(state.data[i].index === action.index) {
          state.history.unshift(state.data[i]);
          state.userPoints += state.data[i].points;
        }
      }
      return {
        data: state.data.map(
          (item) => item.index === action.index ? {...item, isRedeemed: true}
                              : item
        ),
        history: state.history,
        userPoints: state.userPoints,
        store: state.store,
      };
    case 'REDEEM_FROM_STORE':
      for(let i = state.store.length - 1; i >= 0; i--) {
        if(state.store[i].index === action.index) {
          if(state.userPoints >= state.store[i].pointsCost) {
            state.userPoints -= state.store[i].pointsCost;
            state.store[i].index = state.data.length;
            state.store[i].isRedeemed = true;
            state.data.push(state.store[i]);
            state.history.unshift(state.store[i]);
            state.store.splice(i, 1);
          }
        }
      }
      return {
        data: state.data,
        history: state.history,
        userPoints: state.userPoints,
        store: state.store,
      };
    default:
      return state;

  }
};

export default DataReducer;