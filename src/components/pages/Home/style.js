import { wp, hp } from '../../../helpers/DimensionHelper'
import { Colors } from '../../../theme'


export const styles = {
    dev:{
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal:wp(30),
        backgroundColor:'#EEEEEE'
    },   
    loadingContainer:{
        width: '100%',
        height:hp(200),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(15),
        borderRadius: wp(30) 
    }
}