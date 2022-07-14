import { useEffect, useState } from 'react';

function Popular() {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        getPopularRec();
    }, []);

    const getPopularRec = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        const data = await api.json();
        setPopular(data.recipes);
    };

    return (
        <div>
            {popular.map((rec) => {
                return (
                    <div key={rec.id}>
                        <p>{rec.title}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Popular;
