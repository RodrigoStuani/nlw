import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import {Map, TileLayer, Marker} from 'react-leaflet';
import api from '../../services/api';

import './style.css';
import logo from '../../assets/logo.svg';

const CreatePoint = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        api.get('items').then(response =>{
            setItems(response.data);
        });
    }, []);

    return (
        <div id="page-create-point" >
            <header>
                <img src={logo} alt="Ecoleta" />
                <Link to="/" >
                    <FiArrowLeft /> 
                    Voltar para home
                </Link>
            </header>

            <form >
                <h1>Cadastro do <br/> ponto de coleta</h1>
                <fieldset>
                    <legend>
                        <h2>Dados</h2> 
                    </legend>
                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input 
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                            />
                        </div>
                    </div>
                </fieldset>

                <fieldset>                    
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span> 
                    </legend>

                    <Map center={[-27.6632695, -48.6908038]} zoom={15}> 
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-27.66326954, -48.6908038]} />
                    </Map>
                    
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select 
                                name="uf" 
                                id="uf">
                                <option value="0">Selecione uma UF</option>        
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select 
                                name="city" 
                                id="city">
                                <option value="0">Selecione uma cidade</option>        
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Ítens de coleta</h2> 
                        <span>Selecione um ou mais ítens abaixo</span> 
                    </legend>

                    <ul className="items-grid">
                        <li>
                            <img 
                                src="http://localhost:3030/uploads/lampadas.svg" 
                                alt="Lâmpadas"                                
                            />
                            <span>Lâmpadas</span>
                        </li>
                        <li className="selected">
                            <img 
                                src="http://localhost:3030/uploads/baterias.svg" 
                                alt="Pilhas e baterias"
                            />
                            <span>Pilhas e baterias</span>
                        </li>
                        <li>
                            <img 
                                src="http://localhost:3030/uploads/papeis-papelao.svg" 
                                alt="Papéis e papelão"
                            />
                            <span>Papéis e papelão</span>
                        </li>
                        <li>
                            <img 
                                src="http://localhost:3030/uploads/eletronicos.svg" 
                                alt="Resíduos eletrônicos"
                            />
                            <span>Resíduos eletrônicos</span>
                        </li>
                        <li>
                            <img 
                                src="http://localhost:3030/uploads/organicos.svg"
                                alt="Resíduos orgânicos"
                            />
                            <span>Resíduos orgânicos</span>
                        </li>
                        <li>
                            <img 
                                src="http://localhost:3030/uploads/oleo.svg" 
                                alt="Óleo de cozinha"
                            />
                            <span>Óleo de cozinha</span>                            
                        </li>
                    </ul>
                </fieldset>
                <button 
                    type="submit">Cadastrar ponto de coleta
                </button>
            </form>
        </div>
    );
}

export default CreatePoint;