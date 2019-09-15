import * as React from 'react';
import { Component } from 'react';

export interface ButtonProps {

}

export interface ButtonState {

}

class Button extends React.Component<ButtonProps, ButtonState> {
    state = { 
        :
    }
    render() {
        return (
            <button>
                {props.children}
            </button>
        );
    }
}

export default Button;