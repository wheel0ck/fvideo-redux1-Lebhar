export const USER_SELECTED = 'USER_SELECTED'
export function selectUser(user) {
    console.log('action',user)

    return {
        type: USER_SELECTED,
        payload: user
    }
}