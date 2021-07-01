var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { StyleSheet } from 'react-native';
import Button from '../../Button';
import Icon from '../../Icon';
export const PricingButton = (props) => {
    const { title, buttonStyle, color, titleStyle, onButtonPress, icon } = props, buttonProps = __rest(props, ["title", "buttonStyle", "color", "titleStyle", "onButtonPress", "icon"]);
    return (<Button title={title} buttonStyle={StyleSheet.flatten([
        styles.button,
        buttonStyle,
        { backgroundColor: color },
    ])} titleStyle={titleStyle} onPress={onButtonPress} icon={React.isValidElement(icon) ? (icon) : typeof icon === 'string' ? (<Icon name={icon} size={15} color="white"/>) : (<Icon {...icon}/>)} {...buttonProps}/>);
};
const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        marginBottom: 10,
    },
});
