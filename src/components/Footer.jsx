import footerImg from '../assets/LogoCIRAT2.png';

function Footer() {
    const styles = {
        container: {
            width: '100%',
            padding: '10px 0',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            justifyContent: 'center',
            borderTop: '3px solid #C7671A',
            marginTop: '-115px',
            overflowX: 'hidden'
        },
        inner: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '900px',
            position: 'relative'
        },

        // LADO IZQUIERDO — ZUAQUE CIRAT
        leftBox: {
            position: 'absolute',
            left: -10,
            fontSize: '22px',
            fontWeight: '600',
            color: '#475c94ff'
        },

        // LOGO CENTRADO
        image: {
            height: '100px',
            margin: '0 auto'
        },

        // LADO DERECHO — CONTACTO
        rightBox: {
            position: 'absolute',
            right: -80,
            fontSize: '20px',
            color: '#475c94ff',
            textAlign: 'right',
            lineHeight: '1.5'
        }
    };

    return (
        <footer style={styles.container}>
            <div style={styles.inner}>
                
                {/* IZQUIERDA */}
                <div style={styles.leftBox}>
                    Zuaque CIRAT
                </div>

                {/* LOGO CENTRADO */}
                <img src={footerImg} alt="Footer" style={styles.image} />

                {/* DERECHA */}
                <div style={styles.rightBox}>
                    entrenador.cirat@tachyonweb.com <br />
                    www.cirat.com.co
                </div>

            </div>
        </footer>
    );
}

export default Footer;



