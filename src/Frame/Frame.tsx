import { useContext } from "react";
import { WASI } from "wasi";
import { DesignTimeDecorator } from "../decorators/DesignTimeDecorator";
import { Play } from "../player/Play";  
import { Dimension, IHierarchyWidget, JSXFunction, ViewMode, WidgetType } from "../types";
import { IRuntimeWidgetProps } from "../types/IRuntimeWidgetProps";
import TwoColumnsBlock from "../widgets/blocks/TwoColumnsBlock";
import { Button } from "../widgets/Button";
import { widgetTree as data} from "./Data";
import { designTimeFrameContext } from "./DesignTimeFrameContext";


interface IFrameProps {
    width?: Dimension;
    height?: Dimension;
    mode?: ViewMode;
}



export function Frame(props:IFrameProps) {

    //Некоторая иерархия виджетов
    let widgetTree = data;
   
    prepareStyleObject(widgetTree);

    if (props.mode === "designtime"){
        //Здесь подразумевается проход по всему дереву и оборачивание каждого виджета в компонент для designtime
        widgetTree.component = (props) => DesignTimeDecorator(widgetTree.component, props, widgetTree.componentType, widgetTree.id);
    }

    //Реализуем provider для доступа к методам контекста, по хорошему в value - прокидываем реализацию всех методов для данного контекста
    return (
        <designTimeFrameContext.Provider value={{} as any }>
            {Play([widgetTree])}
        </designTimeFrameContext.Provider>
    )
}

//Обработка стилей
function prepareStyleObject(widget:IHierarchyWidget){
    if (widget.props.style === undefined || widget.props.style === null){
        widget.props.style = {};
    }

    widget.props.style.width = widget.props.width.value + widget.props.width.unit;
    widget.props.style.height = widget.props.height.value + widget.props.height.unit;
    widget.props.style.overflow = "hidden";

    if (widget.children === undefined){
        return;
    }

    for(let childItem of widget.children){
        prepareStyleObject(childItem);
    }
}

