import json
import discord
import discord.message as mess
#----------------------------------------------------------------------
key = json.load(open("test3\disbot.json"))["key"]
intents = discord.Intents.all()
client = discord.Client(command_prefix='!', intents=intents)
#----------------------------------------------------------------------
@client.event
async def on_ready():
    print(" is ready and on")

@client.event
async def commande(ctx):
    print(ctx.author,"bon tu fais ca mtn 46864")
    await ctx.send("salut")




#----------------------------------------------------------------------
"""run le bot"""
if client.is_ready() == False:
    client.run(key)
else:
    pass
#----------------------------------------------------------------------