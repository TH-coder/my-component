
import classNames from 'classnames';
import * as React from 'react';
import './Button.css'

export interface IButtonProps {
    type:string,
    size:string,
    disabled?:boolean
}


class Button extends React.Component<IButtonProps> {
    public render() {
        const {children,type,size,disabled} = this.props
        const classname = classNames(type,size||"medium",disabled === true?"disabled":"")
        return (
            <button className = {classname} disabled = {disabled}>
                {children}
            </button>
        );
    }
}

export default Button;