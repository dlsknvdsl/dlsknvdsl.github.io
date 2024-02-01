window.onload = () => {
    dateTime()
    const userInterface = ["Kern", "Sean", "Chester", "Louzel", "Atom", "Rolan", "Shekinah"];
    for (owner of userInterface) {
        createInterface(owner);
    }
};

// js primordial functions
function now() {
    return new Date(new Date().toISOString())};
    // return new Date(new Date(new Date().toISOString()).setHours())};
    // return new Date(new Date(new Date().toISOString()).setDate())};
    // return new Date(new Date(new Date(new Date().toISOString()).setDate("")).setHours(""))};

function dateTime() { // updates the clock
    const current = now();
    let timeString, state, hours, day;
    hours = current.getHours()


    if (hours > 12) {
        state = "PM"
        hours = hours - 12;
    }
    else {
        if (hours == 0) hours = 12;
        state = "AM"
    }

    timeString = hours + ":" + 
             ("0" + current.getMinutes()).slice(-2) + ":" +
             ("0" + current.getSeconds()).slice(-2) + " " +
             state;
    
    day = current.getDay()
    switch (day) {
        case 0: day = "Sunday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break
    }

    document.getElementById("time").innerHTML = timeString;
    document.getElementById("date").innerHTML = `Today is ${day}`
}
setInterval(dateTime, 1000);

// schedules
function getSchedules(owner, targetDay) {
    const subjectObject = scheds[owner];
    const globalClassesToday = new Map();
    const actualDay = targetDay === undefined ? now().getDay():targetDay;

    if (owner && !subjectObject) return new Error("invalid owner");

    if (subjectObject) {
        globalClassesToday.set(owner, subjectIterator(subjectObject, actualDay))
    }
    else {
        for (const [name, ownerSubjects] of Object.entries(scheds)) {
            globalClassesToday.set(name, subjectIterator(ownerSubjects, actualDay))
        }
    }

    function subjectIterator(subjects, day) {
        const localClassesToday = new Map();

        for (const [subject, timestampArray] of Object.entries(subjects)) {
            const subjectTimestamp = timestampArray[day];
            
            if (subjectTimestamp) localClassesToday.set(subjectTimestamp, subject)
        }
        return localClassesToday;
    }

    return globalClassesToday;
}

function scheduleLookAhead(owner, subjectsNum, startDateTime) {
    let iteratorDate;
    const output = [];
    const schedLength = subjectsNum || 3; // arbitrary number

    if (!owner) return new Error("no onwer");
    if (!startDateTime) {iteratorDate = now()}
    else {iteratorDate = new Date(startDateTime)};

    scheduleIterator(iteratorDate)
    function scheduleIterator(date, disableCutoff) {
        const iterationOutput = [];
        const ownerSchedules = getSchedules(owner, date.getDay()).get(owner);
        const scheduleArray = [...ownerSchedules.entries()];

        class Schedule {
            constructor(startHour, startMinute, endHour, endMinute, subjectCode, subjectTitle) {
                this.scheduleDay = date.getDay();
                this.startHour = startHour; 
                this.startMinute = startMinute;
                this.endHour = endHour;
                this.endMinute = endMinute;
                this.subjectCode = subjectCode;
                this.subjectTitle = subjectTitle;
            };
        };

        scheduleArray.forEach(subject => {
            const subjectCurrentTimestamps = subject[0].split(",");
            
            for (const timestamp of subjectCurrentTimestamps) { // IMPORTANT: parser also present in overview
                let [subjectCode, subjectTitle] = subject[1].split("=");
                let [startTime, endTime] = timestamp.split("-");
                let [startHour, startMinute] = startTime.split(":");
                let [endHour, endMinute] = endTime.split(":");
    
                iterationOutput.push(new Schedule(startHour, startMinute, endHour, endMinute, subjectCode, subjectTitle));    
            }
        });
        iterationOutput.sort((a, b) => (a.startHour + (a.startMinute / 60)) - (b.startHour + (b.startMinute / 60)))

        for (let i = 0, j = 0; i < iterationOutput.length - 1; i++) {
            let o1 = iterationOutput[i];
            let o2 = iterationOutput[i+1];

            if (o1.endHour != o2.startHour || o2.startMinute != o1.endMinute) { 
                    iterationOutput.splice(i+1, 0, new Schedule(o1.endHour, o1.endMinute, o2.startHour, o2.startMinute, "Vacant"))
                    i++;
            }
        }

        if (iterationOutput.length == 0) {
            iterationOutput.push(new Schedule("0", "00", "24", "00", "Vacant"))
        }
        else {
            let first = iterationOutput[0];
            let last = iterationOutput[iterationOutput.length - 1]

            if (first.startHour != 0 || first.startMinute != 0) {
                // iterationOutput.pop()
                iterationOutput.unshift(new Schedule("0", "00", first.startHour, first.startMinute, "Vacant"));
            };
            if (last.endHour != 24) {
                iterationOutput.push(new Schedule(last.endHour, last.endMinute, "24", "00", "Vacant"));
            };
        };

        if (!disableCutoff) {
            const cutoffSequence = iterationOutput.findIndex(s => (s.endHour > date.getHours() || (s.endHour == date.getHours() && s.endMinute > date.getMinutes())))
            iterationOutput.splice(0, cutoffSequence)
        };
        
        iterationOutput.forEach(x => output.push(x))

        

        let i = 0;
        if (output.length < schedLength) {
            var nextDay = new Date(date);
            nextDay.setDate(nextDay.getDate() + 1);
            // let nextDay = now().setDate(now().getDate() + i)
            scheduleIterator(nextDay, true)
        }
        else if (output.length > schedLength) {output.splice(schedLength, Infinity)}
    }
    return output;
}

