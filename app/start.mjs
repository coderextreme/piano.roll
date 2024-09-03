var i, index, input, inputs, ref;

import inquirer from 'inquirer';

import * as emit from './transports/socket-io.mjs';

// Set up a new input.
import * as midi from 'midi';

input = new midi.default.Input();

console.log(midi);
console.log(input);

// Sysex, timing, and active sensing messages are ignored
// by default. To enable these message types, pass false for
// the appropriate type in the function below.
// Order: (Sysex, Timing, Active Sensing)
// For example if you want to receive only MIDI Clock beats
// you should use 
// input.ignoreTypes(true, false, true)
input.ignoreTypes(false, false, false);

input.on("message", function(deltaTime, message) {
  console.log(message);
  return emit({
    deltaTime: deltaTime,
    message: message
  });
});

// Get the name of a specified input port.
console.log(' + Helloooo');

inputs = [];

const portCount = input.getPortCount();
console.log('port count', portCount);

for (let i = 0; portCount > 0 && i < portCount; i++) {
  inputs.push({
    name: input.getPortName(i),
    value: i
  });
}

async function selectMidiPort() {
  try {
    const answer = await inquirer.prompt({
      name: 'port_index',
      default: 0,
      type: 'list',
      message: 'Please select your midi input',
      choices: inputs
    });

    input.openPort(answer.port_index);
    console.log(" - Listening MIDI on port ", answer.port_index);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Close the port when done.
// input.closePort()
/*
 * ~ WE ARE NEVER DONE
 */
