<script lang="ts">
	import Carousel from "$lib/components/Carousel.svelte";
	import { views } from "$lib/views";
import Hero from "./Hero.svelte";

    export let data;
</script>


<h1 class="column">Top trending Movies</h1>
<Hero movie={data.featured}/>
<Carousel movies={data.trending.results} view={views.trending} href=""/>
<Carousel movies={data.now_playing.results} view={views.now_playing} href=""/>
<Carousel movies={data.upcoming.results} view={views.upcoming} href=""/>