import React, {Component} from 'react';
import {getHoningKinds} from "../../../services/honeyService";
import Form from '../../shared/Form/Form'
import Layout from '../../rootComponents/Layout/Layout'
import Joi from 'joi-browser'

class OrderHoney extends Form {

    state = {
        data: {nameAndSurname: '', honeyId: '', amount: '', address1: "", address2: ""},
        errors: {},
        honeyKinds: [],
    }

    schema = {
        honeyId: Joi.number(),
        nameAndSurname: Joi.string().label('Imię i nazwisko').required(),
        amount: Joi.number().min(1).max(10).label('Ilość').required(),
        address1: Joi.string().label('Ulica i numer domu').required(),
        address2: Joi.string().label('Kod pocztowy i adres').required()
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
            <Layout>
                <h1>Zamów miód</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderSelect('honeyId', 'Rodzaj miodu', this.state.honeyKinds)}
                    {this.renderInput('amount', 'Ilość')}

                    {this.renderInput('nameAndSurname', 'Imię i nazwisko')}
                    {this.renderInput('address1', 'Ulica, numer domu/mieszkania')}
                    {this.renderInput('address2', 'Miasto, kod pocztowy')}
                    {this.renderButton('Zamów')}
                </form>
            </Layout>
        );
    }
}

export default OrderHoney;
