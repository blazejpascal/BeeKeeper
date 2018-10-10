import React, {Component} from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './Layout.scss'


class MyComponent extends Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <main className='layout__content'>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        );
    }
}


export default MyComponent;
