//SEGÉDFÜGGVÉNYEK
function delegate(parent, child, when, func){
    function eventHandler(event){
        let target = event.target;
        let handler = this;
        let closestTarget = target.closest(child);

        if(handler.contains(closestTarget)){
            func(event, closestTarget);
        }
    }

    parent.addEventListener(when, eventHandler);
}

function writeCookies(name, value){
    localStorage.setItem(name, JSON.stringify(value));
}

function readCookies(name){
    return JSON.parse(localStorage.getItem(name));
}

function loadCookies(){
    let beginner = readCookies('beginner');
    let intermediate = readCookies('intermediate');
    let multiplayer = readCookies('multiplayer');
    if (beginner != null) beginnerSoloResults = beginner;
    if (intermediate != null) intermediateSoloResults = intermediate;
    if (multiplayer != null) multiplayerResults = multiplayer;
}





//MENTETT JÁTÉKOK, TOPLISTÁK
let beginnerSoloResults = [
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
]

let intermediateSoloResults = [
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
    {
        'name': undefined,
        'point': -1,
        'time': -1
    },
]

let multiplayerResults = [
    {
        'date': undefined,
        'point': 0
    },
    {
        'date': undefined,
        'point': 0
    },
    {
        'date': undefined,
        'point': 0
    },
    {
        'date': undefined,
        'point': 0
    },
    {
        'date': undefined,
        'point': 0
    },
    {
        'date': undefined,
        'point': 0
    },
    {
        'date': undefined,
        'point': 0
    },
    {
        'date': undefined,
        'point': 0
    },
    {
        'date': undefined,
        'point': 0
    },
    {
        'date': undefined,
        'point': 0
    }
]


let savedBtn = document.querySelector('#savedBtn');
let savedGames = document.querySelector('#savedGames');
function showSavedGames()
{
    savedGames.classList.toggle('hidden');
    createBeginnerTable();
    createIntermediateTable();
    createMultiplayerTable();
}
savedBtn.addEventListener('click', showSavedGames);


let beginnerTable = document.querySelector('#beginnerSolo table');
function createBeginnerTable()
{
    beginnerTable.innerHTML = '';
    let row = document.createElement('tr');
    let place = document.createElement('th');
    let name = document.createElement('th');
    let point = document.createElement('th');
    let time = document.createElement('th');
    place.innerHTML = '#';
    name.innerHTML = 'Játékos neve';
    point.innerHTML = "Elért pontszám";
    time.innerHTML = "Idő"
    row.appendChild(place);
    row.appendChild(name);
    row.appendChild(point);
    row.appendChild(time);
    beginnerTable.appendChild(row);
    let i = 0;
    while (i < beginnerSoloResults.length) {
        row = document.createElement('tr');
        place = document.createElement('td');
        name = document.createElement('td');
        point = document.createElement('td');
        time = document.createElement('td');
        place.innerHTML = i+1;
        if (beginnerSoloResults[i]['name'] != undefined) {
            name.innerHTML = beginnerSoloResults[i]['name'];
            point.innerHTML = beginnerSoloResults[i]['point'];
            let minute = Math.floor(beginnerSoloResults[i]['time']/600);
            let second = Math.floor((beginnerSoloResults[i]['time']%600)/10);
            let tenthOfSecond = beginnerSoloResults[i]['time']%10;
            time.innerHTML = minute + ':' + ('0' + second).slice(-2) + '.' + tenthOfSecond;
        }

        row.appendChild(place);
        row.appendChild(name);
        row.appendChild(point);
        row.appendChild(time);
        beginnerTable.appendChild(row);
        ++i;
    }
}


