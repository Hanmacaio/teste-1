export async function getStaticPaths() {
    return{
        paths:[{
            params:{
                id: '1'
            }
        },{
            params:{
                id: '2'
            }
        },{
            params:{
                id: '3'
            }
        },{
            params:{
                id: '30'
            }
        }],
        fallback: 'blocking' //false = 404, não aceita página // true = aceita tudo  // 'blocking' bloquei a requisição da página até gerar a página final
    }
}

export async function getStaticProps(context) {
    await delay(5000);
    const id = context.params.id;

    return{
        props: {
            id: id
        }
    }
}

function Produtos(props) {
    return <div>Id do produto: {props.id}</div>
}

export default Produtos;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}