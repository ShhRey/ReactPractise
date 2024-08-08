

export default function SearchLoc({ search, setSearch, handleSearch }) {
    return (
        <div className="search-container">
            <input type="text" name="search" placeholder="Enter Any City" value={search} onChange={(e) => setSearch(e.target.value) } />
            <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
    )
}