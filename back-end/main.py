from flask import Flask, render_template, request, redirect

app = Flask('app', template_folder= "/front-end/templates")

@app.route('/', methods=['GET', 'POST'])
def hello_world():
  return render_template('index.html')

app.run(host='0.0.0.0', port=8080)