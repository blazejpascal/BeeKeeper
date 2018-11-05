import React from 'react';
import Layout from '../../rootComponents/Layout/Layout'
import Form from '../../shared/Form/Form'
import Joi from "joi-browser";
import Card from "../../shared/Card/Card";
import MyMapComponent from "../../shared/GoogleMaps/GoogleMaps";

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
                    <MyMapComponent
                      isMarkerShown
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDB4UdDABLCaGsD5lt14qi65zVYA1uEhe4&v=3.exp&libraries=geometry,drawing,places"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{width: `400px`, height: `400px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                    />
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

