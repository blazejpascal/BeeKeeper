import React from 'react';
import Layout from '../../rootComponents/Layout/Layout'
import Form from '../../shared/Form/Form'
import Joi from "joi-browser";
import Card from "../../shared/Card/Card";

import './Contacts.scss'

const description = {
    id: 1,
    title: "Chętnie odpowiemy na kazde pytanie. Wypełnij formularz, odpowiemy w ciagu 24h",
    url: "https://picsum.photos/398/265/?random"


}


class Contacts extends Form {

    state={
        data: {name: "", emailAddress: "", message:""},
        errors: {}
    }

    schema = {
        name: Joi.string().label('Name').required(),
        emailAddress: Joi.string().email().label('Adres email').required(),
        message: Joi.string().min(1).max(250).label('Wiadomość').required(),
    }


    doSubmit = () => {
        console.log('wysłane')
}

    render() {
        return (
            <Layout>
                <div className="contacts">
                    <Card {...description} />
                    <div className="contacts__form">
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput('name', 'Imię')}
                            {this.renderInput('emailAddress', 'Adres e-mail')}
                            {this.renderTextArea('message', 'Wiadomość')}
                            {this.renderButton('Wyślij')}
                        </form>
                    </div>

                </div>
            </Layout>
        );
    }
}



export default Contacts;

