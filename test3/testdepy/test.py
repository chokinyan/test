import json
from discord.ext import commands
import discord
#----------------------------------------------------------------------
key = json.load(open("test3\disbot.json"))["key"]
intents = discord.Intents.all()
client = commands.Bot(command_prefix='!', intents=intents)
#---------------------------------------------------------------------
@client.event
async def on_ready():
    print(" is ready and on")

@client.command()
async def test(actx):
    await actx.send("salut")


@client.command(name = "upeur",description="ok bjr")
async def upeur(actx,num = 0):
    await actx.send(num)



#----------------------------------------------------------------------
"""run le bot"""
if client.is_ready() == False:
    client.run(key)
else:
    pass
#----------------------------------------------------------------------