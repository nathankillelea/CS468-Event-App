// not working ??
const initialState = {
    isFavorited: false,
};

const FavoriteReducer = (state = initialState, action) => {
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

export default FavoriteReducer;