import React, {Component} from 'react';
import { Icon } from 'react-icons-kit';
import {ic_mic_none} from 'react-icons-kit/md/ic_mic_none'
import {ic_fiber_manual_record} from 'react-icons-kit/md/ic_fiber_manual_record'
import {textParagraph} from 'react-icons-kit/metrize/textParagraph'

export default class Record extends Component {

    constructor(props) {
        super(props);
        this.state = {
            etatRecord: 1
        };
        this.clickRecord = this.clickRecord.bind(this);
        this.clickEndRecord = this.clickEndRecord.bind(this);
        this.clickConvert = this.clickConvert.bind(this);
    }

    clickRecord(e){
        this.setState({etatRecord : 2})
    }

    clickEndRecord(e){
        this.setState({etatRecord : 3})
    }

    clickConvert(e){
        this.props.addIndex(1);
    }

    render() {

        if(this.state.etatRecord === 1){
            return(
                <Icon className={"iconBtn"} size={'100%'} icon={ic_fiber_manual_record} onClick={this.clickRecord}/>
            );
        }else if(this.state.etatRecord === 2){
            return(
                <Icon className={"iconBtn"} size={'100%'} icon={ic_mic_none} onClick={this.clickEndRecord}/>
            );
        }else if(this.state.etatRecord === 3){
            return(
                <Icon className={"iconBtn"} size={'100%'} icon={textParagraph} onClick={this.clickConvert} />
            );
        }
    }
}