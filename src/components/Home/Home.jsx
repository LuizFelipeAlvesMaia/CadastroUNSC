import React from 'react'
import flag from '../../Assets/imgs/unsc2.png'
import Main from '../templates/Main'
import './Home.css'

export default props =>
    <Main icon="home" title="Inicio"
        subtitle="Sistema de acesso naval para controle da organização de 
                intelgêcia naval (ONI) e do Comando Espacial da Nações Unidas (UNSC).">
        <div className='display-4'>Bem vindo soldado!</div>
        <hr />
        <p className="mb-0">Este é o sistema de cadastro naval de soldados UNSC,
                desenvolvido com React</p>
        <hr />

        <div className="intro row">
            <a className="flag col-sm-3">
                    <img src={flag} className=" img-fluid" aling="left" />
            </a>
            <h1 className="lead align-middle col-sm-9" >
            
        <strong> O Comando Espacial das Nações Unidas (United Nations Space Command – UNSC)</strong> é
         a agência militar, científica e exploratória do Governo Unificado da Terra (Unified Earth Government – UEG).
         A UNSC foi formada no século XXII, em uma época onde restos de velhas ideologias culturais
         batalhavam pela supremacia no Sistema Solar. A agência servia primariamente como supervisora
         das operações militares da ONU no espaço. Após iniciar uma massiva campanha de propaganda militar
         por várias colônias através da UNSC, a ONU derrotou as forças comunistas e fascistas em um conflito
         conhecido como a Guerra Interplanetária.</h1>
         <h2 className="lead align-middle col-sm-9"
         >
                 Agora a você será nossa ajuda na luta da humanidade contra as novas ameaças
                 alienigenas que tentam eliminar toda vida da galaxia. Os covenant, banidos e 
                 aliados de Cortana precisam ser impedidos, por isso contamos com você junto
                 aos Spartans para impedir os planos de nossos inimigos.
         </h2>

        </div>


    </Main>
