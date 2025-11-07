import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface Bodega {
    id: number;
    nameBodega: string;
    bodega: number;
    phoneNumber: string;
    email: string;
    country: string;
    status: 'Active' | 'Inactive';
    }

const Bodegas = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('Newest');

    const bodegas: Bodega[] = [
        { id: 1, nameBodega: 'Bodega1', bodega: 1, phoneNumber: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
        { id: 2, nameBodega: 'Bodega1', bodega: 2, phoneNumber: '(205) 555-0100', email: 'jane@microsoft.com', country: 'Iran', status: 'Inactive' },
        { id: 3, nameBodega: 'Bodega1', bodega: 3, phoneNumber: '(302) 555-0107', email: 'jane@microsoft.com', country: 'Iran', status: 'Inactive' },
        { id: 4, nameBodega: 'Bodega1', bodega: 4, phoneNumber: '(252) 555-0126', email: 'jane@microsoft.com', country: 'Iran', status: 'Active' },
        { id: 5, nameBodega: 'Bodega1', bodega: 5, phoneNumber: '(629) 555-0129', email: 'jane@microsoft.com', country: 'Réunion', status: 'Active' },
        { id: 6, nameBodega: 'Bodega1', bodega: 6, phoneNumber: '(406) 555-0120', email: 'jane@microsoft.com', country: 'Réunion', status: 'Active' },
        { id: 7, nameBodega: 'Bodega1', bodega: 7, phoneNumber: '(208) 555-0112', email: 'jane@microsoft.com', country: 'Brazil', status: 'Active' },
        { id: 8, nameBodega: 'Bodega1', bodega: 8, phoneNumber: '(704) 555-0127', email: 'jane@microsoft.com', country: 'United States', status: 'Inactive' },
    ];

    const totalPages = 40;

    return (
        <div className="pl-8 pt-5 pr-8">
            <div className="mb-2">
                <h1 className="text-2xl font-bold text-gray-900">Bodegas</h1>
            </div>

            <div className="flex items-center justify-between mb-6">
                <div className="relative w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                </div>

                <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Short by:</span>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <span className="text-sm font-medium">{sortBy}</span>
                    <ChevronDown className="w-4 h-4" />
                    </button>
                </div>

                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
                    Añadir Nueva Bodega
                </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Name Bodega
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Bodega
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Phone Number
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Email
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Country
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Status
                    </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {bodegas.map((bodega) => (
                    <tr key={bodega.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">{bodega.nameBodega}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{bodega.bodega}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{bodega.phoneNumber}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{bodega.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{bodega.country}</td>
                        <td className="px-6 py-4">
                        <span
                            className={`inline-flex px-3 py-1 text-xs font-medium rounded-md ${
                            bodega.status === 'Active'
                                ? 'bg-teal-100 text-teal-700'
                                : 'bg-red-100 text-red-700'
                            }`}
                        >
                            {bodega.status}
                        </span>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>

                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                    Showing data 1 to 8 of 256K entries
                </div>
                <div className="flex items-center gap-2">
                    <button className="px-3 py-1 rounded hover:bg-gray-100">
                    &lt;
                    </button>
                    <button className="px-3 py-1 bg-purple-600 text-white rounded">1</button>
                    <button className="px-3 py-1 rounded hover:bg-gray-100">2</button>
                    <button className="px-3 py-1 rounded hover:bg-gray-100">3</button>
                    <button className="px-3 py-1 rounded hover:bg-gray-100">4</button>
                    <span className="px-2">...</span>
                    <button className="px-3 py-1 rounded hover:bg-gray-100">{totalPages}</button>
                    <button className="px-3 py-1 rounded hover:bg-gray-100">
                    &gt;
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Bodegas;