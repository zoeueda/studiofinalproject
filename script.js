const GRADIENT_MAP = [
	{
		letters: ["a", "b", "c"],
		color: "#ffd973"
	},
	{
		letters: ["d", "e", "f"],
		color: "#f08080"
	},
	{
		letters: ["g", "h", "i"],
		color: "#e13759"
	},
	{
		letters: ["j", "k", "l"],
		color: "#fcbdc7"
	},
	{
		letters: ["m", "n", "o"],
		color: "#c9e9fd"
	},
	{
		letters: ["p", "q", "r"],
		color: "#2f4599"
	},
	{
		letters: ["s", "t", "u"],
		color: "#cc76cc"
	},
	{
		letters: ["v", "w"],
		color: "#8b008b"
	},
	{
		letters: ["x", "y", "z"],
		color: "#a7de52"
	}
];

document.getElementById("name").addEventListener("input", function (event) {
	document.body.style.background = nameToGradient(this.value);
	document.body.style.backgroundSize = "600% 600%";
});

function nameToGradient(name) {
	// return empty string if textbox does not include letters
	if (!name.match(/[a-zA-Z]+/)) {
		return "";
	}

	// if textbox value is just a single letter, return a solid color
	if (name.length === 1) {
		return GRADIENT_MAP.find((i) => i.letters.includes(name)).color;
	}

	const splitName = name
		.toLowerCase()
		.split("")
		.filter((letter) => letter.match(/[a-zA-Z]+/));
	const colors = splitName.map((letter) => {
		return GRADIENT_MAP.find((i) => i.letters.includes(letter)).color;
	});
	return `linear-gradient(90deg, ${colors.join(", ")})`;
}


document.onmousemove = animatedCircles;

        const colors = ['#00CED1', '#8B008B', '#FF00FF'];

        function animatedCircles(event) {
            let circle = document.createElement('div');
            circle.setAttribute('class', 'circle');
            document.body.appendChild(circle);

            circle.style.left = event.clientX + 'px';
            circle.style.top = event.clientY + 'px';
            circle.style.zIndex = "1";

            let color = colors[Math.floor(Math.random() * colors.length)];
            circle.style.borderColor = color;

            circle.style.transition = 'all 0.5s linear 0s';

            circle.style.left = circle.offsetLeft - 20 + 'px';
            circle.style.top = circle.offsetTop - 20 + 'px';

            circle.style.width = '50px';
            circle.style.height = '50px';
            circle.style.borderWidth = '5px';
            circle.style.opacity = 0;
        }

 // function showOrHideDiv() {
 //      var v = document.getElementById("showOrHide");
 //      if (v.style.display === "none") {
 //         v.style.display = "block";
 //      } else {
 //         v.style.display = "none";
 //      }
 //   }