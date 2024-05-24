import Block from '../../components/block/Block';

import './style.scss';

const HomePage = (): JSX.Element => {
    return (
        <div className="home-page">
            <div className="home-name">
                <h1 className="hello">Добро пожаловать</h1>
                <h6 className="emoji">☀️</h6>
            </div>
            <div className="guide">
                <h3 className="question-1">Как пользоваться приложением?</h3>
                <div className='list-steps'>
                    <Block className='step-1'>
                        <h2>Шаг 1</h2>
                        <h3>Загрузите .mp3 файлы</h3>
                    </Block>
                    <Block className='step-2'>
                        <h2>Шаг 2</h2>
                        <h3>Нажмите на "Анализ"</h3>
                    </Block>
                    <Block className='step-3'>
                        <h2>Шаг 3</h2>
                        <h3>Получите результат!</h3>
                    </Block>
                </div>
            </div>
        </div>
    );
};

export default HomePage; 