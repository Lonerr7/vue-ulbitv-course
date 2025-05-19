export default {
  name: 'intersection',
  mounted(el, binding, vnode) {
    console.log(binding);
    console.log(vnode);

    const observerAPIOptions = {
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observerAPICallback = (entries) => {
      console.log(entries);

      if (entries[0].isIntersecting) {
        binding.value();
      }
    };

    const observer = new IntersectionObserver(
      observerAPICallback,
      observerAPIOptions
    );

    observer.observe(el);
  },
};
