import React from 'react';
import GeneralBranchPage from './components/GeneralBranchPage';
import GlobalStyles from './components/styles/Global';
import DetailedBranchPage from './components/DetailedBranchPage';

function App() {
  return (
		<div>
			<GlobalStyles />
			{/* <GeneralBranchPage /> */}
			<DetailedBranchPage />
		</div>
  );
}

export default App;
