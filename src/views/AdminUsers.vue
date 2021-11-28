<template>
  <div class="container py-5">
    <AdminNav />
    <!-- AdminNav Component -->

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">{{user.id}}</th>
          <td>{{user.email}}</td>
          <td>
            {{user.isAdmin ? "admin" : "user"}}
          </td>
          <td>
            <button
              v-show="!user.isAdmin"
              type="button" 
              class="btn btn-link"
              @click.stop.prevent="toggleUser(user.id)"
            >
            set as Admin
            </button>
            <button
              v-show="user.isAdmin"
              v-if="currentUser.id !== user.id"
              type="button" 
              class="btn btn-link"
              @click.stop.prevent="toggleUser(user.id)"
            >
            set as user
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "管理者",
      email: "root@example.com",
      password: "$2a$10$gcq3aK0/zBE4bIu4lSDFwe61oqYZMiGbTzvbR7DkW31XPsX2rfe.S",
      isAdmin: true,
      image: null,
      createdAt: "2021-11-11T10:05:22.000Z",
      updatedAt: "2021-11-11T10:05:22.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$xEbKWnT5y.QvXUsG7auSEOXqFADhJ4.Jf8FPbcGZY3sgvgJHGHJyG",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-11T10:05:23.000Z",
      updatedAt: "2021-11-11T10:05:23.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$jpvSRnZV5MkOvr4nhF1mh.dlFRu5TnDN3zzZKCJbpKTMZuuEg0iQu",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-11T10:05:23.000Z",
      updatedAt: "2021-11-11T10:05:23.000Z",
    },
  ],
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    isAdmin: true
  },
  isAuthenticated: true
}


export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUser: {
        id: -1,
        name: '',
        email: '',
        isAdmin: false
      },
    }
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users
    },
    fetchUser() {
      this.currentUser = {
        ... this.currentUser,
        ... dummyUser.currentUser
      }
      this.isAuthenticated = dummyUser.isAuthenticated
    },
    toggleUser(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }

        return user;
      });
    }
  },
  created() {
    this.fetchUsers()
    this.fetchUser()
  }
};
</script>