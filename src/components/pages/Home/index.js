import React, { useEffect } from 'react'
import {ActivityIndicator, View } from 'react-native'
import { PaackHeader, PaackList, PaackDeliveryItem } from '@common/index'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeliveriesStart } from '@actions/deliveries'
import { styles } from './style'
import { Colors } from '../../../theme'
import PropTypes from 'prop-types'

const  Home = () => {
    const dispatch = useDispatch()
    const { deliveries } = useSelector(state => state.deliveries); 
    const { isLoading } = useSelector(state => state.deliveries); 

    /**
     * Fetch Delieries on mounting
     *  
    */
    useEffect(() => {
        dispatch(fetchDeliveriesStart())
    }, [])


    /**
     * Render Delivery item inside FLatList
     * 
     * @param {object} item
     * @param {String} index
    */
    const renderItem = (item, index) => {
        return (
            <PaackDeliveryItem
                item={item?.item}
            />
        )
    }

    return (

        <View style={styles.dev}>

            <PaackHeader title="Delivery List" />

            {!isLoading &&
                <PaackList
                    testID="PaackList"
                    style={styles.container}
                    data={deliveries}
                    renderItem={renderItem}
                />
            }

            {isLoading &&
                <View style={styles.loadingContainer}>
                    < ActivityIndicator size="large" color={Colors.SECONDARY} />
                </View>
            }


        </View>
    )

}

export default Home

Home.propTypes = { 
}

