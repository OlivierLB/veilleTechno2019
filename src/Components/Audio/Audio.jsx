import React, {Component} from 'react';
import { Icon } from 'react-icons-kit';
import {play} from 'react-icons-kit/entypo/play'
import {note} from 'react-icons-kit/entypo/note'
import {ccw} from 'react-icons-kit/entypo/ccw'

export default class Audio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            etatLecture: 1
        };
        this.clickPlay = this.clickPlay.bind(this);
        this.clickLectureAudio = this.clickLectureAudio.bind(this);
        this.clickReload = this.clickReload.bind(this);
    }

    clickPlay(e){
        this.setState({etatLecture : 2})
    }

    clickLectureAudio(e){
        this.setState({etatLecture : 3})
    }

    clickReload(e){
        window.location.reload();
    }

    render() {

        if(this.state.etatLecture === 1){
            return(
                <Icon className={"iconBtn"} size={'100%'} icon={play} onClick={this.clickPlay}/>
            );
        }else if(this.state.etatLecture === 2){
            return(
                <Icon className={"iconBtn"} size={'100%'} icon={note} onClick={this.clickLectureAudio}/>
            );
        }else if(this.state.etatLecture === 3){
            return(
                <Icon className={"iconBtn"} size={'100%'} icon={ccw} onClick={this.clickReload}/>
            );
        }
    }
}