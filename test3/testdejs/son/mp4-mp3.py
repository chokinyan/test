import os
from moviepy.editor import *

#for i in os.listdir("M:\Mon Drive\sons like"):
video = VideoFileClip(r"test3\testdejs\son\RPReplay_Final1676378137.mp4")
video.audio.write_audiofile(r"test3\testdejs\son\bochi.mp3")