import React,{Component} from 'react';
import '../App.css';
import  LoanParameters from '../LoanParameters/LoanParameters';
import InterestRates from '../InterestRates/InterestRates';

import Button from '../Button';
import LoanDetails from '../LoanDetails/LoanDetails';

class Calculator extends  Component {
  constructor(props) {
    super(props);
    this.state = {
        loanamount: "",
        loanterm: "",
        startdate: "",
        rbrate: "",
        flatrate: "",
        flat: {
            rate: "",
            loanAmount: "",
            emi: "",
            totalInterest: "",
            totalPayements: "",
            periods: "",
            lastEmiDate: ""
        },
        reducing: {
            rate: "",
            loanAmount: "",
            emi: "",
            totalInterest: "",
            totalPayements: "",
            periods: "",
            lastEmiDate: ""
        },
    };
  }
  
  handleSubmit= (event) =>{
    event.preventDefault();

    let flateInterest = Number(this.state.loanamount * this.state.loanterm * (this.state.flatrate / 100)) / Number(this.state.loanterm * 12);
    let reducingInterest = (Number(this.state.loanamount * (this.state.rbrate / 100) + Math.pow(1 + Number(this.state.rbrate / 100), (this.state.loanterm * 12))) / Math.pow(1 + Number(this.state.rbrate / 100), (this.state.loanterm * 12) - 1));

    this.setState({
      flat: {
          rate: this.state.flatrate,
          loanAmount: this.state.loanamount,
          emi: flateInterest,
          totalInterest: flateInterest * (this.state.loanterm * 12),
          totalPayements: (Number(this.state.loanamount) + Number(flateInterest * (this.state.loanterm * 12))),
          periods: (this.state.loanterm * 12),
          lastEmiDate: this.state.startdate
      },
      reducing: {
          rate: this.state.rbrate,
          loanAmount: this.state.loanamount,
          emi: reducingInterest,
          totalInterest: (reducingInterest * (this.state.loanterm * 12)),
          totalPayements: ((reducingInterest * (this.state.loanterm * 12)) + Number(this.state.loanamount)),
          periods: (this.state.loanterm * 12),
          lastEmiDate: this.state.startdate
      }
    });
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
  }
  render(){
    return(
      <div className="App">
        <div className="container">
            <div className="LoanParameter">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="row">
                  <div className="col-md-6">
                    <LoanParameters handleChange={this.handleChange} loanamount={this.state.loanamount} loanterm={this.state.loanterm} startdate={this.state.startdate}></LoanParameters>
                  </div>
                  <div className="col-md-6">
                    <InterestRates handleChange={this.handleChange} rbRate={this.state.rbrate} flatRate={this.state.flatrate}></InterestRates>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-md-12">
                    <Button></Button>
                  </div>
                </div>
              </form>
                
                <div className="row mt-5">
                    <div className="col-md-6">
                        <LoanDetails name="Flate Rate -" details={this.state.flat}></LoanDetails>
                    </div>
                    <div className="col-md-6">
                        <LoanDetails name="Reducing Rate -" details={this.state.reducing}></LoanDetails>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
    )
  }
}

export default Calculator;
