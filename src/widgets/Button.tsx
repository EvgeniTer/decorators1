import { IRuntimeWidgetProps } from "../types/IRuntimeWidgetProps";

export interface IButtonProps extends IRuntimeWidgetProps  {
    caption: string;
    fontSize: number;
    onClick: () => void;
}

/** Кнопка (виджет-кнопка) */
export function Button(props: IButtonProps) {
    return (
        <button onClick={props.onClick} style={{ fontSize: props.fontSize }}>{ props.caption }</button>
    )
}