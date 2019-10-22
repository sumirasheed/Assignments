import React from 'react';

import './InterestRates.css';

const interestRate = (props) => {
    return(
        <div className="card interest_card">
        <div className="card-header loan-parameter">
            Interest Rates
        </div>
        <div className="card-body">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Flat Rate</span>
                </div>
                <input type="text" name="flatrate" onChange={props.handleChange} value={props.flatRate} className="form-control" aria-label="Text input with segmented dropdown button"></input>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Reducing Balance Rate</span>
                </div>
                <input type="text" name="rbrate" onChange={props.handleChange} value={props.rbRate} className="form-control" aria-label="Text input with segmented dropdown button"></input>
            </div>
        </div>
    </div>
    )
}
export default interestRate;