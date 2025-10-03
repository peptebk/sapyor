import styles from './app.module.css';
import Game from './features/game/Game';

function App() {
    return (
        <div className={styles['app']}>
            <Game settings={{ width: 16, height: 16, minesCount: 40 }} />
        </div>
    );
}

export default App;
