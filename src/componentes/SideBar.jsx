export default function SideBar() {

    const usuario = {
        img: "assets/img/catanacomics.svg",
        nomeLogin: 'catanacomics',
        nomeUsuario: 'Catana',
    }

    const sugestoes = [
        {
            img: "assets/img/bad.vibes.memes.svg",
            usuario: "bad.vibes.memes",
        },
        {
            img: "assets/img/chibirdart.svg",
            usuario: "chibirdart",
        },
        {
            img: "assets/img/razoesparaacreditar.svg",
            usuario: "razoesparaacreditar",
        },
        {
            img: "assets/img/adorable_animals.svg",
            usuario: "adorable_animals",
        },
        {
            img: "assets/img/smallcutecats.svg",
            usuario: "smallcutecats",
        },
    ]
    return (
        <div class="sidebar">
            <Usuario img={usuario.img} nomeLogin={usuario.nomeLogin} nomeUsuario={usuario.nomeUsuario} />
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestoes.map(sugestao =>
                    <Sugestao usuario={sugestao.usuario} img={sugestao.img} />)}
            </div>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}

function Sugestao(props) {
    const { img, usuario } = props;
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={img} />
                <div class="texto">
                    <div class="nome">{usuario}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

const Usuario = (props) => {
    const { img, nomeLogin, nomeUsuario } = props;
    return (
        <div class="usuario">
            <img src={img} />
            <div class="texto">
                <strong>{nomeLogin}</strong>
                {nomeUsuario}
            </div>
        </div>
    );
}
