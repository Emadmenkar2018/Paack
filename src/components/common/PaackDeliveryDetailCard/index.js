import React from 'react'
import { View } from 'react-native'
import PaackText from '../PaackText'
import { styles } from './style'
import PropTypes from 'prop-types'

const PaackDeliveryDetailCard = (props) => {


    const { deliveryData } = props

    return (
        <View style={styles.cardContainer}>

            <View style={styles.bubble}>
                <PaackText style={styles.header} fontSize={2}>Delivery Details</PaackText>
            </View>


            <PaackText style={styles.title} fontSize={2.4}>{deliveryData?.customer}</PaackText>

            <PaackText style={styles.city} fontSize={2.2}>{deliveryData?.city}</PaackText>

            <PaackText style={styles.address} fontSize={2}>Address:</PaackText>

            <PaackText style={styles.addressDetail} fontSize={1.8}>{deliveryData?.address} , {deliveryData?.zipCode}</PaackText>


        </View>
    )
}

export default PaackDeliveryDetailCard

PaackDeliveryDetailCard.propTypes = {
    /**
     *style of the TouchableOpacity "Button"
     */
     deliveryData: PropTypes.object, 

}