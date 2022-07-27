import { IRuntimeWidgetProps, IWidgetProps } from "./IRuntimeWidgetProps";

export type ViewMode  = "designtime" | "runtime";

type DimensionUnit = "px" | "%";

export type WidgetType = string;

export type Dimension = {
    value: number,
    unit: DimensionUnit
}


export interface IToolbarAction {
    title?:string;
    icon?:string;
    description?:string;

    //Является ли действие дефолтным по умолчанию
    default?: boolean;
    action: () => void;
}

export type JSXFunction = (props:IRuntimeWidgetProps) => JSX.Element;

export interface IHierarchyWidget {
    component: JSXFunction;

    componentType: WidgetType;

    id: number;

    props: IRuntimeWidgetProps;

    children?: IHierarchyWidget[];
}

// Интерфейс для изменения ерархии виджетов
export interface IChangeService {
    /**
     * Удаление виджета из фрейма
     */
    onDelete: (widgetId: number) => void;
    /**
     * Открытие PropertyGrid для виджета
     */
    onEdit: (widgetId: number) => void;

    /**
     * Изменение размера
     */
    onChangeSize: (widgetId: number, width:Dimension, height: Dimension) => void;

    /**
     * Изменение свойств виджета для случаев, если DesignTime виджет внутри меняет свое отображение
     */
    onChangeProps: (widgetId: number, props: IRuntimeWidgetProps) => void;

    /**
     * Изменение порядка следования виджетов
     */
    onChangeOrder: (parentWidgetId: number, targetWidgetId:number, index:number) => void;
}


export interface IDragnDropService {
    
}

//Интерфейс для выбора виджета
export interface ISelectionService {
    /**
     * Виджет выбран для редактирования
     */
    onSelect: (widgetId:number) => void;
}

export interface IWidgetProviderService {
    //Получение списка действий по виджету в режиме designtime
    getWidgetActions: (widgetType:WidgetType) => IToolbarAction[];

    //Получения списка свойств и их начальных значений
    getInitialWidgetProps: (widgetType:WidgetType) => IWidgetProps;

    //Получения списка свойств и их начальных значений
    getWidgetLimitSizes: (widgetType:WidgetType) => { maxWidth:Dimension, maxHeight:Dimension, minWidth:Dimension, minHeight:Dimension };
}