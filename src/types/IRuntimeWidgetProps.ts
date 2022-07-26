import { CSSProperties } from "react";
import { Dimension } from ".";

export interface IWidgetProps {
    width: Dimension;
    height: Dimension;
    [key: string]: unknown;
}

export interface IRuntimeWidgetProps extends IWidgetProps {
    /**
     * Идентификатор виджета
     */
    id: number;

    className?: string;

    style?: CSSProperties;
}