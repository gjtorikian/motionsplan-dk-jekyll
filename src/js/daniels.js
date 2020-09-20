let motionsplan = {}

motionsplan.RunningJackDaniels = function(distance, hours, minutes, seconds) {
   distance = distance;
   hours = hours;
   minutes = minutes;
   seconds = seconds;
   var race_time = hours * 3600 + minutes * 60 + seconds * 1;

   // Competition array sorting

    var distances = new Array("1500m", "1mile", "3km", "2miles", "5km", "8km", "5miles", "10km", "15km", "10miles", "20km", "hmarathon", "25km", "30km", "marathon");
    var complength = new Array(1.5, 1.609344, 3, 3.218688, 5, 8, 8.04672, 10, 15, 16.09344, 20, 21.1, 25, 30, 42.2);

    // Competetion times

    var comp = new Array();
    comp[85] = new Array("3:23.5", "3:39.6", "7:14.1", "7:48.9", "12:37", "20:50", "20:58", "26:19", "40:17", "43:26", "54:40", "57:50", "1:09:33", "1:24:33", "2:01:10");
    comp[84] = new Array("3:25.5", "3:41.8", "7:18.5", "7:53.7", "12:45", "21:02", "21:10", "26:34", "40:42", "43:53", "55:14", "58:25", "1:10:15", "1:25:25", "2:02:24");
    comp[83] = new Array("3:27.6", "3:44.1", "7:23.1", "7:58.7", "12:53", "21:16", "21:24", "26:51", "41:06", "44:19", "55:48", "59:01", "1:10:59", "1:26:18", "2:03:40");
    comp[82] = new Array("3:29.7", "3:46.4", "7:27.8", "8:03.7", "13:01", "21:29", "21:37", "27:07", "41:32", "44:47", "56:23", "59:38", "1:11:43", "1:27:12", "2:04:57");
    comp[81] = new Array("3:31.9", "3:48.7", "7:32.5", "8:08.9", "13:09", "21:42", "21:50", "27:24", "41:58", "45:15", "56:58", "1:00:15", "1:12:28", "1:28:07", "2:06:17");
    comp[80] = new Array("3:34.2", "3:51.2", "7:37.5", "8:14.2", "13:18", "21:56", "22:04", "27:41", "42:25", "45:44", "57:34", "1:00:54", "1:13:15", "1:29:04", "2:07:38");
    comp[79] = new Array("3:36.5", "3:53.7", "7:43", "8:20", "13:26", "22:10", "22:18", "27:59", "42:52", "46:13", "58:12", "1:01:34", "1:14:03", "1:30:02", "2:09:02");
    comp[78] = new Array("3:38.8", "3:56.2", "7:48", "8:25", "13:35", "22:24", "22:32", "28:17", "43:20", "46:44", "58:51", "1:02:15", "1:14:52", "1:31:02", "2:10:27");
    comp[77] = new Array("3:41", "3:58", "7:53", "8:31", "13:44", "22:39", "22:48", "28:36", "43:49", "47:15", "59:30", "1:02:56", "1:15:41", "1:32:02", "2:11:54");
    comp[76] = new Array("3:44", "4:02", "7:58", "8:37", "13:54", "22:55", "23:03", "28:55", "44:18", "47:46", "1:00:10", "1:03:39", "1:16:33", "1:33:05", "2:13:23");
    comp[75] = new Array("3:46", "4:04", "8:04", "8:43", "14:03", "23:10", "23:18", "29:14", "44:48", "48:19", "1:00:52", "1:04:23", "1:17:26", "1:34:09", "2:14:55");
    comp[74] = new Array("3:49", "4:07", "8:10", "8:49", "14:13", "23:26", "23:34", "29:34", "45:19", "48:52", "1:01:34", "1:05:08", "1:18:20", "1:35:14", "2:16:29");
    comp[73] = new Array("3:52", "4:10", "8:16", "8:55", "14:23", "23:42", "23:51", "29:55", "45:51", "49:27", "1:02:17", "1:05:54", "1:19:15", "1:36:22", "2:18:05");
    comp[72] = new Array("3:54", "4:13", "8:22", "9:02", "14:33", "23:59", "24:08", "30:16", "46:24", "50:02", "1:03:03", "1:06:42", "1:20:13", "1:37:31", "2:19:44");
    comp[71] = new Array("3:57", "4:16", "8:28", "9:09", "14:44", "24:16", "24:25", "30:38", "46:58", "50:39", "1:03:49", "1:07:31", "1:21:11", "1:38:42", "2:21:26");
    comp[70] = new Array("4:00", "4:19", "8:34", "9:16", "14:55", "24:34", "24:43", "31:00", "47:32", "51:16", "1:04:36", "1:08:21", "1:22:11", "1:39:55", "2:23:10");
    comp[69] = new Array("4:03", "4:23", "8:41", "9:23", "15:06", "24:52", "25:01", "31:23", "48:08", "51:55", "1:05:24", "1:09:12", "1:23:13", "1:41:10", "2:24:57");
    comp[68] = new Array("4:06", "4:26", "8:48", "9:30", "15:18", "25:11", "25:20", "31:46", "48:44", "52:34", "1:06:14", "1:10:05", "1:24:16", "1:42:27", "2:26:47");
    comp[67] = new Array("4:10", "4:30", "8:55", "9:37", "15:29", "25:30", "25:40", "32:11", "49:22", "53:15", "1:07:06", "1:11:00", "1:25:22", "1:43:46", "2:28:40");
    comp[66] = new Array("4:13", "4:33", "9:02", "9:45", "15:42", "25:50", "25:59", "32:35", "50:00", "53:56", "1:07:59", "1:11:56", "1:26:29", "1:45:08", "2:30:36");
    comp[65] = new Array("4:16", "4:37", "9:09", "9:53", "15:54", "26:10", "26:20", "33:01", "50:40", "54:39", "1:08:53", "1:12:53", "1:27:38", "1:46:31", "2:32:35");
    comp[64] = new Array("4:20", "4:41", "9:17", "10:01", "16:07", "26:32", "26:41", "33:28", "51:21", "55:23", "1:09:50", "1:13:53", "1:28:49", "1:47:57", "2:34:38");
    comp[63] = new Array("4:24", "4:45", "9:25", "10:10", "16:20", "26:53", "27:03", "33:55", "52:03", "56:09", "1:10:47", "1:14:54", "1:30:02", "1:49:26", "2:36:44");
    comp[62] = new Array("4:27", "4:49", "9:33", "10:18", "16:34", "27:15", "27:25", "34:23", "52:47", "56:56", "1:11:47", "1:15:57", "1:31:18", "1:50:57", "2:38:54");
    comp[61] = new Array("4:31", "4:53", "9:41", "10:27", "16:48", "27:38", "27:49", "34:52", "53:32", "57:45", "1:12:48", "1:17:02", "1:32:35", "1:52:31", "2:41:08");
    comp[60] = new Array("4:35", "4:57", "9:50", "10:37", "17:03", "28:02", "28:13", "35:22", "54:18", "58:35", "1:13:51", "1:18:09", "1:33:55", "1:54:08", "2:43:25");
    comp[59] = new Array("4:39", "5:02", "9:58", "10:46", "17:17", "28:26", "28:36", "35:52", "55:06", "59:26", "1:14:57", "1:19:18", "1:35:18", "1:55:48", "2:45:47");
    comp[58] = new Array("4:44", "5:06", "10:08", "10:56", "17:33", "28:52", "29:02", "36:24", "55:55", "1:00:20", "1:16:05", "1:20:30", "1:36:44", "1:57:31", "2:48:14");
    comp[57] = new Array("4:48", "5:11", "10:17", "11:06", "17:49", "29:18", "29:29", "36:57", "56:46", "1:01:14", "1:17:14", "1:21:43", "1:38:11", "1:59:17", "2:50:45");
    comp[56] = new Array("4:53", "5:16", "10:27", "11:17", "18:05", "29:45", "29:55", "37:31", "57:39", "1:02:12", "1:18:26", "1:23:00", "1:39:43", "2:01:07", "2:53:20");
    comp[55] = new Array("4:57", "5:21", "10:37", "11:28", "18:22", "30:12", "30:23", "38:06", "58:33", "1:03:10", "1:19:40", "1:24:18", "1:41:16", "2:03:00", "2:56:01");
    comp[54] = new Array("5:02", "5:27", "10:47", "11:39", "18:40", "30:41", "30:52", "38:42", "59:30", "1:04:12", "1:20:57", "1:25:40", "1:42:53", "2:04:58", "2:58:47");
    comp[53] = new Array("5:07", "5:32", "10:58", "11:50", "18:58", "31:11", "31:23", "39:20", "1:00:28", "1:05:14", "1:22:17", "1:27:04", "1:44:34", "2:06:59", "3:01:39");
    comp[52] = new Array("5:13", "5:38", "11:09", "12:02", "19:17", "31:42", "31:54", "39:59", "1:01:29", "1:06:20", "1:23:39", "1:28:31", "1:46:17", "2:09:04", "3:04:36");
    comp[51] = new Array("5:18", "5:44", "11:21", "12:15", "19:36", "32:14", "32:26", "40:39", "1:02:31", "1:07:27", "1:25:05", "1:30:02", "1:48:05", "2:11:13", "3:07:39");
    comp[50] = new Array("5:24", "5:50", "11:33", "12:28", "19:57", "32:47", "32:59", "41:21", "1:03:36", "1:08:37", "1:26:33", "1:31:35", "1:49:56", "2:13:27", "3:10:49");
    comp[49] = new Array("5:30", "5:56", "11:45", "12:41", "20:18", "33:22", "33:34", "42:04", "1:04:44", "1:09:50", "1:28:05", "1:33:12", "1:51:52", "2:15:47", "3:14:06");
    comp[48] = new Array("5:36", "6:03", "11:58", "12:55", "20:39", "33:58", "34:10", "42:50", "1:05:53", "1:11:05", "1:29:40", "1:34:53", "1:53:52", "2:18:11", "3:17:29");
    comp[47] = new Array("5:42", "6:10", "12:12", "13:10", "21:02", "34:34", "34:47", "43:36", "1:07:06", "1:12:24", "1:31:19", "1:36:38", "1:55:56", "2:20:40", "3:21:00");
    comp[46] = new Array("5:49", "6:17", "12:26", "13:25", "21:25", "35:13", "35:26", "44:25", "1:08:22", "1:13:46", "1:33:02", "1:38:27", "1:58:06", "2:23:16", "3:24:39");
    comp[45] = new Array("5:56", "6:25", "12:40", "13:40", "21:50", "35:54", "36:07", "45:16", "1:09:40", "1:15:10", "1:34:49", "1:40:20", "2:00:20", "2:25:57", "3:28:26");
    comp[44] = new Array("6:03", "6:32", "12:55", "13:56", "22:15", "36:35", "36:49", "46:09", "1:11:02", "1:16:38", "1:36:40", "1:42:17", "2:02:39", "2:28:45", "3:32:23");
    comp[43] = new Array("6:11", "6:41", "13:11", "14:13", "22:41", "37:19", "37:32", "47:04", "1:12:27", "1:18:10", "1:38:36", "1:44:20", "2:05:05", "2:31:39", "3:36:28");
    comp[42] = new Array("6:19", "6:49", "13:28", "14:31", "23:09", "38:04", "38:18", "48:01", "1:13:56", "1:19:46", "1:40:36", "1:46:27", "2:07:35", "2:34:40", "3:40:43");
    comp[41] = new Array("6:27", "6:58", "13:45", "14:49", "23:38", "38:52", "39:06", "49:01", "1:15:29", "1:21:26", "1:42:42", "1:48:40", "2:10:13", "2:37:49", "3:45:09");
    comp[40] = new Array("6:35", "7:07", "14:03", "15:08", "24:08", "39:41", "39:56", "50:03", "1:17:06", "1:23:11", "1:44:53", "1:50:59", "2:12:57", "2:41:06", "3:49:45");
    comp[39] = new Array("6:44", "7:17", "14:21", "15:29", "24:39", "40:33", "40:48", "51:09", "1:18:47", "1:24:59", "1:47:10", "1:53:24", "2:15:49", "2:44:32", "3:54:34");
    comp[38] = new Array("6:54", "7:27", "14:41", "15:49", "25:12", "41:27", "41:42", "52:17", "1:20:33", "1:26:54", "1:49:33", "1:55:55", "2:18:48", "2:48:06", "3:59:35");
    comp[37] = new Array("7:04", "7:38", "15:01", "16:11", "25:46", "42:24", "42:39", "53:29", "1:22:24", "1:28:53", "1:52:03", "1:58:34", "2:21:55", "2:51:51", "4:04:50");
    comp[36] = new Array("7:14", "7:49", "15:23", "16:34", "26:22", "43:23", "43:39", "54:44", "1:24:20", "1:30:58", "1:54:40", "2:01:19", "2:25:11", "2:55:45", "4:10:19");
    comp[35] = new Array("7:25", "8:01", "15:45", "16:58", "27:00", "44:26", "44:42", "56:03", "1:26:22", "1:33:09", "1:57:24", "2:04:13", "2:28:36", "2:59:51", "4:16:03");
    comp[34] = new Array("7:37", "8:14", "16:09", "17:24", "27:39", "45:31", "45:48", "57:26", "1:28:30", "1:35:27", "2:00:17", "2:07:16", "2:32:12", "3:04:08", "4:22:03");
    comp[33] = new Array("7:49", "8:27", "16:33", "17:50", "28:21", "46:41", "46:58", "58:54", "1:30:45", "1:37:52", "2:03:18", "2:10:27", "2:35:58", "3:08:39", "4:28:22");
    comp[32] = new Array("8:02", "8:41", "16:59", "18:18", "29:05", "47:54", "48:11", "1:00:26", "1:33:07", "1:40:25", "2:06:29", "2:13:49", "2:39:56", "3:13:23", "4:34:59");
    comp[31] = new Array("8:15", "8:55", "17:27", "18:48", "29:51", "49:10", "49:28", "1:02:03", "1:35:36", "1:43:05", "2:09:50", "2:17:21", "2:44:06", "3:18:22", "4:41:57");
    comp[30] = new Array("8:30", "9:11", "17:56", "19:19", "30:40", "50:32", "50:50", "1:03:46", "1:38:14", "1:45:55", "2:13:21", "2:21:04", "2:48:29", "3:23:37", "4:49:17");

    // Train Array sorting

    var zones = new Array("e_km", "e_mile", "mp_km", "mp_mile", "t_400", "t_800", "t_1000", "t_mile", "i_400", "i_1000", "i_1200", "i_mile", "r_200", "r_400", "r_800");

    // Training times

    var train = new Array();
    train[30] = new Array("7:52", "12:40", "6:50", "11:1", "2:33", "5:7", "6:24", "10:18", "2:22", "-", "-", "-", "67", "2:16", "-");
    train[31] = new Array("7:41", "12:22", "6:15", "10:45", "2:30", "4:59", "6:14", "10:2", "2:18", "-", "-", "-", "65", "2:12", "-");
    train[32] = new Array("7:30", "12:4", "6:14", "10:29", "2:26", "4:52", "6:5", "9:47", "2:14", "-", "-", "-", "63", "2:8", "-");
    train[33] = new Array("7:20", "11:48", "6:13", "10:14", "2:23", "4:45", "5:56", "9:33", "2:11", "-", "-", "-", "62", "2:5", "-");
    train[34] = new Array("7:10", "11:32", "6:12", "10:0", "2:19", "4:38", "5:48", "9:20", "2:8", "-", "-", "-", "60", "2:2", "-");
    train[35] = new Array("7:1", "11:17", "6:4", "9:46", "2:16", "4:32", "5:40", "9:7", "2:5", "-", "-", "-", "59", "1:59", "-");
    train[36] = new Array("6:52", "11:2", "5:56", "9:33", "2:13", "4:26", "5:33", "8:55", "2:2", "-", "-", "-", "57", "1:55", "-");
    train[37] = new Array("6:43", "10:49", "5:47", "9:20", "2:10", "4:20", "5:25", "8:44", "1:59", "5:0", "-", "-", "56", "1:53", "-");
    train[38] = new Array("6:35", "10:35", "5:40", "9:8", "2:7", "4:15", "5:19", "8:33", "1:56", "4:54", "-", "-", "54", "1:50", "-");
    train[39] = new Array("6:27", "10:23", "5:33", "8:57", "2:5", "4:10", "5:12", "8:22", "1:54", "4:48", "-", "-", "53", "1:48", "-");
    train[40] = new Array("6:19", "10:11", "5:26", "8:46", "2:2", "4:5", "5:6", "8:12", "1:52", "4:42", "-", "-", "52", "1:46", "-");
    train[41] = new Array("6:12", "9:59", "5:20", "8:35", "2:0", "4:0", "5:0", "8:2", "1:50", "4:36", "-", "-", "51", "1:44", "-");
    train[42] = new Array("6:5", "9:48", "5:13", "8:25", "1:57", "3:55", "4:54", "7:52", "1:48", "4:31", "-", "-", "50", "1:42", "-");
    train[43] = new Array("5:58", "9:37", "5:7", "8:15", "1:55", "3:51", "4:49", "7:42", "1:46", "4:26", "-", "-", "49", "1:40", "-");
    train[44] = new Array("5:52", "9:27", "5:1", "8:6", "1:53", "3:46", "4:43", "7:33", "1:44", "4:21", "-", "-", "48", "98", "-");
    train[45] = new Array("5:46", "9:17", "4:56", "7:57", "1:51", "3:42", "4:38", "7:25", "1:42", "4:16", "-", "-", "47", "96", "-");
    train[46] = new Array("5:40", "9:7", "4:50", "7:48", "1:49", "3:38", "4:33", "7:17", "1:40", "4:12", "5:0", "-", "46", "94", "-");
    train[47] = new Array("5:34", "8:58", "4:45", "7:40", "1:47", "3:35", "4:29", "7:10", "1:38", "4:7", "4:54", "-", "45", "92", "-");
    train[48] = new Array("5:28", "8:49", "4:40", "7:32", "1:45", "3:31", "4:24", "7:2", "1:36", "4:3", "4:49", "-", "44", "90", "-");
    train[49] = new Array("5:23", "8:40", "4:35", "7:24", "1:43", "3:28", "4:20", "6:55", "1:35", "3:59", "4:45", "-", "44", "89", "-");
    train[50] = new Array("5:18", "8:32", "4:31", "7:17", "1:42", "3:24", "4:15", "6:51", "1:33", "3:55", "4:41", "-", "43", "87", "-");
    train[51] = new Array("5:13", "8:24", "4:26", "7:9", "1:40", "3:21", "4:11", "6:44", "1:32", "3:51", "4:36", "-", "42", "86", "-");
    train[52] = new Array("5:8", "8:16", "4:22", "7:2", "1:38", "3:17", "4:7", "6:38", "1:31", "3:48", "4:33", "-", "42", "85", "-");
    train[53] = new Array("5:4", "8:9", "4:18", "6:56", "1:37", "3:15", "4:4", "6:32", "1:30", "3:44", "4:29", "-", "41", "84", "-");
    train[54] = new Array("4:59", "8:1", "4:14", "6:49", "1:35", "3:12", "4:0", "6:26", "1:28", "3:41", "4:25", "-", "40", "82", "-");
    train[55] = new Array("4:55", "7:54", "4:10", "6:43", "1:34", "3:9", "3:56", "6:20", "1:27", "3:37", "4:21", "-", "40", "81", "-");
    train[56] = new Array("4:50", "7:48", "4:6", "6:37", "1:33", "3:6", "3:53", "6:15", "1:26", "3:34", "4:18", "-", "39", "80", "-");
    train[57] = new Array("4:46", "7:41", "4:2", "6:31", "1:31", "3:4", "3:50", "6:9", "1:25", "3:31", "4:15", "-", "39", "79", "-");
    train[58] = new Array("4:42", "7:34", "3:59", "6:25", "1:30", "3:0", "3:45", "6:4", "1:23", "3:28", "4:10", "-", "38", "77", "-");
    train[59] = new Array("4:38", "7:28", "3:55", "6:19", "1:29", "2:58", "3:43", "5:59", "1:22", "3:25", "4:7", "-", "37", "76", "-");
    train[60] = new Array("4:35", "7:22", "3:52", "6:14", "1:28", "2:56", "3:40", "5:54", "1:21", "3:23", "4:3", "-", "37", "75", "2:30");
    train[61] = new Array("4:31", "7:16", "3:49", "6:9", "1:26", "2:53", "3:37", "5:50", "1:20", "3:20", "4:0", "-", "36", "74", "2:28");
    train[62] = new Array("4:27", "7:11", "3:46", "6:4", "1:25", "2:51", "3:34", "5:45", "1:19", "3:17", "3:57", "-", "36", "73", "2:26");
    train[63] = new Array("4:24", "7:5", "3:43", "5:59", "1:24", "2:49", "3:32", "5:41", "1:18", "3:15", "3:54", "-", "35", "72", "2:24");
    train[64] = new Array("4:21", "7:0", "3:39", "5:54", "1:23", "2:47", "3:29", "5:36", "1:17", "3:12", "3:51", "-", "35", "71", "2:22");
    train[65] = new Array("4:18", "6:54", "3:36", "5:49", "1:22", "2:45", "3:26", "5:32", "1:16", "3:10", "3:48", "-", "34", "70", "2:20");
    train[66] = new Array("4:14", "6:49", "3:34", "5:45", "1:21", "2:43", "3:24", "5:28", "1:15", "3:8", "3:45", "5:0", "34", "69", "2:18");
    train[67] = new Array("4:11", "6:44", "3:31", "5:40", "1:20", "2:41", "3:21", "5:24", "1:14", "3:5", "3:42", "4.57", "33", "68", "2:16");
    train[68] = new Array("4:8", "6:39", "3:28", "5:36", "1:19", "2:39", "3:19", "5:20", "1:13", "3:3", "3:39", "4.53", "33", "67", "2:14");
    train[69] = new Array("4:5", "6:35", "3:26", "5:32", "1:18", "2:37", "3:16", "5:16", "1:12", "3:1", "3:36", "4.50", "32", "66", "2:12");
    train[70] = new Array("4:2", "6:30", "3:23", "5:28", "1:17", "2:35", "3:14", "5:13", "1:11", "2:59", "3:34", "4.46", "32", "65", "2:10");
    train[71] = new Array("4:0", "6:26", "3:21", "5:24", "1:16", "2:33", "3:12", "5:9", "1:10", "2:57", "3:31", "4.43", "31", "64", "2:8");
    train[72] = new Array("3:57", "6:21", "3:18", "5:20", "1:16", "2:32", "3:10", "5:5", "1:9", "2:55", "3:29", "4.40", "31", "63", "2:6");
    train[73] = new Array("3:54", "6:17", "3:16", "5:16", "1:15", "2:30", "3:8", "5:2", "1:9", "2:53", "3:27", "4.37", "31", "62", "2:5");
    train[74] = new Array("3:52", "6:l3", "3:13", "5:12", "1:14", "2:29", "3:6", "4:59", "1:8", "2:51", "3:25", "4.34", "30", "62", "2:4");
    train[75] = new Array("3:49", "6:9", "3:12", "5:9", "1:14", "2:27", "3:4", "4:56", "1:7", "2:49", "3:22", "4.31", "30", "61", "2:3");
    train[76] = new Array("3:47", "6:5", "3:9", "5:5", "1:13", "2:26", "3:2", "4:52", "1:6", "2:48", "3:20", "4.28", "29", "60", "2:2");
    train[77] = new Array("3:44", "6:1", "3:7", "5:1", "1:12", "2:24", "3:0", "4:49", "1:5", "2:46", "3:18", "4.25", "29", "59", "2:0");
    train[78] = new Array("3:42", "5:57", "3:5", "4:58", "1:11", "2:22", "2:58", "4:46", "1:5", "2:44", "3:16", "4.23", "29", "59", "1:59");
    train[79] = new Array("3:40", "5:54", "3:3", "4:55", "1:10", "2:21", "2:56", "4:43", "1:4", "2:42", "3:14", "4.20", "28", "58", "1:58");
    train[80] = new Array("3:38", "5:50", "3:1", "4:52", "1:10", "2:19", "2:54", "4:41", "1:4", "2:41", "3:12", "4.17", "28", "58", "1:56");
    train[81] = new Array("3:35", "5:46", "2:59", "4:49", "1:9", "2:18", "2:53", "4:38", "1:3", "2:39", "3:10", "4.15", "28", "57", "1:55");
    train[82] = new Array("3:33", "5:43", "2:57", "4:46", "1:8", "2:17", "2:51", "4:35", "1:2", "2:38", "3:8", "4.12", "27", "56", "1:54");
    train[83] = new Array("3:31", "5:40", "2:55", "4:43", "1:8", "2:15", "2:49", "4:32", "1:2", "2:36", "3:7", "4.10", "27", "56", "1:53");
    train[84] = new Array("3:29", "5:36", "2:53", "4:40", "1:7", "2:14", "2:48", "4:30", "1:1", "2:35", "3:5", "4.08", "27", "55", "1:52");
    train[85] = new Array("3:27", "5:33", "2:52", "4:37", "1:6", "2:13", "2:46", "4:27", "1:1", "2:33", "3:3", "4:5", "27", "55", "1:51");

    // AT træning

    var at = new Array();
    at[30] = new Array("4", "8", "10", "12", "14", "16", "18", "20", "27");
    at[31] = new Array("4", "8", "10", "12", "14", "16", "18", "20", "27");
    at[32] = new Array("4", "8", "10", "12", "14", "16", "18", "20", "27");
    at[33] = new Array("4", "8", "10", "12", "14", "16", "18", "20", "27");
    at[34] = new Array("4", "8", "10", "12", "14", "16", "18", "20", "27");
    at[35] = new Array("4", "7", "9", "11", "13", "15", "17", "19", "24");
    at[36] = new Array("4", "7", "9", "11", "13", "15", "17", "19", "24");
    at[37] = new Array("4", "7", "9", "11", "13", "15", "17", "19", "24");
    at[38] = new Array("4", "7", "9", "11", "13", "15", "17", "19", "24");
    at[39] = new Array("4", "7", "9", "11", "13", "15", "17", "19", "24");
    at[40] = new Array("4", "7", "9", "11", "12", "14", "15", "16", "20");
    at[41] = new Array("4", "7", "9", "11", "12", "14", "15", "16", "20");
    at[42] = new Array("4", "7", "9", "11", "12", "14", "15", "16", "20");
    at[43] = new Array("4", "7", "9", "11", "12", "14", "15", "16", "20");
    at[44] = new Array("4", "7", "9", "11", "12", "14", "15", "16", "20");
    at[45] = new Array("4", "6", "8", "9", "11", "12", "13", "14", "18");
    at[46] = new Array("4", "6", "8", "9", "11", "12", "13", "14", "18");
    at[47] = new Array("4", "6", "8", "9", "11", "12", "13", "14", "18");
    at[48] = new Array("4", "6", "8", "9", "11", "12", "13", "14", "18");
    at[49] = new Array("4", "6", "8", "9", "11", "12", "13", "14", "18");
    at[50] = new Array("3", "6", "7", "9", "10", "11", "12", "14", "16");
    at[51] = new Array("3", "6", "7", "9", "10", "11", "12", "14", "16");
    at[52] = new Array("3", "6", "7", "9", "10", "11", "12", "14", "16");
    at[53] = new Array("3", "6", "7", "9", "10", "11", "12", "14", "16");
    at[54] = new Array("3", "6", "7", "9", "10", "11", "12", "14", "16");
    at[55] = new Array("3", "5", "7", "8", "9", "11", "12", "13", "14");
    at[56] = new Array("3", "5", "7", "8", "9", "11", "12", "13", "14");
    at[57] = new Array("3", "5", "7", "8", "9", "11", "12", "13", "14");
    at[58] = new Array("3", "5", "7", "8", "9", "11", "12", "13", "14");
    at[59] = new Array("3", "5", "7", "8", "9", "11", "12", "13", "14");
    at[60] = new Array("3", "4", "6", "7", "9", "10", "11", "12", "12");
    at[61] = new Array("3", "4", "6", "7", "9", "10", "11", "12", "12");
    at[62] = new Array("3", "4", "6", "7", "9", "10", "11", "12", "12");
    at[63] = new Array("3", "4", "6", "7", "9", "10", "11", "12", "12");
    at[64] = new Array("3", "4", "6", "7", "9", "10", "11", "12", "12");
    at[65] = new Array("3", "4", "6", "7", "8", "10", "11", "12", "11");
    at[66] = new Array("3", "4", "6", "7", "8", "10", "11", "12", "11");
    at[67] = new Array("3", "4", "6", "7", "8", "10", "11", "12", "11");
    at[68] = new Array("3", "4", "6", "7", "8", "10", "11", "12", "11");
    at[69] = new Array("3", "4", "6", "7", "8", "10", "11", "12", "11");
    at[70] = new Array("2", "4", "5", "6", "7", "9", "11", "12", "9");
    at[71] = new Array("2", "4", "5", "6", "7", "9", "11", "12", "9");
    at[72] = new Array("2", "4", "5", "6", "7", "9", "11", "12", "9");
    at[73] = new Array("2", "4", "5", "6", "7", "9", "11", "12", "9");
    at[74] = new Array("2", "4", "5", "6", "7", "9", "11", "12", "9");
    at[75] = new Array("2", "4", "5", "6", "7", "9", "10", "11", "7");
    at[76] = new Array("2", "4", "5", "6", "7", "9", "10", "11", "7");
    at[77] = new Array("2", "4", "5", "6", "7", "9", "10", "11", "7");
    at[78] = new Array("2", "4", "5", "6", "7", "9", "10", "11", "7");
    at[79] = new Array("2", "4", "5", "6", "7", "9", "10", "11", "7");
    at[80] = new Array("2", "3", "4", "6", "7", "8", "9", "10", "7");
    at[81] = new Array("2", "3", "4", "6", "7", "8", "9", "10", "7");
    at[82] = new Array("2", "3", "4", "6", "7", "8", "9", "10", "7");
    at[83] = new Array("2", "3", "4", "6", "7", "8", "9", "10", "7");
    at[84] = new Array("2", "3", "4", "6", "7", "8", "9", "10", "7");
    at[85] = new Array("2", "3", "4", "6", "7", "8", "9", "9", "6");

    // https://www.alpfitness.com/fitness-calculators/calculate-pace-zones-for-running-with-effective-vo2max/
    function getVdotRunningForFitness(distance) {
        var Time = hours * 60 + minutes * 1 + seconds / 60;
        var Distance = distance;
        var V02Max = 0.8 + 0.1894393 * Math.exp(-0.012778 * Time) + 0.2989558 * Math.exp(-0.1932605 * Time);
        return Math.round((-4.6 + 0.182258 * (Distance / Time) + 0.000104 * Math.pow(Distance / Time, 2)) / V02Max * 10) / 10;
    }
    
    /*
    $scope.PaceM = function(Time, Distance) {
      return Time * Math.pow(26.21875 / (Distance / 1000), 1.06) / 26.21875 * 60;
    };

    $scope.PaceT = function(VDOT) {
      return 1 / (29.54 + 5.000663 * (VDOT * 0.88) - 0.007546 * Math.pow(VDOT * 0.88, 2)) * 1000 * 60;
    };

    $scope.PaceI = function(VDOT) {
      return 1 / (29.54 + 5.000663 * (VDOT * 0.98) - 0.007546 * Math.pow(VDOT * 0.98, 2)) * 1000 * 60;
    };

    $scope.PaceR = function(VDOT) {
      return 1 / (29.54 + 5.000663 * (VDOT * (1.03 + 0.1 * (VDOT - 30) / 55)) - 0.007546 * Math.pow(VDOT * (1.03 + 0.1 * (VDOT - 30) / 55), 2)) * 1000 * 60;
    };

    $scope.secondsToTime = function(Seconds) {
      var Hours = parseInt(Seconds / 3600);
      Seconds = Seconds - Hours * 3600;

      var Minutes = parseInt(Seconds / 60);
      Seconds = parseInt(Seconds - Minutes * 60);

      return (Hours > 0 ? Hours + ':' : '') + (Minutes < 10 && Hours > 0 ? '0' : '') + Minutes + ':' + (Seconds < 10 ? '0' : '') + Seconds;
    };

    */

    function getVdot() {
      return find_vdot(distance, race_time);
    }

    function calculate_vdot(dist, h, m, s) {
        if (!isSet("race_h")) { document.getElementById("race_h").value = "00"; }
        if (!isSet("race_m")) { document.getElementById("race_m").value = "00"; }
        if (!isSet("race_s")) { document.getElementById("race_s").value = "00"; }
        if (isSet("racedist") && isInt("race_h") && isInt("race_m") && isInt("race_s")) {
            var race_time = document.getElementById("race_h").value * 3600 + document.getElementById("race_m").value * 60 + document.getElementById("race_s").value * 1;
            find_vdot(document.getElementById("racedist").value, race_time);
        }
    }

    function to_seconds(val) {
        if (val) {
            var time = val.split(":");
            if (time.length == 1) {
                return parseInt(val * 1);
            }
            else if (time.length == 2) {
                return parseInt(time[0] * 1) * 60 + parseInt(time[1] * 1);
            }
            else if (time.length == 3) {
                return parseInt(time[0] * 1) * 3600 + parseInt(time[1] * 1) * 60 + parseInt(time[2] * 1);
            }
            else {
                return 0;
            }
        }
        else {
            return '';
        }
    }

    function to_time(val) {
        if (val) {
            val = Math.round(val);
            var reshour = Math.floor(val / 3600);
            var resmin = Math.floor((val - reshour * 3600) / 60);
            var ressec = Math.round(val - reshour * 3600 - resmin * 60);
            if (reshour < 10) { reshour = '0' + reshour; }
            if (ressec < 10) { ressec = '0' + ressec; }
            if (ressec == 0) { ressec = '00'; }
            if (reshour > 0) {
                if (resmin < 10) { resmin = '0' + resmin; }
                if (resmin == 0) { resmin = '00'; }
                return reshour + ":" + resmin + ":" + ressec;
            }
            else {
                return resmin + ":" + ressec;
            }
        }
        else {
            return '';
        }
    }

    function find_vdot(dist, time) {
        var vdot = 0;
        var extratime = 0;
        var dvalue = -1;
        for (var i = 0; i < distances.length; i++) {
            if (dist == distances[i]) {
                dvalue = i;
                break;
            }
        }
        if (dvalue >= 0) {
            for (i = 31; i <= 85; i++) {
                if (comp[i][dvalue]) {
                    if (to_seconds(comp[i][dvalue]) <= time) {
                        extratime = (time - to_seconds(comp[i - 1][dvalue])) / (to_seconds(comp[i][dvalue]) - to_seconds(comp[i - 1][dvalue]));
                        vdot = i - 1;
                        break;
                    }
                }
            }
        }
        else {
            alert("Fejl i input værdi!");
        }
        
        
        return vdot;
        
        /*
        
        if (vdot >= 31 || vdot == 0) {
            generate_results(vdot, extratime);
        }
        else {
            alert("Den indtastede tid er enten for langsom eller for hurtig til beregningsmodellen!");
        }
        */
    }

    function generate_results(vdot, extratime) {
        var testtime = 0;
        var comptime = 0;
        var traintime = 0;
        document.getElementById("vdot").value = vdot + roundNumber(extratime, 1);
        for (var i = 0; i < distances.length; i++) {
            comptime = to_time(to_seconds(comp[vdot][i]) + (to_seconds(comp[vdot][i]) - to_seconds(comp[vdot - 1][i])) * extratime);
            document.getElementById(distances[i]).innerHTML = comptime;
            document.getElementById("speed" + distances[i]).innerHTML = "(" + to_time(to_seconds(comptime) / complength[i]) + " min/km)";
        }
        for (i = 0; i < zones.length; i++) {
            if (train[vdot][i] != "-" && train[vdot - 1][i] != "-") {
                traintime = to_time(to_seconds(train[vdot][i]) + (to_seconds(train[vdot][i]) - to_seconds(train[vdot - 1][i])) * extratime);
            }
            else {
                traintime = "-";
            }
            document.getElementById(zones[i]).innerHTML = traintime;
        }

        //document.getElementById("t_speed").innerHTML = to_time((to_seconds(train[vdot][4]) + (to_seconds(train[vdot][4])-to_seconds(train[vdot-1][4]))*extratime)*2.5);
        if (document.getElementById("t_1000").innerHTML != "") {
            document.getElementById("t_speed").innerHTML = document.getElementById("t_1000").innerHTML;
        }
        else {
            document.getElementById("t_speed").innerHTML = to_time((to_seconds(train[vdot][4]) + (to_seconds(train[vdot][4]) - to_seconds(train[vdot - 1][4])) * extratime) * 2.5);
        }

        //document.getElementById("i_speed").innerHTML = to_time((to_seconds(train[vdot][8]) + (to_seconds(train[vdot][8])-to_seconds(train[vdot-1][8]))*extratime)*2.5);
        if (document.getElementById("i_1000").innerHTML != "") {
            document.getElementById("i_speed").innerHTML = document.getElementById("i_1000").innerHTML;
        }
        else {
            document.getElementById("i_speed").innerHTML = to_time((to_seconds(train[vdot][4]) + (to_seconds(train[vdot][4]) - to_seconds(train[vdot - 1][4])) * extratime) * 2.5);
        }

        if (train[vdot][14] != '-') { // 800 m
            document.getElementById("r_speed").innerHTML = to_time(Math.round((to_seconds(train[vdot][14]) + (to_seconds(train[vdot][14]) - to_seconds(train[vdot - 1][14])) * extratime)) * 1.25);
        }
        else if (train[vdot][13] != '-') { // 400 m
            document.getElementById("r_speed").innerHTML = to_time(Math.round((to_seconds(train[vdot][13]) + (to_seconds(train[vdot][13]) - to_seconds(train[vdot - 1][13])) * extratime)) * 2.5);
        }
        else { // 200 m
            document.getElementById("r_speed").innerHTML = to_time(Math.round((to_seconds(train[vdot][12]) + (to_seconds(train[vdot][12]) - to_seconds(train[vdot - 1][12])) * extratime)) * 5);
        }

        calculate_at(vdot);
    }

    function isInt(id) {
        return (/^[0-9]+$/.test(document.getElementById(id).value));
    }

    function roundNumber(num, dec) {
        var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
        return result;
    }

    function isSet(id) {
        return (document.getElementById(id).value != '');
    }

    function isValidVdot(vdot) {
      if (vdot > 30 && vdot < 86) {
        return true;
      }
      return false;
    }

    function addvdot() {
        var vdot = parseInt(Math.floor(document.getElementById("vdot").value) + 1);
        if (vdot > 30 && vdot < 86) {
            document.getElementById("vdot").value = vdot;
            generate_results(vdot, 0);
            document.getElementById("race_h").value = '';
            document.getElementById("race_m").value = '';
            document.getElementById("race_s").value = '';
        }
        else {
            alert("VDOT-værdien er ikke gyldig. Kun værdier mellem 31 og 85 er tilladt.");
        }
    }

    function subvdot() {
        var vdot = parseInt(Math.floor(document.getElementById("vdot").value) - 1);
        if (vdot > 30 && vdot < 86) {
            document.getElementById("vdot").value = vdot;
            generate_results(vdot, 0);
            document.getElementById("race_h").value = '';
            document.getElementById("race_m").value = '';
            document.getElementById("race_s").value = '';
        }
        else {
            alert("VDOT-værdien er ikke gyldig. Kun værdier mellem 31 og 85 er tilladt.");
        }
    }

    function updatevdot() {
        var vdot = parseInt(Math.floor(document.getElementById("vdot").value));
        if (vdot > 30 && vdot < 86) {
            document.getElementById("vdot").value = vdot;
            generate_results(vdot, 0);
            document.getElementById("race_h").value = '';
            document.getElementById("race_m").value = '';
            document.getElementById("race_s").value = '';
        }
        else {
            alert("VDOT-værdien er ikke gyldig. Kun værdier mellem 31 og 85 er tilladt.");
        }
    }

    function open_at() {
        document.getElementById('attable').style.display = 'block';
        document.getElementById('attable').style.top = y + 10;
        document.getElementById('attable').style.left = x - 100;
    }

    function close_at() {
        document.getElementById('attable').style.display = 'none';
    }

    function calculate_at(vdot) {
        var atstr = '';
        var tspeed = document.getElementById("t_speed").innerHTML;
        var tspeedsecs = to_seconds(tspeed);
        atstr += '20 min. tempoløb: ' + tspeed + ' min/km&nbsp;&nbsp;&nbsp;(' + roundNumber(20 * 60 / tspeedsecs, 1) + ' km)<br />';
        atstr += '25 min. tempoløb: ' + to_time(tspeedsecs + parseInt(at[vdot][0] * 1)) + ' min/km&nbsp;&nbsp;&nbsp;(' + roundNumber(25 * 60 / (tspeedsecs + parseInt(at[vdot][0] * 1)), 1) + ' km)<br />';
        atstr += '30 min. tempoløb: ' + to_time(tspeedsecs + parseInt(at[vdot][1] * 1)) + ' min/km&nbsp;&nbsp;&nbsp;(' + roundNumber(30 * 60 / (tspeedsecs + parseInt(at[vdot][1] * 1)), 1) + ' km)<br />';
        atstr += '35 min. tempoløb: ' + to_time(tspeedsecs + parseInt(at[vdot][2] * 1)) + ' min/km&nbsp;&nbsp;&nbsp;(' + roundNumber(35 * 60 / (tspeedsecs + parseInt(at[vdot][2] * 1)), 1) + ' km)<br />';
        atstr += '40 min. tempoløb: ' + to_time(tspeedsecs + parseInt(at[vdot][3] * 1)) + ' min/km&nbsp;&nbsp;&nbsp;(' + roundNumber(40 * 60 / (tspeedsecs + parseInt(at[vdot][3] * 1)), 1) + ' km)<br />';
        atstr += '45 min. tempoløb: ' + to_time(tspeedsecs + parseInt(at[vdot][4] * 1)) + ' min/km&nbsp;&nbsp;&nbsp;(' + roundNumber(45 * 60 / (tspeedsecs + parseInt(at[vdot][4] * 1)), 1) + ' km)<br />';
        atstr += '50 min. tempoløb: ' + to_time(tspeedsecs + parseInt(at[vdot][5] * 1)) + ' min/km&nbsp;&nbsp;&nbsp;(' + roundNumber(50 * 60 / (tspeedsecs + parseInt(at[vdot][5] * 1)), 1) + ' km)<br />';
        atstr += '55 min. tempoløb: ' + to_time(tspeedsecs + parseInt(at[vdot][6] * 1)) + ' min/km&nbsp;&nbsp;&nbsp;(' + roundNumber(55 * 60 / (tspeedsecs + parseInt(at[vdot][6] * 1)), 1) + ' km)<br />';
        atstr += '60 min. tempoløb: ' + to_time(tspeedsecs + parseInt(at[vdot][7] * 1)) + ' min/km&nbsp;&nbsp;&nbsp;(' + roundNumber(60 * 60 / (tspeedsecs + parseInt(at[vdot][7] * 1)), 1) + ' km)<br />';
        document.getElementById('atbox').innerHTML = atstr;
    }

    /// funktioner til træningsprogram

    function calculate_vdot_pgr(dist, h, m, s) {
        if (!isSet("race_h")) { document.getElementById("race_h").value = "00"; }
        if (!isSet("race_m")) { document.getElementById("race_m").value = "00"; }
        if (!isSet("race_s")) { document.getElementById("race_s").value = "00"; }
        if (isSet("racedist") && isInt("race_h") && isInt("race_m") && isInt("race_s")) {
            var race_time = document.getElementById("race_h").value * 3600 + document.getElementById("race_m").value * 60 + document.getElementById("race_s").value * 1;
            find_vdot_pgr(document.getElementById("racedist").value, race_time);
        }
    }

    function find_vdot_pgr(dist, time) {
        var vdot = 0;
        var extratime = 0;
        var dvalue = -1;
        for (var i = 0; i < distances.length; i++) {
            if (dist == distances[i]) {
                dvalue = i;
                break;
            }
        }
        if (dvalue >= 0) {
            for (i = 31; i <= 85; i++) {
                if (to_seconds(comp[i][dvalue]) <= time) {
                    extratime = (time - to_seconds(comp[i - 1][dvalue])) / (to_seconds(comp[i][dvalue]) - to_seconds(comp[i - 1][dvalue]));
                    vdot = i - 1;
                    break;
                }
            }
        }
        else {
            alert("Fejl i input værdi!");
        }
        if (vdot >= 31 || vdot == 0) {
            generate_results_pgr(vdot, extratime);
        }
        else {
            alert("Den indtastede tid er enten for langsom eller for hurtig til beregningsmodellen!");
        }
    }

    function generate_results_pgr(vdot, extratime) {
        var testtime = 0;
        var comptime = 0;
        var traintime = 0;
        document.getElementById("vdot").value = vdot + roundNumber(extratime, 1);
        document.getElementById("lsd_speed").value = to_time((to_seconds(train[vdot][0]) + (to_seconds(train[vdot][0]) - to_seconds(train[vdot - 1][0])) * extratime));
        document.getElementById("mp_speed").value = to_time((to_seconds(train[vdot][2]) + (to_seconds(train[vdot][2]) - to_seconds(train[vdot - 1][2])) * extratime));
        document.getElementById("t_speed").value = to_time((to_seconds(train[vdot][4]) + (to_seconds(train[vdot][4]) - to_seconds(train[vdot - 1][4])) * extratime) * 2.5);
        document.getElementById("i_speed").value = to_time((to_seconds(train[vdot][8]) + (to_seconds(train[vdot][8]) - to_seconds(train[vdot - 1][8])) * extratime) * 2.5);
        document.getElementById("r_speed").value = to_time((to_seconds(train[vdot][12]) + (to_seconds(train[vdot][12]) - to_seconds(train[vdot - 1][12])) * extratime) * 5);
        close_vdotbox();
    }

    function show_vdotbox() {
        document.getElementById('vdotbox').style.display = 'block';
    }

    function close_vdotbox() {
        document.getElementById('vdotbox').style.display = 'none';
    }

  var publicAPI = {
    getVdot : getVdot,
    getVdotRunningForFitness : getVdotRunningForFitness
  };

  return publicAPI;
}

module.exports = motionsplan;