let intermediateTable = document.querySelector('#intermediateSolo table');
function createIntermediateTable()
{
    intermediateTable.innerHTML = '';
    let row = document.createElement('tr');
    let place = document.createElement('th');
    let name = document.createElement('th');
    let point = document.createElement('th');
    let time = document.createElement('th');
    place.innerHTML = '#';
    name.innerHTML = 'Játékos neve';
    point.innerHTML = "Elért pontszám";
    time.innerHTML = "Idő"
    row.appendChild(place);
    row.appendChild(name);
    row.appendChild(point);
    row.appendChild(time);
    intermediateTable.appendChild(row);
    let i = 0;
    while (i < intermediateSoloResults.length) {
        row = document.createElement('tr');
        place = document.createElement('td');
        name = document.createElement('td');
        point = document.createElement('td');
        time = document.createElement('td');
        place.innerHTML = i+1;
        if (intermediateSoloResults[i]['name'] != undefined) {
            name.innerHTML = intermediateSoloResults[i]['name'];
            point.innerHTML = intermediateSoloResults[i]['point'];
            let minute = Math.floor(intermediateSoloResults[i]['time']/600);
            let second = Math.floor((intermediateSoloResults[i]['time']%600)/10);
            let tenthOfSecond = intermediateSoloResults[i]['time']%10;
            time.innerHTML = minute + ':' + ('0' + second).slice(-2) + '.' + tenthOfSecond;
        }
        row.appendChild(place);
        row.appendChild(name);
        row.appendChild(point);
        row.appendChild(time);
        intermediateTable.appendChild(row);
        ++i;
    }
}


let multiplayerTable = document.querySelector('#multiplayer table');
function createMultiplayerTable()
{
    multiplayerTable.innerHTML = '';
    let row = document.createElement('tr');
    let place = document.createElement('th');
    place.innerHTML = '#';
    let date = document.createElement('th');
    date.innerHTML = 'Időpont';
    let point = document.createElement('th');
    point.innerHTML = "Elért összpontszám";
    row.appendChild(place);
    row.appendChild(date);
    row.appendChild(point);
    multiplayerTable.appendChild(row);
    let i = 0;
    while (i < multiplayerResults.length) {
        row = document.createElement('tr');
        place = document.createElement('td');
        date = document.createElement('td');
        point = document.createElement('td');
        place.innerHTML = i+1;
        if (multiplayerResults[i]['date'] != undefined) {
            date.innerHTML = multiplayerResults[i]['date'];
            point.innerHTML = multiplayerResults[i]['point'];
        }
        row.appendChild(place);
        row.appendChild(date);
        row.appendChild(point);
        multiplayerTable.appendChild(row);
        ++i;
    }
}





//JÁTÉK INDÍTÁSA
let startBtn = document.querySelector('#start');
function startNewGame()
{
    playersData.forEach(player => player['point'] = 0);
    sumPoints = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    document.querySelectorAll('#buttons button').forEach(button => button.removeAttribute('disabled'));
    startGame();
}
startBtn.addEventListener('click', startNewGame);


let sumPoints = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let continueBtn = document.querySelector('#continue')
function continueGame()
{
    for (let i = 0; i < playersData.length; ++i) {
        sumPoints[i] += playersData[i]['point'];
        playersData[i]['point'] = 0;
    }
    closeLeaderboard();
    startGame();
}
continueBtn.addEventListener('click', continueGame);


let timer;
let timePassed;
function startGame()
{
    createPlayers();
    playersTab.classList.remove('inactiveTab');
    settingsTab.classList.add('inactiveTab');
    settingsTab.disabled = 'true';
    settingsTab.style.backgroundColor = 'rgb(50, 50, 50, 0.9)'
    rulesTab.classList.add('inactiveTab');
    playersPanel.classList.remove('hidden');
    settingsPanel.classList.add('hidden');
    rulesPanel.classList.add('hidden');
    deck = [];
    onTable = [];
    table.innerHTML = '';
    createDeck(difficulty.value);
    for (let i = 0; i < 12; ++i)
    {
        let card = deck.pop();
        drawCard(0, 0, 0, 0, card);
        onTable.push(card);
    }
    refreshTable();
    if (players.length === 1) {
        if (document.querySelector('#timer') != null) {
            clearInterval(timer);
            playersPanel.removeChild(document.querySelector('#timer'));
        }
        let span = document.createElement('span');
        span.id = 'timer';
        timePassed = 0;
        timer = setInterval(updateTimer, 100);
        playersPanel.appendChild(span);
    }
}





//JÁTÉ VÉGE
let lb = document.querySelector('#leaderboard')
let leaderboard = document.querySelector('#leaderboard-content');
function gameOver()
{
    clearInterval(timer);
    settingsTab.removeAttribute('disabled');
    settingsTab.removeAttribute('style');
    if (numOfPlayers.value == 1)
    {
        if (mode.value === 'competition')
        {
            (difficulty.value == 27) ? saveBeginnerTime() : saveIntermediateTime();
        }
    }
    else
    {
        lb.classList.remove('hidden');
        createResultTable();
        continueBtn.classList.remove('hidden');
        document.querySelectorAll('#buttons button').forEach(button => button.setAttribute('disabled', 'true'));
    }
}


