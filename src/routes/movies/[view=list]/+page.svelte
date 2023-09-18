<script lang="ts">
    import * as api from "$lib/api";
	import ResultsPage from "$lib/components/ResultsPage.svelte";
	import { get } from "svelte/store";

    export let data
    let appending = false;
</script>

<div class="column">
    <h1>{data.title}</h1>
    <ResultsPage movies={data.movies} next={data.nextPage ? `/movies/${data.view}/?page=${data.nextPage}`: null} on:end={async() => {
       if(!data.nextPage) return;
       if(appending) return;
       const next = await api.get(fetch, data.endpoint, {
              page: data.nextPage.toString(),
         });
       data.movies = [...data.movies, ...next.results];  
       data.nextPage = next.page < next.total_pages ? next.page + 1: null;
    }}/>
</div>


