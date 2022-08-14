import React from 'react';
import styled from 'styled-components';

const X = styled.span`
  color: red;
`;

const TestC = () => <h1>TEST <X>COMPONENT</X></h1>;

export default TestC;
