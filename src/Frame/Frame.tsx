import { useContext } from "react";
import { DesignTimeDecorator } from "../decorators/DesignTimeDecorator";
import { Player } from "../player/Player";
import { Dimension, IHierarchyWidget, JSXFunction, ViewMode, WidgetType } from "../types";
import { designTimeFrameContext } from "./DesignTimeFrameContext";


interface IFrameProps {
    width: Dimension;
    height: Dimension;
    mode: ViewMode;
}



export function Frame(props:IFrameProps) {

    //Некоторая иерархия виджетов
    const widgetTree: IHierarchyWidget = {} as any; 

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


