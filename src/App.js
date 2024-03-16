import logo from "./logo.svg";
import "./App.css";
import "./i18n";
import { useTranslation } from "react-i18next";
import i18next from "./i18n";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> {t("save_reload")}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("learn_react")}
        </a>
        <h2>{i18next.language}</h2>
        <div>
          <button
            className="btn-react"
            disabled={i18next.language === "en"}
            onClick={() => i18next.changeLanguage("en")}
          >
            English
          </button>
          <button
            className="btn-react"
            disabled={i18next.language === "uk"}
            onClick={() => i18next.changeLanguage("uk")}
          >
            Ukrainian
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
