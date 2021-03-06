import { useReducer, createContext } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
	const initialState = null;

	const [state, dispatch] = useReducer(alertReducer, initialState);

	const setAlert = (msg, type) => {
		dispatch({
			type: "SET_ALERT",
			data: {
				msg,
				type,
			},
		});

		setTimeout(() => {
			dispatch({
				type: "CLEAR_ALERT",
			});
		}, 3500);
	};

	return (
		<AlertContext.Provider value={{ alert: state, setAlert }}>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertContext;
