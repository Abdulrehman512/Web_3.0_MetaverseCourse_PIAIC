from project_1 import main

def test_function1():
    result = main.first_function()
    assert result == "Hello World" 

def test_function2():
    result = main.first_function()
    assert result != "Abdul" 