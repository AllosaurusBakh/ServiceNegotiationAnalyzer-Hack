# Service-Negotiation-Analyzer

<img width="1591" alt="Снимок экрана 2024-05-24 в 14 38 09" src="https://github.com/AllosaurusBakh/ServiceNegotiationAnalyzer-Hack/assets/95144293/4333e910-10eb-405a-a459-bb3f6c59d49a">

## Мероприятие
Проект был сделан во время хакатона "Цифровой прорыв 2024: Сезон ИИ, УФО Челябинск" в составе команды ProDuckTion.

## Команда ProDuckTion
- Александр Куличенко
- Артём Гордеев
- Дамадан Шавлуков
- Вячеслав Исаев

## Задача
Реализовать сервис, который должен производить транскрибацию аудио файла (.mp3) в текст и выявлять нарушения, такие как: слова паразиты, нецензурная брань, разговор не по уставу и т.д. 

ВНИМАНИЕ! В этом репозитории находится, то что реализовал я, а полная версия находится по <a href="https://github.com/eresque/-Service-Negotiation-Analyzer">ссылке</a>.

## Стек
### Frontend
- TypeScript
- React
- Vite
- Axios

### Backend
- Python
- FastAPI

## Результат работы сервиса
<img width="1591" alt="Снимок экрана 2024-05-24 в 14 39 15" src="https://github.com/AllosaurusBakh/ServiceNegotiationAnalyzer-Hack/assets/95144293/b164b276-d4de-420e-ad46-90325d652a0b">

## Поднятие backend веб-сервисa
### Требования
* Python 3.x, x >= 9
* venv

### Команды
```commandline
cd backhacks
pip install -r requirements.txt
uvicorn main:app --reload 
```

## Поднятие frontend веб-сервисa
### Требования
* npm (менеджер пакетов)
* node.js
  
### Команды
```commandline
cd fronthacks
npm i
npm run dev
```
