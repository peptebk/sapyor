import React from 'react';
import { 
	SettingsContainer,
	StatusContainer,
	BoardContainer
} from './containers';
import {
	Wrapper,
	Title
} from './AppStyle';

const App = () => {
	return (
		<Wrapper>
			<SettingsContainer />
			<StatusContainer />
			<BoardContainer />
		</Wrapper>
	);
};

export default App;