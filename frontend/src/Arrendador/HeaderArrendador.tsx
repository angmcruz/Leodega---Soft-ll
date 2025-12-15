import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { Bell, ChevronDown } from "lucide-react";
import banderaEs from "../img/bandera.jpg";
import banderaEn from "../img/banderaEn.png";
import perfil from "../img/perfil.jpg";
import { loadTranslations } from "../loadTranslations";

export const HeaderArrendador: React.FC = () => {
  const { t } = useTranslation();

  const changeLanguage = async (lang: "es" | "en"): Promise<void> => {
    await fetch("/language", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": (
          document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement
        ).content,
      },
      body: JSON.stringify({ lang }),
      credentials: "same-origin",
    });

    await loadTranslations();
  };

  const isEs = i18n.language === "es";

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-3.5 flex items-center justify-between h-[72px]">

      {/* SEARCH */}
      <div className="flex-1 max-w-md">
        <input
          type="text"
          placeholder={t("search")}
          className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
        />
      </div>

      <div className="flex items-center gap-6">

        {/* NOTIFICACIONES */}
        <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
            9
          </span>
        </button>

        {/* IDIOMA */}
        <div className="relative group">
          <button className="flex items-center gap-2 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors">
            <img
              src={isEs ? banderaEs : banderaEn}
              className="w-7 h-5 rounded object-cover"
            />
            <span className="text-gray-700 text-sm font-medium">
              {t("language")}
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border rounded-lg shadow-lg w-36 z-50">
            <button
              onClick={() => changeLanguage("es")}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
            >
              🇪🇸 Español
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
            >
              🇺🇸 English
            </button>
          </div>
        </div>

        {/* PERFIL */}
        <button className="flex items-center gap-3 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors">
          <img
            src={perfil}
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="text-sm font-medium text-gray-800">
              Melissa Cruz
            </p>
            <p className="text-xs text-gray-500">
              {t("role_landlord")}
            </p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>

      </div>
    </header>
  );
};
