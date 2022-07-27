import React, { CSSProperties } from "react";
import { IRuntimeWidgetProps } from "../../types/IRuntimeWidgetProps";

interface ITwoColumnsBlockProps extends IRuntimeWidgetProps {

}

export default function TwoColumnsBlock(props: React.PropsWithChildren<ITwoColumnsBlockProps>) {
    
    let first = props.children;
    
    
    const firstColumnsChildren = new Array<React.ReactNode>();
    const secondColumnsChildren = new Array<React.ReactNode>();

    React.Children.forEach(props.children, element => {
        if (!React.isValidElement(element)) return
      
        const childrenWidgetProp = element.props as IRuntimeWidgetProps;

      
        const columnIndex: number | undefined = childrenWidgetProp["column"] as any; 
        if (columnIndex === 1) {
            childrenWidgetProp.style!.color = "green";
            firstColumnsChildren.push(element);
        }
        else{
            secondColumnsChildren.push(element);
        }
      })

    const baseStyle:CSSProperties = {
        display: "flex",
        border: "1px solid"
    };
    
    const computedStyle = Object.assign({}, baseStyle, props.style);

    return (
        <div style={computedStyle} className={props.className}>
            <div style={{ width: "50%", maxWidth: "50%" }}>
                {firstColumnsChildren}
            </div>
            <div style={{ width: "50%", maxWidth: "50%" }}>
                {secondColumnsChildren}
            </div>
        </div>
    );
}