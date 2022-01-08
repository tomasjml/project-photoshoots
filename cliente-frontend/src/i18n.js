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
			formName: "Name",
			formNameHelp: "Assign a name for the Endpoint",
			formDescription: "Description",
			formDescriptionHelp: "Assign a Description for the Endpoint",
			formHTTPStatus: "HTTP Status",
			formMethod: "HTTP Method",
			formMethodHelp: "The method on which the request will be accessed",
			formHTTPStatusHelp: "We'll never share your email with anyone else.",
			formContentType: "Response Content Type",
			formContentTypeHelp: "The Content-Type header that will be sent with the response.",
			formCharset: "Charset",
			formCharsetHelp: "The Charset used to encode/decode your payload.",
			formHeaders: "HTTP Headers",
			formHeadersHelp: "Customize the HTTP headers sent in the response. Define the headers as a JSON object.",
			formResponseBody: "HTTP Response Body",
			formSubmit: "Generate my HTTP Response",
			tableHeaderID: "ID",
			tableHeaderName: "Name",
			tableHeaderDescription: "Description",
			tableHeaderDate: "Date",
			tableHeaderAction: "Action",
			tableAlertStorage: "Warning: These data are stored on our service!",
			tableNoContent: "NO CONTENT",
			tableDeleteModalTitle: "Are you sure you want to eliminate the endpoint?",
			tableDeleteModalBody: "Endpoint to be eliminated:",
			tableDeleteModalClose: "Close",
			tableDeleteModalAction: "Delete",
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
			formName: "Nombre",
			formNameHelp: "Asigna un nombre para el Endpoint",
			formDescription: "Descripción",
			formDescriptionHelp: "Asigna una descripción para el Endpoint",
			formHTTPStatus: "Estatus HTTP",
			formMethod: "Método HTTP",
			formMethodHelp: "El método HTTP por el cual será accedido",
			formHTTPStatusHelp: "Nunca compartiremos su correo electrónico con nadie más.",
			formContentType: "Tipo de Contenido de Respuesta",
			formContentTypeHelp: "El encabezado Content-Type que se enviará con la respuesta.",
			formCharset: "Juego de caracteres",
			formCharsetHelp: "El juego de caracteres utilizado para codificar / decodificar su carga útil.",
			formHeaders: "Encabezados HTTP",
			formHeadersHelp:
				"Personalice los encabezados HTTP enviados en la respuesta. Defina los encabezados como un objeto JSON.",
			formResponseBody: "Cuerpo de Respuesta HTTP",
			formSubmit: "Generar mi respuesta HTTP",
			tableHeaderID: "ID",
			tableHeaderName: "Nombre",
			tableHeaderDescription: "Descripción",
			tableHeaderDate: "Fecha",
			tableHeaderAction: "Acciones",
			tableAlertStorage: "Alerta: Esta data es guardada en nuestro servicio!",
			tableNoContent: "NO CONTENIDO",
			tableDeleteModalTitle: "¿Estás segur@ de que quieres eliminar el punto final?",
			tableDeleteModalBody: "Endpoint a eliminar: ",
			tableDeleteModalClose: "Cerrar",
			tableDeleteModalAction: "Borrar",
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
