import React, {Component} from 'react';
import axios from 'axios'
import Layout from '../../rootComponents/Layout/Layout'
import Card from '../../shared/Card/Card'


class BeeCamera extends Component {
    state = {
        cams: {}
    }


   async componentDidMount() {
      const cams =  await axios.get("https://webcamstravel.p.mashape.com/webcams/list/continent=EU?lang=en&show=webcams%3Aimage%2Clocation",
            {
                headers: {
                    "X-Mashape-Key": "UvepJqSFF7mshB4GdA8rFK4NWStmp1Wh1KqjsnzMwuRovZSnPB",
                    "X-Mashape-Host": "webcamstravel.p.mashape.com"
                },
                params: {}
            })
            .then((result) => result.data.result.webcams[4].image

            );
      this.setState({ cams: cams.current.preview})

    }


    render() {
        const {cams} = (this.state)
        return (
            <Layout>
                <Card url={cams} title="Pszczeli widok"  description='wkrótce'/>


            </Layout>
        );
    }
};

export default BeeCamera;
