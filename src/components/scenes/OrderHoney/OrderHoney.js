import React, {Component} from 'react';
import {getHoningKinds, getSizeKinds, defaultHoney} from "../../../services/honeyService";
import Form from '../../shared/Form/Form'
import Layout from '../../rootComponents/Layout/Layout'
import Card from '../../shared/Card/Card'
import Joi from 'joi-browser'

import './OrderHoney.scss'

class OrderHoney extends Form {

    state = {
        data: {honeyId: '', sizeId: '', amount: ''},
        errors: {},
        honeyKinds: [],
        sizeKinds: [],
        isBasketEmpty: true
    }

    schema = {
        honeyId: Joi.number(),
        sizeId: Joi.number(),
        amount: Joi.number().min(1).max(10).label('Ilość').required(),
        // nameAndSurname: Joi.string().label('Imię i nazwisko').required(),
        // address1: Joi.string().label('Ulica i numer domu').required(),
        // address2: Joi.string().label('Kod pocztowy i adres').required()
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
        const chosenHoney = (this.state.data.honeyId) ? this.state.honeyKinds[this.state.data.honeyId] : defaultHoney;

        return (
            <Layout>
                <div className="orderHoney">
                    <Card {...chosenHoney}/>
                    <div className='orderHoney__select-form'>
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
                </div>
            </Layout>
        );
    }
}

export default OrderHoney;
