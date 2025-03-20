import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../../components/LanguageSwitcher";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("welcome")}</h1>
      <LanguageSwitcher />
    </>
  );
};

export default Home;
