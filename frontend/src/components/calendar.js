import React, { useState } from "react";
import dayjs from "dayjs";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";

const attendanceColors = {
  present: "#4caf50", // Green
  absent: "#f44336", // Red
  late: "#ff9800", // Orange
};

const HighlightedDay = styled(PickersDay)(({ theme, color }) => ({
  backgroundColor: color ? color : "transparent",
  color:
    color && color !== "transparent"
      ? theme.palette.getContrastText(color)
      : "inherit",
  "&:hover": {
    backgroundColor: color ? `${color}AA` : "transparent",
  },
}));

const AttendanceDays = (props) => {
  const {
    day,
    outsideCurrentMonth,
    highlightedDays,
    attendanceData,
    ...other
  } = props;
  const formattedDate = day.format("YYYY-MM-DD");
  const attendanceStatus = highlightedDays[formattedDate];
  const color = attendanceStatus ? attendanceColors[attendanceStatus] : null;

  return (
    <HighlightedDay
      {...other}
      outsideCurrentMonth={outsideCurrentMonth}
      day={day}
      color={color}
    />
  );
};

const AttendanceHighlighter = (props) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  console.log(props.attendanceData);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={selectedDate}
        onChange={handleDateChange}
        slots={{
          day: AttendanceDays,
        }}
        slotProps={{
          day: {
            highlightedDays: props.attendanceData,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default AttendanceHighlighter;
