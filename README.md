# audioflask

A Flask app that hosts a simple webapp that:
1. Streams microphone audio from a cheap microphone on a Raspberry Pi 3B
2. Performs a fast fourier transform (fft) using scipy.fftpack
3. Displays the frequency spectrum using Highcharts
4. Monitors for a specific dryer "buzz" sound
5. Notifies people via text message

A necessary improvement is learning the dryer buzz sound with a nerual network and listening for that.

Credit to:
*But what is the Fourier Transform? A visual introduction.*
[https://www.youtube.com/watch?v=spUNpyF58BY]

*Let's Build an Audio Spectrum Analyzer in Python! (pt. 1) the waveform viewer.*
[https://www.youtube.com/watch?v=AShHJdSIxkY]


## dependencies
- Python 3.6
- flask 1.0.2
- pyaudio 0.2.11
- numpy 1.14
- scipy 1.1
- highcharts 6.2
- bootstrap 4.1.3

## installation
I'm using Raspbian Stretch for this deployment. In Raspbian:

1. Install dev tools if you haven't already
```sh
$ sudo apt-get install build-essential tk-dev libncurses5-dev libncursesw5-dev libreadline6-dev libdb5.3-dev libgdbm-dev libsqlite3-dev libssl-dev libbz2-dev libexpat1-dev liblzma-dev zlib1g-dev
```
2. Download and install Python 3.6
```sh
$ wget https://www.python.org/ftp/python/3.6.5/Python-3.6.5.tar.xz
$ tar xf Python-3.6.5.tar.xz
$ cd Python-3.6.5
$ ./configure
$ make
$ sudo make altinstall
```

3. Install flask, pyaudio, numpy, and scipy
```sh

```

4. Open firewall port for flask
```sh

```
