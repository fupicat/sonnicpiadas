type Coisa = {
	nome: string;
	genero: string;
};
type Adjetivo = {
	m: string;
	f: string;
};

export async function get() {
	// Função pra criar uma nova coisa + gênero
	function n(nome: string, genero: string): Coisa {
		return {
			nome: nome,
			genero: genero
		};
	}

	// Função para gerar um novo adjetivo
	function a(m: string, f: string): Adjetivo {
		return {
			m: m,
			f: f
		};
	}

	// Função pra usar a palavra certa conforme o gênero
	function w(coisa: Coisa, m: string, f: string) {
		if (coisa.genero == 'M') {
			return m;
		} else {
			return f;
		}
	}
	const personagens = [
		n('Sonnic', 'M'),
		n('Adriel', 'M'),
		n('Fupi', 'M'),
		n('Passo', 'M'),
		n('Wanga', 'F'),
		n('Neon', 'M'),
		n('John', 'M'),
		n('Boi', 'M'),
		n('Vaca', 'F'),
		n('Urso', 'M'),
		n('Arceus', 'M'),
		n('Globo', 'F'),
		n('Mangle', 'F'),
		n('SBT', 'M'),
		n('Edir Macedo', 'M'),
		n('Neon do at', 'M'),
		n('Pacman Coringado', 'M'),
		n('SCDM', 'M'),
		n('bolo', 'M'),
		n('torta', 'F'),
		n('biruleibe', 'M'),
		n('Mauricio de Sousa', 'M'),
		n('Roberto Marinho', 'M'),
		n('Moça do Jornal', 'F')
	];
	const objetos = [
		n('toletinho', 'M'),
		n('chave', 'F'),
		n('cama', 'F'),
		n('Dolly', 'M'),
		n('metanfetamina', 'F'),
		n('AK47', 'F'),
		n('corda', 'F'),
		n('p1ng4s', 'M'),
		n('b0l4s', 'F'),
		n('ppk', 'F'),
		n('bost4', 'F'),
		n('narga', 'M'),
		n('pingolinha', 'F'),
		n('chupeta', 'F'),
		n('chocolate', 'M'),
		n('bolo', 'M'),
		n('torta', 'F'),
		n('wabuleibolaeubabaloueba', 'M'),
		n('soco', 'M'),
		n('cachaça', 'F'),
		n('suquin', 'M'),
		n('Freddy Fazbear', 'M'),
		n('bostil', 'M')
	];
	const emojis = [
		'😳',
		'😖',
		'😩',
		'😱',
		'😏',
		'😒',
		'😋',
		'🤮',
		'🤢',
		'😍',
		'🥰',
		'🤪',
		'🥲',
		'😊',
		'🤔',
		'🙄',
		'😐',
		'😔',
		'😬',
		'🥶',
		'😰',
		'🥵',
		'🔥',
		'💪',
		"'-' ",
		'¬¬ ',
		'😭',
		'😂',
		'>:| '
	];
	const adjetivos = [
		a('safado', 'safada'),
		a('bonito', 'bonita'),
		a('idiota', 'idiota'),
		a('lindo', 'linda'),
		a('fofo', 'fofa'),
		a('otário', 'otária'),
		a('fdp', 'fdp'),
		a('bananão', 'bananona'),
		a('based', 'based'),
		a('sojado', 'sojada'),
		a('bom', 'boa'),
		a('ruim', 'ruim'),
		a('cringe', 'cringe'),
		a('puto', 'puta'),
		a('intankável', 'intankável'),
		a('tankável', 'tankável'),
		a('faminto', 'faminta')
	];
	const verbos = [
		'atirar',
		'jogar',
		'macetar',
		'matar',
		'suicidar',
		'torturar',
		'desviar e matar',
		'beijar',
		'f4ppar',
		'estrangular',
		'tomar soro',
		'beber',
		'despedaçar',
		'f0der',
		'chorar',
		'embebedar',
		'drogar',
		'abraçar',
		'acariciar',
		'sojar',
		'morrer',
		'emputecer',
		'tankar',
                'mijar',
                'cagar'
	];

	let rand = Math.floor(Math.random() * personagens.length);
	const personagem1 = personagens[rand];
	personagens.splice(rand, 1);
	rand = Math.floor(Math.random() * personagens.length);
	const personagem2 = personagens[rand];
	personagens.splice(rand, 1);
	rand = Math.floor(Math.random() * personagens.length);
	const personagem3 = personagens[rand];
	personagens.splice(rand, 1);

	rand = Math.floor(Math.random() * objetos.length);
	const objeto1 = objetos[rand];
	objetos.splice(rand, 1);
	rand = Math.floor(Math.random() * objetos.length);
	const objeto2 = objetos[rand];
	objetos.splice(rand, 1);

	rand = Math.floor(Math.random() * emojis.length);
	const emoji1 = emojis[rand];
	emojis.splice(rand, 1);
	rand = Math.floor(Math.random() * emojis.length);
	const emoji2 = emojis[rand];
	emojis.splice(rand, 1);

	rand = Math.floor(Math.random() * adjetivos.length);
	const adjetivo1 = adjetivos[rand];
	adjetivos.splice(rand, 1);
	rand = Math.floor(Math.random() * adjetivos.length);
	const adjetivo2 = adjetivos[rand];
	adjetivos.splice(rand, 1);

	rand = Math.floor(Math.random() * verbos.length);
	const verbo1 = verbos[rand];
	adjetivos.splice(rand, 1);
	rand = Math.floor(Math.random() * verbos.length);
	const verbo2 = verbos[rand];
	adjetivos.splice(rand, 1);

	const piadas = [
		`${personagem1.nome} : Ei, ${personagem2.nome}.
${personagem2.nome} : Oq foi?`,

		`${personagem1.nome} : ${personagem2.nome} para de usar ${w(objeto1, 'o meu', 'a minha')} ${
			objeto1.nome
		}!
${personagem2.nome} : Tabom *usa ${w(objeto2, 'o', 'a')} ${objeto2.nome}*`,

		`${personagem1.nome} : Ei ${personagem2.nome}, pega ${w(objeto1, 'no meu', 'na minha')} ${
			objeto1.nome
		}!
${personagem2.nome} : Ok ${emoji1}`,

		`${personagem1.nome} : Eu sou tao ${w(personagem1, adjetivo1.m, adjetivo2.f)}!
${personagem2.nome} : Nn, eu sou mais.`,

		`${personagem1.nome} : ${emoji1}
${personagem2.nome} : ${emoji2}`,

		`${personagem1.nome} : Eu vou ${verbo1}.
${personagem2.nome} : Manda foto?`,

		`${personagem1.nome} : Voce quer ${w(objeto1, 'um', 'uma')} ${objeto1.nome}?
${personagem2.nome} : No!
${personagem1.nome} : Voce quer... ${w(objeto1, 'um', 'uma')} ${objeto1.nome}?
${personagem2.nome} : Naooooo!
${personagem1.nome} : Voce queeeeer... ${w(objeto1, 'um', 'uma')} ${objeto1.nome}?`,

		`${personagem1.nome} : ${personagem2.nome} ${emoji1}
${personagem2.nome} : para de ${verbo1} vc tá sendo ${w(personagem1, adjetivo1.m, adjetivo1.f)}`,

		`${personagem1.nome} : Estou numa tranquilidade mto ${adjetivo1.f}
*Alguém bate na porta*
${personagem2.nome} : Entrega
${personagem1.nome} : Entrega de que?
${personagem2.nome} : Entrega de ${objeto1.nome} kkkk`,

		`${personagem1.nome} : toma essa, é pra ${verbo1} ${w(objeto1, 'o', 'a')} ${objeto1.nome}!
${personagem2.nome} : !!!!!!!!!!!`,

		`${personagem1.nome} : ${w(personagem2, 'Senhor', 'Senhorita')} ${
			personagem2.nome
		}, o que vc sabe sobre ${w(objeto1, 'o', 'a')} ${objeto1.nome}?
${personagem2.nome} : Eu n sei de nada
${personagem1.nome} : e vc, ${personagem3.nome}?
${personagem3.nome} : ${objeto2.nome}?
${personagem1.nome} : oh yss`,

		`${personagem1.nome} : Ô ${personagem2.nome}, tô ${w(personagem1, adjetivo1.m, adjetivo1.f)}
${personagem2.nome} : vai ${verbo1} ;-;
${personagem1.nome} : Vo ${verbo1} vc`
	];

	const finais = [
		`${personagem1.nome} : ${objeto1.nome}!`,
		`${personagem1.nome} : NAOOOOOOOO!!`,
		`${personagem1.nome} : mmmmmmm ${w(personagem2, adjetivo1.m, adjetivo2.f)}!`,
		`${personagem3.nome} : ${emoji1}${emoji1} KKKKKKKKKKKKKK`,
		`${personagem1.nome} : ${emoji1}`,
		`*os dois começam a ${verbo1}*`,
		`${personagem1.nome} : . . . ${emoji1}`,
		`${personagem2.nome} : *começa a ${verbo1} e ${verbo2}*`,
		`${personagem1.nome} : ${personagem2.nome}${w(personagem2, adjetivo2.m, adjetivo2.f)}`,
		`${personagem1.nome} : Hora de ${verbo2}`,
		`${personagem1.nome} : Nunca mais eu vou ${verbo2} ${objeto2.nome}`,
		`${personagem1.nome} : *começa a ${verbo2} ${w(personagem2, 'o', 'a')} ${personagem2.nome}*`,
		`${personagem1.nome} mata ${personagem2.nome} no ato`,
		`${personagem3.nome} e ${personagem1.nome} ${emoji1}`,
		`${personagem2.nome} : daquele jeito né 😏`
	];

	return {
		body: `${piadas[Math.floor(Math.random() * piadas.length)]}
${finais[Math.floor(Math.random() * finais.length)]}

${['xd', 'lol'][Math.floor(Math.random() * 2)]}`
	};
}
