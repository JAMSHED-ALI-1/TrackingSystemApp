import { StyleSheet } from 'react-native';
import Theme from '../../Theme/theme';

export const drawerStyles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: .5,
    },
    header: {
        backgroundColor: Theme.offWhite,
        flex: 1,
        flexDirection: 'row',
        height: 90,
        alignItems: 'center',
        borderWidth: 0,
    },
    logo: {
        height: 55,
        width: 55,
        borderRadius: 5,
        marginLeft: 15,
        marginRight: 20,
    },
    title: {
        color: Theme.blue.primary,
        fontSize: 22,
        fontWeight: 'bold',
    },
    profileContainer: {
        height: 150,
        // borderWidth: 1,
        borderBottomWidth: .5,
        borderTopWidth: .5,
        paddingBottom: 5,
        backgroundColor: Theme.white,
        paddingLeft: 10,
    },
    profileInfo: {
        height: '35%',
        flexDirection: 'row',
        // borderTopWidth: .5,
        backgroundColor: Theme.white,
        // padding: 5,
        // justifyContent: 'flex-start',
        alignItems: 'center',

    },
    profileIcon: {
        color: Theme.grey,
        // marginLeft: 10,
    },
    profileText: {
        color: Theme.black,
        marginLeft: 15,
    },
    userDetailsContainer: {
        flex: 1,
        // borderBottomWidth: .3,
    },
    userDetailsRow: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0,
        alignItems: 'center',
    },
    userDetailsText: {
        fontSize: 13,
        marginLeft: 10,
    },
    roleText: {
        fontSize: 10,
        marginLeft: 15,
    },
    emailText: {
        fontSize: 10,
        marginLeft: 10,
    },
    mobileText: {
        fontSize: 12,
        marginLeft: 10,
    },
    drawerItemsContainer: {
        flex: 1,
        backgroundColor: Theme.white,
        paddingTop: 0,
        borderWidth: 0,
    },
    drawerItem: {
        flexDirection: 'row',
        height: 35,
        padding: 0,
        paddingLeft: 15,
        marginTop: 5,
        alignItems: 'center',
        gap: 20,
        borderTopWidth: .179,
    },
    labelStyle: {
        margin: 0,
        padding: 0,
        borderWidth: .5,
    },
    footerContainer: {
        padding: 20,
        borderTopWidth: .5,
        borderTopColor: '#ccc',
    },
    logoutButton: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoutIcon: {
        fontSize: 22,
    },
    logoutText: {
        fontSize: 15,
        marginLeft: 5,
    },
});
