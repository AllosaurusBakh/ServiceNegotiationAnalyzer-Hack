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
    const [fileCount, setFileCount] = useState<number>(0);

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
        setFileCount(file.length);
    };

    return (
        <>
            <Button className="btn-file" type="button" onClick={handlePick} text={fileCount == 0 ? props.text : `Загружено (${fileCount})`}>
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