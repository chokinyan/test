import requests
from bs4 import BeautifulSoup

url = "https://www.monbureaunumerique.fr/"
rep = requests.get(url)
par = BeautifulSoup(rep.content,'html.parser')
test = par.find(class_='fo-section__title').text
