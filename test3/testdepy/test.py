#MTAzMTE0MjY3NjUxMjM4NzEyNA.GGWLUw.k6JG-D5MB2Ga8xDpLDMbEqG8rQ1KPlIGM3VoRE
import discord as dis
from discord.ext import commands



to = "MTAzMTE0MjY3NjUxMjM4NzEyNA.GGWLUw.k6JG-D5MB2Ga8xDpLDMbEqG8rQ1KPlIGM3VoRE"
intents = dis.Intents.all()
intents.members = True

#cient = dis.Client(intents=intents)
#cient.run(to)


client = commands.Bot(command_prefix= '!', intents=intents)


@client.event
async def on_ready():
    print("Bot connecter")



@client.command()
async def test(ctx):
    await ctx.send("Je fonctionne")

@client.command()
async def tu(ctx):
    await ctx.reply("coucou")

@client.event
async def on_member_join(member):
    channel = client.get_channel(986282443898228889)
    await channel.send(f"Test {member.name} \n {member.avatar}")




client.run(to)










































"""from math import factorial

def binomiale(k,n,p):
    return (factorial(n)/(factorial(k)*factorial(n-k)))*p**k*(1-p)**(n-k)

def proba(k) :
    P=0
    for i in range(0,k+1) :
        P=P+binomiale(i,20,0.25)
    return P

print(proba(5))"""