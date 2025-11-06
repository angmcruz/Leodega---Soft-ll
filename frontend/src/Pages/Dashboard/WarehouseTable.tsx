import StatusBadge from "./StatusBadge";

const warehouses = [
  { id: 1, name: "Bodega1", number: 1, phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", active: true },
  { id: 2, name: "Bodega1", number: 2, phone: "(205) 555-0100", email: "jane@microsoft.com", country: "Iran", active: false },
  { id: 3, name: "Bodega1", number: 3, phone: "(302) 555-0107", email: "jane@microsoft.com", country: "Iran", active: false },
  { id: 4, name: "Bodega1", number: 4, phone: "(252) 555-0126", email: "jane@microsoft.com", country: "Iran", active: true },
  { id: 5, name: "Bodega1", number: 5, phone: "(629) 555-0129", email: "jane@microsoft.com", country: "Réunion", active: true },
  { id: 6, name: "Bodega1", number: 6, phone: "(406) 555-0120", email: "jane@microsoft.com", country: "Réunion", active: true },
  { id: 7, name: "Bodega1", number: 7, phone: "(208) 555-0112", email: "jane@microsoft.com", country: "Brazil", active: true },
  { id: 8, name: "Bodega1", number: 8, phone: "(704) 555-0127", email: "jane@microsoft.com", country: "United States", active: false },
];

export default function WarehouseTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Bodegas</h2>

        <div className="flex items-center gap-4">
          <select className="border border-gray-300 rounded-lg text-sm px-3 py-2 text-gray-600 focus:outline-none focus:ring-1 focus:ring-primary">
            <option>Sort by : Newest</option>
            <option>Oldest</option>
          </select>
          <button className="bg-primary hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
            Añadir Nueva Bodega
          </button>
        </div>
      </div>

      <div className="border-t mb-4"></div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="text-gray-500 border-b border-gray-200">
            <tr className="text-left">
              <th className="py-3 px-4 font-medium">Name Bodega</th>
              <th className="py-3 px-4 font-medium">Bodega</th>
              <th className="py-3 px-4 font-medium">Phone Number</th>
              <th className="py-3 px-4 font-medium">Email</th>
              <th className="py-3 px-4 font-medium">Country</th>
              <th className="py-3 px-4 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {warehouses.map((w, index) => (
              <tr
                key={w.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100 transition-colors border-b border-gray-200`}
              >
                <td className="py-4 px-4 text-gray-700">{w.name}</td>
                <td className="py-4 px-4 text-gray-700 text-center">{w.number}</td>
                <td className="py-4 px-4 text-gray-700">{w.phone}</td>
                <td className="py-4 px-4 text-gray-700">{w.email}</td>
                <td className="py-4 px-4 text-gray-700">{w.country}</td>
                <td className="py-4 px-4">
                  <StatusBadge active={w.active} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t my-4"></div>

      <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
        <p>Showing data 1 to 8 of 256K entries</p>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 border rounded-md hover:bg-gray-100">&lt;</button>
          <button className="px-2 py-1 bg-primary text-white rounded-md">1</button>
          <button className="px-2 py-1 border rounded-md hover:bg-gray-100">2</button>
          <button className="px-2 py-1 border rounded-md hover:bg-gray-100">3</button>
          <span>...</span>
          <button className="px-2 py-1 border rounded-md hover:bg-gray-100">40</button>
          <button className="px-2 py-1 border rounded-md hover:bg-gray-100">&gt;</button>
        </div>
      </div>
    </div>
  );
}
