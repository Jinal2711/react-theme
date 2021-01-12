import React, { useState } from 'react';
import Keys from './Keys';

const Calculator = () => {

    const [display, setDisplay] = useState(0);

    return (
        <div className="cal">
            <div className="cal_display">{display}</div>
            <div className="cal_keys">
                <div className="parent">
                    <Keys/>
                </div>
            </div>
        </div>
    )
}

export default Calculator;