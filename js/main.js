function update() {
    const year = document.getElementById('birthYear').value;
    const data = getValue();
    const result = [
        {
            name: "Sun",
            birthdays: []
        },
        {
            name: "Mon",
            birthdays: []
        },
        {
            name: "Tue",
            birthdays: []
        },
        {
            name: "Wed",
            birthdays: []
        },
        {
            name: "Thu",
            birthdays: []
        },
        {
            name: "Fri",
            birthdays: []
        },
        {
            name: "Sat",
            birthdays: []
        }
    ]
    data.map(a => {
        const day = getDay(a.birthday, year);
        if(day) {
        result[day].birthdays.push(a.name);
        }
    })
    return render(result);
}

function getDay(date, year) {
    const a = date.split("/");
    a[2] = year;
    const newBirthDate = a.join("/");
    return new Date(newBirthDate).getDay();
}

function getValue() {
    // return [{
    //     name: "Tyrion Lannister",
    //     birthday: "12/02/1978"
    // }, {
    //     name: "Cersei Lannister",
    //     birthday: "11/30/1975"
    // }, {
    //     name: "Daenerys Targaryen",
    //     birthday: "11/24/1991"
    // }, {
    //     name: "Arya Stark",
    //     birthday: "11/25/1996"
    // }, {
    //     name: "Jon Snow",
    //     birthday: "12/03/1989"
    // }, {
    //     name: "Sansa Stark",
    //     birthday: "15/08/1992"
    // }, {
    //     name: "Jorah Mormont",
    //     birthday: "12/16/1968"
    // }, {
    //     name: "Jaime Lannister",
    //     birthday: "12/06/1975"
    // }, {
    //     name: "Sandor Clegane",
    //     birthday: "11/07/1969"
    // }, {
    //     name: "Tywin Lannister",
    //     birthday: "10/12/1951"
    // }, {
    //     name: "Theon Greyjoy",
    //     birthday: "12/31/1989"
    // }, {
    //     name: "Samwell Tarly",
    //     birthday: "12/07/1990"
    // }, {
    //     name: "Joffrey Baratheon",
    //     birthday: "06/12/1992"
    // }, {
    //     name: "Catelyn Stark",
    //     birthday: "12/03/1962"
    // }, {
    //     name: "Bran Stark",
    //     birthday: "12/02/1995"
    // }, {
    //     name: "Petyr Baelish",
    //     birthday: "11/20/1974"
    // }, {
    //     name: "Robb Stark",
    //     birthday: "11/28/1986"
    // }, {
    //     name: "Brienne of Tarth",
    //     birthday: "11/27/1985"
    // }, {
    //     name: "Margaery Tyrell",
    //     birthday: "12/02/1989"
    // }, {
    //     name: "Stannis Baratheon",
    //     birthday: "09/14/1971"
    // }, {
    //     name: "Davos Seaworth",
    //     birthday: "02/13/1973"
    // }, {
    //     name: "Tormund Giantsbane",
    //     birthday: "12/14/1974"
    // }, {
    //     name: "Jeor Mormont",
    //     birthday: "11/01/1955"
    // }, {
    //     name: "Eddard Stark",
    //     birthday: "12/02/1963"
    // }, {
    //     name: "Khal Drogo",
    //     birthday: "12/05/1980"
    // }, {
    //     name: "Ramsay Bolton",
    //     birthday: "12/05/1976"
    // }, {
    //     name: "Robert Baratheon",
    //     birthday: "12/02/1965"
    // }, {
    //     name: "Daario Naharis",
    //     birthday: "12/02/1985"
    // }, {
    //     name: "Viserys Targaryen",
    //     birthday: "12/06/1984"
    // }]
    var field = document.getElementById("json-input");
var settings = JSON.parse(field.value);
return eval(settings);
}

const getFraction = num => {
    let rect = "1fr";
    let i = 1;
    while(Math.pow(i, 2) < num) {
        rect += " 1fr";
        i++;
    }
    return rect;
}

const render = (data) => {
    const root = document.getElementById('root');
    root.innerHTML = "";
    data.map(d => {
        const li = document.createElement("li");
        li.setAttribute("class", "cal__day");
        li.setAttribute("data-day", d.name.toLowerCase());
        const div = document.createElement("div");
        div.setAttribute("class", "day__date");
        li.appendChild(div);
        const innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", "day__people");
        innerDiv.style.display = "grid";
        innerDiv.style.gridTemplateColumns = getFraction(d.birthdays.length);
        innerDiv.style.gridTemplateRows = getFraction(d.birthdays.length);
        d.birthdays.map(bd => {
            const div = document.createElement("div");
            div.setAttribute("class", "day__person");
            div.innerText = bd.slice(0, 2);
            innerDiv.appendChild(div);
        })
        li.appendChild(innerDiv);
        root.appendChild(li);
    })
}