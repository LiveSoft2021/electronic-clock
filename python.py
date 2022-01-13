import eel
import datetime
import threading

eel.init("web")

@eel.expose()
def setInterval():
    e = threading.Event()
    while not e.wait(1):
        dateTime = datetime.datetime.now()

        hours = dateTime.strftime('%H')
        minutes =dateTime.strftime('%M')
        seconds = dateTime.strftime('%S')

        eel.getAndCreateTime(hours[0], hours[1], minutes[0], minutes[1], seconds[0], seconds[1])

eel.start("index.html", size = (1200, 439))