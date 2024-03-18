import { View, TextInput, StyleSheet, Button, Text } from "react-native"
import { useFormik } from "formik";
import { REGISTRATION_SCHEMA } from "./utils/formikValidation";
// import { TextInput } from "react-native-gesture-handler";

const Registration = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: REGISTRATION_SCHEMA,      
        onSubmit: (values) => {
            console.log(values);
            
        }
    })
    return(
        <View style={style.container}>
            <TextInput
                value={formik.values.firstName}
                placeholder="Enter First Name"
                onChangeText={formik.handleChange('firstName')}
                style={[style.textBox, formik.errors.firstName ? style.errorBorder : '']}
                // className={formik.errors.firstName ? style.errorBorder : ''}
            />
            {formik.errors.firstName && <Text style={{color: 'red'}}>{formik.errors.firstName}</Text>}
            <TextInput
                value={formik.values.lastName}
                placeholder="Enter Last Name"
                onChangeText={formik.handleChange('lastName')}
                style={style.textBox}
            />
            {formik.errors.lastName && <Text>{formik.errors.lastName}</Text>}
            <TextInput
                value={formik.values.email}
                placeholder="Enter Email"
                onChangeText={formik.handleChange('email')}
                style={style.textBox}
            />
            {formik.errors.email && <Text>{formik.errors.email}</Text>}
            <TextInput
                value={formik.values.password}
                placeholder="Enter Password"
                onChangeText={formik.handleChange('password')}
                style={style.textBox}
            />
            {formik.errors.password && <Text>{formik.errors.password}</Text>}
            <Button 
                title="Submit"
                onPress={formik.handleSubmit}
            />
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        margin: 100
    },
    textBox: {
        padding: 10,
        borderWidth: 2,
        margin: 10
    },
    errorBorder: {
        borderColor: 'red'
    }
})
export default Registration