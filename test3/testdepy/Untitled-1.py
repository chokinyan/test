import json
from discord.ext import commands
import discord
from discord import app_commands
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
    try:
        synced = await client.tree.sync()
        print(f'{len(synced)}')
    except Exception as err:
        print(err)


@client.command(name = "upeur",description="ok bjr")
async def upeur(actx,num = 0):
    await actx.send(num)


@client.command(name = "slow")
async def slow(actx,user:discord.User,num:int=1):
    for i in range(num):
        await actx.send(f"<@{443151996770320405}>")
        await user.send(f"<@{443151996770320405}>")



@client.tree.command(name="wsh")
@app_commands.describe(nu = "choisi un nombre")
async def wsh(interaction: discord.Interaction,nu:str = ""):
    await interaction.response.send_message(f"bon {nu}")



#----------------------------------------------------------------------
"""run le bot"""
if client.is_ready() == False:
    client.run(key)
else:
    pass
#----------------------------------------------------------------------