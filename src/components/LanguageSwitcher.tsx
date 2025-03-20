import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button
        onClick={() => {
          changeLanguage("en");
          navigate("/en/dashboard");
        }}
      >
        English
      </button>
      <button
        onClick={() => {
          changeLanguage("fr");
          navigate("/fr/dashboard");
        }}
      >
        Français
      </button>
    </div>
  );
};

export default LanguageSwitcher;
