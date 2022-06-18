import requests

BASE_URL = 'https://fakestoreapi.com'

query_params = {
    "limit": 3
}

response = requests.get(f"{BASE_URL}/products/18")
print(response.json())