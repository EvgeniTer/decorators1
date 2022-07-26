import { IRuntimeWidgetProps } from "./IRuntimeWidgetProps";

/**
 * Интерфейс входных свойств у всех виджетов, которые могут работать в режиме DesignTime
 */
export interface IDesignTimeWidgetProps extends IRuntimeWidgetProps {
    onChange: (props: IRuntimeWidgetProps) => void;
}