function createResultTable()
{
    let row = document.createElement('tr')
    let place = document.createElement('th');
    let name = document.createElement('th');
    let earnedPoints = document.createElement('th');
    let sumOfPoints = document.createElement('th');
    place.innerHTML = '#';
    name.innerHTML = 'Játékos neve';
    earnedPoints.innerHTML = 'Pontszám';
    sumOfPoints.innerHTML = 'Összpontszám'
    row.appendChild(place);
    row.appendChild(name);
    row.appendChild(earnedPoints);
    row.appendChild(sumOfPoints);
    leaderboard.appendChild(row);
    for (let i = 0; i < playersData.length; ++i) {
        sumPoints[i] += playersData[i]['point'];
    }
    let scoreboard = orderByPoints();
    for (let i = 0; i < numOfPlayers.value; ++i)
    {
        row = document.createElement('tr')
        place = document.createElement('td');
        name = document.createElement('td');
        earnedPoints = document.createElement('td');
        sumOfPoints = document.createElement('td');
        place.innerHTML = i+1;
        name.innerHTML = scoreboard[i]['name'];
        earnedPoints.innerHTML = scoreboard[i]['point']
        sumOfPoints.innerHTML = scoreboard[i]['sumPoint'];
        row.appendChild(place);
        row.appendChild(name);
        row.appendChild(earnedPoints);
        row.appendChild(sumOfPoints);
        leaderboard.appendChild(row);
    }
}


function orderByPoints()
{
    let order = [
        {
            'name': undefined,
            'point': -1,
            'sumPoint': -1
        },
        {
            'name': undefined,
            'point': -1,
            'sumPoint': -1
        },
        {
            'name': undefined,
            'point': -1,
            'sumPoint': -1
        },
        {
            'name': undefined,
            'point': -1,
            'sumPoint': -1
        },
        {
            'name': undefined,
            'point': -1,
            'sumPoint': -1
        },
        {
            'name': undefined,
            'point': -1,
            'sumPoint': -1
        },
        {
            'name': undefined,
            'point': -1,
            'sumPoint': -1
        },
        {
            'name': undefined,
            'point': -1,
            'sumPoint': -1
        },
        {
            'name': undefined,
            'point': -1,
            'sumPoint': -1
        },
        {
            'name': undefined,
            'point': -1,
            'sumPoint': -1
        },
    ];
    for (let i = 0; i < playersData.length; ++i) {
        order[i]['name'] = playersData[i]['name'];
        order[i]['point'] = playersData[i]['point'];
        order[i]['sumPoint'] = sumPoints[i];
    }
    for (let i = 0; i < numOfPlayers.value-1; ++i)
    {
        for (let j = i+1; j < numOfPlayers.value; ++j) {
            console.log(order[i]['sumPoint'], order[j]['sumPoint'], order[i]['sumPoint'] < order[j]['sumPoint']);
            if (order[i]['sumPoint'] < order[j]['sumPoint']) {
                let swap = order[i];
                order[i] = order[j];
                order[j] = swap;
            }
        }
    }
    console.log(order);
    return order;
}


function saveBeginnerTime()
{
    let i = 0;
    while (i < 10 && beginnerSoloResults[i]['name'] != undefined && beginnerSoloResults[i]['time'] < timePassed) ++i;
    if (i < 10) {
        let j = 9;
        while (j > i) {
            beginnerSoloResults[j]['name'] = beginnerSoloResults[j-1]['name'];
            beginnerSoloResults[j]['point'] = beginnerSoloResults[j-1]['point'];
            beginnerSoloResults[j]['time'] = beginnerSoloResults[j-1]['time'];
            --j;
        }
        beginnerSoloResults[j]['name'] = playersData[0]['name'];
        beginnerSoloResults[j]['point'] = playersData[0]['point'];
        beginnerSoloResults[j]['time'] = timePassed;
    }
    writeCookies('beginner', beginnerSoloResults);
}


function saveIntermediateTime()
{
    let i = 0;
    while (i < 10 && intermediateSoloResults[i]['name'] != undefined && intermediateSoloResults[i]['time'] < timePassed) ++i;
    if (i < 10) {
        let j = 9;
        while (j > i) {
            intermediateSoloResults[j]['name'] = intermediateSoloResults[j-1]['name'];
            intermediateSoloResults[j]['point'] = intermediateSoloResults[j-1]['point'];
            intermediateSoloResults[j]['time'] = intermediateSoloResults[j-1]['time'];
            --j;
        }
        intermediateSoloResults[j]['name'] = playersData[0]['name'];
        intermediateSoloResults[j]['point'] = playersData[0]['point'];
        intermediateSoloResults[j]['time'] = timePassed;
    }
    writeCookies('intermediate', intermediateSoloResults);
}


