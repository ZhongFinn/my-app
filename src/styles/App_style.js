import background_img from '../images/background.jpg';
import {COLOR_THEME, COLOR_SILVER_WHITE,COLOR_YAQING} from '../constants';
const styles = {
    container: {
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(' + background_img +')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    panel: {
        width: 500,
        height: 600,
        backgroundColor: 'white',
        marginTop: 132,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop:45,
    },

    header: {
        fontSize: 50,
        color: COLOR_THEME,
        fontFamily: 'RussoOne',
    },

    footer: {
        width: 500,
        height: 118,
        backgroundColor: COLOR_SILVER_WHITE,
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        

    },

    footer_text: {
        fontSize: 25,
        color: COLOR_YAQING,
        fontFamily:'Roboto-Regular',
    },


    button: {
        width: 386,
        height: 50,
        backgroundColor: COLOR_THEME,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:40,
        marginBottom: 70,
    },

    button_label: {
        fontSize: 25,
        color: "white",
        margin: 0,
        fontFamily:'Roboto-Regular',
    },
    
    placeholder: {
        flex: 1,
    },

    footer_link: {
        fontSize: 25,
        color: COLOR_THEME,
        marginLeft:5
    },

};
export default styles;