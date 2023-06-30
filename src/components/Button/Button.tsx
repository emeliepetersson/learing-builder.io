import React from 'react';
import MuiButton from '@mui/base/Button';
import { Builder } from '@builder.io/react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<ScButton
			href={props.link}
		>
			{props.text}
		</ScButton>
	);
};

export default Button;

// Register this component for use in the Visual Editor
Builder.registerComponent(Button, {
	name: 'Button',
	inputs: [
		{ name: 'text', type: 'text' },
		{ name: 'link', type: 'url' }
	]
});

const ScButton = styled(MuiButton)`
	background-color: #9cc3a0;
	padding: 8px 24px;
	width: fit-content;
	border-radius: 10px;
	color: white;
	text-decoration-color: transparent;
	font-weight: 600;
	box-shadow: 0 4px 20px -2px #bdbcbc;
	cursor: pointer;

	&:hover {
		background-color: #b1d2b4;
	}

	&:active {
		box-shadow: 0 4px 20px -5px #bdbcbc;
	}
`;