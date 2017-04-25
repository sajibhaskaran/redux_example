export const selectUser = (user) => {
  console.log("selected ", user.first);
  return {
    type: 'USER_SELECTED',
    payload: user
  }
}
// action creater return an action
