import { CSSProperties } from "react";
import { IRuntimeWidgetProps } from "../types/IRuntimeWidgetProps";

export interface IButtonProps extends IRuntimeWidgetProps  {
    caption: string;
    fontSize: number;
    onClick: () => void;
}

/** Кнопка (виджет-кнопка) */
export function Button(props: IButtonProps) {

    const style = Object.assign({
        fontSize: props.fontSize
    }, props.style);

    return (
        <button onClick={props.onClick} className={props.className} style={style}>{ props.caption }</button>
    )
}