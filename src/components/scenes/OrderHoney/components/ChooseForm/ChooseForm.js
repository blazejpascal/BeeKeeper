import React from 'react';
import Form from '../../../../shared/Form/Form'

class ChooseForm extends Form {
    render() {
        const {honeyKinds, sizeKinds} = this.props
        return (
            <form onSubmit={this.handleSubmit}>

                {this.renderSelect('honeyId', 'Rodzaj miodu', {honeyKinds})}
                {this.renderSelect('sizeId', 'Wielkośc', {sizeKinds})}
                {this.renderInput('amount', 'Ilość')}
                {this.renderButton('Dodaj')}

            </form>
        );
    }
}



export default ChooseForm;
