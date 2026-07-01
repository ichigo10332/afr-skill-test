import requests

# TODO: Completa la función para que:
# 1. Haga una petición GET a:
#    https://jsonplaceholder.typicode.com/posts/1
# 2. Si el status code es 200, imprima el título con el formato:
#    "Título: <titulo del post>"
# 3. Si ocurre cualquier excepción, imprima:
#    "Error al obtener el post"

def obtener_post():
    # TODO: tu código aquí
    try:
        api = "https://jsonplaceholder.typicode.com/posts/1"

        response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
        if response.status_code == 200:
            data = response.json()
            print(f"Título: {data['title']}")

    except Exception as ex:
        print(ex)
        print("Error al obtener el post")
    pass

obtener_post()