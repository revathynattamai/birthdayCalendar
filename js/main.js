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
        if (day) {
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
    var field = document.getElementById("json-input").value;
    return new Function("a", "return " + field)();
}

const getFraction = num => {
    let rect = "1fr";
    let i = 1;
    while (Math.pow(i, 2) < num) {
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
            div.innerText = bd.slice(0, 2).toUpperCase();
            innerDiv.appendChild(div);
        })
        li.appendChild(innerDiv);
        root.appendChild(li);
    })
}