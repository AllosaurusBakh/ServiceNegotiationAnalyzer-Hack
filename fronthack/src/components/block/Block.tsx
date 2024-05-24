import React from 'react';
import classNames from 'classnames';

import './style.scss';

type BlockProps = {
    children: React.ReactNode,
    className: string,
    style?: React.CSSProperties
};

const Block = (props: BlockProps = {
    children: '',
    className: 'block',
    style: {}
}): JSX.Element => {

    const classes = classNames(
        'block ' + props.className
    );

    return(
        <div className={classes}>
            {props.children}
        </div>
    );
};

export default Block; 