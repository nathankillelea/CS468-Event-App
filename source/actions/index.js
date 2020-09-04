export function toggle_favorite(index) {
  return {
    type: 'TOGGLE_FAVORITE',
    index,
  };
}

export function redeem(index) {
  return {
    type: 'REDEEM',
    index,
  };
}

export function redeem_from_store(index) {
  return {
    type: 'REDEEM_FROM_STORE',
    index,
  };
}
