import React, {useState} from 'react';
import './App.css';

import {Counter} from "./Counter";
import {SetCounter} from "./SetCounter";

// type DisplayType = {
//     display: number
//     maxValue: number
// }

function App() {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [display, setDisplay] = useState<number | string>(0)
    const [error, setError] = useState<boolean>(false)


    // const [display, setDisplay] = useState<DisplayType | string | undefined>(undefined)

    // const addValue = () => {
    //     if (display && typeof display === 'number') {
    //         setDisplay({display: display +1, maxValue: maxValue})
    //     }
    // }

    // const resetValue = () => {
    //     setDisplay((prev) => prev && typeof  prev !== 'string' ? ({...prev, display: minValue}) : prev)
    // }


    const resetValue = () => {
        setDisplay(minValue)
    }

    const addValue = () => {
        if (display && typeof display === 'number') {
            setDisplay(display + 1)
            // display === maxValue?setError(true):undefined


        }
    }

    const changeMinValue = (value: number) => {
        setMinValue(value)
        if (value < 0) {
            setError(true)
            setDisplay('Incorrect value!!')
        } else if (value >= maxValue) {
            setError(true)
            setDisplay('Incorrect value!!')

        } else {
            setError(false)
            setDisplay("enter values and press 'set'")
        }
    }

    const changeMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)

    }

    const setButton = () => {
        setDisplay(minValue)
    }
    return (
        < div className={'body'}>
            <div className={'CouterApp'}>
                <SetCounter
                    value={minValue}
                    maxValue={maxValue}
                    changeMinValue={changeMinValue}
                    changeMaxValue={changeMaxValue}
                    setButton={setButton}
                />
                <Counter
                    value={minValue}
                    errorValue={error}
                    displayValue={display}
                    maxValue={maxValue}
                    addValue={addValue}
                    resetValue={resetValue}
                />

            </div>
        </div>
    );
}


export default App;
