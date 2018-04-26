// not working??
export function favorite() {
    return(dispatch) => {
        dispatch({
            type: 'FAVORITE',
            isFavorited: true
        })
    }
}

export function unfavorite() {
    return(dispatch) => {
        dispatch({
            type: 'UNFAVORITE',
            isFavorited: false
        })
    }
}