<script lang="ts">
	import twemoji from 'twemoji';

	type Coisa = {
		nome: string;
		genero: string;
	};
	type Adjetivo = {
		m: string;
		f: string;
	};

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

	function gerarPiada(): string {
		let personagens = [
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
			n('torta', 'F')
		];
		let objetos = [
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
			n('torta', 'F')
		];
		let emojis = [
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
			"'-'",
			'¬¬',
			'😭',
			'😂'
		];
		let adjetivos = [
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
			a('cringe', 'cringe')
		];
		let verbos = [
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
			'despedaçar'
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
			${personagem2.nome} : para de ${verbo1} vc tá sendo ${w(personagem1, adjetivo1.m, adjetivo1.f)}`
		];

		const finais = [
			`${personagem1.nome} : ${objeto1.nome}!`,
			`${personagem1.nome} : NAOOOOOOOO!!`,
			`${personagem1.nome} : mmmmmmm ${w(personagem2, adjetivo1.m, adjetivo2.f)}!`,
			`${personagem3.nome} : ${emoji1}${emoji1} KKKKKKKKKKKKKK`,
			`*os dois começam a ${verbo1}*`,
			`${personagem1.nome} : . . . ${emoji1}`,
			`${personagem2.nome} : *começa a ${verbo1} e ${verbo2}*`,
			`${personagem1.nome} : ${personagem2.nome}${w(personagem2, adjetivo2.m, adjetivo2.f)}`
		];

		return `${piadas[Math.floor(Math.random() * piadas.length)]}
		${finais[Math.floor(Math.random() * finais.length)]}
		
		${['xd', 'lol'][Math.floor(Math.random() * 2)]}`;
	}

	let piada = gerarPiada();
</script>

<svelte:head>
	<title>Sonnic Piadas: xd</title>
</svelte:head>

<div class="joke">
	<div class="mensagem">
		<img src="/Sonnic.png" alt="Sonnic1998" />
		<main>
			<div class="info">
				<p class="username">Sonnic1998</p>
				<p class="date">
					{new Date().toLocaleDateString('pt-BR', {
						year: 'numeric',
						month: 'short',
						hour: '2-digit',
						minute: '2-digit'
					})}
				</p>
			</div>
			<div class="text">
				<p>{@html twemoji.parse(piada)}</p>
			</div>
		</main>
	</div>
	<button on:click={() => (piada = gerarPiada())}> Gerar piada </button>
</div>

<style lang="scss">
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #2f3136;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		font-family: 'Lato', Arial, sans-serif;
	}

	:global(.emoji) {
		width: 1.375rem;
		height: 1.375rem;
		margin: 0 0.125rem -0.25rem 0.125rem;
	}

	.joke {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background: url('/BG.png') no-repeat;
		background-size: contain;

		.mensagem {
			display: flex;
			background-color: #36393f;
			padding: 1rem 1.25rem;
			border: 1px solid rgba(79, 84, 92, 0.48);
			border-radius: 3px;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

			img {
				width: 2.5rem;
				height: 2.5rem;
				object-fit: cover;
				border-radius: 50%;
				margin-right: 1rem;
			}
			main {
				.info {
					display: flex;
					gap: 0.375rem;

					.username {
						font-size: 1rem;
						font-weight: 600;
						line-height: 1.375rem;
						color: white;
					}
					.date {
						font-size: 0.75rem;
						line-height: 1.375rem;
						color: #a3a6aa;
					}
				}
				.text {
					p {
						white-space: pre-line;
						color: #dcddde;
						font-size: 1rem;
						line-height: 1.625rem;
					}
				}
			}
		}

		button {
			margin-top: 2rem;
			background-color: transparent;
			padding: 0.75rem 1.25rem;
			border-radius: 0.25rem;
			border: none;
			font-size: 1rem;
			line-height: 1.25rem;
			color: #96989d;
			cursor: pointer;

			&:hover {
				background-color: rgba(79, 84, 92, 0.4);
				color: #dcddde;
			}
		}
	}
</style>
