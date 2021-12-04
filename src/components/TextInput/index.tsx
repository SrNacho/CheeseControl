import React, { FC } from 'react';
import {
  StyleProp,
  TextStyle,
  TextInput as TextInputComponent,
  KeyboardTypeOptions,
} from 'react-native';
import { Controller } from 'react-hook-form';

interface Props {
  control: any;
  name: string;
  rules: any;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (value: string) => void;
  style?: StyleProp<TextStyle>;
}

const TextInput: FC<Props> = ({
  control,
  name,
  rules,
  onChangeText = () => {},
  style = {},
  keyboardType = 'ascii-capable',
}) => {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { value, onChange } }) => (
        <TextInputComponent
          keyboardType={keyboardType}
          style={style}
          onChangeText={(text) => {
            onChange(text);
            onChangeText(text);
          }}
          value={value}
        />
      )}
      name={name}
    />
  );
};

export default TextInput;
