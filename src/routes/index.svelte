<script lang="ts">
	import twemoji from 'twemoji';
	import { variables } from '$lib/variables';

	let piada = '';

	async function gerarPiada() {
		const response = await fetch(variables.baseUrl + '/piada');
		piada = await response.text();
	}

	gerarPiada();
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
	<button on:click={gerarPiada}>Gerar piada</button>
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
