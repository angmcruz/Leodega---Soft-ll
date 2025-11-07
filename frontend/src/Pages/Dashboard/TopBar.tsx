import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between bg-white border-b px-6 py-3">
      <div className="relative w-80">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Bell className="text-gray-500" size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
            9
          </span>
        </div>

        <div className="flex items-center gap-2 border px-2 py-1 rounded-md">
          <img src="https://flagcdn.com/w20/es.png" alt="ES" />
          <span className="text-sm">Spanish</span>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="/user.jpg"
            alt="user"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-sm">
            <p className="font-semibold">Melissa Cruz</p>
            <p className="text-gray-500 text-xs">Arrendador</p>
          </div>
        </div>
      </div>
    </header>
  );
}
