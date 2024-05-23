import Button from '../../components/button/Button';
import home from '../../img/home.svg';
import { Link } from 'react-router-dom';
import './style.scss';

const WindowPage = (): JSX.Element => {
    return (
        <div className="warning-page">
            <div className="warning-box">
                <h1 className="warning-name">Упс! Ошибочка вышла</h1>
                <h5 className="emoji-idn">🤷‍♂️</h5>
            </div>
            <div className="help">
                <div className="help-text">
                    <h2 className="help-message">Забыли, как пользоваться? Жми сюда</h2>
                    <h6 className="emoji-right">👉</h6>
                    <h6 className="emoji-down">👇</h6>
                </div>
                <div className="home">
                    <Link to="/" className="link">
                        <Button
                            className="btn-home"
                            text="Домой">
                            <img
                                src={home}
                                alt="Дом"
                            />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WindowPage; 