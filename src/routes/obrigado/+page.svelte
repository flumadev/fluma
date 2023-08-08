<div class="container">
	<h1 class="title">Agradecemos por entrar em contato!</h1>
	<p class="message">
		Nossa equipe está trabalhando para fornecer uma resposta o mais rápido possível.
	</p>
	<aside class="sign">Atenciosamente, <span>Fluma</span></aside>

	<a
		href="/"
		class="md:text-md mt-8 flex items-center gap-4 rounded-full bg-white p-4 text-sm text-black hover:text-blue-700"
	>
		<div>
			<svg
				class="inline-block h-6 w-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				/>
			</svg>
		</div>
		Voltar para a página inicial</a
	>
</div>

<style>
	.container {
		height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.title {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.message {
		font-size: 1.5rem;
		font-weight: 400;
		margin-bottom: 1rem;
	}
	.sign {
		font-size: 1rem;
	}
	.sign span {
		background: var(--fluma, linear-gradient(225deg, #fdfdff 0%, #8828b6 100%));
		font-weight: bold;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke-color: white;
	}
</style>
