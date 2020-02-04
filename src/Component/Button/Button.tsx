
import classNames from 'classnames';
import * as React from 'react';
import Icon from "../Icon/Icon"
import './Button.less'
// import styles from './Button.module.less';

export interface IButtonProps {
    size?: string,
    type?: string,
    disabled?: boolean,
    icon?:string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}


class Button extends React.Component<IButtonProps> {
    public onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }
    public render() {
        const { children, type, size, disabled, icon } = this.props
        const classname = classNames("mui-btn",type || "primary", size || "medium", disabled === true ? "disabled" : "")
        return (
            <button className={classname} disabled={disabled} onClick={this.onClick}>
                {children}{icon&&<Icon type="good" />}
            </button>
        );
    }
}

export default Button;