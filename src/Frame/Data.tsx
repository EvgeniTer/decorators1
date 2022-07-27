import { IHierarchyWidget } from "../types";
import { IRuntimeWidgetProps } from "../types/IRuntimeWidgetProps";
import TwoColumnsBlock from "../widgets/blocks/TwoColumnsBlock";
import { Button } from "../widgets/Button";

export const widgetTree: IHierarchyWidget = {
    component: (widgetProps:IRuntimeWidgetProps) => <TwoColumnsBlock {...widgetProps as any} />,
    componentType: "TwoColumnsBlock",
    id: 2,
    props: {
        height: { value: 50, unit: "px"},
        width: { value: 400, unit: "px"},
        id: 2
    },
    children: [{
        component: (widgetProps:IRuntimeWidgetProps) => <Button {...widgetProps as any} />,
        componentType: "Button",
        id: 1,
        props: {
            height: { value: 20, unit: "px"},
            width: { value: 100, unit: "px"},
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
            height: { value: 20, unit: "px"},
            width: { value: 100, unit: "px"},
            id: 2,
            column: 2,
            caption: "Second column button"
        }
    },
    {
        component: (widgetProps:IRuntimeWidgetProps) => <TwoColumnsBlock {...widgetProps as any} />,
        componentType: "TwoColumnsBlock",
        id: 4,
        props: {
            height: { value: 20, unit: "px"},
            width: { value: 200, unit: "px"},
            id: 4,
            column: 1
        },
        children: [{
            component: (widgetProps:IRuntimeWidgetProps) => <Button {...widgetProps as any} />,
            componentType: "Button",
            id: 7,
            props: {
                height: { value: 10, unit: "px"},
                width: { value: 50, unit: "px"},
                id: 7,
                column: 1,
                caption: "Inside  First column button"
            }
        },
        {
            component: (widgetProps:IRuntimeWidgetProps) => <Button {...widgetProps as any} />,
            componentType: "Button",
            id: 6,
            props: {
                height: { value: 10, unit: "px"},
                width: { value: 10, unit: "px"},
                id: 6,
                column: 2,
                caption: "Inside Second column button"
            }
        }]
    }
    ]
}
