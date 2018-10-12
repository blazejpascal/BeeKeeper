import React, {Component} from 'react';

import Layout from '../../rootComponents/Layout/Layout'
import CardsWithData from '../../shared/CardsWithData/CardsWithData'

import {getArtCrafts} from "../../../services/artShopService";

import './ArtShop.scss'

class ArtShop extends Component {
    state = {
        artCrafts: []
    }

    populateArtCrafts = () => {
       this.setState({
           artCrafts: getArtCrafts()
       })
    }


    componentDidMount() {
        this.populateArtCrafts()
    }


    render() {
        const { artCrafts } = this.state
        console.log(artCrafts)
        return (
            <Layout>
                <CardsWithData data={artCrafts} additionalStyling="artShop__square" />

            </Layout>
        );
    }
}


export default ArtShop;