// html dom functions
function toggleButton(element, ids, count) {
    const colors = ["#fc0303", "#f8fc03", "#0bfc03"];
    const idsArray = `[${ids.map(v => `"${v}"`)}]`;

    let increment = count + 1;
    if (increment > 2) increment = 0;

    element.children.item(0).style.backgroundColor = colors[increment];
    element.setAttribute("onclick", `toggleButton(this, ${idsArray}, ${increment})`)

    if (increment > 0) {
        const activeId = ids.splice(increment - 1)[0];
        document.getElementById(activeId).style.display = "block";
    };
    ids.forEach(id => document.getElementById(id).style.display = "none");
};

function createInterface(owner) { 
    const content = document.getElementsByClassName("content").item(0);
    const ownerSchedule = scheduleLookAhead(owner, 5);

    //schedule box

    const activeSchedule = ownerSchedule[0];
    const activeSubjectCode = activeSchedule.subjectCode;
    // const activeScheduleStatus = activeSchedule.subjectCode == "Vacant" ? "vacant":"in-class"; // retired feature for in-class/vacant
    // const dropdownScheduleButtonFunction = dropdownButton(this, `dropdown-${owner}`);

    // const [scheduleBox, scheduleOwner, scheduleStatus, scheduleCode, scheduleDropdownButton] = [div, div, div, div, div];
    const scheduleBox = document.createElement("div");
    const scheduleHeader = document.createElement("div");
    const scheduleOwner = document.createElement("div");
    // const scheduleStatus = document.createElement("div");
    const scheduleCode = document.createElement("div");
    const scheduleToggle = document.createElement("div");
    const scheduleToggleButton = document.createElement("div");

    scheduleBox.classList.add("schedule-box");
    scheduleBox.setAttribute("id", `${owner}`);

    scheduleHeader.classList.add("schedule-header");

    scheduleOwner.classList.add("schedule-owner");
    scheduleOwner.textContent = owner;

    // scheduleStatus.classList.add("schedule-owner-status");
    // scheduleStatus.textContent = activeScheduleStatus;

    scheduleCode.classList.add("schedule-subject-code-active");
    scheduleCode.style.color = activeSubjectCode == "Vacant" ? "#267513":"#941214";
    scheduleCode.textContent = activeSubjectCode;
    
    scheduleToggle.classList.add("schedule-toggle");
    scheduleToggle.setAttribute("onclick", `toggleButton(this, ["${owner}-upcoming", "${owner}-overview"], 0)`)

    scheduleToggleButton.classList.add("schedule-toggle-button");
    scheduleToggle.appendChild(scheduleToggleButton)
    
    scheduleHeader.appendChild(scheduleOwner)
    // scheduleBox.appendChild(scheduleStatus)
    scheduleHeader.appendChild(scheduleCode)
    scheduleHeader.appendChild(scheduleToggle)
    scheduleBox.appendChild(scheduleHeader)
    //schedule upcoming

    const scheduleUpcoming = createUpcomingInterface(owner, activeSchedule, ownerSchedule)

    const scheduleOverview = createOverviewInterface(owner);

    scheduleBox.appendChild(scheduleUpcoming);
    scheduleBox.appendChild(scheduleOverview)
    content.appendChild(scheduleBox)
}

