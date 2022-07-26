import { Dimension } from "../../types"

export interface ISizeDescription {
    width: Dimension,
    height: Dimension,
    maxWidth?: Dimension,
    maxHeight?: Dimension;
    minWidth?: Dimension,
    minHeight?: Dimension;
}

export interface IResizeContainerProps extends ISizeDescription  {
    onChange: (width:Dimension, height: Dimension) => void;
}

/**
 * Контрол отвественен за изменение размеров виджета, отрисовку элементов изменения размера
 * @param props 
 * @returns 
 */
export function ResizeContainer(props: React.PropsWithChildren<IResizeContainerProps>) {
    return (
        <div style={{ 
                width: props.width.value,
                height: props.width.value
            }}>
            { props.children }
        </div>
    )
}