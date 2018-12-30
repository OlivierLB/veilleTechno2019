import React, {Component} from 'react';
import {Steps} from 'primereact/steps';

const items = [
    {label: 'Enregistrement'},
    {label: 'Convertion en texte'},
    {label: 'Traduction'},
    {label: 'Convertion en audio'}
];

export default class Header extends Component {

    render() {

        return(
            <Steps model={items}  activeIndex={this.props.activeIndex}/>
        );
    }
}