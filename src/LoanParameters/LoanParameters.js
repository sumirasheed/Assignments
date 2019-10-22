import React from 'react';
import './LoanParameters.css';


const loanParameter = (props) =>{
    return(
        

        <div className="card loan_detailcard">
            <div className="card-header loan-parameter">
                Loan Parameters
            </div>
            <div className="card-body">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Loan Amount</span>
                    </div>
                    <input type="text" className="form-control" name="loanamount" value={props.loanAmount} aria-label="Text input with segmented dropdown button"></input>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Loan Term</span>
                    </div>
                    <input type="text" name="loanterm" value={props.loanTerm} onChange={props.handleChange} className="form-control" aria-label="Text input with segmented dropdown button"></input>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">EMI Start Date</span>
                    </div>
                    <input type="date" name="startdate" value={props.startDate} onChange={props.handleChange} className="form-control" aria-label="Text input with segmented dropdown button"></input>
                </div>
            </div>
        </div>
         
                
 
    )
}

export default loanParameter