const reducer = (accumulator, currentValue) => accumulator + currentValue;
function saveMultiplayer() {
    for (let i = 0; i < playersData.length; ++i)
    {
        sumPoints[i] += playersData[i]['point'];
        playersData[i]['point'] = 0;
    }
    let j = multiplayerResults.length - 1;
    while (j > 0)
    {
        multiplayerResults[j]['date'] = multiplayerResults[j-1]['date'];
        multiplayerResults[j]['point'] = multiplayerResults[j-1]['point'];
        --j;
    }
    let date = new Date();
    multiplayerResults[j]['date'] = date.getFullYear() + "-" + ('0' + date.getMonth()).slice(-2) + "-" + ('0' + date.getDate()).slice(-2) + ", " + date.getHours() + ":" + date.getMinutes();
    multiplayerResults[j]['point'] = sumPoints.reduce(reducer);
    writeCookies('multiplayer', multiplayerResults);
}


let closeBtn = document.querySelector('#close');
function closeLeaderboard()
{
    lb.classList.add('hidden');
    continueBtn.classList.add('hidden');
    leaderboard.innerHTML = '';
    document.querySelectorAll('#buttons button').forEach(button => button.removeAttribute('disabled'));
}
closeBtn.addEventListener('click', closeLeaderboard);
closeBtn.addEventListener('click', saveMultiplayer);





//PAKLI LEGENERÁLÁSA
let deck = [];
function createDeck(cardNum)
{
    for (let i = 0; i < cardNum; ++i)
    {
        let shape;
        let color;
        let num = Math.floor((i%27)/9) + 1;
        if (i%3 === 0) color = 'red';
        if (i%3 === 1) color = 'green';
        if (i%3 === 2) color = 'purple';
        if (Math.floor(i/3)%3 === 0) shape = 'oval';
        if (Math.floor(i/3)%3 === 1) shape = 'rhombus';
        if (Math.floor(i/3)%3 === 2) shape = 'wavy';
        if (Math.floor(i/27) === 0) fill = 'filled';
        if (Math.floor(i/27) === 1) fill = 'dashed';
        if (Math.floor(i/27) === 2) fill = 'empty';
        createCard(shape, color, num, fill);
    }
    shuffleDeck();
    console.log(deck);
}


function createCard(shape, color, num, fill)
{
    let card = document.createElement('canvas');
    card.style.position = 'absolute';
    card.classList.add('card');
    card.classList.add('inDeck');
    card.dataset.num = num;
    card.dataset.color = color;
    card.dataset.shape = shape;
    card.dataset.fill = fill;
    card.style.borderWidth = cardBorder + 'px';
    card.style.borderRadius = (r+3) + 'px';
    deck.push(card);
}


function shuffleDeck()
{
    let shuffledDeck = [];
    let deckSize = deck.length;
    for (let i = 0; i < deckSize; ++i)
    {
        let cardNum =  Math.floor(Math.random() * deck.length);
        shuffledDeck.push(deck[cardNum]);
        deck.splice(cardNum, 1);
    }
    deck = shuffledDeck;
}





//KÁRTYA RAJZOLÁSA
let cardBorder = 5; //Kártya pereme
let r = 10; //Kártya sarkainak lekerekítése


let table = document.querySelector('#table');
let onTable = [];
function drawCard(x, y, width, height, card)
{
    card.width = width;
    card.height = height;
    card.style.left = x + 'px';
    card.style.top = y + 'px';
    card.classList.remove('inDeck');
    drawCardBase(height, width, card)
    drawCardFace(width/3, card);
    table.appendChild(card);
}


function drawCardBase(height, width, card)
{
    let brush = card.getContext('2d');
    brush.fillStyle = 'lightyellow';
    brush.beginPath();
    brush.moveTo(r, 0);
    brush.lineTo(width - r, 0);
    brush.arcTo(width, 0, width, r, r);
    brush.lineTo(width, height - r);
    brush.arcTo(width, height, width - r, height, r);
    brush.lineTo(r, height);
    brush.arcTo(0, height, 0, height - r, r);
    brush.lineTo(0, r);
    brush.arcTo(0, 0, r, 0, r);
    brush.closePath();
    brush.fill();
}


