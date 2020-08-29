import React, {useState, useEffect} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import AppView from './../AppViewContainer';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const SignInScreen = (props) => {
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);
    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const {accessToken, idToken} = await GoogleSignin.signIn();
            setloggedIn(true);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            alert('Cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
            alert('Signin in progress');
            // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            alert('PLAY_SERVICES_NOT_AVAILABLE');
            // play services not available or outdated
            } else {
            // some other error happened
            }
        }
    };
    useEffect(() => {
        GoogleSignin.configure({
          scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
          webClientId:
            '866791921051-3ni3lvvh2uno971mtgl9qvimtkoj441n.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
          offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
      }, []);

    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setloggedIn(false);
            setuserInfo([]);
        } catch (error) {
            console.error(error);
        }
    };
    const [data, setData] = React.useState({
        email: '',
        pass: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidEmail: true,
        isValidPass: true
    });
    const {key_app} = props
    const { colors } = useTheme()
    
    // const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidEmail: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidEmail: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                pass: val,
                isValidPass: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPass: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidEmail: true
            });
        } else {
            setData({
                ...data,
                isValidEmail: false
            });
        }
    }

    const loginHandle = (email, password) => {
        // <AppView />
        props.loadLogin(email, password)
        if(key_app != "confirmed" && key_app != "block" && key_app != false){
            console.log(key_app);
            props.navigation.navigate('ViewApp');
        }
    }
    const FunctionToOpenSecondActivity = () =>
    {
        props.navigation.navigate('Second');
        
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#2d56d2' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
            >
                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color={colors.text}
                        size={35}
                    />
                    <TextInput 
                        placeholder="Your Username"
                        placeholderTextColor="#666666"
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather 
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                    </Animatable.View>
                    : null}
                </View>
                { data.isValidEmail ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                    </Animatable.View>
                }
                <Text style={[styles.text_footer, {
                    color: colors.text,
                    marginTop: 20
                    }]}>Password
                </Text>
                    <View style={styles.action}>

                    <FontAwesome 
                        name="lock"
                        color={colors.text}
                        size={35}
                    />
                    <TextInput 
                        placeholder="Your Password"
                        placeholderTextColor="#666666"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                        <Feather 
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather 
                            name="eye"
                            color="grey"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>
                { data.isValidPass ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                </Animatable.View>
                }
                

                <TouchableOpacity>
                    <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {loginHandle( data.email, data.pass )}}
                    >
                    <LinearGradient
                        colors={['#4666cd', '#4666cd']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Sign In</Text>
                    </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            {   
                                updateSecureTextEntry()
                            }
                        //  navigation.navigate('SignUpScreen')
                            }
                        style={[styles.signIn, {
                            borderColor: '#4666cd',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#4666cd'
                        }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                    <GoogleSigninButton
                        style={{width: 192, height: 48}}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={this._signIn}
                    />
                    </View>
                    <View style={styles.buttonContainer}>
                    {!loggedIn && <Text>You are currently logged out</Text>}
                    {loggedIn && (
                        <Button
                        onPress={this.signOut}
                        title="LogOut"
                        color="red"></Button>
                    )}
                    </View>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#4666cd'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 15,
        marginTop:-20 
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
        ...Platform.select({
            ios: {
                marginTop: 0
            },
            android: {
                marginTop: 0
            },
            default: {
              // other platforms, web for example
                marginTop: -12
            }
        })
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 40
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
