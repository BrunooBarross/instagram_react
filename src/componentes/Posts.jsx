export default function Posts() {
    const dados = [
        {
            nomeUsuario: 'meowed',
            imagemUsuario: 'assets/img/meowed.svg',
            imagemPost: 'assets/img/gato-telefone.svg',
            curtidoPor: 'respondeai',
            perfilCurtida: 'assets/img/respondeai.svg',
            qtdCurtidas: 101.523,
        },
        {
            nomeUsuario: 'barked',
            imagemUsuario: 'assets/img/barked.svg',
            imagemPost: 'assets/img/dog.svg',
            curtidoPor: 'adorable_animals',
            perfilCurtida: 'assets/img/adorable_animals.svg',
            qtdCurtidas: 99.159,
        }
    ];

    return (
        <div class="posts">
            {dados.map(dado =>
                <Post nomeUsuario={dado.nomeUsuario}
                    imagemUsuario={dado.imagemUsuario}
                    imagemPost={dado.imagemPost}
                    perfilCurtida={dado.perfilCurtida}
                    curtidoPor={dado.curtidoPor}
                    qtdCurtidas={dado.qtdCurtidas}
                />
            )}
        </div>
    );
}

function Post(props) {
    const {nomeUsuario, imagemUsuario, imagemPost, perfilCurtida, curtidoPor, qtdCurtidas} = props;
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={imagemUsuario} />
                    {nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={imagemPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={perfilCurtida} />
                    <div class="texto">
                        Curtido por <strong>{curtidoPor}</strong> e <strong>outras {qtdCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}


