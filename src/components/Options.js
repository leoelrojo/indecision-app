import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        <ol>
            {
                props.options.map((option) => {
                    return <Option
                        key={option}
                        option={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                })
            }
        </ol>
        <button onClick={props.handleDeleteOptions}>Remove all options</button>
    </div>
);

export default Options;