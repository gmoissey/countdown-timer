<script lang="ts">
	import { onMount } from "svelte";

	interface TimerState {
		currentTime: number;
		endTime: number;
		status: "RUNNING" | "PAUSED";
	}

	let clockSound: HTMLAudioElement;
	let timerState: TimerState = {
		currentTime: new Date().getTime(),
		endTime: new Date().getTime() + 60  * 1000,
		status: "PAUSED",
	};
	$: millisecondsLeft =
		timerState.endTime - timerState.currentTime > 0
			? timerState.endTime - timerState.currentTime
			: 0;
	$: borderPercentage = millisecondsLeft / (60 * 1000);

	let endColor = [255, 0, 0];
	let startColor = [0, 0, 0];
	$: color = `rgb(${
		(startColor[0] - endColor[0]) * borderPercentage + endColor[0]
	}, ${(startColor[1] - endColor[1]) * borderPercentage + endColor[1]}, ${
		(startColor[2 ] - endColor[2]) * borderPercentage + endColor[2]
	})`;

	function handleKeydown(event: KeyboardEvent) {
		let key = event.key;
		if (key === " ") {
			if (timerState.status === "PAUSED") {
				clockSound.play();
				timerState.status = "RUNNING";
				timerState.endTime = new Date().getTime() + millisecondsLeft;
			} else {
				timerState.status = "PAUSED";
				clockSound.pause();
			}
		} else if (key == "r" || key == "R") {
			timerState.status = "PAUSED";
			(timerState.currentTime = new Date().getTime()),
				(timerState.endTime = new Date().getTime() + 60 * 1000),
				(clockSound.currentTime = 0);
			clockSound.pause();
		}
	}

	onMount(() => {
		setInterval(() => {
			if (timerState.status === "PAUSED") {
				return;
			}

			if (millisecondsLeft > 0) {
				timerState.currentTime = new Date().getTime();
			} else {
				timerState.currentTime = 0;
				timerState.endTime = 0;
				timerState.status = "PAUSED";
			}
		}, 20);
	});
</script>

<svelte:window on:keydown={handleKeydown} />
<audio src="static/sounds/quizTimer.mp3" bind:this={clockSound} />

<main>
	<div class="CountdowdTimer">
		<div style:--borderPercentage={borderPercentage}
		style:--color={color}
		class="TimerDigits">
			{#if millisecondsLeft > 0}
				<div class="Digit">
					{(((millisecondsLeft / 1000) | 0) / 10) | 0}
				</div>
				<div class="Digit">
					{((millisecondsLeft / 1000) | 0) % 10}
				</div>
				<div class="Digit">:</div>
				<div class="Digit">
					{((millisecondsLeft % 1000) / 100) | 0}
				</div>
				<div class="Digit">
					{((millisecondsLeft % 100) / 10) | 0}
				</div>
			{:else}
				<div class="timesUpText">TIMES UP!</div>
			{/if}
		</div>
	</div>
</main>

<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=Vast+Shadow&display=swap");

	.CountdowdTimer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	.TimerDigits {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 10rem;
		padding: 0 2rem;
		background: linear-gradient(to right, var(--color) 6px, transparent 4px) 0 0,
			linear-gradient(to right, var(--color) 6px, transparent 4px) 0 100%,
			linear-gradient(to left, var(--color) 6px, transparent 4px) 100% 0,
			linear-gradient(to left, var(--color) 6px, transparent 4px) 100% 100%,
			linear-gradient(to bottom, var(--color) 6px, transparent 4px) 0 0,
			linear-gradient(to bottom, var(--color) 6px, transparent 4px) 100% 0,
			linear-gradient(to top, var(--color) 6px, transparent 4px) 0 100%,
			linear-gradient(to top, var(--color) 6px, transparent 4px) 100% 100%;
		background-repeat: no-repeat;
		background-size: calc(var(--borderPercentage) * 50%)
			calc(var(--borderPercentage) * 50%);
		background-color: rgba(240, 248, 255, 0.506);
	}

	.Digit {
		font-family: "Vast Shadow", cursive;
		justify-content: center;
		display: flex;
		min-width: 8.3rem;
		color: black;
	}

	.timesUpText {
		font-family: "Vast Shadow", cursive;
		justify-content: center;
		display: flex;
		color: black;
		font-size: 7rem;
	}
</style>
