import { useEffect } from "react";

import { getPlayersThunk } from '../store/slices/players.slice';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamsThunk } from "../store/slices/teams.slice";

import FormAddPlayer from "./FormAddPlayer";

const Listings = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlayersThunk());
        dispatch(getTeamsThunk());
    }, [])

    const players = useSelector(state => state.playersSlice);
    const teams = useSelector(state => state.teamsSlice);

    return (
        <div className="container-listings">
            <div className="header-listings">
                <div className="title">
                    <h2><strong>Listas de buena fe</strong></h2>
                </div>
                <div className="search">
                    <div className="search-team">
                        <div className="shield">
                            <i className="fas fa-shield"></i>
                        </div>
                        <select className="form-select" style={{ width: '16rem' }} aria-label="Default select example">
                            <option selected>Todos los clubes</option>
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
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">🔎</span>
                            <input type="text" className="form-control" placeholder="Ingresar DNI.." aria-label="Username" aria-describedby="addon-wrapping" style={{width: '8rem'}}/>
                        </div>
                    </div>
                </div>
                <div className="add">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Agregar jugador
                    </button>
                </div>
                {/* start modal */}
                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar jugador</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* body */}
                        <FormAddPlayer/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Guardar</button>
                    </div>
                    </div>
                </div>
                </div>
                {/* end modal */}
            </div>
            <div className="lists-players">
                <div className="container-players">
                    {
                        players.map(item => (
                            <div key={item.id} className="card" style={{ width: '18rem' }}>
                                <div className="card-header">
                                    <i className="fas fa-child"></i>
                                    {item.lastname}, {item.name}
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">39.318.614</li>
                                    <li className="list-group-item">30/11/1994 ({item.age} años)</li>
                                    <li className="list-group-item">Sin sanción</li>
                                    <li className="list-group-item">Pase: Defensores del eco</li>
                                    <li className="list-group-item">Préstamo: -</li>
                                    <li className="list-group-item">Editar Eliminar</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Listings;