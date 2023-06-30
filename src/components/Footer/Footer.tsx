import React from 'react';
import { styled } from 'styled-components';

const Footer: React.FC = () => {
	return (
		<ScFooter>
			This is the footer
		</ScFooter>
	);
};

export default Footer;

const ScFooter = styled.div`
    width: 100%;
    height: 70px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    background-color: #b2cede;
    color: whitesmoke;
    box-shadow: 0 -1px 20px 2px #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
`;