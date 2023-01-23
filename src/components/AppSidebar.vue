<script setup>
import { ref, reactive } from "vue";
import iOverview from "@/assets/icon/bank.svg";
import iBackward from "@/assets/icon/backward.svg";
import iBezier from "@/assets/icon/bezier.svg";
import iBook from "@/assets/icon/book.svg";
import iColors from "@/assets/icon/colors.svg";
import iCourthouse from "@/assets/icon/courthouse.svg";
import iGraph from "@/assets/icon/graph.svg";
import iPersonalcard from "@/assets/icon/personalcard.svg";
import iProfile from "@/assets/icon/profile.svg";
import iSetting from "@/assets/icon/setting.svg";
import iUserCirlce from "@/assets/icon/user-cirlce.svg";
import iUserEdit from "@/assets/icon/user-edit.svg";
import iExpandCollapse from "@/assets/icons/icon-expand-collapse.svg";



const props = defineProps({
  sidebarOpen: {
    type: Boolean,
    requried: true,
  },
});

let type = ref(true);
let collapseType = ref(true);
let iconOverview = iOverview;
let iconBackward = iBackward;
let iconBezier = iBezier;
let iconBook = iBook;
let iconColors = iColors;
let iconCourthouse = iCourthouse;
let iconGraph = iGraph;
let iconPersonalcard = iPersonalcard;
let iconProfile = iProfile;
let iconSetting = iSetting;
let iconUserCirlce = iUserCirlce;
let iconUserEdit = iUserEdit;
let iconCollapse = iExpandCollapse;

const toggleType = () => {
  type.value ? (type.value = false) : (type.value = true);
};

const ToggleCollapseType = () => {
  collapseType.value
    ? (collapseType.value = false)
    : (collapseType.value = true);
};

const menus = reactive([
  {
    title: "Главная",
    link: "/",
    icon: iconOverview,
  },
  {
    title: "Настройки",
    link: "/setting",
    icon: iconSetting,

  },
  {
    title: "Статистика",
    link: "/static",
    icon: iconGraph,

  },
  {
    title: "Информация",
    link: "/info",
    icon: iconBook,
  },
  {
    title: "Страницы",
    link: "",
    icon: iconColors,
    children: [
      {
        title: "Главная",
        link: "/home",
        icon: iconCourthouse,
      },
      {
        title: "Новости",
        link: "/news",
            icon: iconBezier,

      },
      {
        title: "Открытые данные",
        link: "/open-data",
            icon: iconBezier,

      },
      {
        title: "Документы",
        link: "/documents",
        icon: iconBezier,
      },
      {
        title: "Общая информация",
        link: "/area",
        icon: iconBackward,

      },
      {
        title: "Руководство",
        link: "/management",
        icon: iconPersonalcard,
      },
      {
        title: "Народные депутаты",
        link: "/deputies",
        icon: iconPersonalcard,

      },
      {
        title: "Обратная связь",
        link: "/callback",
        icon: iconUserEdit,
      },
      {
        title: "Борьба с коррупцией",
        link: "/anti-core",
        icon: iconGraph,
      },
    ],
  },
]);

const isOpen = ref(true)

const rotateIcon = () =>  {
      isOpen.value ? (isOpen.value = false) : (isOpen.value = true);
    }

</script>

<template>
  <div id="nav" class="sidebar" :class="[sidebarOpen ? 'open' : 'closed']">
    <div v-for="item in menus" :key="item">
      <div v-if="!item.children" class="menu-item">
        <router-link :to="{ path: item.link }"
          ><div>
            <img :src="item.icon" alt="" />
          </div>
          <p>{{ item.title }}</p></router-link
        >
      </div>
      <div v-else-if="item.children">
        <div @click="rotateIcon" class="menu-item">
          <button class="menu-item-collapse" @click="ToggleCollapseType">
            <div>
              <img :src="item.icon" alt="" />
            </div>
            <p>{{ item.title }}</p>
            <span>
              <img
                :src="iconCollapse"
                alt=""
                class=""
                :class="[isOpen ? '' : 'rotate-180']"
              />
            </span>
          </button>
        </div>
        <div
          class="menu-group-type"
          :class="[collapseType ? 'menu-group-closed' : '']"
        >
          <div v-for="sub in item.children" :key="sub.title" class="menu-item" :class="[sidebarOpen ? 'indent' : '']">
            <router-link :to="{ path: sub.link }"
              ><div>
                <img :src="sub.icon" alt="" />
              </div>
              <p>{{ sub.title }}</p></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  z-index: 1;
  display: block;
  position: fixed;
  top: 58px;
  height: calc(100vh - 58px);
  background: #fff;
  overflow: hidden;
  -webkit-box-shadow: 4px 0px 18px -1px rgba(153, 153, 153, 0.63);
  -moz-box-shadow: 4px 0px 18px -1px rgba(153, 153, 153, 0.63);
  box-shadow: 4px 0px 18px -1px rgba(153, 153, 153, 0.63);
  transition: all 0.25s;
}


.closed:hover {
  width: 250px !important;
}

.collapse-btn {
  width: 245px;
  margin-left: 5px;
  height: 45px;
}

.menu-group-type {
  margin-top: 5px;
  width: 250px;
  overflow: hidden;
  transition: all 0.5s;
}

.menu-group-colltype {
  margin-top: 5px;
  width: 250px;
  overflow: hidden;
  transition: all 0.5s;
}
.menu-item:nth-child(1){
  margin-top: 10px;
}
.menu-item,
.menu-item-collapse {
  width: 250px;
  margin-left: 0;
  transition: all 0.25s;
  a,
  button {
    font-family: "Roboto-Regular";
    font-weight: 400;
    text-transform: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    background: none;
    border: none;
    border-radius: 10px 0 0 10px;
    padding: 0;
    margin-left: 5px;
    width: 245px;
    height: 40px;
    color: black;
    text-decoration: none;
    transition: all 0.25s;
    outline: none;
    div {
      width: 50px !important;
      height: 45px;
      background: transparent;
      border-radius: 5px;
      img {
        width: 25px;
        height: 25px;
        padding: 10px 10px;
        filter: invert(40%) sepia(1%) saturate(4%) hue-rotate(328deg)
          brightness(93%) contrast(89%);
        transition: transform 0.25s;
      }
    }
    p {
      text-align: left;
      width: 150px;
      font-family: "Roboto-Regular";
      letter-spacing: normal;
      font-size: 1rem;
      margin-left: 10px;
    }
  }
  a:hover,
  button:hover {
    color: #06003d;
    cursor: pointer;
    div {
      img {
        filter: invert(5%) sepia(68%) saturate(4970%) hue-rotate(249deg)
          brightness(86%) contrast(116%);
      }
    }
  }
}

.rotate-180 {
  transform: rotate(180deg);
  transition: all 0.25s;
}
.active {
  background: rgba(240, 240, 240, 0.667);
}

.menu-group-closed {
  height: 0;
  transition: all 0.5s;
}
.indent {
  margin-left: 25px;
  transition: all 0.25s;
}

</style>
