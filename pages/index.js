import Link from 'next/link';

function Home(){
    return(<div>
        <h4>Home</h4>

        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
        <br></br> 

        <Link href="/tempo">
            <a>Acessar página Tempo</a>
        </Link>
        <br></br>

        <Link href="/api/tempo">
            <a>Acessar página Tempo da api</a>
        </Link>
        <br></br>

        <Link href="/produtos/30">
            <a>Acesse /produtos/30, altere o número para qualquer valor no endereço link</a>
        </Link>
        <br></br>           
    </div>)
}

export default Home