<script>
	import '../app.css';
	let mobileMenuOpen = false;
	let myGitRepo = 'https://github.com/aum-sarun/covid-report';
</script>

<header class="bg-orange-100">
	<nav
		class="mx-auto flex max-w-screen-2xl items-center justify-between p-5 lg:px-9"
		aria-label="Menu bar"
	>
		<div class="flex lg:basis-1/4">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Covid Report</span>
				<img class="h-8 w-auto" src="./favicon.png" alt="" />
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				on:click|stopPropagation={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12 lg:basis-4/5">
			<!-- <a href="/" class="text-sm font-semibold leading-6 text-red-900">Home</a>
			<a href="/chart" class="text-sm font-semibold leading-6 text-red-900">Chart report</a>
			<a href="/table" class="text-sm font-semibold leading-6 text-red-900">Table report</a> -->
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:basis-1/5 lg:justify-end">
			<a
				href={myGitRepo}
				class="text-sm font-semibold leading-6 text-gray-900 flex flex-row items-center"
				target="_blank"
			>
				<small>My GitHub</small><img
					src="./github-mark.svg"
					alt="My GitHub"
					class="h-4 w-auto ml-1"
				/>
			</a>
		</div>
	</nav>

	{#if mobileMenuOpen}
		<!-- Mobile menu, show/hide based on menu open state. -->
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-10" />
			<div
				class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Covid Report</span>
						<img class="h-8 w-auto" src="./favicon.png" alt="" />
					</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
						on:click|stopPropagation={() => (mobileMenuOpen = false)}
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<a
								href="/"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								on:click|stopPropagation={() => (mobileMenuOpen = false)}>Home</a
							>
							<!-- <a
								href="/chart"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Chart report</a
							>
							<a
								href="/table"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Table report</a
							> -->
						</div>
						<div class="py-6">
							<a
								href={myGitRepo}
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex flex-row items-center"
								target="_blank"
								><img src="./github-mark.svg" alt="My GitHub" class="h-5 w-auto mr-2" />My GitHub</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>

<div class="mx-auto max-w-7xl px-6 lg:px-8 lg: pt-5">
	<slot />
</div>
