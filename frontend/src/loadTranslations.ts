import i18n from "./i18n";

interface TranslationResponse {
  locale: string;
  translations: Record<string, string>;
}

export const loadTranslations = async (): Promise<void> => {
  const res = await fetch("/translations", {
    credentials: "same-origin",
  });

  const data: TranslationResponse = await res.json();

  i18n.addResourceBundle(
    data.locale,
    "translation",
    data.translations,
    true,
    true
  );

  i18n.changeLanguage(data.locale);
};
