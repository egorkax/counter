import {Dispatch} from "redux";


let initialState: initialStateType = {
    minValue: 0,
    maxValue: 5,
    displayValue: 0,
    resValue: 0,
    error: false,
    disabledCounterBt: false,
    disabledSetCounterBt: true,

};

export const countReducer = (state: initialStateType = initialState, action: counterReducerACType): initialStateType => {
    switch (action.type) {

        case "CHANGE-MIN-VALUE": {
            return {
                ...state,
                minValue: action.value
            }
        }
        case "CHANGE-MAX-VALUE": {
            return {
                ...state,
                maxValue: action.valueMax
            }
        }
        case "ADD-VALUE": {
            return {
                ...state,
                displayValue: action.newValue

            }
        }
        case "SET-ERROR": {
            return {
                ...state,
                error: action.newValue
            }
        }
        case "SET-DISABLED-COUNTER": {
            return {
                ...state,
                disabledCounterBt: action.newValue
            }
        }
        case "SET-DISABLED-SET-COUNTER": {
            return {
                ...state,
                disabledSetCounterBt: action.newValue
            }
        }
        case "ADD-RES-VALUE":{
            return {...state,
            resValue:action.newValue}
        }


        default:
            return state
    }
}

//ac
export const dispatchSetMinValueErrorCase = (dispatch: Dispatch, minValue: number) => {
    dispatch(addValueAC(minValue))
    dispatch(addResValueAC(minValue))
    dispatch(setDisabledCounterAC(false))
    dispatch(setDisabledSetCounterAC(true))
}

export const changeMinValueAC = (value: number) => {
    return {
        type: 'CHANGE-MIN-VALUE',
        value
    } as const
}
export const changeMaxValueAC = (valueMax: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        valueMax
    } as const
}
export const addValueAC = (newValue: number | string) => {
    return {
        type: 'ADD-VALUE',
        newValue
    } as const
}
export const addResValueAC = (newValue: number) => {
    return {
        type: 'ADD-RES-VALUE',
        newValue
    } as const
}
export const setErrorAC = (newValue: boolean) => {
    return {
        type: 'SET-ERROR',
        newValue
    } as const
}
export const setDisabledCounterAC = (newValue: boolean) => {
    return {
        type: 'SET-DISABLED-COUNTER',
        newValue
    } as const
}
export const setDisabledSetCounterAC = (newValue: boolean) => {
    return {
        type: 'SET-DISABLED-SET-COUNTER',
        newValue
    } as const
}

//type

export type initialStateType = {
    minValue: number
    maxValue: number
    displayValue: number | string
    resValue: number
    error: boolean
    disabledCounterBt: boolean
    disabledSetCounterBt: boolean

}

type changeMinValueACType = ReturnType<typeof changeMinValueAC>
type changeMaxValueACType = ReturnType<typeof changeMaxValueAC>
type addValueACType = ReturnType<typeof addValueAC>
type addResValueACType = ReturnType<typeof addResValueAC>
type setErrorACType = ReturnType<typeof setErrorAC>
type setDisabledCounterACType = ReturnType<typeof setDisabledCounterAC>
type setDisabledSetCounterACType = ReturnType<typeof setDisabledSetCounterAC>
type counterReducerACType =
    changeMinValueACType
    | changeMaxValueACType
    | addValueACType
    | setErrorACType
    | setDisabledCounterACType
    | setDisabledSetCounterACType
    | addResValueACType