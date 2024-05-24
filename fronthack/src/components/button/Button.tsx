import React from 'react';
import classNames from 'classnames';

import './style.scss';

type ButtonProps = {
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    className: string,
    text: string,
    active?: boolean,
    type?: "submit" | "reset" | "button" | undefined
    style?: React.CSSProperties
};

const Button = (props: ButtonProps = {
    children: '',
    onClick: () => {},
    className: 'btn',
    text: '',
    active: false,
    type: undefined,
    style: {}
}): JSX.Element => {

    const classes = classNames(
        'btn ' + props.className
    );

    return(
        <button 
            className={classes}
            onClick={props.onClick}
            style={props.style}
            type={props.type}
        >   
            {props.children}
            <h4 className="btn-text">{props.text}</h4>
        </button>
    );
};

export default Button; 