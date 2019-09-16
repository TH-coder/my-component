import * as React from 'react';

export interface IButtonProps {
    type:string
}


class Button extends React.Component<IButtonProps> {
    public render() {
        return (
            <button>
                {this.props.children}
            </button>
        );
    }
}

export default Button;