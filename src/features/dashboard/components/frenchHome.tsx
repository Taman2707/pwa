import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { changeSelectedLanguage, LanguageState } from "../../../redux/slices/language/language.slice";
import { useDispatch, useSelector } from "react-redux";

const FrenchHome = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedLanguageSelector = useSelector((state: { language: LanguageState }) => state.language.value);

  return (
    <>
      <h1>{t("welcome")}</h1>
      <h2>Selected Language: {selectedLanguageSelector}</h2>
      <button
        onClick={() => {
          changeLanguage("en");
          dispatch(changeSelectedLanguage("english"));
          navigate("/en/dashboard");
        }}
      >
        Go To English
      </button>
    </>
  );
};

export default FrenchHome;
