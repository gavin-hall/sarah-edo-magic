<template>
  <main>
    <div class="jobs" ref="jobs">
      <div v-for="job in jobs" :key="job.name" class="location">
        <img :src="job.img" :alt="job.name" />
        <h2>{{ job.name }}</h2>
        <p>
          <strong>Rating: {{ job.rating }}</strong>
        </p>
        <p>{{ job.description }}</p>
        <hr />
      </div>
    </div>
    <div class="mapcontain" ref="mapcontain">
      <p>
        <icon-base icon-name="mappin"> <icon-map-pin /> </icon-base>Checked in at Honolulu location
      </p>
      <img src="map.png" alt="Map of Honolulu" />
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import IconBase from '~/components/IconBase.vue'
import IconMapPin from '~/components/IconMapPin.vue'

export default {
  components: {
    IconBase,
    IconMapPin
  },
  computed: mapState(['page', 'users', 'jobs'])
}
</script>

<style>
.mapboxgl-missing-css {
  display: none;
}
</style>

<style lang="scss" scoped>
main {
  padding-top: 20px;
  border-top: 1px solid #ddd;
  margin-top: 120px;
}

.jobs {
  img {
    float: left;
    margin: 0 15px 15px 0;
  }
  p {
    margin-top: 10px;
  }
  .location {
    padding: 10px 0;
  }
}

hr {
  border-top: 1px solid #ddd;
  border-bottom: none;
  margin-top: 15px;
}

.mapcontain {
  width: 35%;
  float: right;
  height: 400px;
  p {
    margin: 10px 0;
  }
  img {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .mapcontain {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
