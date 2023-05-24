<template>
  <li class="profile-nav onhover-dropdown pe-0 py-0">
    <div class="media profile-media">
      <img
        class="b-r-10"
        src="@/assets/images/dashboard/profile.png"
        alt=""
      />
      <div class="media-body">
        <span>{{name}}</span>
        <p class="mb-0 font-roboto">
          {{email}} <i class="middle fa fa-angle-down"></i>
        </p>
      </div>
    </div>
    <ul class="profile-dropdown onhover-show-div">
      <li>
        <router-link :to="'/users/profile'"><vue-feather type="user"></vue-feather><span>Account </span></router-link>
      </li>
      <!-- <li>
        <router-link :to="'/email/readMail'"><vue-feather type="mail"></vue-feather><span>Inbox</span></router-link>
      </li>
      <li>
        <router-link :to="'/app/task'"><vue-feather type="file-text"></vue-feather><span>Taskboard</span></router-link>
      </li>
      <li>
        <router-link :to="'/pages/search'"><vue-feather type="settings"></vue-feather><span>Settings</span></router-link>
      </li> -->
      <li>
        <a @click="logout"
          ><vue-feather type="log-in"></vue-feather><span>Log out</span></a
        >
      </li>
    </ul>
  </li>
</template>

<script>

import { computed } from 'vue';
import { useStore } from 'vuex';

  export default {
    name: 'Profile',
    setup() {
    const store = useStore();

    const name = computed(() => store.state.name);
    const email = computed(() => store.state.email);
    // const token = computed(() => store.state.token);

    // rest of your setup function

    return {
      name,
      email,
      // token
    }
  },
    methods: {
      logout: function() {
            this.$router.replace('/auth/login');
            localStorage.removeItem('User')
            localStorage.removeItem('authToken')
          }
    },
  };
</script>
