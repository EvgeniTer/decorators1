import React, { useContext } from 'react';
import { IToolbarAction, JSXFunction, WidgetType } from '../types';
import { Overlay } from './components/Overlay';
import { ResizeContainer , ISizeDescription} from './components/ResizeContainer';
import { DragContainer } from './components/DragContainer';
import { Toolbar } from './components/Toolbar';
import { designTimeFrameContext } from '../Frame/DesignTimeFrameContext';
import { IDesignTimeWidgetProps } from '../types/IDesignTimeWidgetProps';
import { IRuntimeWidgetProps } from '../types/IRuntimeWidgetProps';

interface IDesignTimeDecoratorProps extends ISizeDescription {
    /**
     * Использовать перекрывание
     */
    useOverlay: boolean;

    /**
     * Дополнительный список действий, совершаемый над виджетом 
     */
    actions: IToolbarAction[];

    /**
     * Идентификатор экземпляра виджета
     */
    widgetId: number;

    /**
     * Данные виджет выбран для редактирования
     */
    selected: boolean;
}

/**
 * Декоратор для режима DesignTime.
 * Отвечает:
 *  1. Отрисовка overlay элемента, если виджет не должен редактироваться в режиме DesignTime
 *  2. Отрисовка дополнительный действий, выполняемых над виджетом - смена ориентации для раскладки, переключение режима: однострочный/многострочный текст
 *  3. Отрисовка кнопок: удаления и изменения виджета
 */
export const DesignTimeDecorator = (component: JSXFunction, props: IRuntimeWidgetProps, widgetType:WidgetType, widgetId:number): JSX.Element => {

    const Widget = component;

    
    const frameContextConsumer = useContext(designTimeFrameContext);
    const designTimeProps:IDesignTimeWidgetProps = {
        ...props,
        onChange: (properties) => frameContextConsumer.onChangeProps(props.id, properties)
    };

    const actions = frameContextConsumer.getWidgetActions(widgetType);

    let children = props.children;
    if (props.useOverlay){
        children = (<DragContainer><Overlay><Widget  {...designTimeProps} /></Overlay></DragContainer>);
    }

    actions.push({
        action: () => frameContextConsumer.onDelete(widgetId)
    });
    actions.push({
        action: () => frameContextConsumer.onEdit(widgetId)
    });

    const limiSizes = frameContextConsumer.getWidgetLimitSizes(widgetType);

    return (<ResizeContainer 
        height={props.height} 
        width={props.width} 
        maxHeight={limiSizes.maxHeight} 
        maxWidth={limiSizes.maxWidth} 
        minHeight={limiSizes.minHeight} 
        minWidth={limiSizes.minWidth} 
        onChange={(width, height) => frameContextConsumer.onChangeSize(widgetId, width, height)}>
        children
        <Toolbar actions={actions}/>
    </ResizeContainer>);
}