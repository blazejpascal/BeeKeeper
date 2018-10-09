import React, {Component} from 'react';
import {getHoningKinds} from "../../../services/honeyService";
import Form from '../../shared/Form/Form'

import Joi from 'joi-browser'


class OrderHoney extends Form {

    state = {
        data: {nameAndSurname: '', honeyId:'', amount: '', address1: "", address2: ""},
        errors: {},
        honeyKinds: [],
    }

    schema = {
        honeyId: Joi.number(),
        nameAndSurname: Joi.string().isRequired,
        amount: Joi.number().min(1).max(10),
        address1: Joi.string().isRequired,
        address2: Joi.string().isRequired
    }

    populateHoneyKinds() {
        this.setState({honeyKinds: getHoningKinds()})
    }

    componentDidMount() {
        this.populateHoneyKinds()
    }

    doSubmit = () => {
        console.log('submitted')

    }



    render() {
        return (
            <>
                <h1> zamów miodek</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderSelect('honeyId', 'Rodzaj miodu', this.state.honeyKinds)}
                    {this.renderInput('amount', 'Ilość')}

                    {this.renderInput('nameAndSurname', 'Imię i nazwisko')}
                    {this.renderInput('address1', 'Ulica, numer domu/mieszkania')}
                    {this.renderInput('address2', 'Miasto, kod pocztowy')}
                    {this.renderButton('Zamów')}
                </form>
            </>
        );
    }
}


export default OrderHoney;
