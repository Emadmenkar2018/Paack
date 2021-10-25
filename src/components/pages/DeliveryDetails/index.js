import React, { useState, useEffect } from 'react'
import { ImageBackground, View, ActivityIndicator } from 'react-native'
import { PaackDeliveryDetailCard, PaackButton, PaackBackbtn } from '@common/index'
import { styles } from './style'
import { useDispatch, useSelector } from 'react-redux';
import { finishDeliveryStart, activateDeliveryUI, deleteFinishDeliveryStatus, deleteFinishDeliveryError } from '@actions/deliveries'
import { Colors } from 'src/theme';
import PropTypes from 'prop-types'
import { useRoute } from '@react-navigation/native';

const DeliveryDetails = (props) => {
    const route = useRoute();
    const dispatch = useDispatch()
    const { activatedDeliveryItemId } = useSelector(state => state.deliveries)
    const { isLoading } = useSelector(state => state.deliveries)
    const { finsihDeliveryStatus } = useSelector(state => state.deliveries)
    const { error } = useSelector(state => state.deliveries)
    const [showActivationBtns, setShowActivationBtns] = useState(true)

    const [activeBtn, setactiveBtn] = useState(false)
    const { deliveryData } = route.params


    /**
     * Send request to finish Delivery 
     * It depends on the type of the finish [Delivered, Undelivered]
     * @param {String} type
    */
    const activateDelivery = (type) => {
        let finishDeliveryObj = {
            deliveryId: deliveryData?.id,
            status: type,
            latitude: deliveryData?.latitude,
            longitude: deliveryData?.longitude,
        }
        dispatch(finishDeliveryStart(finishDeliveryObj))
        setactiveBtn(false)
        setShowActivationBtns(false)
    }


    /**
     * Send request to Activate Delivery for UI
     * It sends the id of the Delivery Item and set the general state of the user
    */
    const sendActivation = () => {
        dispatch(activateDeliveryUI(deliveryData?.id))
        setactiveBtn(true)
    }


    /**
     * For controlling the apperance of the activate buttons 
     * It depends on activatedDeliveryItemId state 
    */
    useEffect(() => {
        if (!activatedDeliveryItemId) {
            setShowActivationBtns(true)
        }
        else if (activatedDeliveryItemId === deliveryData.id) {
            setactiveBtn(true)
            setShowActivationBtns(true)
        }
        else {
            setShowActivationBtns(false)
        }
    }, [activatedDeliveryItemId])



    /**
     * For hiding activate buttons when the delivery is delivered
     * It depends on finsihDeliveryStatus state 
    */
    useEffect(() => {
        if (finsihDeliveryStatus === 'Delivered') {
            setactiveBtn(false)
            setShowActivationBtns(false)
        }
        return () => {
            dispatch(deleteFinishDeliveryStatus())
        }

    }, [finsihDeliveryStatus])

    /**
     * Control the visibility of the error buttons when network error
     * then call deleteFinishDeliveryError actions to set the state values 
    */
    useEffect(() => {
        if (error) {
            setactiveBtn(true)
            setShowActivationBtns(true)
        }
        return () => {
            dispatch(deleteFinishDeliveryError())
        }
    }, [error])


    return (
        <ImageBackground
            src={require('../../../assets/img/map.png')}
            source={require('../../../assets/img/map.png')}
            style={styles.container}
        >

            <PaackBackbtn style={styles.backbtn} />


            <PaackDeliveryDetailCard deliveryData={deliveryData} />

            {showActivationBtns &&

                <>

                    {!activeBtn && !isLoading &&

                        <View style={styles.actionBtnContainer}>

                            <PaackButton onPress={sendActivation} title="Make Active" titleStyle={styles.activeTitle} style={styles.activeBtn} />

                        </View>

                    }

                    {activeBtn && !isLoading &&

                        <View style={styles.actionBtnContainer}>

                            <PaackButton onPress={() => activateDelivery("Delivered")} title="Delivered" titleStyle={styles.activeTitle} style={styles.deliverBtn} />

                            <PaackButton onPress={() => activateDelivery("Undelivered")} title="Undelivered" titleStyle={styles.cancelTitle} style={styles.cancelBtn} />

                        </View>
                    }

                    {isLoading &&
                        <View style={styles.actionBtnContainer}>
                            < ActivityIndicator size="large" color={Colors.SECONDARY} />
                        </View>
                    }

                </>
            }

        </ImageBackground>
    )

}

export default DeliveryDetails

DeliveryDetails.propTypes = {
    /**
     *deliveryData represent Delivery Item
     */
    deliveryData: PropTypes.object,
}
