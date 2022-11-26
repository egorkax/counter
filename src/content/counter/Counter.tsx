import React from "react";
import './Counter.css'

type CounterPropsType = {
    minValue: number
    displayValue: number | string
    addValue: () => void
    resetValue: () => void
    maxValue: number
    disabledValue: boolean
    resValue: number

}


export const Counter = (props: CounterPropsType) => {

    const setBtClassInc = props.displayValue === props.maxValue || props.disabledValue ? 'disButton' : 'button'
    const setBtClassReset = props.displayValue === props.resValue || props.disabledValue ? 'disButton' : 'button'
    return (
        <div className='counter'>
            <div
                className={props.displayValue === props.maxValue || props.displayValue === 'Incorrect value!!' ? 'error' : 'counterScreen'}>
                <p>{props.displayValue}</p>
            </div>
            <div className='blockButton'>
                <button disabled={props.displayValue === props.maxValue || props.disabledValue} onClick={props.addValue}
                        className={setBtClassInc}>inc
                </button>
                <button disabled={props.displayValue === props.resValue || props.disabledValue}
                        onClick={props.resetValue} className={setBtClassReset}>reset
                </button>
            </div>
        </div>

    )
}