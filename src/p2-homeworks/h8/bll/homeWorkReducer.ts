import {CHECK, SORT_DOWN, SORT_UP, UserType} from "../HW8";

export type homeWorkReducerAT = {
    type: string
    payload: string | number
}

export const homeWorkReducer = (state: Array<UserType>, action: homeWorkReducerAT): Array<UserType> => { // need to fix any
    switch (action.type) {
        case SORT_UP: {
            let copyState = [...state]
            return copyState.sort((a: UserType, b: UserType) => {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                } else return 0
            })
        }
        case SORT_DOWN: {
            let copyState = [...state]
            return copyState.sort((a: UserType, b: UserType) => {
                if (a.name < b.name) {
                    return 1;
                } else if (a.name > b.name) {
                    return -1;
                } else return 0
            })
        }
        case CHECK: {
            let copyState = [...state]
            return copyState.filter(c => c.age > 18)
        }
        default:
            return state
    }
}