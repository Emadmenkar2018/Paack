import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { PaackText } from '../index'
import { styles } from './style'
import { Colors } from '../../../theme'
import { useNavigation } from '@react-navigation/core'
import PropTypes from 'prop-types'


const PaackDeliveryItem = (props) => {
    const { item } = props
    const navigation = useNavigation()


    /**
     * Navigation to Delivery Details with sending the item data as route params
    */
    const navToDeliveryDetails = () => {
        navigation.navigate('DeliveryDetails', { deliveryData: item })
    }

    return (
        <TouchableOpacity testID="TouchableOpacity" onPress={navToDeliveryDetails} style={{ ...styles.container, borderWidth: 1, borderColor: item?.activated ? Colors.SECONDARY : "#fff" }}>

            <View style={{ flex: .9 }}>
                <PaackText style={styles.title} fontSize={2}>{item?.customer}</PaackText>

                <PaackText style={styles.subtitle} fontSize={1.5}>{item?.city}</PaackText>
            </View>


            <Icon color={Colors.PRIMARY_LIGHT} size={20} name="go-kart" type="material-community" />

        </TouchableOpacity>
    )

}

export default PaackDeliveryItem

PaackDeliveryItem.propTypes = {
    /**
     * Delivery Item
     */
    item: PropTypes.object.isRequired,
}