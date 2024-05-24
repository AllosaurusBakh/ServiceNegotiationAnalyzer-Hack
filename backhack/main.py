import os

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from typing import List


app = FastAPI()
origins = [
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5173',
    'http://localhost:5173',
    'http://localhost:3000'
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


def clear_upload_directory(upload_directory):
    audio_files = [file for file in os.listdir(upload_directory) if file.endswith(".mp3")]

    for audio in audio_files:
        file_path = upload_directory + audio
        os.remove(file_path)


@app.post('/upload/')
async def create_upload_file(file_uploads: List[UploadFile] = File(...)):
    clear_upload_directory("uploaded_files/")
    resp = []

    for file_upload in file_uploads:
        data = file_upload.file.read()
        resp.append(
            {
                "name": file_upload.filename,
                "text": "Здарова, кентяо. 2422 машинист Карабин на перегоне Красногвардии, З-2 погромная. 2422, Карабинль слушает вас. Здравствуйте, машинист, не затягивайтесь, хорошо, до станции Сорочинская проедьте, пожалуйста. По ТОЦКО по первому пути будете ехать до НС Бахтинова. Понятно, ТОЦКО по первому пути. До станции Сорочинская по первому пути мы следуем Бахтинова, корабль. Понятно, понял. Пока братан, обнял",
                "errors": [
                    {
                        "name_error": "Нарушено правильное начало диалога диспетчером",
                        "text_error": "Здарова, кентяо."
                    },
                    {
                        "name_error": "Нарушено правильное завершение диалога диспетчером",
                        "text_error": "Пока братан, обнял"
                    }
                ]
            }
        )
        save_to = "uploaded_files/" + file_upload.filename
        with open(save_to, 'wb') as f:
            f.write(data)

    resp.append(
        {
            "name": "Test_audio.mp3",
            "text": "Приехал, как-то на зону чёрный сталкер.",
            "errors": []
        }
    )
    return resp


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000, host="127.0.0.1")
