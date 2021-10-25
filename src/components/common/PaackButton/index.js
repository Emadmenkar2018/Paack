import React from "react";
import {   TouchableOpacity } from "react-native";
import PaackText from '../PaackText'
import PropTypes from 'prop-types'

const PaackButton = ({
    title,
    onPress,
    style,
    disabled,
    onFocus,
    titleStyle,
    ...props
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style}
            disabled={disabled}
            onFocus={onFocus}
            {...props}
        >
            <PaackText style={titleStyle} fontSize={2}>
                {title}
            </PaackText>
        </TouchableOpacity>
    );
};

export default PaackButton;
 
PaackButton.propTypes = {
    /**
     *style of the TouchableOpacity "Button"
     */
     style: PropTypes.object, 

     /**
     * Title that took place inside the Button
     */
     title: PropTypes.string,

    /**
     * style of the Text inside the Button
     */
     titleStyle: PropTypes.object, 

    /**
     * Represent the func when onPress is called
     */
     onPress: PropTypes.func, 

    /**
     *Represent if the button should be disabled or no
     */
     disabled: PropTypes.bool, 

    /**
     * Represent the func when onFocus is called
    */
     onFocus: PropTypes.func, 
 

}
