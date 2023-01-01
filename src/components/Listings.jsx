import { useEffect } from "react";

import { getPlayersThunk } from '../store/slices/players.slice';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamsThunk } from "../store/slices/teams.slice";

const Listings = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlayersThunk());
        dispatch(getTeamsThunk());
    }, [])

    const players = useSelector(state => state.playersSlice);
    const teams = useSelector(state => state.teamsSlice);

    // console.log(players);
    // console.log(teams);

    return (
        <div className="container-listings">
            <h2>Listados de jugadores</h2>
            <div className="header-listings">
                <div className="shield">
                    {/* img shield */}
                </div>
                <div className="name-team">
                    <select name="">
                        {
                            teams.map(item => (
                                <option value={`${item.id}`} key={item.id}>
                                    {item.name}
                                </option>
                            ))
                        }
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