function drawCardFace(size, card)
{
    let brush = card.getContext('2d');
    let num = +card.dataset.num;
    let a = size/4;
    let y = (card.height - size) / 2;
    brush.fillStyle = card.dataset.color;
    brush.strokeStyle = card.dataset.color;
    for (let i = 1; i <= num; ++i)
    {
        brush.lineWidth = 5;
        let x = i * ((card.width - num * 2 * a) / (num + 1)) + (i - 1) * 2 * a;
        switch(card.dataset.shape)
        {
            case 'oval':
                oval(brush, x, y, a, card.dataset.fill);
                break;
            case 'rhombus':
                rhombus(brush, x, y, a, card.dataset.fill);
                break;
            case 'wavy':
                wavy(brush, x, y, a, card.dataset.fill);
                break;
        }
    }
}


function oval(brush, x, y, a, fill)
{
    brush.beginPath();
    brush.moveTo(x, y + a);
    brush.lineTo(x, y + 3 * a);
    brush.arcTo(x, y + 4 * a, x + a, y + 4 * a, a);
    brush.arcTo(x + 2 * a, y + 4 * a, x + 2 * a, y + 2 * a, a);
    brush.lineTo(x + 2 * a, y + a);
    brush.arcTo(x + 2 * a, y, x + a, y, a);
    brush.arcTo(x, y, x, y + a, a);
    brush.closePath();
    if (fill === 'filled') brush.fill();
    else brush.stroke();
    if (fill === 'dashed')
    {
        brush.lineWidth = 2;
        let iy = 0.5;
        for (let i = 0; i < 7; ++i) {
            brush.moveTo(x, y + iy * a);
            brush.lineTo(x + 2 * a, y + iy * a);
            brush.stroke();
            iy += 0.5;
        }
    }
}


function rhombus(brush, x, y, a, fill)
{
    brush.beginPath();
    brush.moveTo(x + a, y);
    brush.lineTo(x, y + 2 * a);
    brush.lineTo(x + a, y + 4 * a);
    brush.lineTo(x + 2 * a, y + 2 * a);
    brush.lineTo(x + a, y);
    brush.closePath();
    if (fill === 'filled') brush.fill();
    else brush.stroke();
    if (fill === 'dashed')
    {
        brush.lineWidth = 2;
        let ix = -0.75;
        let iy = 0.5;
        for (let i = 0; i < 7; ++i) {
            brush.moveTo(x + Math.abs(ix) * a, y + iy * a);
            brush.lineTo(x + (2-Math.abs(ix)) * a, y + iy * a);
            brush.stroke();
            ix += 0.25;
            iy += 0.5;
        }
    }
}


function wavy(brush, x, y, a, fill)
{
    let b = a / 2;
    brush.beginPath();
    brush.moveTo(x + b, y);
    brush.arcTo(x + 2 * b, y, x + 2 * b, y + b, b);
    brush.lineTo(x + 2 * b, y + 2 * b);
    brush.arcTo(x + 2 * b, y + 3 * b, x + 3 * b, y + 3 * b, b);
    brush.arcTo(x + 4 * b, y + 3 * b, x + 4 * b, y + 4 * b, b)
    brush.lineTo(x + 4 * b, y + 7 * b);
    brush.arcTo(x + 4 * b, y + 8 * b, x + 3 * b, y + 8 * b, b);
    brush.arcTo(x + 2 * b, y + 8 * b, x + 2 * b, y + 7 * b, b);
    brush.lineTo(x + 2 * b, y + 6 * b);
    brush.arcTo(x + 2 * b, y + 5 * b, x + b, y + 5 * b, b);
    brush.arcTo(x, y + 5 * b, x, y + 4 * b, b);
    brush.lineTo(x, y + b);
    brush.arcTo(x, y, x + b, y, b);
    brush.closePath();
    if (fill === 'filled') brush.fill();
    else brush.stroke();
    if (fill === 'dashed')
    {
        brush.lineWidth = 2;
        
        brush.moveTo(x, y + 0.5 * a);
        brush.lineTo(x + 1 * a, y + 0.5 * a);
        brush.stroke();

        brush.moveTo(x, y + 1 * a);
        brush.lineTo(x + 1 * a, y + 1 * a);
        brush.stroke();
        
        brush.moveTo(x, y + 1.5 * a);
        brush.lineTo(x + 1.25 * a, y + 1.5 * a);
        brush.stroke();
        
        brush.moveTo(x, y + 2 * a);
        brush.lineTo(x + 2 * a, y + 2 * a);
        brush.stroke();
        
        brush.moveTo(x + 0.75 * a, y + 2.5 * a);
        brush.lineTo(x + 2 * a, y + 2.5 * a);
        brush.stroke();
        
        brush.moveTo(x + a, y + 3 * a);
        brush.lineTo(x + 2 * a, y + 3 * a);
        brush.stroke();
        
        brush.moveTo(x + a, y + 3.5 * a);
        brush.lineTo(x + 2 * a, y + 3.5 * a);
        brush.stroke();
    }
}





