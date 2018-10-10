import React, {Component} from 'react';
import Layout from '../../rootComponents/Layout/Layout'
import CardsWithData from "../../shared/CardsWithData/CardsWithData";

const description = [
    {
        id: 1,
        url: require('../../assets/edited/pasieka.png'),
        title: "Pasieka Izerska",
        description: "Zapraszamy do zapoznania się z pasieką, oraz zakupu miodu."
    },
    {
        id: 2,
        url: require('../../assets/edited/woodArt.png'),
        title: "Rękodzieło",
        description: "Drewniane, ręcznie wykonane przedmioty codziennego użytku."
    },
    {
        id: 3,
        url: require('../../assets/edited/meble.png'),
        title: "Meble i Inne",
        description: "Przykłady rzeczy wykonanych na zamówienie."
    },
]

class MyComponent extends Component {
    render() {
        return (
            <Layout>
                <CardsWithData data={description}  />
            </Layout>
        );
    }
}

export default MyComponent;
