const scheds = 
{
    "장식 꼬리": {
        "CE200-3": [null, "7:00-8:15"],
        "CE200-3L": [null, null, "7:00-8:15", "7:00-8:15"],
        "CE123-1": [null, "9:30-10:45", "9:30-10:45", "9:30-10:45", "9:30-10:45"],
        "CE133-2": [null, "14:30-17:00", null, "14:30-15:45"],
        "SS041": [null, null, "8:15-9:30", null, "8:15-9:30", null, "8:15-9:30"],
        "CE135": [null, null, "12:00-13:15", null, "14:30-17:00"],
        "MEC103-1": [null, null, "13:15-14:30"],
        "CE135L-1": [null, null, "17:00-20:45"],
        "CE123-1L": [null, null, null, null, null, "7:00-10:45"]
    },
    "Ace": {
        "MEC102": [null, "13:15-14:30", null, null, null, "13:15-14:30"],
        "EECO101": [null, "18:15-19:30", null, "18:15-19:30", null, "18:15-19:30"],
        "SS041": [null, null, "8:15-9:30", null, "8:15-9:30", null, "8:15-9:30"],
        "ENV076": [null, null, "9:30-10:45", null, "9:30-10:45", null, "9:30-10:45"],
        "ME115": [null, null, "13:15-15:45", null, "14:30-15:45"],
        "ECE135": [null, null, "19:30-20:45", null, null, null, "13:15-14:30"],
        "ME141-1L": [null, null, null, "14:30-18:15"],
        "ECE135L": [null, null, null, null, null, null, "14:30-18:15"]
    },
    "Chester": {
        "BAT401": [null, "7:00-10:00", null, null, null, "12:00-14:00"],
        "GEd107": [null, "11:30-13:00", "14:00-15:30"],
        "IT311": [null, "13:00-16:00", null, null, null, "9:00-11:00"],
        "IT312": [null, null, "10:00-13:00", null, null, "7:00-9:00"],
        "IT313": [null, null, "15:30-17:30", "13:00-16:00"],
        "BAT402": [null, null, null, "16:00-19:00", null, "14:00-16:00"],
        "IT314": [null, null, null, null, null, null, "13:00-18:00"]
    },
    "Louzel": {
        "CE101-1P": [null, "7:00-10:45,14:30-15:45", null, "14:30-15:45"],
        "CE131P-1": [null, "15:45-17:00", "15:45-17:00", null, "15:45-17:00", "15:45-17:00", "15:45-18:15"],
        "EMGT101-1": [null, "18:15-19:30", null, "18:15-19:30"],
        "MEC103-1": [null, null, "13:15-14:30"],
        "TEC101": [null, null, null, "12:00-14:30", null, "12:00-13:15"],
        "CE151-1L": [null, null, null, null, null, null, "7:00-10:45"],
        "CE151-1": [null, null, null, null, null, null, "12:00-15:45"]
    },
    "Joseph": {
        "EE75": [null, null, null, "11:30-13:00", null, "11:30-13:00"],
        "EE75L": [null, "16:00-19:00"],
        "FPPS183": [null, null, "8:00-10:00"],
        "FPPS183L": [null, null, "10:00-13:00"],
        "ENG 10": [null, null, "13:00-14:30", null, "13:00-14:30"],
        "EE71": [null, null, "14:30-16:00", null, "14:30-16:00"],
        "EE70": [null, null, "17:30-19:00", null, "17:30-19:00"],
        "EE70L": [null, null, null, "13:00-16:00"],
        "STS1": [null, null, null, "8:30-10:00", null, "8:30-10:00"],
        "HK12": [null, null, null, null, "7:00-9:00"],
        "EE79": [null, null, null, null, null, "13:00-14:00"]
    },
    "Marga": {
        "FBS130": [null, null, "8:00-9:00", null, "8:00-9:00"],
        "FBS130L": [null, null, "13:00-16:00"],
        "SFFG113": [null, null, "10:00-11:30", null, "10:00-11:30"],
        "FPPS127": [null, null, "16:00-17:30", null, "16:00-17:30"],
        "FPPS127L": [null, null, null, null, "13:00-16:00"],
        "STS1": [null, null, null, "8:30-10:00", null, "8:30-10:00"],
        "FBS172": [null, null, null, "11:00-12:00", null, "11:00-12:00"],
        "FBS172L": [null, null, null, null, null, "13:00-16:00"],
        "SFI142": [null, null, null, "16:00-17:00", null, "16:00-17:00"],
        "SFI142L": [null, null, null, "13:00-16:00"]
    },
    "Rolan": {
        "AERO": [null, "7:00-9:30", null, null, "7:00-9:30"],
        "ETHICS": [null, "9:30-11:00", null, null, "9:30-11:00"],
        "AVPHYS": [null, "12:00-13:30", null, null, "12:00-13:30"],
        "ICALC": [null, "14:00-16:00", null, null, "14:00-16:00"],
        "RIZAL": [null, "16:00-17:30", null, null, "16:00-17:30"],
        "FCL600": [null, "18:00-20:00", null, null, "18:00-20:00"],
        "THERMO": [null, null, "7:00-8:30", null, null, "7:00-8:30"],
        "SRB": [null, null, "8:30-10:00", null, null, "8:30-10:00"],
        "AVPHYSL": [null, null, "11:00-14:00"]
    },
    "Shek": {
        "ECE164": [null, null, "10:00-13:00"],
        "ECE161": [null, null, "13:00-14:30", null, "13:00-14:30"],
        "ECE163": [null, null, "14:30-16:00", null, "14:30-16:00"],
        "ECE197": [null, null, "17:30-19:00", null, "17:30-19:00", "8:30-11:30"],
        "MuL8": [null, null, null, "11:30-13:00", null, "11:30-13:00"],
        "STS1": [null, null, null, "14:30-16:00", null, "14:30-16:00"],
        "EEE192": [null, null, null, null, "10:00-13:00"],
    },
    "Franco": {
        "RLT002": [null, "15:00-17:00"],
        "IT231": [null, null, "8:00-12:00,13:00-15:00"],
        "DBC100": [null, null, "15:00-17:00"],
        "IT411": [null, null, null, null, "8:00-12:00,13:00-15:00"],
        "IT201": [null, null, null, null, null, "8:00-10:00", "8:00-12:00"],
        "RLT+IT261": [null, null, null, null, null, "13:00-15:00"],
        "IT261": [null, null, null, null, null, null, "13:00-17:00"]
    },
    "Sean": {
        "MATH055": [null, "8:15-9:30", null, "8:15-9:30", null, "8:15-9:30"],
        "MATH035": [null, "10:45-12:00", null, "10:45-12:00", null, "10:45-12:00"],
        "MEC102": [null, "13:15-14:30", null, null, null, "13:15-14:30"],
        "SS041": [null, "14:30-15:45", null, "14:30-15:45", null, "14:30-15:45"],
        "CE131P-1": [null, "15:45-17:00", "15:45-17:00", null, "15:45-17:00", "15:45-17:00", "15:45-18:15"],
        "CE151-1L": [null, null, null, null, null, null, "7:00-10:45"],
        "CE151-1": [null, null, null, null, null, null, "12:00-15:45"] 
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
    },
    "Tonio": {
        "GA-MEART": [null, "9:15-10:45", null, null, "11:00-12:30"],
        "CS-ADPRG": [null, "16:15-17:45", null, null, "16:15-17:45"],
        "GE-ETHIC": [null, null, "7:30-9:00", null, null, "7:30-9:00"],
        "ST-ADVDB": [null, null, "9:15-10:45", null, null, "9:15-10:45"],
        "CS-SWENG": [null, null, "11:00-12:30", null, null, "12:45-14:15"],
        "PE-DFOUR": [null, null, null, "8:00-10:00"],
        "LC-LSTWO": [null, null, null, null, null, null, "10:00-12:00"]
    }
};