import React from 'react';
import { Label, Prefix, Input, Suffix } from '../styled-components/form';

const FormInput = ({ label, suffix, type, ...props }) => (
  <Label type={type}>
    {label && <Prefix type={type}>{label}</Prefix>}
    <Input type={type} {...props} />
    {suffix && <Suffix>{suffix}</Suffix>}
  </Label>
);

export default FormInput;
