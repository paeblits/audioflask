from flask import Flask, request, render_template, Response, stream_with_context

# AUDIO imports
import pyaudio
import os
import struct
import numpy as np
import matplotlib.pyplot as plt
from scipy.fftpack import fft
import time

app = Flask(__name__)

# AUDIO: constants
CHUNK = 1024 * 2  # samples per frame
FORMAT = pyaudio.paInt16  # audio format (bytes per sample?)
CHANNELS = 1  # single channel for microphone
RATE = 44100  # samples per second
DEVICE_INDEX = 1

p = pyaudio.PyAudio()

# print devices
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')
for i in range(0, numdevices):
    if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
        print("Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name'))

print("\n - - -")
print("SELECTED Input Device id ", DEVICE_INDEX, " - ", p.get_device_info_by_host_api_device_index(0, DEVICE_INDEX).get('name'))
print("\n - - -")

# x = np.arange(0, 2 * CHUNK, 1)

# stream object to get data from microphone
stream = p.open(
    format=FORMAT,
    channels=CHANNELS,
    rate=RATE,
    input=True,
    output=True,
    input_device_index=DEVICE_INDEX,
    frames_per_buffer=CHUNK
)

print('stream started')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/audiofeed')
def audiofeed():
    return Response(get_sound_data(), mimetype="text/plain")

def get_sound_data():
    # get sound data
    # binary data
    data = stream.read(CHUNK)

    # convert data to integers, make np array, then offset it by 127
    data_int = struct.unpack(str(2 * CHUNK) + 'B', data)

    # create np array and offset by 128
    data_np = np.array(data_int, dtype='b')[::2] + 128

    # count = 0
    # y = []
    # for i in range(1,len(data_np),1):
    #     tmparr = [i,data_np[i]]
    #     y.append(tmparr)

    x = data_np.tolist()

    yield str(x)
