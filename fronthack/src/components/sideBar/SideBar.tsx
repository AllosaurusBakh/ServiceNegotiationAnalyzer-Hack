import Button from '../button/Button';
import InputFile from '../inputFile/InputFile';

import axios from '../../axios';
import { useState } from 'react';
import { DataType } from '../../App';
import { useNavigate, Link } from 'react-router-dom';

import logo from '../../img/logo.png';
import logoRJD from '../../img/logo_rjd.png';
import cross from '../../img/black-cross.png';
import download from '../../img/download.svg';
import './style.scss';

type SideBaeProps = {
    setData: React.Dispatch<React.SetStateAction<DataType | undefined>>
};

const SideBar = (props: SideBaeProps): JSX.Element => {

    const [files, setFiles] = useState<File[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        if (files) {
            const formData = new FormData();
            [...files].forEach(file => {
                formData.append('file_uploads', file);
            })

            axios({
                method: "POST",
                url: `/upload`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            })
                .then((response) => {
                    navigate('/result');
                    setLoading(false);
                    props.setData(response.data);
                })
                .catch((error) => {
                    navigate('/warning');
                    setLoading(false);
                    console.log(error);
                    props.setData(undefined);
                });
        }
        else {
            navigate('/warning');
            setLoading(false);
            props.setData(undefined);
        }
    };

    return (
        <div className="side-bar">
            <div className="logo">
                <Link className='logo-link' to='/'>
                    <img className='logo-team' src={logo} alt="Логотип команды" />
                </Link>
                <img className='cross' src={cross} alt="Крестик" />
                <Link className='logo-link' to='https://www.rzd.ru/'>
                    <img className='logo-rjd' src={logoRJD} alt="Логотип РЖД" />
                </Link>
            </div>
            
            <div className="input-bar">
                <form className='form-data' name='form' onSubmit={handleSubmit} >
                    <div className="tittle-form">
                        <h2>Ввод</h2>
                    </div>
                    <hr />
                    <div className="choice-file">
                        <h3>Загрузите данные</h3>
                        <InputFile
                            text="Загрузить"
                            setFiles={setFiles}
                        >
                            <img
                                className=""
                                src={download}
                                alt="Загрузить"
                            />
                        </InputFile>
                    </div>
                    <hr />
                    <div className="submit">
                        <Button
                            className="btn-submit"
                            text="Анализ"
                            onClick={() => localStorage.clear()}
                        />
                    </div>
                    { loading ? 
                        <svg className="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                            <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
                        </svg> : null }
                </form>
            </div>
        </div>
    );
};

export default SideBar; 
