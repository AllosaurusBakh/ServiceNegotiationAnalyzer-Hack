import Block from '../../components/block/Block';
import Button from '../../components/button/Button';

import { DataType, DataObjType, DataErrorsType } from '../../App';
import { Link } from 'react-router-dom';

import home from '../../img/home.svg';
import './style.scss'

type ResultPageProps = {
    data: DataType
}

const ResultPage = (props: ResultPageProps): JSX.Element => {

    return (
        <div className="result-page">
            <h1 className="result-name">Результаты вычислений</h1>

            <div className="results">
                {props.data.map((elem: DataObjType, indexMain: React.Key) => {
                    if (elem['errors'].length != 0) {
                        return (
                            <Block className='block-res' key={indexMain}>
                                <div className='list-dashboards'>
                                    <div className='top-dashboards'>
                                        <h2>🔍 Распознано</h2>
                                        <Block className='dashboard-1'>
                                            <h3>{elem['name']}</h3>
                                            <hr />
                                            <p className='text-file'>"{elem['text']}"</p>
                                        </Block>
                                    </div>
                                    <div className='bottom-dashboards'>
                                        <h2>❌ Ошибки</h2>
                                        <Block className='dashboard-2'>
                                            {elem['errors'].map((err: DataErrorsType, indexSecond: number) => {
                                                let keyNameErr = indexSecond + 1;
                                                return (
                                                    <>
                                                        <h4 key={keyNameErr}>{keyNameErr}. {err['name_error']}</h4>
                                                        <p className='text-error' key={indexSecond}>"{err['text_error']}"</p>
                                                    </>
                                                )
                                            })}
                                        </Block>
                                    </div>
                                </div>
                            </Block>
                        )
                    }
                    return (
                        <Block className='block-res' key={indexMain}>
                            <div className='list-dashboards'>
                                <div className='top-dashboards'>
                                    <h2>🔍 Распознано</h2>
                                    <Block className='dashboard-1'>
                                        <h3>{elem['name']}</h3>
                                        <hr />
                                        <p className='text-file'>"{elem['text']}"</p>
                                    </Block>
                                </div>
                                <div className='bottom-dashboards'>
                                    <h2>✅ Ошибок нет!</h2>
                                </div>
                            </div>
                        </Block>
                    )
                })}
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

export default ResultPage; 
