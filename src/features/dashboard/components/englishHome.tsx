import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const EnglishHome = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <h1>{t("welcome")}</h1>
      <button
        onClick={() => {
          changeLanguage("fr");
          navigate("/fr/dashboard");
        }}
      >
        Go To French
      </button>
    </>
  );
};

export default EnglishHome;
