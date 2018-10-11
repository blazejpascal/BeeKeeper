import React from 'react';

import Layout from '../../rootComponents/Layout/Layout'
import CardsWithData from '../../shared/CardsWithData/CardsWithData'

import './BeeKeeper.scss'

const description = [
    {
        id: 1,
        to: '/orderHoney',
        url: require('../../assets/edited/pasieka.png'),
        title: "Sklep",
        description: "Dowiedz się wiecej i złóż zamówenie"
    },
]


const BeeKeeper = () => {
    return (
        <Layout>
            <div className="beeKeeper">
                <div className="beeKeeper__description">
                    <h1> O pasiece </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque sapien purus, nec
                        auctor eros efficitur in. Cras maximus metus at turpis mollis molestie. Morbi non ultricies est.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum
                        et malesuada fames ac ante ipsum primis in faucibus. Phasellus ligula mi, sollicitudin sit amet
                        libero sed, ullamcorper bibendum ex. In imperdiet urna est, non suscipit nibh laoreet et.
                        Aliquam vitae pellentesque odio. Aenean pharetra convallis nunc rutrum sagittis.

                        In ut bibendum tellus. Aliquam vehicula auctor vulputate. Donec in lacus elit. Morbi et diam
                        tincidunt, pharetra lorem ac, dignissim est. Quisque tempor tempus mi in euismod. Pellentesque
                        eget risus leo. Donec vulputate consequat felis. Quisque ac libero at tortor porttitor
                        sollicitudin. Aliquam hendrerit diam felis, sit amet tempus ex molestie vel. Vivamus gravida
                        ultricies rutrum. Vivamus tincidunt fringilla leo. In pulvinar, dolor et tristique euismod, dui
                        dui porta orci, nec cursus massa nibh consectetur libero. Praesent posuere semper arcu, posuere
                        varius nibh pellentesque sed. Nulla in lacus eu magna pharetra posuere. Nunc tortor orci,
                        consectetur sit amet lectus et, ultrices varius ligula.</p>
                </div>
                <div className="beeKeeper__readAndBuy">
                    <CardsWithData data={description}/>
                </div>

            </div>
        </Layout>
    );
};

export default BeeKeeper;
