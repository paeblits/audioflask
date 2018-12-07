# audioflask

A Flask app that hosts a simple webapp that:
1. Streams microphone audio from a cheap microphone on a Raspberry Pi 3B
2. Performs a fast fourier transform (fft) using scipy.fftpack
3. Displays the frequency spectrum using Highcharts
4. Monitors for a specific dryer "buzz" sound (currently in a non-sophisticated way)
5. Notifies people via text message

This app currently looks in specific frequencies to detect the specific sound. An improvement would be to implement a neural network that can learn any sound pattern and monitor for that.

Credit and Resources:
*But what is the Fourier Transform? A visual introduction.*
[https://www.youtube.com/watch?v=spUNpyF58BY]

*Let's Build an Audio Spectrum Analyzer in Python! (pt. 1) the waveform viewer.*
[https://www.youtube.com/watch?v=AShHJdSIxkY]


## dependencies
- Linux distribution, such as Raspbian Stretch
- Python 3.6
- flask 1.0.2
- pyaudio 0.2.11
- numpy 1.15.4
- scipy 1.1
- highcharts 6.2
- bootstrap 4.1.3

## installation
I'm using Raspbian Stretch 4.14 for this deployment. It should come with Python 3. You can check `/usr/bin/`:
```sh
ls -l /usr/bin/ | grep python
```

3. Install pyaudio dependencies, then pyaudio
```sh
$ sudo apt-get install libasound-dev portaudio19-dev libportaudiocpp0 ffmpeg libav-tools libportaudio2 libatlas-base-dev
$ sudo pip3 install pyaudio
```

4. Install other Python 3 dependencies: scipy (Flask is likely already installed)
```sh
$ sudo pip3 install scipy
```

5. Clone this repository
```sh
git clone https://github.com/paeblits/audioflask.git
```

6. Set up environment variables for Flask. You can append a variable to your `.profile`
```sh
$ nano ~/.profile
export FLASK_APP=/path/to/your/audioflask/app.py
save the file, exit, and source it
$ source .profile
```

7. Open firewall port
```sh

```

8. run the app
```sh
python3 -m flask run
```
