import { useTranslation } from 'react-i18next';
import { LanguageButton } from './StyledComponents';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fi' : 'en';
    i18n.changeLanguage(newLang);
  };

  const oppositeLang = i18n.language === 'en' ? 'FI' : 'EN';

  return <LanguageButton onClick={changeLanguage}>{oppositeLang}</LanguageButton>;
};
