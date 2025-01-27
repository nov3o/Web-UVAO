mode = 'dialogue'
yourChoices = ''
access = false
fill = ''
backImg = ''
music = ''


choices = choicesRu
scenes = scenesRu
scenesDefault = scenes.slice(0)

//functions
function next() {
  if (access == false) {
    return
  }
  list = scenes[currScene]
  if (list[0] != music) {
    music = list[0]
    document.getElementById('audio').src = 'music/'+music
  }		
  if (list[1] != backImg) {
    backImg = list[1]
    document.getElementsByClassName('full-screen')[0].style.backgroundImage = 'url(images/' + backImg +')'
  }
  if (list[3] != undefined) mode = list[3]
  switch(mode) {
  case 'dialogue':
    dialogue(list)
    break
  case 'full-page-text':
    fullPageText(list)
    break
  case 'choice':
    choicePage(list)
    break
  case 'badEnd':
    badEnd(list)
    break
  case 'empty':
    document.getElementsByClassName('message')[0].style.display = 'none'
    document.getElementsByClassName('back')[0].style.opacity = '0'
    document.getElementsByClassName('full-page-text')[0].style.display = 'none'
    break
  case 'slow-down':
    slowDown(list)
    break
  }
  currScene++
}

function dialogue(list) {
  if (list[3] == 'dialogue') {
    document.getElementsByClassName('message')[0].style.display = 'block'
    document.getElementsByClassName('back')[0].style.opacity = '0'
    document.getElementsByClassName('full-page-text')[0].style.display = 'none'
  }
  document.getElementById('text').innerHTML = list[2]
}

function fullPageText(list) {
  page = document.getElementsByClassName('full-page-text')[0]
  if (list[3] == 'full-page-text') {
    page.innerHTML = ''
    document.getElementsByClassName('message')[0].style.display = 'none'
    document.getElementsByClassName('back')[0].style.opacity = '0.7'
    document.getElementsByClassName('full-page-text')[0].style.display = 'block'
  }
  p = document.createElement('p')
  p.appendChild(document.createTextNode(list[2]))
  page.appendChild(p)
}

function choicePage(list) {
  document.getElementsByClassName('message')[0].style.display = 'none'
  document.getElementsByClassName('back')[0].style.opacity = '0.7'
  document.getElementsByClassName('choices')[0].style.display = 'block'
  summaryHeight = 0
  vars = list[2]
  emptyButton = document.getElementsByClassName('choice-button')[0]
  choiceList = emptyButton.parentNode
  choiceListClone = emptyButton.parentNode.cloneNode(true)
  for (i=0; i<vars.length; i++) {
    button = emptyButton.cloneNode(true)
    button.innerHTML = vars[i]
    button.setAttribute("onClick", "javascript: choice("+i+")");
    choiceList.appendChild(button)
    button.style.display = 'block'
    summaryHeight += button.offsetHeight
  }
  choiceList.style.marginTop = (innerHeight-summaryHeight-vars.length*30)/2 + 'px'
}

function choice(ch) {
  access = true
  document.getElementsByClassName('message')[0].style.display = 'block'
  document.getElementsByClassName('back')[0].style.opacity = '0'
  document.getElementsByClassName('choices')[0].style.display = 'none'
  document.body.replaceChild(choiceListClone, choiceList)
  choiceList.appendChild(emptyButton)
  yourChoices += ch
  switch (yourChoices) {
  case '1000':
    yourChoices = '10'
    break
  case '10101':
    yourChoices = '10110'
    break
  case '1021':
    yourChoices = '101'
    break
  case '1020':
    yourChoices = '1011'
    break
  case '101000':
    yourChoices = '102'
    break
  case '101100':
    yourChoices = '10'
    break
  case '101101':
    yourChoices = '101001'
    break
  case '101102':
    yourChoices = '10100'
    break		
  }
  autofill(choices[yourChoices])
  scenes = scenes.concat(choices[yourChoices])
  next()
  currScene--
}

function badEnd(list) {
  words = list[2]
  endNode = document.getElementsByClassName('bad-end')[0]
  document.getElementsByClassName('message')[0].style.display = 'none'
  document.getElementById('back').style.opacity = '0.7'
  endNode.style.display = 'block'
  endChilds = endNode.childNodes
  summaryHeight = 0
  for (i=0; i<words.length; i++) {
    if (words[i] != undefined) {
      endChilds[i*2+1].innerHTML = words[i]
      summaryHeight += endChilds[i*2+1].offsetHeight
    }
  }
  endNode.style.top = (innerHeight-summaryHeight)/3 + 'px'
}

function again() {
  scenes = scenesDefault
  yourChoices = ''
  mode = 'dialogue'
  currScene = 0
  endNode.style.display = 'none'
  music = 'music/theme2.mp3'
  next()
}

function dash() {
  currScene = scenes.length-1
}

function home() {
  document.getElementsByClassName('continue-button')[0].innerHTML = 'Continue'
  document.getElementsByClassName('menu')[0].style.display = 'block'
  document.getElementsByClassName('message')[0].style.display = 'none'
  access = false
}

function slowDown (list) {
  words = list[2]
  document.getElementsByClassName('slow-down')[0].style.display = 'block'
  document.getElementsByClassName('message')[0].style.display = 'none'
  slowDownNode = document.getElementsByClassName('slow-down')[0]
  slowDownNode.style.animation = 'slowdn 5s ease-out 0s 1 normal'
  document.getElementsByClassName('main-text')[0].innerHTML = words[0]
  document.getElementsByClassName('add-text')[0].innerHTML = words[1]
  setTimeout("slowDownNode.style.backgroundPosition = 'center 75%'", 5000);
  setTimeout("document.getElementsByClassName('main-text')[0].style.opacity = '1'", 4500);
  setTimeout("document.getElementsByClassName('add-text')[0].style.opacity = '1'", 4750);
}

function play() {
  access = true
  document.getElementsByClassName('menu')[0].style.display = 'none'
  document.body.style.backgroundImage = 'none'
  document.body.style.backgroundColor = 'black'
  currScene = 0
  autofill(scenes)
}

function cont() {
  access = true
  document.getElementsByClassName('menu')[0].style.display = 'none'
  document.getElementById('message').style.display = 'block'
  currScene -= 2
  next()
}

function autofill(list) {
  for (i=0; i<list.length; i++) {
    if (list[i][1] != undefined) {
      backFill = list[i][1]
    }
    else {
      list[i][1] = backFill
    }
    if (list[i][0] != undefined) {
      musFill = list[i][0]
    }
    else {
      list[i][0] = musFill
    }
  }
}

function keyActing(event) {
  if (event.keyCode == 13 || event.keyCode == 32) {
    next()
  }
  else if (event.keyCode == 27){
    home()
  }
}
