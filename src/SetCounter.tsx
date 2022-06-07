import React, {ChangeEvent, useState} from "react";
import './SetCounter.css'


type SetCounterPropsType = {
    value: number
    maxValue: number
    changeMaxValue: (maxValue: number) => void
    changeMinValue: (maxValue: number) => void
    setButton: () => void
}

export const SetCounter = (props: SetCounterPropsType) => {


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(e.currentTarget.valueAsNumber)
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMinValue(e.currentTarget.valueAsNumber)
    }


    const onClickHandler = () => {
        props.setButton()
    }

    return (
        <div className={'setCounter'}>
            <div className={'blockValue'}>
                <label className={'startValue'}>
                    <b>start value:</b>
                    <input className={'inputStartValue'} type={"number"} value={props.value}
                           onChange={onChangeMinValueHandler}/>
                </label>
                <label className={'maxValue'}>
                    <b>max value:</b>
                    <input className={'inputMaxValue'} type={"number"} value={props.maxValue}
                           onChange={onChangeMaxValueHandler}/>
                </label>
            </div>
            <div className='blockSet'>
                <button onClick={onClickHandler} className='set'>set</button>

            </div>

        </div>

    )
}