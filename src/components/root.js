import React from "react";
import { connect } from "react-redux";
import { View, StatusBar, Text } from "react-native";

import Navigation from "./partials/Navigation";
import { Loader, CustomAlertModal } from "./common";

const Root = ({ registerNavigation, user, hideModal }) => {
  return (
    <View style={{ flex: 1, alignItems: "stretch" }}>
      <StatusBar barStyle="light-content" />
      {/* <Navigation ref={registerNavigation} /> */}
      <Navigation/>
    </View>
 );
};
    {/*   {user.isLoginInProgress && (
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          }}
        >
          <Loader
            style={{
              marginTop: 8
            }}
          />
        </View>
      )}

      {user.modalStatus && (
        <CustomAlertModal visible={user.modalStatus} onOk={() => hideModal()}>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ textAlign: "center" }}>{user.modalText}</Text>
          </View>
        </CustomAlertModal>
      )} */}
 

// const mapDispatchToProps = dispatch => ({
//   registerNavigation(navigation) {
//     dispatch({
//       type: "NAVIGATION_INITIALIZED",
//       navigation
//     });
//   },
//   hideModal() {
//     dispatch({
//       type: "HIDE_MODAL"
//     });
//   }
// });

// const mapStateToProps = state => ({
//   user: state.user
// });

export default connect(mapStateToProps,mapDispatchToProps)(Root);
