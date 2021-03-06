import React from 'react';
import useForm from '../../hooks/form';
import useAutofocus from '../../hooks/autofocus';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import Form from '../../components/Form';
import Label from '../../components/Label';
import SubmitButton from '../../components/SubmitButton';
import Button from '../../components/Button';
import ButtonRow from '../../components/ButtonRow';
import { URL_REGEX } from '../../utils/constants';

const formConfig = (onNewItem) => ({
  validateOnBlur: false,
  onSubmit: (values) => {
    onNewItem(values);
  },
  fields: {
    name: {
      isRequired: 'Provide a name for your wish list item',
    },
    description: {
    },
    url: {
      matchesRegex: {
        pattern: URL_REGEX,
        message: 'Provide a valid URL',
      },
    },
  },
});

const NewItemForm = ({
  onNewItem,
}) => {
  const {
    propsForForm,
    propsForField,
    errorForField,
    reset,
  } = useForm(formConfig(onNewItem));
  const ref = useAutofocus();

  const handleCancel = () => {
    reset();
  };

  return (
    <Form
      {...propsForForm()}
    >
      <div>
        <Label htmlFor="name">
          Name:
          <TextInput
            ref={ref}
            {...propsForField('name')}
          />
          {errorForField('name') && (
            <p>{errorForField('name')}</p>
          )}
        </Label>
      </div>
      <div>
        <Label htmlFor="description">
          Description:
          <TextArea {...propsForField('description')} />
          {errorForField('description') && (
            <p>{errorForField('description')}</p>
          )}
        </Label>
      </div>
      <div>
        <Label htmlFor="url">
          URL:
          <TextInput {...propsForField('url')} />
          {errorForField('url') && (
            <p>{errorForField('url')}</p>
          )}
        </Label>
      </div>
      <ButtonRow>
        <SubmitButton>Add</SubmitButton>
        <Button onClick={handleCancel}>Cancel</Button>
      </ButtonRow>
    </Form>
  );
};

export default NewItemForm;
