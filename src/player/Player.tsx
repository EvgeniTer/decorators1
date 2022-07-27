import React from "react";
import { IHierarchyWidget, JSXFunction } from "../types";



export interface IPlayerProps {
    widget: IHierarchyWidget;
}


function drawComponents  (children: IHierarchyWidget[]):JSX.Element[] {
    const result:JSX.Element[] = [];
    for(let item of children){

        let ChildComponent = item.component;

        result.push(<ChildComponent  {...item.props}>
            {item.children !== undefined ? drawComponents(item.children) : undefined}
        </ChildComponent>)
    }

    return result;
}
/**
 * Иерархическая отрисовка полученных виджетов
 */
export function Player(props: IPlayerProps) {
    return (
        <React.Fragment>
            {drawComponents([props.widget])}
        </React.Fragment>
    )
}