export const site = {
	name: "Rachel Archer Counselling",
	tagline: "Counselling in Maidstone",
	subtagline: "In-Person and Online Video Counselling",
	description:
		"Feeling stuck, anxious or experiencing relationship problems - I can help.",
	phoneDisplay: "07915 101 997",
	phoneTel: "+447915101997",
	email: "rachelarchertherapy@gmail.com",
	privacyPolicy: "/privacy-policy",
	address: {
		line1: "Anglesey Avenue",
		line2: "Loose, Maidstone",
		postcode: "ME15 6DX",
	},
	addressLine: "Loose, Anglesey Avenue, Maidstone",
	fee: "£55",
	feeDetail: "per 1-hour session",
	feeNote:
		"I offer a reduced fee for students, low-income clients and NHS staff.",
	replyPromise: "I'll get back to you within 48 hours.",
	social: {
		instagram: "https://www.instagram.com/rachelarchertherapy/",
		instagramHandle: "@rachelarchertherapy",
		facebook: "https://www.facebook.com/profile.php?id=61561146114595",
	},
	bacp: {
		label: "Registered member of the BACP",
		framework: "I abide by the BACP Ethical Framework.",
		url: "https://www.bacp.co.uk/",
	},
} as const;

export const nav = [
	{ label: "Home", href: "/" },
	{ label: "About Counselling", href: "/about-therapy" },
	{ label: "Online Counselling", href: "/online-counselling" },
	{ label: "Approach", href: "/about" },
	{ label: "Contact", href: "/contact" },
] as const;
