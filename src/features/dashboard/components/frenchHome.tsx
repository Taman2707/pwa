import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const FrenchHome = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <h1>{t("welcome")}</h1>
      <button
        onClick={() => {
          changeLanguage("en");
          navigate("/en/dashboard");
        }}
      >
        Go To English
      </button>
    </>
  );
};

export default FrenchHome;
