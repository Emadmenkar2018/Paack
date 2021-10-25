import React from 'react'
import { ImageBackground, View } from 'react-native'
import { PaackText } from '../index'
import { styles } from './style'
import { Colors } from '../../../theme'
import PropTypes from 'prop-types'


const PaackHeader = (props) => {

    const {title} = props

    return (
        <View testID={"PaackHeader"} style={styles.container}>

            <ImageBackground 
                source={require('../../../assets/img/background.png')}
                style={styles.imgBackground}
                resizeMode="cover"
            >

                <View style={styles.overlay}>

                    <PaackText style={styles.title} fontSize={3.5}>{title}</PaackText>
 
                </View>

            </ImageBackground>


        </View>
    )
}

export default PaackHeader


PaackHeader.propTypes = { 
    /**
     * Title inside the Header
     */
     title: PropTypes.string, 
}