// FÜLEK KÖZTI VÁLTÁS
let playersTab = document.querySelector('button.playersTab');
let settingsTab = document.querySelector('button.settingsTab');
let rulesTab = document.querySelector('button.rulesTab');
let playersPanel = document.querySelector('#playersPanel');
let settingsPanel = document.querySelector('#settingsPanel');
let rulesPanel = document.querySelector('#rulesPanel')
function changeTab(event)
{
    playersTab.classList.add('inactiveTab');
    settingsTab.classList.add('inactiveTab');
    rulesTab.classList.add('inactiveTab');
    playersPanel.classList.add('hidden');
    settingsPanel.classList.add('hidden');
    rulesPanel.classList.add('hidden');
    let button = document.querySelector(`button.${event.target.classList[0]}`);
    button.classList.remove('inactiveTab');
    document.querySelector(`#${button.classList[0].split('T')[0]}Panel`).classList.remove('hidden');
}
playersTab.addEventListener('click', changeTab);
settingsTab.addEventListener('click', changeTab);
rulesTab.addEventListener('click', changeTab);





// JÁTÉKOSOK FÜL
let players = [];
let playersData = [
    {
        'name': undefined,
        'point': 0
    },
    {
        'name': undefined,
        'point': 0
    },
    {
        'name': undefined,
        'point': 0
    },
    {
        'name': undefined,
        'point': 0
    },
    {
        'name': undefined,
        'point': 0
    },
    {
        'name': undefined,
        'point': 0
    },
    {
        'name': undefined,
        'point': 0
    },
    {
        'name': undefined,
        'point': 0
    },
    {
        'name': undefined,
        'point': 0
    },
    {
        'name': undefined,
        'point': 0
    }
];


let selectTimer;
function choosePlayer(event)
{
    if (players.length >= 2)
    {
        clearTimeout(selectTimer);
        players.forEach( player => {if (player != event.target) player.classList.remove('chosenPlayer');})
        event.target.classList.toggle('chosenPlayer');
        selectTimer = setTimeout(timesUp, 10000)
    }
}


function timesUp()
{
    document.querySelector('.chosenPlayer').classList.remove('chosenPlayer');
    document.querySelectorAll('.chosenCard').forEach(card => card.classList.remove('chosenCard'));
}


function nameChange(event)
{
    event.target.readOnly = '';
}


function endNameChange(event)
{
    let playerNodes = event.target.parentNode.querySelectorAll('.player');
    let i = 0;
    while (playerNodes[i] != event.target) ++i;
    playersData[i]['name'] = event.target.value;
    event.target.readOnly = 'true';
}





// BEÁLLÍTÁSOK FÜL
let difficulty = document.querySelector('#difficulty');
let numOfPlayers = document.querySelector('#numOfPlayers');
let mode = document.querySelector('#mode');
function createPlayers()
{
    playersPanel.innerHTML = '';
    for (let i = 0; i < numOfPlayers.value; ++i)
    {
        let player = document.createElement('input');
        player.classList.add('player');
        player.readOnly = 'true';
        let point = document.createElement('span');
        point.classList.add('point');
        if (playersData[i]['name'] === undefined) playersData[i]['name'] = `Játékos${i+1}`;
        player.value = playersData[i]['name'];
        point.innerHTML = '0';
        player.classList.add(player.value);
        point.classList.add(player.value);
        let linebreak = document.createElement('br');
        playersPanel.appendChild(player);
        playersPanel.appendChild(point);
        playersPanel.appendChild(linebreak);
        player.addEventListener('click', choosePlayer);
        player.addEventListener('dblclick', nameChange);
        player.addEventListener('focusout', endNameChange);
    }
    players = document.querySelectorAll('.player');
    if (players.length === 1) players[0].classList.add('chosenPlayer');
}
createPlayers();
numOfPlayers.addEventListener('input', createPlayers);


