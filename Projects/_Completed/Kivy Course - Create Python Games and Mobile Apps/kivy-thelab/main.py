from kivy.app import App
from kivy.graphics import Line, Color, Rectangle, Ellipse
from kivy.uix.anchorlayout import AnchorLayout
from kivy.uix.gridlayout import GridLayout
from kivy.uix.widget import Widget
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.button import Button
from kivy.uix.stacklayout import StackLayout
from kivy.metrics import dp
from kivy.properties import StringProperty, BooleanProperty, Clock


# class GridLayoutExample(GridLayout):
#    pass

class WidgetsExample(GridLayout):
    count = 0
    my_text = StringProperty(str(count))
    text_input_str = StringProperty("foo")
    enable_button = BooleanProperty(False)

    def on_button_click(self):
        if self.enable_button:
            print("Button clicked")
            self.count += 1
            self.my_text = str(self.count)

    def on_toggle_button_state(self, widget):
        print("Toggle state: " + widget.state)

        if widget.state == "normal":
            widget.text = "OFF"
            self.enable_button = False
        elif widget.state == "down":
            widget.text = "ON"
            self.enable_button = True
        else:
            widget.text = "Error!"

    def on_switch_active(self, widget):
        print("Switch:" + str(widget.active))

    def on_text_validate(self, widget):
        self.text_input_str = widget.text


class StackLayoutExample(StackLayout):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        for i in range(0, 104):
            size = dp(100)
            b = Button(text=str(i + 1), size_hint=(None, None), size=(size, size))
            self.add_widget(b)


class AnchorLayoutExample(AnchorLayout):
    pass


class BoxLayoutExample(BoxLayout):
    pass


class MainWidget(Widget):
    pass


class TheLabApp(App):
    pass


class CanvasExample1(Widget):
    pass


class CanvasExample2(Widget):
    pass


class CanvasExample3(Widget):
    pass


class CanvasExample4(Widget):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        with self.canvas:
            Line(points=(100, 100, 400, 500), width=2)
            Color(0, 1, 0)
            Line(circle=(400, 200, 80), width=2)
            Line(rectangle=(700, 500, 150, 100), width=5)
            self.rect = Rectangle(pos=(700, 200), size=(150, 100))

    def on_button_a_click(self):
        # print("foo")
        x, y = self.rect.pos
        w, h = self.rect.size
        inc = dp(10)
        diff = self.width - (x + w)

        if diff < inc:
            inc = diff

        x += inc

        self.rect.pos = (x, y)


class CanvasExample5(Widget):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.ball_size = dp(50)
        self.vx = dp(3)
        self.vy = dp(4)

        with self.canvas:
            self.ball = Ellipse(pos=self.center, size=(self.ball_size, self.ball_size))
        Clock.schedule_interval(self.update, 1/60)

    def on_size(self, *args):
        print("on size : " + str(self.width) + ", " + str(self.height))
        self.ball.pos = (self.center_x-self.ball_size / 2, self.center_y)

    def update(self, dt):
        x, y = self.ball.pos
        x += self.vx
        y += self.vy

        if y + self.ball_size > self.height:
            y = self.height - self.ball_size
            self.vy = -self.vy

        if x + self.ball_size > self.width:
            x = self.width - self.ball_size
            self.vx = -self.vx

        if y < 0:
            y = 0
            self.vy = -self.vy

        if x < 0:
            x = 0
            self.vx = -self.vx

        self.ball.pos = (x, y)

class CanvasExample6(Widget):
    pass


class CanvasExample7(BoxLayout):
    pass

TheLabApp().run()
