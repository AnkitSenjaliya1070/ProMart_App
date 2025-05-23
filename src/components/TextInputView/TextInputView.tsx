import React from 'react';
import {
    type ColorValue,
    type ImageStyle,
    Platform,
    type StyleProp,
    StyleSheet,
    type TextInputProps,
    type TextStyle,
    TouchableOpacity,
    type ViewStyle,
} from 'react-native';
// Lib
import KeyboardManager from 'react-native-keyboard-manager';

// Components
import {Colors} from '../../utils/theme';
// Style
import {
    Container,
    ErrorMessageLabel,
    InputText,
    InputView,
    LeftIconContainer,
    RightIcon,
    RightIconTouchableView,
    styles,
} from './TextInputViewStyle';

export default function TextInputView(props: TextInputViewProps) {
    const {
        disabled = false,
        blurOnSubmit = true,
        onFocus = () => {},
        isValid = true,
        leftIcon,
        rightIcon,
        secureTextEntry = false,
        style = {},
        value = '',
        innerRef,
        onChangeText = () => {},
        onSubmitEditing = () => {},
        onPressRightIcon = () => {},
        placeholder = '',
        keyboardType = 'default',
        returnKeyType = 'next',
        errorMessage = '',
        textColor = null,
        type = 'textInput',
        iconStyle = {},
        leftIconStyle = {},
        textStyle = {},
        onPress,
        multiline = false,
        numberOfLines = 1,
        maxLength,
        placeholderStyle = {},
    } = props;

    const inputContainerViewStyle = StyleSheet.flatten([styles.inputContainerStyle]);
    const invalidInputStyle = StyleSheet.flatten([styles.invalidInputStyle]);

    return (
        <Container>
            <TouchableOpacity
                activeOpacity={9}
                onPress={() => {
                    if (type === 'textInput') {
                        innerRef?.current?.focus();
                    } else if (!disabled && onPress) {
                        onPress();
                    }
                }}
                style={[
                    inputContainerViewStyle,
                    !isValid && invalidInputStyle,
                    style,
                    // CommonStyles.shadowContainer,
                ]}>
                {leftIcon && (
                    <LeftIconContainer style={styles.leftIconContainer}>
                        <RightIcon
                            source={leftIcon}
                            style={[leftIconStyle, {tintColor: Colors.black}]}
                        />
                    </LeftIconContainer>
                )}
                {type === 'textInput' ? (
                    <InputView
                        style={[
                            textColor !== null && {color: textColor},
                            multiline && styles.multilineTextStyle,
                            placeholderStyle,
                        ]}
                        placeholder={placeholder}
                        textContentType={'oneTimeCode'}
                        editable={!disabled}
                        value={value}
                        // placeholderTextColor={Colors.grayAA}
                        blurOnSubmit={blurOnSubmit}
                        ref={innerRef}
                        secureTextEntry={secureTextEntry}
                        onFocus={onFocus}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType}
                        onSubmitEditing={onSubmitEditing}
                        returnKeyType={multiline ? 'default' : returnKeyType}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        multiline={multiline}
                        numberOfLines={numberOfLines}
                        maxLength={maxLength}
                        autoComplete={'off'}
                        spellCheck={false}
                        onLayout={() => {
                            // When multiline=true and the input height changes, it updates the keyboard position.
                            if (Platform.OS === 'ios') {
                                KeyboardManager.reloadLayoutIfNeeded();
                            }
                        }}
                    />
                ) : (
                    <InputText
                        numberOfLines={1}
                        style={[(value === '' || disabled) && styles.placeholderStyle, textStyle]}>
                        {value === '' ? placeholder : value}
                    </InputText>
                )}
                {rightIcon && (
                    <RightIconTouchableView onPress={onPressRightIcon}>
                        {!isValid ? (
                            <RightIcon
                                style={styles.errorImageStyle}
                                source={rightIcon}
                                resizeMode={'contain'}
                                resizeMethod={'resize'}
                            />
                        ) : (
                            <RightIcon
                                style={iconStyle}
                                source={rightIcon}
                                resizeMode={'contain'}
                                resizeMethod={'resize'}
                            />
                        )}
                    </RightIconTouchableView>
                )}
            </TouchableOpacity>
            {!isValid && errorMessage !== '' ? (
                <ErrorMessageLabel>{errorMessage}</ErrorMessageLabel>
            ) : (
                <ErrorMessageLabel />
            )}
        </Container>
    );
}

export type TextInputViewProps = {
    value: any;
    label: string;
    isValid?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onFocus?: () => void;
    keyboardType?: string;
    returnKeyType?: string;
    blurOnSubmit?: boolean;
    secureTextEntry?: boolean;
    style?: StyleProp<ViewStyle>;
    // leftIcon?: ReactChild;
    leftIconStyle?: StyleProp<ImageStyle>;
    iconStyle?: StyleProp<ImageStyle>;
    textStyle?: StyleProp<TextStyle>;
    leftIcon?: any;
    rightIcon?: any;
    onPressRightIcon?: () => void;
    innerRef?: any;
    errorMessage?: string | undefined;
    textColor?: ColorValue;
    type?: 'textInput' | 'dropdown';
    onPress?: () => void;
    multiline?: boolean;
    numberOfLines?: number;
    leftLabel?: string;
    maxLength?: number;
    placeholderStyle?: StyleProp<TextStyle>;
} & TextInputProps;