function createUpcomingInterface(owner, activeSchedule, ownerSchedule) {
    const scheduleUpcoming = document.createElement("div");
    scheduleUpcoming.classList.add("schedule-upcoming");
    scheduleUpcoming.setAttribute("id", `${owner}-upcoming`);

    let day = Number(activeSchedule.scheduleDay);
    for  (const schedule of ownerSchedule) {
        const scheduleTab = document.createElement("div");
        const scheduleTimeTab = document.createElement("div");
        const scheduleTimeTabStart = document.createElement("div");
        const scheduleTimeTabEnd = document.createElement("div");
        const scheduleSeparator = document.createElement("div");
        const scheduleSubject = document.createElement("div");
        const scheduleSubjectCode = document.createElement("div");
        const scheduleSubjectName = document.createElement("div");

        scheduleTab.classList.add("schedule")

        scheduleTimeTabStart.textContent = timeFormatter(schedule.startHour, schedule.startMinute, false)
        scheduleTimeTabEnd.textContent = timeFormatter(schedule.endHour, schedule.endMinute, false)

        scheduleTimeTab.classList.add("schedule-time");
        scheduleTimeTab.appendChild(scheduleTimeTabStart);
        scheduleTimeTab.appendChild(scheduleTimeTabEnd)

        scheduleSeparator.classList.add("schedule-separator");

        scheduleSubjectCode.textContent = schedule.subjectCode;
        scheduleSubjectCode.classList.add("schedule-subject-code");

        scheduleSubjectName.textContent = schedule.subjectTitle;
        scheduleSubjectName.classList.add("schedule-subject-name");

        scheduleSubject.classList.add("schedule-subject");
        scheduleSubject.appendChild(scheduleSubjectCode);
        scheduleSubject.appendChild(scheduleSubjectName);

        scheduleTab.appendChild(scheduleTimeTab);
        scheduleTab.appendChild(scheduleSeparator);
        scheduleTab.appendChild(scheduleSubject);
        if (schedule.scheduleDay != day) {
            const upcomingSeparator = document.createElement("div");
            const upcomingSeparatorLine1 = document.createElement("div");
            const upcomingSeparatorDay = document.createElement("div");
            const upcomingSeparatorLine2 = document.createElement("div");

            upcomingSeparator.classList.add("upcoming-separator");

            upcomingSeparatorLine1.classList.add("upcoming-line-one");

            upcomingSeparatorDay.classList.add("upcoming-line-day");
            let upcomingSeparatorDayName;

            switch (schedule.scheduleDay) {
                case 0: upcomingSeparatorDayName = "Sunday"; break;
                case 1: upcomingSeparatorDayName = "Monday"; break;
                case 2: upcomingSeparatorDayName = "Tuesday"; break;
                case 3: upcomingSeparatorDayName = "Wednesday"; break;
                case 4: upcomingSeparatorDayName = "Thursday"; break;
                case 5: upcomingSeparatorDayName = "Friday"; break;
                case 6: upcomingSeparatorDayName = "Saturday"; break;
            }
            upcomingSeparatorDay.textContent = upcomingSeparatorDayName;
            day++;
            if (day == 7) {day = 0};

            upcomingSeparatorLine2.classList.add("upcoming-line-two");

            upcomingSeparator.appendChild(upcomingSeparatorLine1)
            upcomingSeparator.appendChild(upcomingSeparatorDay)
            upcomingSeparator.appendChild(upcomingSeparatorLine2)

            scheduleUpcoming.appendChild(upcomingSeparator)
        }

        scheduleUpcoming.appendChild(scheduleTab);
    }

    return scheduleUpcoming;
}

