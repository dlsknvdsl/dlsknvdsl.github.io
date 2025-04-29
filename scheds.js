const scheds = 
{
    "Kern": {
        "VE023":[null, "8:15-9:30"],
        "MEC103":[null, "10:45-12:00", null, "10:45-12:00", null, "10:45-12:00"],
        "ME123-1":[null, "14:30-15:45", null, "14:30-15:45", null, "14:30-15:45"],
        "CE140P-1":[null, null, "8:15-10:45", null, "8:15-10:45"],
        "IE101":[null, null, "12:00-13:15", null, "12:00-13:15", null, "12:00-13:15"],
        "ENG040":[null, null, "14:30-15:45", null, "14:30-15:45", null, "14:30-15:45"],
        "CE103-1":[null, null, null, null, null, null, "7:00-10:45"]
    },
    "Ace": {
        "MEC101": [null, "7:00-8:15", null, "7:00-8:15", null, "7:00-8:15"],
        "PE044": [null, "9:30-12:00"],
        "ME112": [null, "13:15-14:30", null, "13:15-14:30", null, "13:15-14:30"],
        "EE108-1L": [null, null, "7:00-10:45"],
        "EENV102-1": [null, null, "15:45-17:00", null, "15:45-17:00"],
        "ECE104-1": [null, null, "18:15-20:45"],
        "ME103L": [null, null, null, "17:00-20:45"],
        "EE108-1": [null, null, null, null, "12:00-14:30"],
        "ECE104-1L": [null, null, null, null, null, null, "14:30-17:00"]
    },
    "Chester": {
        "IT223": [null, "7:00-10:00", null, null, null, "7:00-9:00"],
        "GEd101=Understanding the Self": [null, "11:30-13:00", null, "11:30-13:00"],
        "ES101": [null, null, "10:00-13:00", "8:00-10:00"],
        "IT222": [null, null, "14:00-16:00", null, "13:00-16:00"],
        "IT221": [null, null, "16:00-19:00", null, "16:00-18:00"],
        "MATH408": [null, null, null, "10:00-11:30", null, "9:00-10:30"],
        "GEd106": [null, null, null, "11:30-13:00", null, "10:30-12:00"],
        "PATHFit4": [null, null, null, null, null, null, "13:00-15:00"]
    },
    "Louzel": {
        "CE011": [null, "10:45-12:00", null, "10:45-12:00"],
        "ENT078": [null, "13:15-14:30", null, null, null, "12:00-14:30"],
        "VE031": [null, "15:45-17:00"],
        "CE101": [null, "17:00-18:15", null, "17:00-18:15", null, "17:00-18:15"],
        "MATH000P": [null, null, "7:00-8:15", null, "7:00-8:15", null, "7:00-8:15"],
        "EENV102-1": [null, null, "10:45-12:00", null, "10:45-12:00"],
        "ENG029": [null, null, "13:15-14:30", null, "13:15-14:30"],
        "CE101F": [null, null, null, "7:00-10:45"]
    },
    "Joseph": {
        "NSTP1": [null, "10:00-13:00"],
        "EE55L": [null, "13:00-16:00", null, null, null, "10:00-12:00"],
        "EE55": [null, null, null, null, null, "10:00-12:00"],
        "EE50": [null, null, "7:00-8:30", null, "7:00-8:30"],
        "EE51": [null, null, "12:00-13:00", null, "12:00-13:00"],
        "EE50L": [null, null, "13:00-16:00"],
        "EE51L": [null, null, "16:00-19:00"],
        "SAS1": [null, null, null, "7:00-8:30", null, "7:00-8:30"],
        "ENSC26": [null, null, null, "13:30-14:30", null, "13:30-14:30"],
        "ENSC26L": [null, null, null, null, "13:00-16:00"],
        "MATH10": [null, null, null, "14:30-16:00", null, "14:30-16:00"]
    },
    "Rolan": {
        "ROLAN1": [null, "10:00-12:00"],
        "AMT2227": [null, "13:00-14:30", "13:00-14:30"],
        "AMT2226": [null, "14:30-16:00", "14:30-16:00"],
        "AMT2221": [null, "17:00-18:00"],
        "AMT2223L": [null, "18:00-21:00"],
        "ROLAN2": [null, null, "10:00-12:00"],
        "AMT2223": [null, null, "17:00-18:00"],
        "FST1002": [null, null, "18:00-21:00"],
        "AMT2222L": [null, null, null, "11:00-14:00"],
        "AMT2224": [null, null, null, "15:00-17:00"],
        "AMT2221L": [null, null, null, null, "7:00-10:00"],
        "AMT2225L": [null, null, null, null, "11:00-14:00"],
        "AMT2224L": [null, null, null, null, null, "7:00-10:00"],
        "AMT2225": [null, null, null, null, null, "11:00-13:00"],
        "AMT2222": [null, null, null, null, null, "13:00-15:00"]
    },
    "Shekinah": {
        "PHYS72": [null, null, "10:15-11:15", "10:00-11:30", null, "10:00-11:30"],
        "MATH22": [null, null, "11:45-12:45", "11:45-12:45", "11:45-12:45", "11:45-12:45"],
        "EEE123": [null, null, "13:00-14:30", null, "13:00-14:30"],
        "EEE121": [null, null, "16:15-19:15", null, "8:30-11:30,16:15-17:15"],
        "FIL40": [null, null, null, "13:00-14:30", null, "13:00-14:30"],
        "EEE128": [null, null, null, "16:00-19:00"],
        "PE2": [null, null, null, null, null, "7:00-9:00"]
    },
    "Kowin": {
        "SS032": [null, "8:15-9:30", null, "8:15-9:30", null, "8:15-9:30"],
        "MATH130": [null, "9:30-10:45", null, "9:30-10:45", null, "9:30-10:45"],
        "IT130": [null, "10:45-12:00", null, "10:45-12:00", null, "10:45-12:00"],
        "IT101-2": [null, "12:00-14:30"],
        "PE042": [null , null, "7:00-9:30"],
        "IT101-2L": [null, null, "10:45-14:30"],
        "ENG029": [null, null, null, "12:00-13:15", null, "12:00-13:15"]
    },
    "Jay": {
        "GED0011": [null, null, "9:00-10:50", null, null, "9:00-10:50"],
        "GED0009": [null, null, "15:00-16:50", null, null, "15:00-16:50"],
        "CCS0001LL-LEC": [null, null, "17:00-19:40"],
        "CCS0001LL-LAB": [null, null, null, "7:00-9:50"],
        "CCS0001LL-LAB": [null, null, null, "10:00-12:50"],
        "CCS0003LL-LEC": [null, null, null, null, null, "11:00-13:40"],
        "GED0006": [null, null, null, null, null, null, "7:00-9:40"],
        "GED0004A": [null, null, null, null, null, null, "13:00-17:00"]
    }
};