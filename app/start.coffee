import * as midi from 'midi'
import * as inquirer from 'inquirer'
import * as emit from './transports/socket-io'

# Set up a new input.
input = new midi.input()

# Sysex, timing, and active sensing messages are ignored
# by default. To enable these message types, pass false for
# the appropriate type in the function below.
# Order: (Sysex, Timing, Active Sensing)
# For example if you want to receive only MIDI Clock beats
# you should use 
# input.ignoreTypes(true, false, true)
input.ignoreTypes false, false, false

input.on "message", (deltaTime, message) ->
	console.log message
	emit
		deltaTime: deltaTime
		message  : message

# Get the name of a specified input port.
console.log ' + Helloooo'

inputs = []
for index in [0..input.getPortCount()-1]
	inputs.push
		name : input.getPortName index
		value: index

# inquirer question
inquirer.prompt
	name    : 'port_index'
	default : 0
	type    : 'list'
	message : 'Please select your midi input' # select you midi input bitch
	choices : inputs
, ( answer ) ->
		input.openPort answer.port_index

		console.log " - Listening MIDI on port ", answer.port_index





# Close the port when done.
# input.closePort()

###
# ~ WE ARE NEVER DONE
###
