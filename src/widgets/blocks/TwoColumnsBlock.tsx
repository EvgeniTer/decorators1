import React from "react";
import { IPlayerProps } from "../../player/Player";

interface ITwoColumnsBlockProps {

}

export default function TwoColumnsBlock(props: React.PropsWithChildren<ITwoColumnsBlockProps>) {
    
    let first = props.children;
    
    
    const firstColumnsChildren = new Array<React.ReactNode>();
    const secondColumnsChildren = new Array<React.ReactNode>();

    React.Children.forEach(props.children, element => {
        if (!React.isValidElement(element)) return
      
        const childrenWidgetProp = element.props as any;
      
        const columnIndex: number | undefined = childrenWidgetProp["column"] as any; 
        if (columnIndex === 1){
            firstColumnsChildren.push(element);
        }
        else{
            secondColumnsChildren.push(element);
        }
      })

      
    
    return (
        <div style={{ display: "flex"}}>
            <div style={{ width: "50%", maxWidth: "50%" }}>
                {firstColumnsChildren}
            </div>
            <div style={{ width: "50%", maxWidth: "50%" }}>
                {secondColumnsChildren}
            </div>
        </div>
    );
}