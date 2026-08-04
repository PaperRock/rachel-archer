function escapeHtml(value: string): string {
	return value.replace(/[&<>"']/g, (c) =>
		({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
	);
}

export function emphasizeTitle(title: string): string {
	return title
		.split("*")
		.map((part, i) => (i % 2 === 1 ? `<span class="em">${escapeHtml(part)}</span>` : escapeHtml(part)))
		.join("");
}
