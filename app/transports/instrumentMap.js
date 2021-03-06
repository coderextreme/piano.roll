var instruments = [
{code:1	,instrument:	"acoustic_grand_piano"},
/*
{code:2	,instrument:	"bright_acoustic_piano"},
{code:3	,instrument:	"electric_grand_piano"},
{code:4	,instrument:	"honkytonk_piano"},
{code:5	,instrument:	"electric_piano_1"},
{code:6	,instrument:	"electric_piano_2"},
{code:7	,instrument:	"harpsichord"},
{code:8	,instrument:	"clavinet"},
{code:9	,instrument:	"celesta"},
{code:10	,instrument:	"glockenspiel"},
{code:11	,instrument:	"music_box"},
{code:12	,instrument:	"vibraphone"},
{code:13	,instrument:	"marimba"},
{code:14	,instrument:	"xylophone"},
{code:15	,instrument:	"tubular_bells"},
{code:16	,instrument:	"dulcimer"},
{code:17	,instrument:	"drawbar_organ"},
{code:18	,instrument:	"percussive_organ"},
{code:19	,instrument:	"rock_organ"},
{code:20	,instrument:	"church_organ"},
{code:21	,instrument:	"reed_organ"},
{code:22	,instrument:	"accordion"},
{code:23	,instrument:	"harmonica"},
{code:24	,instrument:	"tango_accordion"},
{code:25	,instrument:	"acoustic_guitar_nylon"},
*/
{code:26	,instrument:	"acoustic_guitar_steel"},
{code:27	,instrument:	"electric_guitar_jazz"},
{code:28	,instrument:	"electric_guitar_clean"},
/*
{code:29	,instrument:	"electric_guitar_muted"},
{code:30	,instrument:	"overdriven_guitar"},
{code:31	,instrument:	"distortion_guitar"},
{code:32	,instrument:	"guitar_harmonics"},
{code:33	,instrument:	"acoustic_bass"},
{code:34	,instrument:	"electric_bass_finger"},
{code:35	,instrument:	"electric_bass_pick"},
{code:36	,instrument:	"fretless_bass"},
{code:37	,instrument:	"slap_bass_1"},
{code:38	,instrument:	"slap_bass_2"},
{code:39	,instrument:	"synth_bass_1"},
{code:40	,instrument:	"synth_bass_2"},
{code:41	,instrument:	"violin"},
{code:42	,instrument:	"viola"},
{code:43	,instrument:	"cello"},
{code:44	,instrument:	"contrabass"},
{code:45	,instrument:	"tremolo_strings"},
{code:46	,instrument:	"pizzicato_strings"},
{code:47	,instrument:	"orchestral_harp"},
{code:48	,instrument:	"timpani"},
{code:49	,instrument:	"string_ensemble_1"},
{code:50	,instrument:	"string_ensemble_2"},
{code:51	,instrument:	"synth_strings_1"},
{code:52	,instrument:	"synth_strings_2"},
{code:53	,instrument:	"choir_aahs"},
{code:54	,instrument:	"voice_oohs"},
{code:55	,instrument:	"synth_choir"},
{code:56	,instrument:	"orchestra_hit"},
{code:57	,instrument:	"trumpet"},
*/
{code:58	,instrument:	"trombone"},
/*
{code:59	,instrument:	"tuba"},
{code:60	,instrument:	"muted_trumpet"},
{code:61	,instrument:	"french_horn"},
{code:62	,instrument:	"brass_section"},
{code:63	,instrument:	"synth_brass_1"},
{code:64	,instrument:	"synth_brass_2"},
{code:65	,instrument:	"soprano_sax"},
{code:66	,instrument:	"alto_sax"},
{code:67	,instrument:	"tenor_sax"},
{code:68	,instrument:	"baritone_sax"},
{code:69	,instrument:	"oboe"},
{code:70	,instrument:	"english_horn"},
{code:71	,instrument:	"bassoon"},
{code:72	,instrument:	"clarinet"},
{code:73	,instrument:	"piccolo"},
{code:74	,instrument:	"flute"},
{code:75	,instrument:	"recorder"},
{code:76	,instrument:	"pan_flute"},
{code:77	,instrument:	"blown_bottle"},
{code:78	,instrument:	"shakuhachi"},
{code:79	,instrument:	"whistle"},
{code:80	,instrument:	"ocarina"},
{code:81	,instrument:	"lead_1_square"},
{code:82	,instrument:	"lead_2_sawtooth"},
{code:83	,instrument:	"lead_3_calliope"},
{code:84	,instrument:	"lead_4_chiff"},
{code:85	,instrument:	"lead_5_charang"},
{code:86	,instrument:	"lead_6_voice"},
{code:87	,instrument:	"lead_7_fifths"},
{code:88	,instrument:	"lead_8_bass__lead"},
{code:89	,instrument:	"pad_1_new_age"},
{code:90	,instrument:	"pad_2_warm"},
{code:91	,instrument:	"pad_3_polysynth"},
{code:92	,instrument:	"pad_4_choir"},
{code:93	,instrument:	"pad_5_bowed"},
{code:94	,instrument:	"pad_6_metallic"},
{code:95	,instrument:	"pad_7_halo"},
{code:96	,instrument:	"pad_8_sweep"},
{code:97	,instrument:	"fx_1_rain"},
{code:98	,instrument:	"fx_2_soundtrack"},
{code:99	,instrument:	"fx_3_crystal"},
{code:100	,instrument:	"fx_4_atmosphere"},
{code:101	,instrument:	"fx_5_brightness"},
{code:102	,instrument:	"fx_6_goblins"},
{code:103	,instrument:	"fx_7_echoes"},
{code:104	,instrument:	"fx_8_scifi"},
{code:105	,instrument:	"sitar"},
{code:106	,instrument:	"banjo"},
{code:107	,instrument:	"shamisen"},
{code:108	,instrument:	"koto"},
{code:109	,instrument:	"kalimba"},
{code:110	,instrument:	"bagpipe"},
{code:111	,instrument:	"fiddle"},
{code:112	,instrument:	"shanai"},
{code:113	,instrument:	"tinkle_bell"},
{code:114	,instrument:	"agogo"},
{code:115	,instrument:	"steel_drums"},
{code:116	,instrument:	"woodblock"},
{code:117	,instrument:	"taiko_drum"},
{code:118	,instrument:	"melodic_tom"},
{code:119	,instrument:	"synth_drum"},
{code:120	,instrument:	"reverse_cymbal"},
{code:121	,instrument:	"guitar_fret_noise"},
{code:122	,instrument:	"breath_noise"},
{code:123	,instrument:	"seashore"},
{code:124	,instrument:	"bird_tweet"},
{code:125	,instrument:	"telephone_ring"},
{code:126	,instrument:	"helicopter"},
{code:127	,instrument:	"applause"},
*/
{code:128	,instrument:	"gunshot"}
];

var instrument = document.getElementById("instrument");
for (var ins in instruments) {
		var opt = instruments[ins];
		var el = document.createElement("option");
		el.text = opt.instrument;
		el.val = opt.code - 1;
		instrument.appendChild(el);
}

var insts = [];

for (var ins in instruments) {
	var opt = instruments[ins];
	insts.push(opt.instrument);
}

instrument.onchange = function() {
	var code = this.options[this.selectedIndex].val;
	MIDI.programChange(0, code);
};

