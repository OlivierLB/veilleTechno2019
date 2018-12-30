import React, {Component} from 'react';
import { Flex, Box } from '@rebass/grid'
import Record from "../Record/Record";
import Text from "../Text/Text";
import Traduction from "../Traduction/Traduction";
import Audio from "../Audio/Audio";

export default class Body extends Component {

    render() {

        if(this.props.activeIndex === 0){
            return(
                <Flex flexWrap='wrap'>
                    <Box width={1/3}>
                    </Box>
                    <Box width={1/3}>
                        <Record/>
                    </Box>
                    <Box width={1/3}>
                    </Box>
                </Flex>
            );
        }else if(this.props.activeIndex === 1){
            return(
                <Flex flexWrap='wrap'>
                    <Box width={1/3}>
                    </Box>
                    <Box width={1/3}>
                        <Text/>
                    </Box>
                    <Box width={1/3}>
                    </Box>
                </Flex>
            );
        }else if(this.props.activeIndex === 2){
            return(
                <Flex flexWrap='wrap'>
                    <Box width={1/3}>
                    </Box>
                    <Box width={1/3}>
                        <Traduction/>
                    </Box>
                    <Box width={1/3}>
                    </Box>
                </Flex>
            );
        }else if(this.props.activeIndex === 3){
            return(
                <Flex flexWrap='wrap'>
                    <Box width={1/3}>
                    </Box>
                    <Box width={1/3}>
                        <Audio/>
                    </Box>
                    <Box width={1/3}>
                    </Box>
                </Flex>
            );
        }
    }
}