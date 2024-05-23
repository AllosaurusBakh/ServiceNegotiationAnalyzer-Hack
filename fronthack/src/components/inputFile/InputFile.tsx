import { useState, useRef } from 'react';
import './style.scss';
import Button from '../button/Button';

type InputFileProps = {
    text: string,
    setFiles: React.Dispatch<React.SetStateAction<File[] | undefined>>,
    children: React.ReactNode,
    style?: React.CSSProperties
};

const InputFile = (props: InputFileProps) => {
    const filePicker = useRef(null);
    const [fileName, setFileName] = useState<string>('');

    const handlePick = () => {
        const picker: any = filePicker.current;
        picker.click();
    };

    const handleChange = (event: React.ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        const file: FileList = (target.files as FileList);
        const fileList: Array<File> = [];

        for (let i = 0; i < target.files!.length; i++) {
            fileList.push(target.files![i])
        }
        props.setFiles(fileList);

        if (file[0].name.length <= 20) {
            setFileName(file[0].name);
        }
        else {
            let res = file[0].name.slice(0, 13) + '...' + file[0].name.slice(-4);
            setFileName(res);
        }
    };

    return (
        <>
            <Button className="btn-file" type="button" onClick={handlePick} text={fileName == '' ? props.text : fileName}>
                {props.children}
            </Button>
            <input
                type="file"
                id="input-files"
                name="files"
                ref={filePicker}
                onChange={handleChange}
                accept=".mp3"
                multiple
            />
        </>
    );
};

export default InputFile;