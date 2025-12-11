import error404 from '../../assets/error404.png';

function Error404() {
    const styles = {
        container: {
            backgroundColor: '#ECE2C6',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        },
        image: {
            width: '400px',
            marginBottom: '20px',
        },
        text: {
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#2B62A7',
            fontFamily: 'Arial, sans-serif',
        }
    };

    return (
        <div style={styles.container}>
            <img src={error404} alt="Error 404" style={styles.image} />
            <p style={styles.text}>Página no encontrada</p>
        </div>
    );
}

export default Error404;
