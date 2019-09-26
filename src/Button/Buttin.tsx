
import classNames from 'classnames';
import * as React from 'react';
import './Button.css'

export interface IButtonProps {
    type:string,
    size:string
}


class Button extends React.Component<IButtonProps> {
    public render() {
        const {children,type,size} = this.props
        const classname = classNames(type,size)
        return (
            <button className = {classname}>
                {children}
            </button>
        );
    }
}

export default Button;