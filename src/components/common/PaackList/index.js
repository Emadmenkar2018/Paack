import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";

const PaackList = (props) => {

  return (
    <FlatList
      testID={props?.testID}
      style={[props.style]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={props.data}
      renderItem={(item, key) => props.renderItem(item, key)}
      keyExtractor={(item, index) => index.toString()}
    />


  );
}

export default PaackList

PaackList.propTypes = {
  /**
    *Style of the FlatList
    */
   style: PropTypes.object,

  /**
   *Data List
   */
   data: PropTypes.array,

  /**
   *testID 
   */
   testID: PropTypes.string,

   /**
   *Function to render the flatlist item 
   */
   renderItem: PropTypes.func.isRequired,
 
};
