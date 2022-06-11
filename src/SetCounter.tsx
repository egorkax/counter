import React, {ChangeEvent, useState} from "react";
import  s from './SetCounter.module.css'


type SetCounterPropsType = {
    minValue: number
    maxValue: number
    changeMaxValue: (maxValue: number) => void
    changeMinValue: (maxValue: number) => void
    setButton: () => void
    errorValue:boolean
    disabledValue1:boolean
}

export const SetCounter = (props: SetCounterPropsType) => {



    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(Math.round(e.currentTarget.valueAsNumber))
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMinValue(Math.round(e.currentTarget.valueAsNumber))
    }

    const onClickHandler = () => {
        props.setButton()
    }

    const inputClassName=props.errorValue?s.inputClassError: s.inputClass;
    const setBtClassName=props.disabledValue1?s.setClassDis:s.set

    return (
        <div className={s.setCounter}>
            <div className={s.blockValue}>
                <label className={s.startValue}>
                    <b>start value:</b>
                    <input  className={inputClassName} type={"number"}  value={props.minValue}
                           onChange={onChangeMinValueHandler}/>
                </label>
                <label className={s.maxValue}>
                    <b>max value:</b>
                    <input  className={inputClassName} type={"number"}   value={props.maxValue}
                           onChange={onChangeMaxValueHandler}/>
                </label>
            </div>
            <div className={s.blockSet}>
                <button  disabled={props.disabledValue1} onClick={onClickHandler}  className={setBtClassName}>set</button>

            </div>

        </div>

    )
}