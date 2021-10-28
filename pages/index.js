import Link from 'next/link';

function Home(){
    return(<div>
        <h4>Home</h4>

        <Link href="/sobre">
            <a>Acessar página Sobre\n</a>
        </Link>

        <Link href="/tempo">
            <a>Acessar página Tempo\n</a>
        </Link>

        <Link href="/api/tempo">
            <a>Acessar página Tempo da api\n</a>S
        </Link> 
    </div>)
}

export default Home