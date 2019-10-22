import React from 'react';
import './LoanDetails.css';


const loanDetails = (props) => {
    return(
        <div className="card loan-details">
            <div className="card-header loan-detail">
                <span>{props.name}</span>{props.details.rate}%
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><span>Loan Amount:</span>{props.details.loanAmount}</li>
                <li className="list-group-item"><span>EMI:</span>{props.details.emi}</li>
                <li className="list-group-item"><span>Total Interest:</span>{props.details.totalInterest}</li>
                <li className="list-group-item"><span>Total Payments:</span>{props.details.totalPayements}</li>
                <li className="list-group-item"><span>Periods:</span>{props.details.periods}</li>
                <li className="list-group-item"><span>Last EMI Date:</span>{props.details.lastEmiDate}</li>
            </ul>
        </div>
    )
}

export default loanDetails 