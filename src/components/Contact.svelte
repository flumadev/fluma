<script>
	import { doc, setDoc } from 'firebase/firestore';
	import { db } from '../lib/firebase.js';
	import ShortUniqueId from 'short-unique-id';
	let sended = false;
	const uid = new ShortUniqueId({ length: 10 });
	/**
	 * @param {any} e
	 */
	async function onSubmit(e) {
		const formData = new FormData(e.target);

		/**
		 * @type {any}
		 */
		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
		sended = true;
		await setDoc(doc(db, 'contatos', uid()), data);
		setTimeout(() => {
			sended = false;
		}, 5000);
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	<input placeholder="Nome" name="name" required />
	<input placeholder="Empresa" name="company" />
	<select name="interest" value="" required>
		<option disabled value="">Interesse</option>
		<optgroup label="Web">
			<option value="Websites">Websites</option>
			<option value="Web Apps">Web Apps</option>
			<option value="eCommerce">eCommerce</option>
		</optgroup>
		<optgroup label="More">
			<option value="UX/UI Design">UX/UI Design</option>
			<option value="MVP">MVP</option>
			<option value="Other">Outros</option>
		</optgroup>
	</select>
	<input placeholder="Email" name="email" required />
	<button
		type="submit"
		class="flex w-full items-center justify-center gap-4 rounded-full bg-white p-4 align-middle text-black sm:w-auto"
	>
		Entrar em contato.
		<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<g id="Complete">
				<g id="arrow-right">
					<g>
						<polyline
							data-name="Right"
							fill="none"
							id="Right-2"
							points="16.4 7 21.5 12 16.4 17"
							stroke="#000000"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						/>

						<line
							fill="none"
							stroke="#000000"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							x1="2.5"
							x2="19.2"
							y1="12"
							y2="12"
						/>
					</g>
				</g>
			</g>
		</svg>
	</button>
</form>

{#if sended}
	<p class="max-w-lg text-purple-300">
		Obrigado por entrar em contato! Recebemos sua mensagem e nossa equipe irá responder o mais breve
		possível.
	</p>
{/if}

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: end;
		gap: 16px;
		width: 100%;
		max-width: 512px;
	}
	input,
	select {
		border: 1px solid #2b3442;
		background-color: #181e27;
		border-radius: 4px;
		padding: 1rem 2rem;
		font-size: 16px;
		width: 100%;
		box-sizing: border-box;
	}
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		transition: background-color 5000s ease-in-out 0s;
		-webkit-text-fill-color: #fff !important;
	}
	select {
		-moz-appearance: none; /* Firefox */
		-webkit-appearance: none; /* Safari and Chrome */
		appearance: none;
	}
</style>
