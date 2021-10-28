async function tempo(request, response) {
    const apiSectet = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSectet}`);
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.total_subscribers;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos
    })
}

export default tempo;