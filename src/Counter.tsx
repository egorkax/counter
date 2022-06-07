import React, {useState} from "react";
import './Counter.css'

type CounterPropsType = {
    value:number
    displayValue: number | string
    addValue: () => void
    resetValue: () => void
    maxValue: number
    errorValue: boolean
}


export const Counter = (props: CounterPropsType) => {

    return (
        <div className='counter'>
            <div className={props.errorValue ? 'error' : 'counterScreen'}>
                <p>{props.displayValue}</p>
            </div>
            <div className='blockButton'>
                <button disabled={props.displayValue===props.maxValue} onClick={props.addValue} className='inc'>inc
                </button>
                {/*disabled if value ==== maxvalue*/}
                <button disabled={props.displayValue===props.value} onClick={props.resetValue} className='reset'>reset</button>
                {/*disabled if value ==== minvalue*/}
            </div>
        </div>

    )
}