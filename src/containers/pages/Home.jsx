function Home() {
    const styles = {
        container: {
            backgroundColor: '#ECE2C6',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Arial, sans-serif'
        },
        card: {
            backgroundColor: '#fff',
            padding: '50px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(199,103,26,0.15)',
            textAlign: 'center',
            border: '2px solid #F28C28',
            width: '350px'
        },
        titleWelcome: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#F28C28',
            marginBottom: '10px'
        },
        titleBrand: {
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#003366', // azul profesional
            marginBottom: '30px'
        },
        button: {
            padding: '12px 20px',
            backgroundColor: '#F28C28',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            width: '100%'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.titleWelcome}>Bienvenido a</h1>

                <h2 style={styles.titleBrand}>Zuaque CIRAT</h2>

                <button style={styles.button}>
                    Ingresar
                </button>
            </div>
        </div>
    );
}

export default Home;
