import React, {Component} from 'react';
import {InputTextarea} from 'primereact/inputtextarea';
import {Button} from 'primereact/button';

export default class Text extends Component {

    constructor(props) {
        super(props);
        this.clickTraduire = this.clickTraduire.bind(this);
    }

    clickTraduire(e){
        this.props.addIndex(2);
    }

    render() {
        return(
            <div>
                <InputTextarea
                    rows={10}
                    cols={80}
                    autoResize={true}
                    disabled={true}
                    value={this.props.texte}
                />
                <Button label="Traduire" className="p-button-raised p-button-raised" onClick={this.clickTraduire} />
            </div>
        );
    }
}