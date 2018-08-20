React application for entering in a passcode. Right pin is 1357

## Requirements

- Buttons should work with either touch or clicks
- The pin should be hidden except for the last number
- Hardcode somewhere in the code right PIN (which eventually could be read from an API)
- The pin is always max 4 digits long
- When the user inputs 4 digits the pin is checked
- If the inserted PIN is correct the screen displays OK and the pin is reset
- If the inserted PIN is wrong the screen displays ERROR and the pin is reset
- (BONUS) After 3 wrong attempts the pinpad locks for 30 secs, showing LOCKED on the display

## Running app

App boilerplate created using create-react-app. To run:
```bash
$ yarn
$ yarn start
```
App will be running on localhost:3000

To run tests run
```bash
$ yarn test
```