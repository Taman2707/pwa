import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLanguage } from "../redux/slices/languageSlice";

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(selectLanguage('en'));
          changeLanguage("en");
          navigate("/en/home");
        }}
      >
        English
      </button>
      <button
        onClick={() => {
          dispatch(selectLanguage('fr'));
          changeLanguage("fr");
          navigate("/fr/home");
        }}
      >
        Français
      </button>
    </div>
  );
};

export default LanguageSwitcher;