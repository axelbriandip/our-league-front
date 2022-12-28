const Listings = () => {
    return (
        <div className="container-listings">
            <h2>Listados de jugadores</h2>
            <div className="header-listings">
                <div className="shield">
                    {/* img shield */}
                </div>
                <div className="name-team">
                    <select name="">
                        <option value="0">Seleccionar equipo</option>
                        <option value="1">Olimpo</option>
                        <option value="2">Nápoli</option>
                        <option value="3">Defensores del eco</option>
                        <option value="4">Recolección</option>
                    </select>
                </div>
            </div>
            <div className="lists-players">
                Lists players
            </div>
        </div>
    );
};

export default Listings;