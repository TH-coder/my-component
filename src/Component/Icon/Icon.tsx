import * as React from "react";
import "./iconfont.css";


export interface IIconProps {
    type:string,
    style?:object,
    onClick?:(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

class Icon extends React.Component<IIconProps>{
    public onClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>{
        if(this.props.onClick){
            this.props.onClick(event);
        }
    }
    public render(){
        const {type,style} = this.props;
        return(
            <span className={`iconfont icon-${type}`} style={style} onClick = {this.onClick}/>
        )
    }
}

export default Icon

