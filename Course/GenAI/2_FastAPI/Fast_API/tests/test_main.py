from fastapi.testclient import TestClient
from fast_api import app

def test_root_path():
    client = TestClient(app=app)
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello" : "World"}