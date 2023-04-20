import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { TextInput } from '../TextInput';
import { DatePickerInputProps } from './DatePickerInput.props';

const DatePickerInput = ({
  mode = 'date',
  placeholder,
}: DatePickerInputProps) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState<Date>(new Date());

  const [value, setValue] = useState('');

  const toggleDatePicker = () => {
    setShow(!show);
  };

  const onChange = ({ type }: DateTimePickerEvent, selectedDate?: Date) => {
    if (type === 'set') {
      if (selectedDate) {
        setDate(selectedDate);

        toggleDatePicker();

        if (mode === 'date') {
          setValue(
            selectedDate.toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })
          );
        } else {
          setValue(
            selectedDate.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })
          );
        }
      }
    } else {
      toggleDatePicker();
    }
  };

  return (
    <>
      <Pressable onPress={toggleDatePicker}>
        <TextInput value={value} placeholder={placeholder} editable={false} />
      </Pressable>
      {show && (
        <DateTimePicker value={date} mode={mode} is24Hour onChange={onChange} />
      )}
    </>
  );
};

export default DatePickerInput;
