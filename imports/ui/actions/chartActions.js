export const UPDATE_INDICES = 'UPDATE_INDICES';

export const updateIndices = (startIndex, endIndex) => ({
  type: UPDATE_INDICES,
  payload: { startIndex, endIndex }
});
