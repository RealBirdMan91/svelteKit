<script lang="ts">
	import { media } from "$lib/api";
    import type {MovieDetails} from "$lib/types";
    export let movie: MovieDetails;
</script>

<a href="/movie/{movie.id}" class="column">
    <img class="backdrop" src={media(movie.backdrop_path,1280 )} alt={movie.title}  />
</a>

<style>
    .backdrop {
        width: 100%;
        object-fit: cover;
    }
</style>