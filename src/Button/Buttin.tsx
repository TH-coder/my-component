import * as React from 'react';
import { Component } from 'react';

export interface ButtonProps {

}


class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <button>
                {props.children}
                {2222}
            </button>
        );
    }
}

export default Button;