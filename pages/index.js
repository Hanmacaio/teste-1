import Link from 'next/link';

function Home(){
    return(<div>
        <h4>Home</h4>

        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>

        <Link href="/tempo">
            <a>Acessar página Tempo</a>
        </Link>

        <Link href="/api/tempo">
            <a>Acessar página Tempo da api</a>
        </Link> 
    </div>)
}

export default Home