import React, {useState} from "react";
import './Counter.css'
import s from "./SetCounter.module.css";

type CounterPropsType = {
    minValue:number
    displayValue: number | string
    addValue: () => void
    resetValue: () => void
    maxValue: number
    // errorValue: boolean
    disabledValue:boolean
    resValue:number

}


export const Counter = (props: CounterPropsType) => {

    const setBtClassInc=props.displayValue===props.maxValue || props.disabledValue?'disButton':'button'
    const setBtClassReset=props.displayValue===props.resValue || props.disabledValue?'disButton':'button'
    return (
        <div className='counter'>
            <div className={props.displayValue===props.maxValue || props.displayValue==='Incorrect value!!' ? 'error' : 'counterScreen'}>
                <p>{props.displayValue}</p>
            </div>
            <div className='blockButton'>
                <button disabled={props.displayValue===props.maxValue || props.disabledValue} onClick={props.addValue} className={setBtClassInc}>inc
                </button>
                <button disabled={props.displayValue===props.resValue || props.disabledValue} onClick={props.resetValue} className={setBtClassReset}>reset</button>
            </div>
        </div>

    )
}