import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
/**
 * @type {i18n.Resource}
 */
const resources = {
	en: {
		translation: {
			welcome: "Welcome to Mocky",
			anyRequest: "Any mock you need",
			designMocks: "Design your mock",
			manageMocks: "Manage my mocks",
			newMock: "New Mock",
			authLogout: "Log out",
			logOutModalTitle: "¿Are you sure you wanna log out?",
			logOutModalBody: "User being logged out: ",
			logOutModalCloseButton: "Cancel",
			logOutModalLogoutButton: "Log out",
			noMatchStatus: "Error: 404 Not Found",
			noMatchForRoute: "No match for route"
		}
	},
	es: {
		translation: {
			welcome: "Bienvenido a Mocky",
			anyRequest: "Cualquier mock que necesites",
			designMocks: "Diseña tu mock",
			manageMocks: "Manejar mis mocks",
			newMock: "Nuevo Mock",
			authLogout: "Cerrar sesión",
			logOutModalTitle: "¿Está seguro que quiere cerrar sesión?",
			logOutModalBody: "Usuario para cerrar sesión: ",
			logOutModalCloseButton: "Cancelar",
			logOutModalLogoutButton: "Cerrar sesión",
			noMatchStatus: "Error: 404 No Encontrada",
			noMatchForRoute: "No pareo para ruta"
		}
	}
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		// if you're using a language detector, do not define the lng option

		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;
