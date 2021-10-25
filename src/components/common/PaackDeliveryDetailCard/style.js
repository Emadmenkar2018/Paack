import { hp, wp } from '../../../helpers/DimensionHelper'
import { Colors } from '../../../theme'


export const styles = {
    cardContainer: {
        // height:200,
        backgroundColor: Colors.PRIMARY_LIGHT,
        borderTopLeftRadius: wp(20),
        borderTopRightRadius: wp(20),
        borderBottomLeftRadius: wp(90),
        borderBottomRightRadius: wp(50),
        padding: wp(40),
        marginBottom:hp(30)
    },
    title: {
        color: Colors.WHITE,
        fontWeight: '700',
        marginBottom: hp(5)
    },
    city: {
        color: Colors.DARK_WHITE,
        fontWeight: '700',
        marginBottom: hp(20)
    },
    address: {
        color: Colors.DARK_WHITE,
        fontWeight: '500',
        marginBottom: hp(5)
    },
    addressDetail: {
        color: Colors.DARK_WHITE,
        fontWeight: '500',
        marginBottom: hp(5)
    },
    bubble: {
        width: wp(150),
        height: hp(50),
        backgroundColor: '#fff',
        borderRadius: wp(30),
        position: 'absolute',
        right: 0,
        top: -hp(25),
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        color:Colors.PRIMARY_DARK,
        fontWeight:'700'
    }

}