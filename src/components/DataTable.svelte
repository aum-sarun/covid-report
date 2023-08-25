<script>
	export let tableName = 'Example';
	export let headerRole = [
		{
			thClass: '',
			thData: 'User'
		},
		{
			thClass: '',
			thData: 'Amount'
		},
		{
			thClass: '',
			thData: 'Issued / Due'
		}
	];
	export let tableRoles = [
		[
			{
				tdClass: '',
				tdData: `<div class="flex"><div class="flex-shrink-0 w-10 h-10"><img class="w-full h-full rounded-full" src="./favicon.png" alt="" /></div><div class="ml-3"><p class="text-gray-900 whitespace-no-wrap">James Bond</p><p class="text-gray-600 whitespace-no-wrap">007</p></div></div>`
			},
			{
				tdClass: '',
				tdData: `<p class="text-gray-900 whitespace-no-wrap">$999,999,999</p><p class="text-gray-600 whitespace-no-wrap">USD</p>`
			},
			{
				tdClass: '',
				tdData: `<p class="text-gray-900 whitespace-no-wrap">9 September 9999</p><p class="text-gray-600 whitespace-no-wrap">Due in 9 days</p>`
			}
		]
	];
</script>

<div class="container mx-auto px-4 sm:px-8">
	<div class="py-8">
		{#if tableName}
			<div>
				<h2 class="text-2xl font-semibold leading-tight">${tableName}</h2>
			</div>
		{/if}
		<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
			<div class="inline-block min-w-full shadow-md rounded-lg overflow-y-scroll max-h-96	lg:max-h-none">
				<table class="min-w-full leading-normal">
					<thead>
						<tr>
							{#each headerRole as headerName}
								<th
									class={headerName.thClass ||
										'sticky z-10 top-0 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'}
								>
									{@html headerName.thData}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each tableRoles as tableRole}
							<tr>
								{#each tableRole as dataCell}
									<td
										class={dataCell.tdClass ||
											'px-5 py-5 border-b border-gray-200 bg-white text-sm'}
									>
										{@html dataCell.tdData}
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
