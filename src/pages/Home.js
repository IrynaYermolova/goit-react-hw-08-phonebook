

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 300,
    fontSize: 40,
    textAlign: 'center',
    margin: 0

  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        WELCOME TO THE PHONE BOOK.<br></br>
BEFORE YOU GET STARTED, PLEASE REGISTER OR LOG IN.{' '}
      </h1>
    </div>
  );
}