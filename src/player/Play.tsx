import { IHierarchyWidget } from "../types";

/**
 * Иерархическая сборка полученных виджетов
 */
export function Play  (children: IHierarchyWidget[]):JSX.Element[] {
    const result:JSX.Element[] = [];
    for(let item of children){

        const ChildComponent = item.component;

        result.push(
            <ChildComponent  {...item.props} key={item.id}>
                {item.children !== undefined ? Play(item.children) : undefined}
            </ChildComponent>
        );
    }

    return result;
}
