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
            <div className="header-listings">
                <div className="title">
                    <h2>Listings</h2>
                </div>
                <div className="search">
                    <div className="search-team">
                        <div className="shield">Sh</div>
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
                    <div className="search-player">
                        <i class='fas fa-search'></i>
                        <input type="text" placeholder="Type a name"/>
                    </div>
                </div>
            </div>
            <div className="lists-players">
                <h3>Listado</h3>
                <div className="container-players">
                    {
                        players.map(item => (
                            <div className="item" key={item.id}>
                                {item.lastname}, {item.name} - {item.age} años
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Listings;