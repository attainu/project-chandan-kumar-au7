import React, { Component } from 'react';
import '../Style/investStyle.css'

class Invest extends Component {

    constructor(props) {
        super()
        this.state = {
            amount: "",
            pan: "",
            email: "",
            mobile: "",
            alt_mobile: "",
            city: "",
            state: "",
            pincode: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleChanger_amount = (event) => {
        this.setState({
            amount: event.target.value,
        })
    }

    handleChanger_pan = (event) => {
        this.setState({
            pan: event.target.value,
        })
    }

    handleChanger_email = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    handleChanger_mobile = (event) => {
        this.setState({
            mobile: event.target.value,
        })
    }

    handleChanger_alt_mobile = (event) => {
        this.setState({
            alt_mobile: event.target.value,
        })
    }

    handleChanger_city = (event) => {
        this.setState({
            city: event.target.value,
        })
    }
    handleChanger_state = (event) => {
        this.setState({
            state: event.target.value,
        })
    }

    handleChanger_pincode = (event) => {
        this.setState({
            pincode: event.target.value,
        })
    }

    render() {

        const { 
        amount,
        pan,
        email,
        mobile,
        alt_mobile,
        city,
        state,
        pincode } = this.state

        return (
            <div className="investForm">
                <h1 style={{marginBottom: 50, marginLeft: -180}}>
                    Investing has never been this easy!!
                    </h1>
            <form onSubmit={this.handleSubmit}>
                
                <div class="form-row">

                <div class="form-group col-md-4 text-left">
                <label for="">Amount</label>
                <input type="number" 
                class="form-control"
                value={amount}
                onChange={this.handleChanger_amount}
                />
                </div>

                <div class="form-group col-md-4 text-left">
                <label for="">PAN</label>
                <input type="text" 
                class="form-control" 
                value={pan}
                onChange={this.handleChanger_pan}
                />
                </div>

                <div class="form-group col-md-4 text-left">
                <label for="">Email</label>
                <input type="email" 
                class="form-control"
                value={email}
                onChange={this.handleChanger_email} 
                />
                </div>

                <div class="form-group col-md-6 text-left">
                <label for="">Mobile number</label>
                <input type="number" 
                class="form-control" 
                value={mobile}
                onChange={this.handleChanger_mobile}
                />
                </div>

                <div class="form-group col-md-6 text-left">
                <label for="">Alternate mobile number</label>
                <input type="number" 
                class="form-control" 
                value={alt_mobile}
                onChange={this.handleChanger_alt_mobile}
                />
                </div>

                <div class="form-group col-md-6 text-left">
                <label for="inputCity">City</label>
                <input type="text" 
                class="form-control" 
                id="inputCity" 
                value={city}
                onChange={this.handleChanger_city}
                />
                </div>

                <div class="form-group col-md-4 text-left">
                <label for="inputState">State</label>
                <select id="inputState" 
                class="form-control"
                value={state}
                onChange={this.handleChanger_state}
                >
                <option selected>Choose...</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Bangalore">Bangalore</option>
                <option value="New Delhi">New Delhi</option>
                </select>
                </div>

                <div class="form-group col-md-2 text-left">
                <label for="">Pin code</label>
                <input type="number" 
                class="form-control" 
                value={pincode}
                onChange={this.handleChanger_pincode}
                />
                </div>
                <button type="submit" 
                class="btn btn-primary" 
                style={{ margin: 10}}
                
                >Start investing
                </button>
                
                </div>
            </form>
            </div>
        )
    }
    
}

export default Invest;