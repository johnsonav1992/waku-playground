export const HomePage = async () => {
    const imgData = await fetch( 'https://api.thecatapi.com/v1/images/search' ).then( res => res.json() );

    const [ catPic ] = imgData;

    return (
        <div>
            <img
                src={ catPic.url }
                width={ catPic.width }
                height={ catPic.height }
            />
        </div>
    );
};
