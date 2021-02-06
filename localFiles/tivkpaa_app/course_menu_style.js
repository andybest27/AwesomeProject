const React = require('react-native');
const { StyleSheet, Dimensions } = React;

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
export default{
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        backgroundColor: '#00597e',
        marginTop: 30,
        padding: 8,
        flex: 0.14,
        shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 3,
            },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 10,
        alignItems: 'center',
    },
    subTitle:{
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#77e5f5',
        width: DeviceWidth-20,
        paddingBottom: 10,
        justifyContent: 'space-between',
    },
    title_txt:{
        color: '#fff',
        fontFamily: 'sans-serif-thin',
        fontSize: 25,
    },
    course_exercise_box:{
        flexDirection: 'row',
        alignSelf: 'center',
            width: DeviceWidth,
    },
    course_exer_touch:{
        flex: 0.5,
        height: 45,
        alignItems: 'center',
        paddingTop: 8,

        
    },
    txt_lbl:{
        color: '#fff',
        fontSize: 18,
        fontFamily: 'serif',
    },
    body:{
        flex: 0.91,
        backgroundColor: '#003d56',
    },
    course_items:{
        marginTop: 8,
        marginButton: 8,
        backgroundColor: '#00597e',
        width: DeviceWidth-10,
        alignSelf: 'center',
        height: 55,
        borderRadius: 5,
        shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 10,
            padding: 5,
            borderWidth: 0.5,
            borderColor: '#51acd7',
            flexDirection: 'row',
            justifyContent: 'space-between',
    },
    course_items_text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: 'serif',
        alignSelf: 'flex-end',
    },
    course_items_toNum: {
        fontSize: 12,
        color: '#11d5a0',
        alignSelf: 'flex-end',
    },
    button_btn:{
        backgroundColor: '#35b2c5',
        width: DeviceWidth,
        alignItems: 'center',
        alignSelf: 'center',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resume_btn:{
        backgroundColor: '#003d56',
        padding: 10,
       color: '#fff',
       borderRadius: 5,
        marginRight: 8,
     },
    resume_txt:{
        color: '#fff',
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: 'serif',
       
    },
    btn_txt:{
        color: '#fff',
        fontSize: 12,
        marginLeft: 10,
    },
}