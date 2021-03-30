<template>
  <div
    class="d-flex border rounded-3 bg-white shadow-sm p-3"
    style="height:200px"
  >
    <div style="font-size: 14px" class="w-100">
      <p class="fw-bold m-0 fs-6">
        TECH Москва ТЦ «Универмаг Московский» ТП
      </p>
      <p class="m-0">г. Москва, Комсомольская площадь, дом 6</p>
      <p class="mb-1">Пн-Вс с 09:00 до 22:00</p>
      <p class="mb-2">Завтра (c 10:00)</p>
    </div>
    <yandex-map
      class="height-auto w-100 d-none d-md-block"
      :coords="coords"
      :zoom="14"
      :controls="[]"
    >
      <ymap-marker :coords="coords" marker-id="123" hint-content="some hint" />
    </yandex-map>
  </div>
</template>

<script>
export default {
  data () {
    return {
      coords: [55.775884925102, 37.660173979297845]
    }
  }
}
</script>
