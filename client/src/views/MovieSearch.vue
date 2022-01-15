<template>
  <div class="home">
    <div class="feature-card">
      
        <img src="https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1183_.jpg" alt="Marvel Poster" class="featured-img" />
        <div class="detail">
          <h3>Avengers: Endgame</h3>
          <p>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.</p>
        </div>
 
    </div>
 <h2 class="search-box">
    <a v-on:click="myMethod($event)" href="https://marvel.com" target="_blank">Marvel's Website</a>
</h2>
  </div>
</template>

<script>
export default {
  methods: {
    myMethod: function myMethod(ev) {
      console.log(ev); // MouseEvent { ... }
    }
  }
};
</script>

<style lang="scss">
.home {
  .feature-card {
    position: relative;
    .featured-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;
      position: relative;
      z-index: 0;
    }
    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      z-index: 1;
      h3 {
        color:#FFF;
        margin-bottom: 16px;
      }
      p {
        color: #FFF;
      }
    }
  }
a:link, a:visited {
  background-color: white;
  color: black;
  border: 2px solid green;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover, a:active {
  background-color: green;
  color: white;
}
  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18px;
    h2 {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;
      
      a [type="input"] {
        width: 100%;
        color: #FFF;
        background-color: #496583;
        font-size: 18px;
        padding: 10px 16px;
        border-radius: 18px;
        margin-bottom: 15px;
        transition: 0.4s;
        &::placeholder {
          color: #f3f3f3;
        }
        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
  .movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;
    .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;
      .movie-link {
        display: flex;
        flex-direction: column;
        height: 100%;
        .product-image {
          position: relative;
          display: block;
          img {
            display: block;
            width: 100%;
            height: 275px;
            object-fit: cover;
          }
          .type {
            position: absolute;
            padding: 8px 16px;
            background-color: #42B883;
            color: #FFF;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }
        .detail {
          background-color: #496583;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;
          .year {
            color: #AAA;
            font-size: 14px;
          }
          h3 {
            color: #FFF;
            font-weight: 600;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>