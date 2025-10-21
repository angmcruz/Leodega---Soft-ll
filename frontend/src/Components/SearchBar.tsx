import './SearchBar.css'

const SearchBar = () =>{
    return(
        <div className="search-bar">
            <div className="search-item">
                <i className="bx bx-map">
                    <input type="text" placeholder='Ubicación' />
                </i>
            </div>

            <div className="search-item">
                <i className="bx bx-calendar">
                    <input type="date" />
                </i>
            </div>

            <div className="search-item">
                <i className="bx bx-time">
                    <input type="date" />
                </i>
            </div>

            <button className="btn-search">Buscar</button>
        </div>
    )
}

export default SearchBar