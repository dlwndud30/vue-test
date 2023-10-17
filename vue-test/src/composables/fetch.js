import { ref, watchEffect, toValue } from 'vue';

export const useFetch = (url) => {
  const data = ref(null);
  const error = ref(null);

  const fetchData = async () => {
    const urlValue = toValue(url);

    try {
      const result = await fetch(urlValue);
      data.value = await result.json();
    } catch (e) {
      error.value = e;
    }
  };

  watchEffect(() => {
    fetchData();
  });

  return { data, error };
};
