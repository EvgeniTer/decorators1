import { useContext } from "react";
import { DesignTimeDecorator } from "../decorators/DesignTimeDecorator";
import { Player } from "../player/Player";
import { Dimension, IHierarchyWidget, JSXFunction, ViewMode, WidgetType } from "../types";
import { IRuntimeWidgetProps } from "../types/IRuntimeWidgetProps";
import TwoColumnsBlock from "../widgets/blocks/TwoColumnsBlock";
import { Button } from "../widgets/Button";
import { designTimeFrameContext } from "./DesignTimeFrameContext";


interface IFrameProps {
    width?: Dimension;
    height?: Dimension;
    mode?: ViewMode;
}



export function Frame(props:IFrameProps) {

    //Некоторая иерархия виджетов
    const widgetTree: IHierarchyWidget = {
        component: (widgetProps:IRuntimeWidgetProps) => <TwoColumnsBlock {...widgetProps as any} />,
        componentType: "TwoColumnsBlock",
        id: 2,
        props: {
            height: { value: 10, unit: "px"},
            width: { value: 10, unit: "px"},
            id: 2
        },
        children: [{
            component: (widgetProps:IRuntimeWidgetProps) => <Button {...widgetProps as any} />,
            componentType: "Button",
            id: 1,
            props: {
                height: { value: 10, unit: "px"},
                width: { value: 10, unit: "px"},
                id: 1,
                column: 1,
                caption: "First column button"
            }
        },
        {
            component: (widgetProps:IRuntimeWidgetProps) => <Button {...widgetProps as any} />,
            componentType: "Button",
            id: 2,
            props: {
                height: { value: 10, unit: "px"},
                width: { value: 10, unit: "px"},
                id: 2,
                column: 2,
                caption: "Second column button"
            }
        }]
    }

    if (props.mode === "designtime"){
        //Здесь подразумевается проход по всему дереву и оборачивание каждого виджета в компонент для designtime
        widgetTree.component = (props) => DesignTimeDecorator(widgetTree.component, props, widgetTree.componentType, widgetTree.id);
    }

    //Реализуем provider для доступа к методам контекста, по хорошему в value - прокидываем реализацию всех методов для данного контекста
    return (
        <designTimeFrameContext.Provider value={{} as any }> 
            <Player widget={widgetTree} />
        </designTimeFrameContext.Provider>
    )
}


