import React from 'react'
import {TouchableOpacity} from "react-native"
import { Icon } from 'react-native-elements'
import { wp } from 'src/helpers/DimensionHelper'
import { Colors } from 'src/theme'
import {styles} from './style'
import { useNavigation } from '@react-navigation/core'
import PropTypes from 'prop-types'


const PaackBackbtn = ({style}) =>{
    const navigation = useNavigation()


    /**
     * Navigate to the previous screen when user clicks
    */
    const navBack = () =>{
        navigation.goBack()
    }
    
    return (
        <TouchableOpacity onPress={navBack} style={[styles.container, style]}>

            <Icon name="chevron-left" type="material"  size={wp(25)} color={Colors.PRIMARY_DARK}/>

        </TouchableOpacity>
    )
}

export default PaackBackbtn

PaackBackbtn.propTypes = {
    /**
     *style of the TouchableOpacity represent Delivery Item
     */
     style: PropTypes.object, 
}