const colorIndex = new Map();
createColorIndex();

function createOverviewInterface(owner) {
    const ownerSchedule = scheds[owner]; // no need to check for incompatible owner since called from function that calls getSchedules()



    const overview = document.createElement("div");
    overview.classList.add("overview");
    overview.setAttribute("id", `${owner}-overview`);

    const overviewSchedule = document.createElement("div");
    overviewSchedule.classList.add("overview-schedule");



    const overviewScheduleHeaders = document.createElement("div");
    overviewScheduleHeaders.classList.add("overview-schedule-headers")
    
    const overviewScheduleHeadersContent = ["", "M", "T", "W", "Th", "F", "S"]
    for (const content of overviewScheduleHeadersContent) {
        const overviewHeaderCell = document.createElement("div");
        overviewHeaderCell.textContent = content;
        overviewScheduleHeaders.appendChild(overviewHeaderCell)
    };
    overviewSchedule.appendChild(overviewScheduleHeaders)



    const overviewScheduleTimes = document.createElement("div");
    overviewScheduleTimes.classList.add("overview-schedule-times");

    const overviewScheduleTimesContent = ["7-8", "8-9", "9-10", "10-11", "11-12", "12-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7"]
    for (const time of overviewScheduleTimesContent) {
        const overviewScheduleTimeCell = document.createElement("div");
        overviewScheduleTimeCell.textContent = time;
        overviewScheduleTimes.appendChild(overviewScheduleTimeCell);
    };
    overviewSchedule.appendChild(overviewScheduleTimes)


    
 
    const overviewScheduleContent = document.createElement("div");
    overviewScheduleContent.classList.add("overview-schedule-content");

    for (let i = 0; i < 6; i++) {
        const overviewScheduleColumn = document.createElement("div");

        const overviewScheduleCurrent = [];
        for (const [subjectName, subjectSchedules] of Object.entries(ownerSchedule)) {
            if (!subjectSchedules[i + 1]) continue; // note that +1 here because the database includes [0] as sunday, while the overview schedule does not, with [0] as M. Hence, [0] of databas is ignored.
            const subjectScheduleCurrent = subjectSchedules[i + 1];

            class Schedule {
                constructor(subjectName, startHour, startMinute, endHour, endMinute) {
                    this.subjectName = subjectName;
                    this.startHour = startHour;
                    this.startMinute = startMinute;
                    this.endHour = endHour;
                    this.endMinute = endMinute;
                }
            };

            const subjectCurrentTimestamps = subjectScheduleCurrent.split(",");

            for (const timestamp of subjectCurrentTimestamps) {

                let [startTime, endTime] = timestamp.split("-");
                let [startHour, startMinute] = startTime.split(":");
                let [endHour, endMinute] = endTime.split(":");
    
                overviewScheduleCurrent.push(new Schedule(subjectName, startHour, startMinute, endHour, endMinute))    
            
            }
        };

        for (let i = 0, j = 7; i < 12; i++, j++) {
            const overviewScheduleCell = document.createElement("div");

            for (const schedule of overviewScheduleCurrent) {
                const startHourCheck = j - schedule.startHour;
                const endHourCheck = schedule.endHour - j;

                if (startHourCheck < 0 || endHourCheck < 0) continue;
                const [subjectCode, subjectName] = schedule.subjectName.split("=")
                const color = colorIndex.get(subjectCode);
                let points;
                

                if (schedule.startHour == j) {
                    switch (15 * Math.round(schedule.startMinute / 15)) {
                        case 0: points = "0 0, 100 0, 100 100, 0 100"; break;
                        case 15: points = "50 50, 100 0, 100 100, 0 100, 0 0"; break;
                        case 30: points = "100 0, 100 100, 0 100"; break;
                        case 45: points = "50 50, 100 100, 0 100"; break;
                        case 60: continue;
                    };
                }
                else if (schedule.endHour == j) {
                    switch (15 * Math.round(schedule.endMinute / 15)) {
                        case 0: continue;
                        case 15: points = "50 50, 100 0, 0 0"; break;
                        case 30: points = "0 0, 0 100, 100 0"; break;
                        case 45: points = "50 50, 100 100, 100 0, 0 0, 0 100"; break;
                        case 60: points = "0 0, 100 0, 100 100, 0 100"; break;
                    }
                }
                else {
                    points = "0 0, 100 0, 100 100, 0 100";
                }
                overviewScheduleCell.appendChild(createOverviewSVG(points, color));
            }

            overviewScheduleColumn.appendChild(overviewScheduleCell);
        };
        overviewScheduleContent.appendChild(overviewScheduleColumn);
    };
    overviewSchedule.appendChild(overviewScheduleContent);
    overview.appendChild(overviewSchedule);

    console.log(overviewSchedule)

    const overviewLegend = document.createElement("div");
    overviewLegend.classList.add("overview-legend");

    for (const subject of Object.keys(ownerSchedule)) {
        const [subjectCode, subjectName] = subject.split("=");
        const color = colorIndex.get(subjectCode);
        overviewLegend.appendChild(createOverviewLegend(subjectCode, color));
    };
    overview.appendChild(overviewLegend)

    // console.log(overviewScheduleContent.querySelectorAll(":scope > div"))
    
    return overview;
}

