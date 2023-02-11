import requests

url = "https://www.monbureaunumerique.fr/"
rep = requests.get(url)
print(rep.headers['Content-type'])