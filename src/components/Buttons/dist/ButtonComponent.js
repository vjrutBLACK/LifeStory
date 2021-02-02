"use strict";
exports.__esModule = true;
exports.ButtonComponent = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var mixins_1 = require("../../theme/mixins");
var colors = require("@theme/colors");
var fonts = require("@theme/fonts");
var react_native_indicators_1 = require("react-native-indicators");
exports.ButtonComponent = function (_a) {
    var value = _a.value, loading = _a.loading, isSignIn = _a.isSignIn, onPress = _a.onPress, style = _a.style;
    return (React.createElement(react_native_1.TouchableOpacity, { onPress: onPress },
        React.createElement(react_native_1.View, { style: [styles.btn, style, { backgroundColor: isSignIn ? colors.privacy : colors.white, borderWidth: isSignIn ? 0 : 1 }] }, loading ? (React.createElement(react_native_indicators_1.MaterialIndicator, { color: colors.white, size: 20 })) : (React.createElement(react_native_1.Text, { style: [styles.txt, { color: isSignIn ? colors.white : colors.privacy }] }, value)))));
};
exports["default"] = exports.ButtonComponent;
var styles = react_native_1.StyleSheet.create({
    txt: {
        fontSize: mixins_1.scaleFont(16),
        fontFamily: fonts.maliMedium
    },
    btn: {
        justifyContent: 'center',
        height: mixins_1.scaleHeight(56),
        alignItems: 'center',
        borderRadius: 10,
        borderColor: colors.privacy
    }
});