function createOverviewSVG(points, color) {
    const overviewCellSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    overviewCellSVG.setAttribute("width", "100%");
    overviewCellSVG.setAttribute("height", "100%");
    overviewCellSVG.setAttribute("viewBox", "0 0 100 100");
    overviewCellSVG.setAttribute("preserveAspectRatio", "none");
    overviewCellSVG.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink")

    const overviewCellSVGPolygon = document.createElementNS("http://www.w3.org/2000/svg",   "polygon");
    overviewCellSVGPolygon.setAttribute("points", points);
    overviewCellSVGPolygon.setAttribute("fill", color);

    overviewCellSVG.appendChild(overviewCellSVGPolygon);
    return overviewCellSVG;
}

function createOverviewLegend(label, color) {
    const overviewLegend = document.createElement("div");
    


    const overviewLegendColor = document.createElement("div");
    overviewLegendColor.classList.add("overview-legend-color");
    overviewLegendColor.style.backgroundColor = color;



    const overviewLegendLabel = document.createElement("div");
    overviewLegendLabel.classList.add("overview-legend-label");
    overviewLegendLabel.textContent = label;


    
    overviewLegend.appendChild(overviewLegendColor);
    overviewLegend.appendChild(overviewLegendLabel);

    return overviewLegend;
}

function timeFormatter(hour, minute, twentyFourHourFormat) {
    if (twentyFourHourFormat) return `${hour}:${minute}`;

    let format = "AM"

    if (hour == 24) {hour = 12; format = "AM"}
    if (hour == 0) {hour = 12; format = "AM"}
    else if (hour > 12) {hour = hour - 12; format = "PM"};
    return `${hour}:${minute} ${format}`
};

function createColorIndex() {
    const subjectArray = [];
    for (const schedules of Object.values(scheds)) {
        for (const subject of Object.keys(schedules)) {
            const [subjectCode, subjectName] = subject.split("=")
            subjectArray.push(subjectCode);
        }
    }
    
    const uniqueSubjects = subjectArray.filter((val, index, array) => array.indexOf(val) === index);
    for (const subjectName of uniqueSubjects) colorIndex.set(subjectName, selectColor(colorIndex.size + 1));
}

function selectColor(number) {
    const hue = number * 137.508; // use golden angle approximation
    return `hsl(${hue},75%,45%)`;
};
// MobileInterface("Kern")



