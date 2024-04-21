from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.post("/gettodos")
def getTodosPost():
    print("Get Todos Called")
    return "gettodoscalled"

@app.get("/getSingleTodo")
def getSingleTodo():
    print("Get Todo Called")
    return "getsingletodocalled"

def start():
    uvicorn.run('todos.main:app',host = '127.0.0.1', port = 8080, reload = True)
