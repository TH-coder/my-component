import * as React from 'react';
import { Component } from 'react';

export interface ButtonProps {

}


class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <button>
                {props.children}
            </button>
        );
    }
}

export default Button;