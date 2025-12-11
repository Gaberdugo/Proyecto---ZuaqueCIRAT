function Loadinfo() {

    const styles = {
        page: {
            backgroundColor: '#ECE2C6',
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            overflowY: 'auto',
            padding: '40px 0',
            paddingBottom: '140px',
            fontFamily: 'Arial, sans-serif',
        },

        mainBox: {
            backgroundColor: '#FFF',
            width: '90%',
            padding: '30px',
            borderRadius: '20px',
            border: '2px solid #000',
        },

        topTitle: {
            fontSize: '26px',
            fontWeight: 'bold',
            paddingBottom: '5px',
            borderBottom: '3px solid #000',
            marginBottom: '25px',
        },

        row: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center'
        },

        imgBox: {
            width: '45%',
            backgroundColor: '#D9D9D9',
            padding: '20px',
            borderRadius: '20px',
            border: '4px solid #8A5CC7',
        },

        objectImg: {
            width: '100%',
            borderRadius: '10px'
        },

        buttonsBox: {
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
        },

        button: {
            backgroundColor: '#F28C28',
            padding: '12px',
            fontSize: '14px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '4px 4px 0px #475C94',
            textAlign: 'left',
            paddingLeft: '20px',
            width: '230px'
        },

        deleteButton: {
            backgroundColor: '#D00000',   // 🔥 ROJO
            color: '#FFF',                // 🔥 TEXTO BLANCO
            padding: '12px',
            fontSize: '14px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '4px 4px 0px #475C94',
            textAlign: 'left',
            paddingLeft: '20px',
            width: '230px'
        },

        inputsSection: {
            marginTop: '40px',
            backgroundColor: '#475C94',
            padding: '30px',
            borderRadius: '20px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            color: '#FFF'
        },

        inputBox: {
            display: 'flex',
            flexDirection: 'column',
            fontSize: '15px',
            fontWeight: 'bold'
        },

        input: {
            marginTop: '6px',
            padding: '10px',
            borderRadius: '10px',
            border: 'none',
            fontSize: '14px'
        },

        weightRow: {
            display: 'flex',
            gap: '10px',
            alignItems: 'center'
        },

        calcButton: {
            backgroundColor: '#F28C28',
            padding: '12px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '4px 4px 0px #475C94',
            width: '150px',
            textAlign: 'center'
        }
    };

    // ✅ CAMPOS QUE VAN A TENER FLECHAS (SELECT)
    const selectFields = [
        "Nombre descriptivo",
        "Municipio",
        "Departamento",
        "Cultura",
        "Equipo que lo recuperó",
        "Contexto arqueológico",
        "Tipo de obtención",
        "Forma",
        "Técnica de manufactura",
        "Color predominante",
        "Decoración predominante",
        "Estado de conservación",
        "Acabado de superficie"
    ];

    const fieldsLeft = [
        "Vereda",
        "Equipo que lo recuperó",
        "Contexto arqueológico",
        "Tipo de obtención",
        "Tecnica de manufactura",
        "Contexto arqueologico",
        "Acabado de superficie",
        "Forma",
        "Altura (cm)",
        "Ancho (cm)"
    ];

    const fieldsRight = [
        "Nombre descriptivo",
        "Municipio",
        "Departamento",
        "Georeferencia",
        "Cultura",
        "Técnica de manufactura",
        "# de elemento",
        "Color predominante",
        "Decoración predominante",
        "Estado de conservación",
        "Profundidad (cm)",
        "Diámetro (cm)",
        "Descripción"
    ];

    return (
        <div style={styles.page}>
            <div style={styles.mainBox}>

                <div style={styles.topTitle}>ZUAQUE CIRAT</div>

                <div style={styles.row}>
                    <div style={styles.imgBox}>
                        <img src="/pieza.png" style={styles.objectImg} alt="imagen" />
                    </div>

                    <div style={styles.buttonsBox}>
                        <button style={styles.button}>Inicio de escaneo</button>
                        <button style={styles.button}>Parar escaneo</button>
                        <button style={styles.button}>Guardar escaneo</button>

                        {/* 🔴 BOTÓN ROJO */}
                        <button style={styles.deleteButton}>
                            Eliminar registro
                        </button>
                    </div>
                </div>

                <div style={styles.inputsSection}>

                    {fieldsLeft.map(label => (
                        <div style={styles.inputBox} key={label}>
                            {label}

                            {selectFields.includes(label) ? (
                                <select style={styles.input}>
                                    <option value="">Seleccione…</option>
                                </select>
                            ) : (
                                <input style={styles.input} placeholder="..." />
                            )}
                        </div>
                    ))}

                    {fieldsRight.map(label => (
                        <div style={styles.inputBox} key={label}>
                            {label}

                            {selectFields.includes(label) ? (
                                <select style={styles.input}>
                                    <option value="">Seleccione…</option>
                                </select>
                            ) : (
                                <input style={styles.input} placeholder="..." />
                            )}
                        </div>
                    ))}

                    {/* Peso */}
                    <div style={styles.inputBox}>
                        Peso (g)
                        <div style={styles.weightRow}>
                            <input style={styles.input} placeholder="..." />
                            <button style={styles.calcButton}>Calcular</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Loadinfo;