function updateTimer()
{
    let time = document.querySelector('#timer');
    ++timePassed;
    let minute = Math.floor(timePassed/600);
    let second = Math.floor((timePassed%600)/10);
    let tenthOfSecond = timePassed%10;
    time.innerHTML = minute + ':' + ('0' + second).slice(-2) + '.' + tenthOfSecond;
}


let hasSET = document.querySelector('select.hasSET');
let showSET = document.querySelector('select.showSET');
let drawThree = document.querySelector('select.drawThree');
function toggleButtonVisibility(event)
{
    if (event.target.value === 'true') document.querySelector(`button.${event.target.classList[0]}`).classList.remove('hidden');
    else document.querySelector(`button.${event.target.classList[0]}`).classList.add('hidden');
}
hasSET.addEventListener('input', toggleButtonVisibility);
showSET.addEventListener('input', toggleButtonVisibility);
drawThree.addEventListener('input', toggleButtonVisibility);


let hasSET_button = document.querySelector('button.hasSET');
let showSET_button = document.querySelector('button.showSET');
let drawThree_button = document.querySelector('button.drawThree');
let otherSettings = document.querySelector('#otherSettings')
function toggleOtherSettings()
{
    if (mode.value === 'training') otherSettings.classList.remove('hidden');
    else
    {
        otherSettings.classList.add('hidden');
        hasSET.value = 'false';
        showSET.value = 'false';
        drawThree.value = 'false';
        hasSET_button.classList.add('hidden');
        showSET_button.classList.add('hidden');
        drawThree_button.classList.add('hidden');
    }
}
mode.addEventListener('input', toggleOtherSettings);




//JÁTÉKMENET
function refreshTable()
{
    let tableWidth = table.offsetWidth;
    let tableHeight = table.offsetHeight;
    let cardWidth = tableWidth/3 - 30;
    let cardHeight = tableHeight/(onTable.length/3) - 30;
    let i = 0;
    for (let card of onTable)
    {
        let cardX = 20 + (i%3) * (cardWidth + 20);
        let cardY = 20 + Math.floor(i/3) * (cardHeight + 20);
        table.removeChild(card);
        drawCard(cardX, cardY, cardWidth, cardHeight, card);
        ++i;
    }
    setTimeout(function(){
        if (deck.length != 0 && !hasSETfunction(false) && !drawThree.value) drawThreeCards();
    }, 500)
}
window.addEventListener('resize', refreshTable);


function hasSETfunction(showAlert)
{
    if (showAlert)
    {
        alertMsg.innerHTML = (findSET(false) ? 'Van SET a leosztásban' : 'Nincs SET a leosztásban');
        alert.classList.remove('hidden');
        setTimeout(function(){alert.classList.add('hidden');}, 3000);
    }
    else return findSET(false)
}
hasSET_button.addEventListener('click', function(){hasSETfunction(true)});


function showSETfunction() {findSET(true);}
showSET_button.addEventListener('click', showSETfunction);


let timeout;
function findSET(show)
{
    let i, j, k;
    let found = false;
    i = 0;
    while (i < onTable.length-3 && !found)
    {
        j = i+1;
        while (j < onTable.length-2 && !found)
        {
            k = j+1;
            while (k < onTable.length-1 && !found)
            {
                found = checkSET(i, j, k);
                if (found === false) ++k;
            }
            if (found === false) ++j;
        }
        if (found === false) ++i;
    }
    if (show)
    {
        onTable[i].classList.add('highlight');
        onTable[j].classList.add('highlight');
        onTable[k].classList.add('highlight');
        timeout = setTimeout(function(){document.querySelectorAll('.highlight').forEach(item => item.classList.remove('highlight'))}, 2000);
    }
    return found;
}


