import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import LanguageSwitcher from "../../../components/LanguageSwitcher";
import { RootState } from "../../../redux/store";

const Home = () => {
  const { t } = useTranslation();
  const message = useSelector((state:RootState)=>state.language.language);
  return (
    <>
      <h1>{t("welcome")}</h1>
      <p>Above message is in {message==='en' ? 'English' : 'France'}</p>
      <LanguageSwitcher />
    </>
  );
};

export default Home;