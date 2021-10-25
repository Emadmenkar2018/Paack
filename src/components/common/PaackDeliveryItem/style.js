import { hp } from '../../../helpers/DimensionHelper'
import {Colors} from '../../../theme'


export const styles = {
    container: {
        flexDirection: 'row',
        shadowColor: '#E8E8E8',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        width: '100%',
        alignItems: 'center',
        elevation: 3,
        marginVertical: hp(10),
        justifyContent: 'center',
        paddingVertical: hp(25),
        paddingHorizontal: hp(35),
        backgroundColor: '#fff',
        borderRadius: 20
    },
    title: {
        marginBottom: hp(10),
        fontWeight: "600",
        color:Colors.PRIMARY
    },
    subtitle: {
        fontWeight: "400",
        color:Colors.PRIMARY_LIGHT
    }

}