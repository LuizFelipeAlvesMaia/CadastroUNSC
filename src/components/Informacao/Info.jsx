import './Info.css'
import React from 'react'
import Main from '../templates/Main'
import banner from '../../Assets/imgs/halo infinite.png'
import banner2 from '../../Assets/imgs/hpb.jpg'


export default props =>
    <Main icon="book" title="Informações"
        subtitle="Aqui você pode conhecer mais sobre o universo de HALO e toda 
        franquia de jogos que revolucionou o gênero FPS">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Conheça o universo de Halo</h1>
                <p class="lead">Conheça os proximos lançamentos da franquia e toda sua história.</p>
            </div>
        </div>
        <hr />
        <div class="card mb-3">
            <img src={banner} alt="Imagem do card" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">HALO INFINTE</h5>
                <p className="card-text">O próximo capítulo da grande saga do Spartan John promete
                ser épico e retornar as raízes dos primeiros jogos, Halo Infinte é o mais novo
                título da 343 Industries e promete ser a experiência mais Halo que os fãs já tiveram
                </p>
                <p className="card-text"> Acesse mais informações no site oficial do game</p>
                <a href="https://www.halowaypoint.com/pt-br/games/halo-infinite" class="btn btn-primary">Visitar</a>
            </div>
        </div>

        <br />

        <div class="card mb-3">
            <img src={banner2} alt="Imagem do card" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Halo Project Brasil</h5>
                <p className="card-text">Se você já jogou ou ouviu falar de Halo e quer
                saber mais de toda história, bom eu tenho uma ótima dica para você. Alguns fãs brasileiros
                traduziram todo conteúdo do jogo e fizeram uma enciclopédia com tudo sobre o
                universo da franquia, 100% localizado em português.

                </p>
                <p className="card-text"> Pra acessar o site é só clicar no botão abaixo</p>
                <a href="https://haloprojectbrasil.com.br/" className="btn btn-primary">Visitar</a>
            </div>
        </div>
    </Main>




