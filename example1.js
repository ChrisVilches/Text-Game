var dialogoExample = [

	{	
		id: 'first-msg',
		msg: ["Welcome to this text-based game", "It kinda sucks but, whatever...", "How are you today?"], 
		opt: ["Good", "Not feeling very well to be honest..."],
		next: ['nice-happy', 'really-why'],
		booleans: [null, 'feeling-bad']
	},

	{	
		id: 'nice-happy',
		msg: ["Nice! I like to see you happy", "I'm also very well"], 
		opt: ["Awesome!", "I didn't ask you..."],
		next: ['awesome-indeed', 'mmm']
	},

	{	
		id: 'really-why',
		msg: ["Really? why?", "Do you want to tell me why?", "Unless it's a secret, of course..."], 
		opt: ["I did poorly at uni today", "I'm sick", "Nothing, I'm fine"],
		next: ['pfft', 'oh-too-bad', 'i-forgot']
	},

	{	
		id: 'mmm',
		msg: ["Mmm...", "...", "Okay... anyway..."], 
		next: ['i-forgot']
	},

	{	
		id: 'oh-too-bad',
		msg: ["Oh, too bad, I hope you get better soon! by the way..."], 
		next: ['i-forgot']
	},

	{	
		id: 'pfft',
		msg: ["Pfft, study more next time, duh"],
		next: ['i-forgot']
	},

	{	
		id: 'i-forgot',
		msg: ["I forgot what I was gonna say", "See you later, bye!"],
		next: [100]
	},
	{	
		id: 'awesome-indeed',
		msg: ["Awesome, indeed B|"],
		next: ['i-forgot']
	}

];