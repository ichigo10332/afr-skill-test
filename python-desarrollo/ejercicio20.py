import requests

# TODO: Completa la función para que:
# 1. Haga una petición GET a:
#    https://jsonplaceholder.typicode.com/posts/1
# 2. Si el status code es 200, imprima el título con el formato:
#    "Título: <titulo del post>"
# 3. Si ocurre cualquier excepción, imprima:
#    "Error al obtener el post"

def obtener_post():
    try:
        resp = requests.get('https://jsonplaceholder.typicode.com/posts/1', timeout=10)
        if resp.status_code == 200:
            data = resp.json()
            print('Título: ' + data.get('title', ''))
        else:
            print('Error al obtener el post')
    except Exception:
        print('Error al obtener el post')

obtener_post()