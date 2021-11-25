import React from 'react';
const Emoji = (props: { label: string | undefined; symbol: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);
export default Emoji;