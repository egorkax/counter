import React, {useEffect, useState} from 'react';
import './App.css';

import {Counter} from "./content/counter/Counter";
import {SetCounter} from "./content/settingCounter/SetCounter";

function App() {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [displayValue, setDisplayValue] = useState<number | string>(0)
    const [resValue, setResValue] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [disabled1, setDisabled1] = useState<boolean>(true)



    useEffect(()=>{
        let minValueAsString=localStorage.getItem('minValue')
        let maxValueAsString=localStorage.getItem('maxValue')
       if(minValueAsString && maxValueAsString){
           let newMinValue=JSON.parse(minValueAsString)
           setMinValue(newMinValue)
           setDisplayValue(newMinValue)
           setResValue(newMinValue)
           let newMaxValue=JSON.parse(maxValueAsString)
           setMaxValue(newMaxValue)

       }


    },[])


    const changeMinValue = (value: number) => {
        setMinValue(value)
        if (value < 0 || value >= maxValue  ) {
            setError(true)
            setDisabled(true)
            setDisabled1(true)
            setDisplayValue('Incorrect value!!')
            } else {
            setDisabled(true)
            setDisabled1(false)
            setError(false)
            setDisplayValue('enter values and press "set"')
        }
    }

    const changeMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
        if (maxValue <= minValue) {
            setError(true)
            setDisabled(true)
            setDisabled1(true)
            setDisplayValue('Incorrect value!!')

        } else {
            setError(false)
            setDisabled(true)
            setDisabled1(false)
            setDisplayValue('enter values and press "set"')

        }

    }

    const setButton = () => {
        if (minValue >= 0 && minValue < maxValue) {
            setDisplayValue(minValue)
            setResValue(minValue)
            setDisabled(false)
            setDisabled1(true)
            localStorage.setItem('minValue',JSON.stringify(minValue))
            localStorage.setItem('maxValue',JSON.stringify(maxValue))
        }
    }

    const resetValue = () => setDisplayValue(resValue)

    const addValue = () => {
        if (typeof displayValue === 'number' && displayValue >= 0) {
            setDisplayValue(displayValue + 1)
        }
    }

    // const [displayValue, setDisplay] = useState<DisplayType | string | undefined>(undefined)

    // const addValue = () => {
    //     if (displayValue && typeof displayValue === 'number') {
    //         setDisplay({displayValue: displayValue +1, maxValue: maxValue})
    //     }
    // }

    // const resetValue = () => {
    //     setDisplay((prev) => prev && typeof  prev !== 'string' ? ({...prev, displayValue: minValue}) : prev)
    // }

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
                    disabledValue={disabled1}

                />
                <Counter
                    minValue={minValue}
                    // errorValue={error}
                    displayValue={displayValue}
                    maxValue={maxValue}
                    addValue={addValue}
                    resetValue={resetValue}
                    disabledValue={disabled}
                    resValue={resValue}

                />

            </div>
        </div>
    );
}


