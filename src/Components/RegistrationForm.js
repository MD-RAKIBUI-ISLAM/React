const styles = {
    form: {
        width: '350px',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif'
    },
    fieldset: {
        marginBottom: '16px',
        padding: '10px 15px',
        border: '2px solid #333',
        borderRadius: '6px'
    },
    legend: {
        padding: '0 6px',
        fontWeight: 'bold',
        fontSize: '14px'
    },
    label: {
        display: 'block',
        marginBottom: '10px'
    },
    input: {
        width: '100%',
        padding: '6px',
        marginTop: '4px',
        borderRadius: '4px',
        border: '1px solid #888'
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer'
    }
};

function RegistrationForm() {
    return (
        <form style={styles.form}>
            {/* Personal Info */}
            <fieldset style={styles.fieldset}>
                <legend style={styles.legend}>Personal Information</legend>

                <label style={styles.label} htmlFor="fullName">
                    Full Name:
                    <input id="fullName" type="text" style={styles.input} />
                </label>

                <label style={styles.label} htmlFor="email">
                    Email:
                    <input id="email" type="email" style={styles.input} />
                </label>
            </fieldset>

            {/* Account Info */}
            <fieldset style={styles.fieldset}>
                <legend style={styles.legend}>Account Details</legend>
                <label style={styles.label} htmlFor="username">
                    Username:
                    <input id="username" type="text" style={styles.input} />
                </label>
                <label style={styles.label} htmlFor="password">
                    Password:
                    <input
                        id="password"
                        type="password"
                        style={styles.input}
                        placeholder="6-8 digit Password"
                    />
                </label>
            </fieldset>

            {/* Submit Button */}
            <button type="submit" style={styles.button}>
                Register
            </button>
        </form>
    );
}

export default RegistrationForm;
