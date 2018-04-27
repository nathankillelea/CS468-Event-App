export function toggle_favorite(index) {
    return {
        type: 'TOGGLE_FAVORITE',
        index
    }
}

export function redeem(index) {
    return {
        type: 'REDEEM',
        index
    }
}
