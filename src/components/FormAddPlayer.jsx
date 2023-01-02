import { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { getTeamsThunk } from "../store/slices/teams.slice";

const FormAddPlayer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeamsThunk());
    }, [])

    const teams = useSelector(state => state.teamsSlice);

    return (
        <div className="form-add-player">
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="lastname" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastname" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="dni" className="form-label">DNI</label>
                    <input type="integer" className="form-control" id="dni" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="birthday" className="form-label">Fecha de nacimiento</label>
                    <input type="date" className="form-control" id="birthday" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="pass" className="form-label">Pase</label>
                    <select className="form-select" style={{ width: '100%' }} aria-label="Default select example">
                        <option selected disabled>Seleccionar club</option>
                        {
                            teams.map(item => (
                                <option value={`${item.id}`} key={item.id}>
                                    {item.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label for="position" className="form-label">Cargo</label>
                    <select class="form-select" id="position" aria-label="Default select example">
                        <option value="1">Jugador</option>
                        <option value="2">Presidente</option>
                        <option value="3">Vicepresidente</option>
                        <option value="3">Secretario</option>
                        <option value="3">Tesorero</option>
                        <option value="3">Director técnico</option>
                        <option value="3">Ayudante técnico</option>
                        <option value="3">Preparador físico</option>
                        <option value="3">Prensa</option>
                        <option value="3">Delegado</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default FormAddPlayer;