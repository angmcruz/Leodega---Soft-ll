interface BodegaCardProps {
    id: number;
    title: string;
    direction: string;
    city: string;
    size: string;
    publication_status: string;
    storage_type: string;
    room_type: string;
    image?: string;
}

const BodegaCard = ({ 
    id, 
    title, 
    image 
}: BodegaCardProps) => {
    const defaultImage = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop";

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-120 overflow-hidden">
                <img 
                    src={image || defaultImage} 
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-[18px] font-medium text-gray-900 ">{title}</h3>
                
                <p className="text-[16px] font-medium text-blue-600">$24.59</p>
                
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center text-yellow-400 text-lg">
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                        ))}
                    </div>
                    <span className="text-sm text-gray-500">(63)</span>
                </div>

                <button className="text-[11px] px-6 bg-[#ebf0fa] text-black py-2.5 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                    Ver Bodega
                </button>
            </div>
        </div>
    );
};

export default BodegaCard;