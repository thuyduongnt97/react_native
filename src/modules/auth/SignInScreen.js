import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
} from 'react-native';
import PropTypes from 'prop-types'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import base64 from 'react-native-base64';

const SignInScreen = (props) => {
   
    const [data, setData] = React.useState({
        email: '',
        pass: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidEmail: true,
        isValidPass: true,
    });
    const [value, setValue] = React.useState('Useless Placeholder');

    const { colors } = useTheme();
    
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
        if( val.trim().length >= 8 ) {
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
        props.loadLogin(email, password)
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
                        value={value}
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
