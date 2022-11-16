import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);
	const [showNav, setShowNav] = useState(false);

	const setClick = () => {
		setShowModal(!showModal);
	};
	const navClick = () => setShowNav(!showNav);

	return (
		<AppContext.Provider
			value={{
				showModal,
				showNav,
				setClick,
				navClick,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
