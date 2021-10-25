import { hp, wp } from '../../../helpers/DimensionHelper'
import { Colors } from '../../../theme'


export const styles = {
    container: {
        height: hp(150),
        width: '100%',
        backgroundColor: '#fff'
    },
    imgBackground: {
        flex: 1,
        // backgroundColor:Colors.PRIMARY_DARK,
        backgroundColor:"#eee",
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: wp(30),
        backgroundColor:'rgba(255 , 255, 255 ,.1)',
    },
    title: {
        color: Colors.PRIMARY_DARK,
        fontWeight:'700',

    }

}