import React, {Component} from 'react';
import {getHoningKinds, getSizeKinds, defaultHoney} from "../../../services/honeyService";
import Form from '../../shared/Form/Form'
import Layout from '../../rootComponents/Layout/Layout'
import Card from '../../shared/Card/Card'
import Joi from 'joi-browser'

import './OrderHoney.scss'

class OrderHoney extends Form {

    state = {
        data: {nameAndSurname: '', honeyId: '', sizeId: '', amount: '', address1: "", address2: ""},
        errors: {},
        honeyKinds: [],
        sizeKinds: [],
        isBasketEmpty: true
    }

    schema = {
        honeyId: Joi.number(),
        sizeId: Joi.number(),
        nameAndSurname: Joi.string().label('Imię i nazwisko').required(),
        amount: Joi.number().min(1).max(10).label('Ilość').required(),
        address1: Joi.string().label('Ulica i numer domu').required(),
        address2: Joi.string().label('Kod pocztowy i adres').required()
    }

    populateHoneyKinds() {
        this.setState({honeyKinds: getHoningKinds()})
    }

    populateSizeKinds() {
        this.setState({sizeKinds: getSizeKinds()})
    }

    componentDidMount() {
        this.populateHoneyKinds()
        this.populateSizeKinds()
    }

    doSubmit = () => {
        console.log('submitted')

    }

    render() {
        const chosenHoney = (this.state.data.honeyId)? this.state.honeyKinds[this.state.data.honeyId] : defaultHoney;

        return (
            <Layout>
                <div className="presentional">
                    <Card {...chosenHoney}/>
                </div>
                <div className='select-form'>
                    <h1>Zamów miód</h1>
                    <form onSubmit={this.handleSubmit}>

                        {this.renderSelect('honeyId', 'Rodzaj miodu', this.state.honeyKinds)}
                        {this.renderSelect('sizeId', 'Wielkośc', this.state.sizeKinds)}
                        {this.renderInput('amount', 'Ilość')}
                        {this.renderButton('Dodaj')}

                        {/*{this.renderInput('nameAndSurname', 'Imię i nazwisko')}*/}
                        {/*{this.renderInput('address1', 'Ulica, numer domu/mieszkania')}*/}
                        {/*{this.renderInput('address2', 'Miasto, kod pocztowy')}*/}
                        {/*{this.renderButton('Zamów')}*/}
                    </form>
                </div>
            </Layout>
        );
    }
}

export default OrderHoney;
