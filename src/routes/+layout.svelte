<script lang="ts">
	import '../app.postcss';

	import { clickoutside } from '@svelte-put/clickoutside';

	let navbarOpen = false;

	function toggleNavbar() {
		navbarOpen = !navbarOpen;
	}

	function closeNavbar() {
		navbarOpen = false;
	}

	let parent: HTMLElement;
</script>

<div
	class="w-full overflow-hidden bg-zinc-50 px-6 pt-2 text-black"
	use:clickoutside={{ enabled: true, limit: { parent } }}
	on:clickoutside={closeNavbar}
>
	<div class="min-h-20 mx-auto flex w-full min-w-fit flex-wrap items-center justify-between">
		<button
			on:click={toggleNavbar}
			class="my-4 ml-auto rounded-md border-2 border-green-500 p-2 shadow-md hover:bg-zinc-100 sm:hidden"
		>
			<svg
				width="24px"
				height="24px"
				stroke-width="1.5"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				color="#ffffff"
				><path
					d="M3 5h18M3 12h18M3 19h18"
					stroke="#22c55e"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
		<nav
			class="h-0 w-full basis-full text-black transition-[height] sm:h-fit sm:basis-auto
			{navbarOpen ? 'h-60' : ''}"
		>
			<ul class="flex flex-col divide-y text-2xl sm:flex-row sm:gap-12 sm:divide-none">
				<li class="flex items-center py-3">
					<a on:click={closeNavbar} class="w-full pl-4 sm:pl-0" href="/">TabGuardian</a>
				</li>
				<li
					class="ml-auto flex items-center py-3 decoration-green-500 decoration-2 hover:underline"
				>
					<a on:click={closeNavbar} class="w-full pl-4 sm:pl-0" href="/about">about</a>
				</li>
				<li class="flex items-center py-3 decoration-green-500 decoration-2 hover:underline">
					<a on:click={closeNavbar} class="w-full pl-4 sm:pl-0" href="/docs">docs</a>
				</li>
				<li class="flex items-center py-3 decoration-green-500 decoration-2 hover:underline">
					<a on:click={closeNavbar} class="w-full pl-4 sm:pl-0" href="/changelog">changelog</a>
				</li>
			</ul>
		</nav>
	</div>
</div>

<main class="flex min-h-screen flex-col bg-zinc-50">
	<slot />
	<div class="h-8" />
</main>

<footer
	class="mt-auto bg-zinc-50 px-4 py-12 text-center font-light tracking-wide text-black transition-all"
>
	<!-- <p>
		Built with SvelteKit and TailwindCSS. See the <a
			class="text-emerald-400 hover:underline"
			href="https://github.com/BrilliantDeviation7/tab-guardian">repository</a
		>.
	</p> -->
	<p>Built with SvelteKit and TailwindCSS.</p>
</footer>
