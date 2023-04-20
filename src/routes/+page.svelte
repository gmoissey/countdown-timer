<script lang="ts">
	import CountdowdTimer from '../lib/CountdowdTimer.svelte';

	let backgroundImages: string[] = [
		'/backgrounds/ancientWall.jpeg',
		'/backgrounds/elijah_carried_upscaled.jpg',
		'/backgrounds/fireWall.gif'
	];
	let backgroundImageIndex: number = 0;

	function handleKeydown(event: KeyboardEvent) {
		let key = event.key;
		if (key >= '0' && key <= '9') {
			backgroundImageIndex = parseInt(key) - 1;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />
<svelte:head>
	<base href="/countdown-timer" />
</svelte:head>

<main>
	<div style:--backgroundImage={`url(${backgroundImages[backgroundImageIndex]})`} class="main">
		<CountdowdTimer />
	</div>
</main>

<style lang="scss">
	:global(body) {
		margin: 0;
		padding: 0;
	}

	.main {
		background: var(--backgroundImage);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
