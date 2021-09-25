const input = document.querySelector('.text');
const buttun = document.querySelector('.btn');
const result = document.querySelector('.result');

buttun.addEventListener('click', e => {
	if (input.value !== '') return createDeleteElements(), (input.value = '');
});

function createDeleteElements(value) {
	const li = document.createElement('li');
	const btn = document.createElement('img');

	li.className = 'li';
	li.textContent = input.value;
	btn.className = 'delete';
	li.appendChild(btn);
	result.appendChild(li);

	btn.addEventListener('click', l => {
		result.removeChild(li);
	});
}
