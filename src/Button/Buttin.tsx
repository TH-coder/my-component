
import classNames from 'classnames';
import * as React from 'react';

classNames('foo', 'bar'); // => 'foo bar'

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