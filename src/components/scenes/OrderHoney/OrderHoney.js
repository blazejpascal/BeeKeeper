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
        this.setState({
            isBasketEmpty: false
        })

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
                        </form>
                        {
                            this.state.isBasketEmpty ?
                                null :
                                <button> Złóż zamowienie </button>
                        }
                    </div>
                </div>
            </Layout>
        );
    }
}

export default OrderHoney;
