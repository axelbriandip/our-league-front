import { useEffect } from "react";

import { getPlayersThunk } from '../store/slices/players.slice';
import { useDispatch, useSelector } from 'react-redux';

const Listings = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlayersThunk())
    }, [])

    const players = useSelector(state => state.playersSlice);
    console.log(players);

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
                <h3>Listado</h3>
                <div className="container-players">
                    {
                        players.map(item => (
                            <div className="item" key={item.id}>
                                {item.name} - {item.age} años
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Listings;