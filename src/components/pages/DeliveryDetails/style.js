import { wp, hp } from '../../../helpers/DimensionHelper'
import { Colors } from '../../../theme'


export const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: wp(40),
        alignItems: 'center'
    },
    activeBtn: {
        backgroundColor: Colors.SECONDARY,
        width: wp(160),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(15),
        borderRadius: wp(30)
    },
    activeTitle: {
        color: Colors.WHITE,
        fontWeight: '600'
    },
    deliverBtn: {
        backgroundColor: Colors.SECONDARY,
        width: wp(160),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(15),
        borderRadius: wp(30)
    },
    cancelBtn: {
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderColor: Colors.SECONDARY,
        width: wp(140),
        marginHorizontal: wp(10),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(15),
        borderRadius: wp(30)
    },
    cancelTitle: {
        color: Colors.SECONDARY,
        fontWeight: '600'
    },
    actionBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: hp(60)
    },
    backbtn: {
        position: 'absolute',
        top: hp(50),
        left: wp(20)
    }

}