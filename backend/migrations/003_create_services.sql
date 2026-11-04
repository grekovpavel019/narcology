create table services (
	id integer generated always as identity primary key,
	description text not null,
	sub text,
	price numeric(12, 2) not null check (price >= 0),
	category text not null,
	audience text not null,
	format text not null,

	constraint category_check
		check (category in ('Консультация', 'Детоксикация', 'Лечение', 'Реабилитация')),

	constraint audience_check
		check (audience in ('Пациент', 'Родственники', 'Сопровождающий')),

	constraint format_check
		check (format in ('В клинике', 'На дому', 'Амбулаторно', 'В стационаре'))
);