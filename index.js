window.onload = () => {
    dateTime()
    const createInterface = ["Kern"];
    for (owner of createInterface) {
        createMobileInterface(owner);
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

        scheduleArray.forEach(s => {
            let [subjectCode, subjectTitle] = s[1].split("=");
            let [startTime, endTime] = s[0].split("-");
            let [startHour, startMinute] = startTime.split(":");
            let [endHour, endMinute] = endTime.split(":");

            iterationOutput.push(new Schedule(startHour, startMinute, endHour, endMinute, subjectCode, subjectTitle));
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
            const cutoffSequence = iterationOutput.findIndex(s => (s.endHour > date.getHours() || (s.endHour == date.getHours() && s.endMinutes > date.getMinutes())))
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
console.log(scheduleLookAhead("Kern", 5))

// html dom functions
function dropdownButton(element, id) {
    element.style.transform = element.style.transform ? "":"rotate(135deg)";
    
    const referenceStyle = document.getElementById(id).style;
    document.getElementById(id).style.display = referenceStyle.display=="flex" ? "none":"flex";
}

function createMobileInterface(owner) { 
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
    const scheduleDropdownButton = document.createElement("div");

    scheduleBox.classList.add("schedule-box");
    scheduleBox.setAttribute("id", `mobile-${owner}`);

    scheduleHeader.classList.add("schedule-header");

    scheduleOwner.classList.add("schedule-owner");
    scheduleOwner.textContent = owner;

    // scheduleStatus.classList.add("schedule-owner-status");
    // scheduleStatus.textContent = activeScheduleStatus;

    scheduleCode.classList.add("schedule-subject-code-active");
    scheduleCode.textContent = activeSubjectCode;
    
    scheduleDropdownButton.classList.add("schedule-dropdown-button");
    scheduleDropdownButton.setAttribute("onclick", `dropdownButton(this, 'mobile-${owner}-dropdown')`)
    scheduleDropdownButton.textContent = "+";

    
    scheduleHeader.appendChild(scheduleOwner)
    // scheduleBox.appendChild(scheduleStatus)
    scheduleHeader.appendChild(scheduleCode)
    scheduleHeader.appendChild(scheduleDropdownButton)
    scheduleBox.appendChild(scheduleHeader)
    //schedule dropdown

    const scheduleDropdown = document.createElement("div");
    scheduleDropdown.classList.add("schedule-dropdown");
    scheduleDropdown.setAttribute("id", `mobile-${owner}-dropdown`);

    let day = Number(activeSchedule.scheduleDay);
    for (const schedule of ownerSchedule) {
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
            const dropdownSeparator = document.createElement("div");
            const dropdownSeparatorLine1 = document.createElement("div");
            const dropdownSeparatorDay = document.createElement("div");
            const dropdownSeparatorLine2 = document.createElement("div");

            dropdownSeparator.classList.add("dropdown-separator");

            dropdownSeparatorLine1.classList.add("dropdown-line-one");

            dropdownSeparatorDay.classList.add("dropdown-line-day");
            let dropdownSeparatorDayName;

            switch (schedule.scheduleDay) {
                case 0: dropdownSeparatorDayName = "Sunday"; break;
                case 1: dropdownSeparatorDayName = "Monday"; break;
                case 2: dropdownSeparatorDayName = "Tuesday"; break;
                case 3: dropdownSeparatorDayName = "Wednesday"; break;
                case 4: dropdownSeparatorDayName = "Thursday"; break;
                case 5: dropdownSeparatorDayName = "Friday"; break;
                case 6: dropdownSeparatorDayName = "Saturday"; break;
            }
            dropdownSeparatorDay.textContent = dropdownSeparatorDayName;
            day++;
            if (day == 7) {day = 0};

            dropdownSeparatorLine2.classList.add("dropdown-line-two");

            dropdownSeparator.appendChild(dropdownSeparatorLine1)
            dropdownSeparator.appendChild(dropdownSeparatorDay)
            dropdownSeparator.appendChild(dropdownSeparatorLine2)

            scheduleDropdown.appendChild(dropdownSeparator)
        }

        scheduleDropdown.appendChild(scheduleTab);
    }

    scheduleBox.appendChild(scheduleDropdown);
    content.appendChild(scheduleBox)
}

function timeFormatter(hour, minute, twentyFourHourFormat) {
    if (twentyFourHourFormat) return `${hour}:${minute}`;

    let format = "AM"

    if (hour == 24) {hour = 12; format = "AM"}
    if (hour == 0) {hour = 12; format = "AM"}
    else if (hour > 12) {hour = hour - 12; format = "PM"};
    return `${hour}:${minute} ${format}`
};

// createMobileInterface("Kern")