function checkSET(i, j, k)
{
    if (  
        (
            (
            onTable[i].dataset.num === onTable[j].dataset.num &&
            onTable[i].dataset.num === onTable[k].dataset.num &&
            onTable[j].dataset.num === onTable[k].dataset.num
            )
            ||
            (
            onTable[i].dataset.num != onTable[j].dataset.num &&
            onTable[i].dataset.num != onTable[k].dataset.num &&
            onTable[j].dataset.num != onTable[k].dataset.num
            )
        )
        &&
        (
            (
            onTable[i].dataset.color === onTable[j].dataset.color &&
            onTable[i].dataset.color === onTable[k].dataset.color &&
            onTable[j].dataset.color === onTable[k].dataset.color
            )
            ||
            (
            onTable[i].dataset.color != onTable[j].dataset.color &&
            onTable[i].dataset.color != onTable[k].dataset.color &&
            onTable[j].dataset.color != onTable[k].dataset.color
            )
        )
        &&
        (
            (
            onTable[i].dataset.shape === onTable[j].dataset.shape &&
            onTable[i].dataset.shape === onTable[k].dataset.shape &&
            onTable[j].dataset.shape === onTable[k].dataset.shape
            )
            ||
            (
            onTable[i].dataset.shape != onTable[j].dataset.shape &&
            onTable[i].dataset.shape != onTable[k].dataset.shape &&
            onTable[j].dataset.shape != onTable[k].dataset.shape
            )
        )
        &&
        (
            difficulty.value == 27
            ||
            (
                (
                onTable[i].dataset.fill === onTable[j].dataset.fill &&
                onTable[i].dataset.fill === onTable[k].dataset.fill &&
                onTable[j].dataset.fill === onTable[k].dataset.fill
                )
                ||
                (
                onTable[i].dataset.fill != onTable[j].dataset.fill &&
                onTable[i].dataset.fill != onTable[k].dataset.fill &&
                onTable[j].dataset.fill != onTable[k].dataset.fill
                )
            )
        )
    ) return true;
    else return false;
}


function autoDrawThreeCards()
{
    if (drawThree === 'true' && !hasSETfunction(false)) drawThreeCards();
}
table.addEventListener('change', autoDrawThreeCards);


function drawThreeCards()
{
    if (deck.length != 0) {
        for (let i = 0; i < 3; ++i)
        {
            let card = deck.pop();
            drawCard(0, 0, 0, 0, card);
            onTable.push(card);
        }
        refreshTable();
    }
}
drawThree_button.addEventListener('click', drawThreeCards);


let alert = document.querySelector('#alert');
let alertMsg = document.querySelector('#alert span')
function chooseCard(event)
{
    let chosenPlayer = document.querySelector('.chosenPlayer');
    if (chosenPlayer != null)
    {
        event.target.classList.toggle('chosenCard');
        let chosenCards = table.querySelectorAll('.chosenCard');
        let point = document.querySelector(`span.${chosenPlayer.classList[1]}`);
        let index = getChildIndex(playersPanel.querySelectorAll('span.point'), point);
        if (chosenCards.length === 3)
        {
            let i = getChildIndex(table.childNodes, chosenCards[0]);
            let j = getChildIndex(table.childNodes, chosenCards[1]);
            let k = getChildIndex(table.childNodes, chosenCards[2]);
            if (checkSET(i, j, k))
            {
                onTable.splice(k, 1);
                onTable.splice(j, 1);
                onTable.splice(i, 1);
                chosenCards.forEach(card => table.removeChild(card));
                if (onTable.length < 12) drawThreeCards();
                refreshTable();
                point.innerHTML++;
                playersData[index]['point']++;
                document.querySelectorAll('.disabled').forEach(element => {
                    element.classList.remove('disabled');
                    element.removeAttribute('disabled');
                });
                clearTimeout(timeout);
                clearTimeout(selectTimer);
                if ((deck.length === 0 && !hasSETfunction(false)) || onTable.length === 0) gameOver();
            }
            else
            {
                point.innerHTML--;
                playersData[index]['point']--;
                if (players.length != 1)
                {
                    chosenPlayer.classList.add('disabled');
                    chosenPlayer.setAttribute('disabled', 'true');
                    point.classList.add('disabled');
                }
            }
            if (players.length != 1) chosenPlayer.classList.remove('chosenPlayer');
            chosenCards.forEach(card => card.classList.remove('chosenCard'));
        }
    }
    else
    {
        alertMsg.innerHTML = 'Válasszon játékost';
        alert.classList.remove('hidden');
        setTimeout(function(){alert.classList.add('hidden');}, 3000);
    }
}
delegate(table, '.card', 'click', chooseCard);


function getChildIndex(childNodes, child)
{
    let i = 0;
    while (childNodes[i] != child) ++i;
    return i;
}





//SÜTIK BETÖLTÉSE
loadCookies();