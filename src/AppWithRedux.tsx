import React from 'react';
import './App.css';

import {Counter} from "./content/counter/Counter";
import {SetCounter} from "./content/settingCounter/SetCounter";
import {useDispatch, useSelector} from "react-redux";
import {
    addResValueAC,
    addValueAC,
    changeMaxValueAC,
    changeMinValueAC,
    setDisabledCounterAC,
    setDisabledSetCounterAC,
    setErrorAC
} from "./redux/count-reducer";
import {AppRootStateType} from "./redux/store";

export function AppWithRedux() {

    const minValue = useSelector<AppRootStateType, number>(state => state.count.minValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.count.maxValue)
    const displayValue = useSelector<AppRootStateType, number | string>(state => state.count.displayValue)
    const resValue = useSelector<AppRootStateType, number>(state => state.count.resValue)
    const error = useSelector<AppRootStateType, boolean>(state => state.count.error)
    const disabledCounter = useSelector<AppRootStateType, boolean>(state => state.count.disabledCounterBt)
    const disabledSetCounter = useSelector<AppRootStateType, boolean>(state => state.count.disabledSetCounterBt)

    const dispatch = useDispatch()

    const changeMinValue = (value: number) => {
        dispatch(changeMinValueAC(value))
        if (value < 0 || value >= maxValue) {
            dispatch(setErrorAC(true))
            dispatch(setDisabledCounterAC(true))
            dispatch(setDisabledSetCounterAC(true))
            dispatch(addValueAC('Incorrect value!!'))
        } else {
            dispatch(setDisabledCounterAC(true))
            dispatch(setDisabledSetCounterAC(false))
            dispatch(setErrorAC(false))
            dispatch(addValueAC('enter values and press "set"'))
        }
    }

    const changeMaxValue = (maxValue: number) => {
        dispatch(changeMaxValueAC(maxValue))
        if (maxValue <= minValue) {
            dispatch(setErrorAC(true))
            dispatch(setDisabledCounterAC(true))
            dispatch(setDisabledSetCounterAC(true))
            dispatch(addValueAC('Incorrect value!!'))

        } else {
            dispatch(setErrorAC(false))
            dispatch(setDisabledCounterAC(true))
            dispatch(setDisabledSetCounterAC(false))
            dispatch(addValueAC('enter values and press "set"'))
        }

    }

    const setButton = () => {
        if (minValue >= 0 && minValue < maxValue) {
            dispatch(addValueAC(minValue))
            dispatch(addResValueAC(minValue))
            dispatch(setDisabledCounterAC(false))
            dispatch(setDisabledSetCounterAC(true))
        }
    }

    const resetValue = () => {
        dispatch(addValueAC(resValue))
    }

    const addValue = () => {
        if (typeof displayValue === 'number' && displayValue >= 0) {
            dispatch(addValueAC(displayValue + 1))
        }
    }

    return (
        < div className={'body'}>
            <div className={'CouterApp'}>
                <SetCounter
                    minValue={minValue}
                    maxValue={maxValue}
                    changeMinValue={changeMinValue}
                    changeMaxValue={changeMaxValue}
                    setButton={setButton}
                    errorValue={error}
                    disabledValue={disabledSetCounter}

                />
                <Counter
                    minValue={minValue}
                    displayValue={displayValue}
                    maxValue={maxValue}
                    addValue={addValue}
                    resetValue={resetValue}
                    disabledValue={disabledCounter}
                    resValue={resValue}

                />

            </div>
        </div>
    );
}


