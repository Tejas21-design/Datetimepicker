import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

function App() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2022-08-18T21:11:00'));
  console.log(selectedDate);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">

        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          inputVariant="outlined"
          format="MM/dd/yyyy"
          value={selectedDate}
          autoOk
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

        {/* <span className="Stringdate">
          {selectedDate?.toUTCString()}
        </span> */}


        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          inputVariant="outlined"
          value={selectedDate}
          autoOk
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />

        {/* <DateTimePicker
          disableToolbar
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        /> */}
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default App;