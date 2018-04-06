export const updateClassname = (classname) => {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_CLASSNAME',
      classname
    })
  }
}

export const updateLevel = (level) => {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_LEVEL',
      level
    })
  }
}
