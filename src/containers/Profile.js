import React, { Component } from 'react';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            user:""
        }
    }
    componentDidMount(){
        fetch('https://reqres.in/api/users?page=2')
        .then(
            response=>{return response.json()}
        )
        .then(
            users=>{
                this.setState({
                    user:users
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
    render(){
        console.log(this.state.user.data);
        return(
            <div className="row">
                { !this.state.user ? <div className="">Loading</div> : 
                    this.state.user  &&   this.state.user.data &&  this.state.user.data.map((item,index)=>
                    
                    <div className="col-md-3 mb-4">
                        <div className="card">
                            <div><img src={item.avatar}  className="rounded-image card-img-top img-responsive rounded-circle" alt=""/></div>
                            <div className="card-body">
                                <h5 className="card-title">{item.first_name} {item.last_name}</h5>
                                <p className="card-text">{item.email}</p>
                            </div>
                        </div>
                    </div>
                   
                   
                )}
            </div>
        );
    }
    
};

export default Profile