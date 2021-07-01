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
import { Platform, StyleSheet } from 'react-native';
import normalize from '../helpers/normalizeText';
import { fonts } from '../config';
import Text from '../Text';
/** Add a featured subtitle to the Card.
 * This, Receives all [Text](text.md#props) props. */
export const CardFeaturedSubtitle = (_a) => {
    var _b;
    var { theme, style } = _a, props = __rest(_a, ["theme", "style"]);
    return (<Text style={StyleSheet.flatten([
        Object.assign({ fontSize: normalize(13), marginBottom: 8, color: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.white }, Platform.select({
            android: Object.assign({}, fonts.android.black),
            default: {
                fontWeight: '400',
            },
        })),
        style,
    ])} {...props}/>);
};
CardFeaturedSubtitle.displayName = 'CardFeaturedSubtitle';
