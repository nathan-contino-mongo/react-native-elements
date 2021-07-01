/// <reference types="react" />
import { AvatarBase, AvatarBaseProps } from './Avatar';
import { AccessoryProps } from './Accessory';
import { RneFunctionComponent } from '../helpers';
declare const ThemedAccessory: import("react").FunctionComponent<Pick<Partial<import("..").IconProps> & Partial<import("..").ImageProps> & {
    underlayColor?: import("react-native").ColorValue;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
} & Partial<import("../config").ThemeProps<AccessoryProps>>, "style" | "onLayout" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "source" | "loadingIndicatorSource" | "testID" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "ImageComponent" | "PlaceholderContent" | "containerStyle" | "childrenContainerStyle" | "placeholderStyle" | "transition" | "transitionDuration" | "hitSlop" | "nativeID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "backgroundColor" | "iconStyle" | "size" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "color" | "name" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "background" | "useForeground" | "type" | "reverse" | "raised" | "iconProps" | "reverseColor" | "disabledStyle" | "solid" | "brand">> | import("react").ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("..").ImageProps> & {
    underlayColor?: import("react-native").ColorValue;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
} & Partial<import("../config").ThemeProps<AccessoryProps>>>;
export declare type AvatarProps = RneFunctionComponent<AvatarBaseProps> & {
    Accessory: typeof ThemedAccessory;
};
export { AvatarBase, ThemedAccessory };
export declare const Avatar: AvatarProps;
export type { AccessoryProps };
declare const ThemedAvatar: (import("react").FunctionComponent<Pick<AvatarBaseProps & Partial<import("../config").ThemeProps<AvatarBaseProps>>, "source" | "onPress" | "Component" | "onLongPress" | "ImageComponent" | "containerStyle" | "placeholderStyle" | "activeOpacity" | "title" | "icon" | "iconStyle" | "size" | "avatarStyle" | "rounded" | "titleStyle" | "overlayContainerStyle" | "imageProps" | "renderPlaceholderContent">> & {
    Accessory: import("react").FunctionComponent<Pick<Partial<import("..").IconProps> & Partial<import("..").ImageProps> & {
        underlayColor?: import("react-native").ColorValue;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    } & Partial<import("../config").ThemeProps<AccessoryProps>>, "style" | "onLayout" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "source" | "loadingIndicatorSource" | "testID" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "ImageComponent" | "PlaceholderContent" | "containerStyle" | "childrenContainerStyle" | "placeholderStyle" | "transition" | "transitionDuration" | "hitSlop" | "nativeID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "backgroundColor" | "iconStyle" | "size" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "color" | "name" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "background" | "useForeground" | "type" | "reverse" | "raised" | "iconProps" | "reverseColor" | "disabledStyle" | "solid" | "brand">> | import("react").ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("..").ImageProps> & {
        underlayColor?: import("react-native").ColorValue;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    } & Partial<import("../config").ThemeProps<AccessoryProps>>>;
}) | (import("react").ForwardRefExoticComponent<AvatarBaseProps & Partial<import("../config").ThemeProps<AvatarBaseProps>>> & {
    Accessory: import("react").FunctionComponent<Pick<Partial<import("..").IconProps> & Partial<import("..").ImageProps> & {
        underlayColor?: import("react-native").ColorValue;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    } & Partial<import("../config").ThemeProps<AccessoryProps>>, "style" | "onLayout" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "source" | "loadingIndicatorSource" | "testID" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "ImageComponent" | "PlaceholderContent" | "containerStyle" | "childrenContainerStyle" | "placeholderStyle" | "transition" | "transitionDuration" | "hitSlop" | "nativeID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "backgroundColor" | "iconStyle" | "size" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "color" | "name" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "background" | "useForeground" | "type" | "reverse" | "raised" | "iconProps" | "reverseColor" | "disabledStyle" | "solid" | "brand">> | import("react").ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("..").ImageProps> & {
        underlayColor?: import("react-native").ColorValue;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    } & Partial<import("../config").ThemeProps<AccessoryProps>>>;
});
export default ThemedAvatar;
