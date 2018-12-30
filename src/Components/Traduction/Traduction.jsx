import React, {Component} from 'react';
import {InputTextarea} from 'primereact/inputtextarea';
import {Button} from 'primereact/button';

export default class Traduction extends Component {

    constructor(props) {
        super(props);
        this.clickAudio = this.clickAudio.bind(this);
    }

    clickAudio(e){
        this.props.addIndex(3);
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
                <Button label="Convertir en audio" className="p-button-raised p-button-raised" onClick={this.clickAudio} />
            </div>
        );
    }
}