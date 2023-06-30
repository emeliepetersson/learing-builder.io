import React from 'react';
import { styled } from 'styled-components';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = (props) => {
	return (
		<ScHeader>
			<nav>
				{props.links.map((link, index) => (
					<a
						key={index}
						href={link.data.url}
					>
						{link.data.label}
					</a>
				))}
			</nav>
			Testing Builder.io
		</ScHeader>
	);
};

export default Header;

const ScHeader = styled.div`
    width: 100%;
    height: 100px;
    font-size: 23px;
    font-weight: 600;
    letter-spacing: 2px;
    background-color: #b2cede;
    color: whitesmoke;
    box-shadow: 0 4px 20px -2px #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
`;