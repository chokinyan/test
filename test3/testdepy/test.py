import json
import discord
from discord.ext import commands
#----------------------------------------------------------------------
key = json.load(open("test3\disbot.json"))["key"]
intents = discord.Intents.all()
client = discord.Client(command_prefix='!', intents=intents)
bot = commands.Bot(command_prefix='!')
#----------------------------------------------------------------------
@client.event
async def on_ready():
    print(" is ready and on")

@commands.command
async def test(ctx):
    await ctx.send("salut")


bot.add_command(test)

#----------------------------------------------------------------------
"""run le bot"""
if client.is_ready() == False:
    client.run(key)
else:
    pass
#----------------------------------------------------------------------