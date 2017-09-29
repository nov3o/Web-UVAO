//main parameters - audio, text, backround
//В параметры забивать только то, что будет изменятся в следующей сцене
currScene = 0

scenes = [
	[,,,],
]

function swtch() {
	change(scenes[currScene])
	currScene++
}

function change(list) {
	if (list[0]) {
		document.getElementById('audio').src = '../../static/music/'+list[0]
	}
	if (list[1]) {
		document.getElementById('name').innerHTML = list[1]
	}
	if (list[2]) {
		document.getElementById('message').innerHTML = list[2]
	}
	if (list[3]) {
		document.body.style.background = '../../static/images/'+list[3]
	}
}

document.body.style.background.style.background = ''