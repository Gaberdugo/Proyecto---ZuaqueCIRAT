function Login() {
    const styles = {
        container: {
            backgroundColor: '#ECE2C6',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontFamily: 'Arial, sans-serif'
        },
        card: {
            backgroundColor: '#fff',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(199,103,26,0.15)', // sombra naranja suave
            width: '350px',
            textAlign: 'center',
            border: '2px solid #F28C28' // borde naranja
        },
        title: {
            marginBottom: '20px',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#F28C28' // naranja principal
        },
        input: {
            width: '100%',
            padding: '12px',
            margin: '10px 0',
            borderRadius: '8px',
            border: '2px solid #F28C28', // naranja
            fontSize: '16px',
            outlineColor: '#3B82F6', // azul en el focus
            backgroundColor: '#ECE2C6' // fondo del input
        },
        button: {
            width: '100%',
            padding: '12px',
            backgroundColor: '#F28C28', // botón naranja
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            marginTop: '10px',
            cursor: 'pointer'
        },
        registerText: {
            marginTop: '15px',
            color: '#3B82F6', // azul
            cursor: 'pointer',
            fontWeight: 'bold'
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Iniciar Sesión</h2>

                <input type="text" placeholder="Usuario" style={styles.input} />
                <input type="password" placeholder="Contraseña" style={styles.input} />

                <button style={styles.button}>Entrar</button>

                <p style={styles.registerText}>Registrarme</p>
            </div>
        </div>
    );
}

export default Login;
