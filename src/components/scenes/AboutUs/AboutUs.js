import React, {Component} from 'react';
import Layout from '../../rootComponents/Layout/Layout'
import CardsWithData from "../../shared/CardsWithData/CardsWithData";

import './AboutUs.scss'

const description = [
    {
        id: 1,
        to: '/beeKeeper',
        url: require('../../assets/edited/pasieka.png'),
        title: "Pasieka Izerska",
        description: "Zapraszamy do zapoznania się z pasieką, oraz zakupu miodu."
    },
    {
        id: 2,
        to: '/artShop',
        url: require('../../assets/edited/woodArt.png'),
        title: "Rękodzieło",
        description: "Drewniane, ręcznie wykonane przedmioty codziennego użytku."
    },
    {
        id: 3,
        url: require('../../assets/edited/meble.png'),
        to: '/furniture',
        title: "Meble i Inne",
        description: "Przykłady rzeczy wykonanych na zamówienie."
    },
]

class AboutUs extends Component {
    render() {
        return (
            <Layout>
                <div className="aboutUs">
                    <div className="aboutUs__mainSentence">
                        <blockquote>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia metus ac nibh
                            maximus dictum. Ut ligula lorem, sodales sed massa in, feugiat luctus velit. Nunc nec libero
                            at lectus vestibulum molestie eget mollis lorem. Integer blandit purus eget tempor
                            imperdiet. Donec eu est gravida, gravida ipsum in, tincidunt dolor.

                        <footer>
                            <cite>
                                Rękodzielo Izerskie
                            </cite>
                        </footer>
                        </blockquote>
                    </div>
                    <CardsWithData data={description}/>
                </div>
            </Layout>
        );
    }
}

export default AboutUs;
