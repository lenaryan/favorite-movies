import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMovieStore = defineStore('movieStore', () => {
    const movies = ref([]);
    const activeTab = ref(1);

    const watchedMovies = computed(() => {
        return movies.value.filter(el => el.isWatched)
    })

    const setActiveTab = (id) => {
        activeTab.value = id
    }

    const toggleWatched = (id) => {
        const idx = movies.value.findIndex(el => el.id === id);
        movies.value[idx].isWatched = !movies.value[idx].isWatched
    }

    const deleteMovie = (id) => {
        movies.value = movies.value.filter(el => el.id !== id);
    }

    return { movies, activeTab, watchedMovies, setActiveTab, toggleWatched, deleteMovie }
})