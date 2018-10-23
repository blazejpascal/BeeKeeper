import React, {Component} from 'react';
import axios from 'axios'
import Layout from '../../rootComponents/Layout/Layout'
import Card from '../../shared/Card/Card'

import './BeeCamera.scss'


class BeeCamera extends Component {
    state = {
        cams: {}
    }

    async componentDidMount() {
        const cams = await axios.get("https://webcamstravel.p.mashape.com/webcams/list/continent=EU?lang=en&show=webcams%3Aimage%2Clocation",
            {
                headers: {
                    "X-Mashape-Key": "UvepJqSFF7mshB4GdA8rFK4NWStmp1Wh1KqjsnzMwuRovZSnPB",
                    "X-Mashape-Host": "webcamstravel.p.mashape.com"
                },
                params: {}
            })
            .then((result) => result.data.result.webcams[4].image
            );
        this.setState({cams: cams.current.preview})

    }

    render() {
        const {cams} = (this.state)
        return (
            <Layout>
                <div className="bee-camera">
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
                    <Card url={cams} title="Pszczeli widok" description='wkrótce'/>
                </div>


            </Layout>
        );
    }
};

export default BeeCamera;
