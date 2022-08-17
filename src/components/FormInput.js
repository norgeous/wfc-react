import React from 'react';
import { Label, Input } from './styled';

const FormInput = ({ label, type, ...props }) => (
  <Label type={type}>
    <span>{label}</span>
    <Input type={type} {...props} />
  </Label>
);

export default FormInput;
