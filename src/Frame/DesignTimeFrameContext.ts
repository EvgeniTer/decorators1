import { createContext } from 'react';
import { Dimension, IChangeService, ISelectionService, IWidgetProviderService, WidgetType } from '../types';
import { IRuntimeWidgetProps } from '../types/IRuntimeWidgetProps';

export const designTimeFrameContext = createContext<IChangeService & ISelectionService & IWidgetProviderService>(
    {
        onDelete: (widgetId:number) => {},
        onEdit: (widgetId:number) => {},
        onChangeSize: (widgetId: number, width:Dimension, height: Dimension) => { },
        onChangeProps: (widgetId: number, props: IRuntimeWidgetProps) => {},
        onChangeOrder: (parentWidgetId: number, targetWidgetId:number, index:number) => {},
        onSelect: (widgetId:number) => {},
        getWidgetActions: (widgetType:WidgetType) => { return []; },
        getInitialWidgetProps: (widgetType: WidgetType) => { return {} as any },
        getWidgetLimitSizes: (widgetType: WidgetType) => { return {} as any }
    });