import { Dimension } from "../../types"

export interface IDragContainerProps  {
    
}

/** Обработка переноса виджета */
export function DragContainer(props: React.PropsWithChildren<IDragContainerProps>) {
    return (
        <div>
            { props.children }
        </div>
    )
}