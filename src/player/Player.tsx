import { IHierarchyWidget, JSXFunction } from "../types";
import { IRuntimeWidgetProps } from "../types/IRuntimeWidgetProps"



interface IPlayerProps {
    widget: IHierarchyWidget;
}

/**
 * Иерархическая отрисовка полученных виджетов
 */
export function Player(props: IPlayerProps) {

    const Component = props.widget.component;

    let childrenComponents = props.widget.children?.map(x => {
        return (<Player widget={x} />);
    })

    return (
        <Component  {...props.widget.props}>
            {childrenComponents}
        </Component>
    )
}