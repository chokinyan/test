import json
import discord

#----------------------------------------------------------------------
key = json.load(open("test3\disbot.json"))["key"]
intents = discord.Intents.all()
client = discord.Client(command_prefix='!', intents=intents)
#----------------------------------------------------------------------
@client.event
async def on_ready():
    print("is ready and on")

#----------------------------------------------------------------------
"""run le bot"""
client.run(key)
#----------------------------------------------------------------------